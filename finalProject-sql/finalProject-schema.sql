DROP DATABASE IF EXISTS `final_project`;
CREATE DATABASE `final_project`;
USE `final_project`;

CREATE TABLE inventory (
    id INT AUTO_INCREMENT,
    make VARCHAR(30),
    model VARCHAR(30),
    img_url VARCHAR(200),
    year YEAR,
    stock_number CHAR(5),
    interior VARCHAR(15),
    exterior VARCHAR(15),
    engine VARCHAR(30),
    transmission ENUM('6 speed_automatic', '7 speed_automatic', '8_speed automatic'),
    drive_wheels ENUM('rear wheel', 'all wheel drive'),
    vin CHAR(17),
    price VARCHAR(8),
    CONSTRAINT pk_inventory_id PRIMARY KEY (id)
);

CREATE TABLE contact (
    id INT AUTO_INCREMENT,
    name VARCHAR(255),
    email VARCHAR(255),
    tel_number CHAR(12),
    department ENUM('SALES', 'SERVICE'),
    textbox TEXT(10000),
    CONSTRAINT pk_contact_id PRIMARY KEY (id)
);