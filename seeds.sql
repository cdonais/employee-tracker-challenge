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


INSERT INTO employees(first_name,last_name,title,manager)
VALUES 
    ('Vince','McMahon','Manager',NULL),
    ('Paul','Heyman','Manager',NULL),
    ('Sasha','Banks','Accountant','Vince McMahon'),
    ('Roddy','Piper','Engineer','Paul Heyman'),
    ('Ted','DiBiase','Accountant','Vince McMahon'),
    ('Becky','Lynch','Salesperson','Vince McMahon'),
    ('Randy','Savage','Engineer','Paul Heyman'),
    ('Kevin','Owens','Salesperson','Vince McMahon');
