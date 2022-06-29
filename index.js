const inquirer=require('inquirer');

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
                'Update employee role'
            ]
        }

    ])
    .then((data)=>{
        if(data.what_do==='Add department'){
            return inquirer.prompt({
                type: 'input',
                name: 'newDepartment',
                message: 'What is the department name?'
            })
        } else if(data.what_do==='Add role'){
            return inquirer.prompt([
                {
                type: 'input',
                name: 'role',
                message: 'What is the role?'
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
        ])
        } else if(data.what_do==='Add employee'){
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
                    type:'input',
                    name:'employeeRole',
                    message:"What is the employee's role?"
                },
                {
                    type:'input',
                    name:'manager',
                    message:"Who is the employee's manager?"
                }
            ])
        }
    })
}
userPrompt();