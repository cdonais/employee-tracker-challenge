const inquirer=require('inquirer');
const cTable=require('console.table');
let mysql=require('mysql2');
let connection=mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'password',
    database: 'employee_tracker'

});
connection.connect(function(err){
    if(err) throw err;
})
const userPrompt=()=>{
    return inquirer.prompt([
        {
            type: 'list',
            name:'what_do',
            message: 'What would you like to do?',
            choices: [
                'View all departments', 
                'View all roles',
                'View all employees',
                'Add department',
                'Add role',
                'Add employee',
                'Update employee role',

            ]
        }
        
    ])
    .then((data)=>{
        if (data.what_do==='View all departments'){
                connection.query("SELECT * FROM departments",function(err,result,fields){
                    if (err) throw err;
                    console.log("==========================")
                    console.table(result);
                })
                userPrompt();

        }
        else if (data.what_do==='View all roles'){
            connection.query("SELECT * FROM roles",function(err,result,fields){
                if (err) throw err;
                console.log("=======================")
                console.table(result);
            })
            userPrompt();

    }
    else if (data.what_do==='View all employees'){
        connection.query("SELECT * FROM employees",function(err,result,fields){
            if (err) throw err;
            console.log("=================================")
            console.table(result);
        })
        userPrompt();

}


        else if(data.what_do==='Add department'){
            return inquirer.prompt({
                type: 'input',
                name: 'name',
                message: 'What is the department name?'
            })
            .then(data=>{
                connection.query("INSERT INTO departments SET ?",{
                   
                    name:data.name

                })
                userPrompt();

            })    
              
        
        
            
        } else if(data.what_do==='Add role'){
            return inquirer.prompt([
                {
                type: 'input',
                name: 'title',
                message: 'What is the title of this role?'
            },
            {
                type: 'input',
                name: 'salary',
                message: 'What is the salary for this role?'
            },
            {
                type: 'input',
                name: 'department',
                message: 'What department is this role in?'
            }
        ]).then(data=>{
            connection.query("INSERT INTO roles SET ?",{

                title:data.title,
                salary:data.salary,
                department:data.department
        })
            userPrompt();
        })
        } else if(data.what_do==='Add employee'){
            connection.query("SELECT * FROM ROLES",function(err,result,fields){
                if (err) throw err;
                 const roleList=result.map(role =>{
                     return{
                         name: role.title,
                        }
                    })   
            return inquirer.prompt([
                {
                    type:'input',
                    name: 'firstName',
                    message: "What is the employee's first name?"
                },
                {
                    type: 'input',
                    name: 'lastName',
                    message: "What is the employee's last name?"
                },
                {
                    type:'list',
                    name:'employeeRole',
                    message:"What is the employee's role?",
                    choices: roleList
                },
                {
                    type:'list',
                    name:'manager',
                    message:"Who is the employee's manager?",
                    choices: [
                        'Vince McMahon',
                        'Paul Heyman'
                    ]
                }
            ])
            .then(data=>{
                
                connection.query("INSERT INTO employees SET ?",{
                    first_name:data.firstName,
                    last_name:data.lastName,
                    title:data.employeeRole,
                    manager_id:data.manager

                })
                userPrompt();

            })
            
        
        })
}
       else {
            connection.query("SELECT * FROM employees",function(err,result,fields){
                if (err) throw err;
                console.log(result);
                 const employeeChoices=result.map(employee =>{
                     return{
                         name: `${employee.first_name} ${employee.last_name}`,
                         value: employee.id
                        }
                 })
            
             return inquirer.prompt({
                type: 'list',
                name: 'employee',
                message: 'Which employee would you like to edit?',
                choices: employeeChoices
            }).then(data=>{
                    let selectedEmployee=data.employee;
                return inquirer.prompt({
                    type: 'input',
                    name: 'newRole',
                    message: 'What is the new role for this employee?',
                    
                })
                .then(data=>{
                    connection.query(`UPDATE employees SET title='${data.newRole}' WHERE id=${selectedEmployee}`,{
                       
                    })
                    console.log('==================')
                    console.table(result);
                    userPrompt();
                })     
        
                
            })   
            }) 

        }
    })
}
userPrompt();
