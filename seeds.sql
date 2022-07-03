INSERT INTO departments(id,name)
VALUES 
    ('Sales'),
    ('Engineering'),
    ('Accounting'),
    ('Management');


INSERT INTO roles(id,title,salary,department_id)
VALUES 
    ('Salesperson','75000.00'),
    ('Engineer', '150000.00'),
    ('Accountant','65000.00'),
    ('Manager', '175000.00');


INSERT INTO employees(id,first_name,last_name,role_id,manager_id)
VALUES 
    ('Vince','McMahon'),
    ('Paul','Heyman'),
    ('Sasha','Banks'),
    ('Roddy','Piper'),
    ('Ted','DiBiase'),
    ('Becky','Lynch'),
    ('Randy','Savage'),
    ('Kevin','Owens');
