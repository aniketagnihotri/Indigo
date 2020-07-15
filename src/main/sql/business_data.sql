/*
 * business_data table data, configuration, and other code.
 */
CREATE TABLE business_data
(
id varchar(30) NOT NULL,
rating double(2,1) NOT NULL,
claimed boolean NOT NULL,
user varchar(30),
businessResponse varchar(500),
dateTime varchar(20)
);

DESC business_data;

INSERT INTO business_data (id, rating, claimed, user, businessResponse, dateTime) VALUES ("test id", 2.0, false, null, null, null);
SELECT * FROM business_data;

DROP TABLE business_data;