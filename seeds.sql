INSERT INTO departments(name)
VALUES 
    ('Sales'),
    ('Engineering'),
    ('Accounting'),
    ('Management');


INSERT INTO roles(title,salary)
VALUES 
    ('Salesperson','75000.00'),
    ('Engineer', '150000.00'),
    ('Accountant','65000.00'),
    ('Manager', '175000.00');


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
