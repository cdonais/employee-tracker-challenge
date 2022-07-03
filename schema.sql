CREATE TABLE departments(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);
CREATE TABLE roles(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2),
    CONSTRAINT fk_departmentId FOREIGN KEY (id)
    REFERENCES departments(id)
);
CREATE TABLE employees(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL, 
    manager_id INTEGER,
    CONSTRAINT fk_roleId FOREIGN KEY (id)
    REFERENCES roles(id)
);