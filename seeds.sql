INSERT INTO departments(name)
VALUES 
    ('Sales'),
    ('Engineering'),
    ('Accounting'),
    ('Management');


INSERT INTO roles(title,salary,department)
VALUES 
    ('Salesperson','75000.00','Sales'),
    ('Engineer', '150000.00','Engineering'),
    ('Accountant','65000.00','Accounting'),
    ('Manager', '175000.00','Management');


INSERT INTO employees(first_name,last_name,role_id,manager_id)
VALUES 
    ('Vince','McMahon',4,NULL),
    ('Paul','Heyman',4,NULL),
    ('Sasha','Banks',3,1),
    ('Roddy','Piper',2,2),
    ('Ted','DiBiase',3,1),
    ('Becky','Lynch',1,1),
    ('Randy','Savage',2,2),
    ('Kevin','Owens',1,1);
