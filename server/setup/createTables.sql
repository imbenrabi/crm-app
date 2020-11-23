USE crm_app; -- lets VS code know which DB to use

-- CREATE TABLE owner(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(50)
-- );

-- CREATE TABLE country(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(50)
-- );

-- CREATE TABLE email_type(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     type VARCHAR(10)
-- );


CREATE TABLE client(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(50), 
    email VARCHAR(120),
    sold BOOLEAN,
    first_contact DATE,
    email_type_id INT,
    country_id INT,
    owner_id INT,

    FOREIGN KEY(email_type_id) REFERENCES email_type(id),
    FOREIGN KEY(country_id) REFERENCES country(id),
    FOREIGN KEY(owner_id) REFERENCES owner(id)
);

-- DROP TABLE client



