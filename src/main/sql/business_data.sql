/*
 * business_data table data, configuration, and other code.
 */
CREATE TABLE business_data
(
id varchar(30) NOT NULL,
sponsored boolean NOT NULL,
numReviews int NOT NULL,
indigoRating double(2,1) NOT NULL,
claimed boolean NOT NULL,
user varchar(30),
businessResponse varchar(500),
dateTime varchar(20)
);

DESC business_data;

INSERT INTO business_data (id, sponsored, numReviews, indigoRating, claimed, user, businessResponse, dateTime) VALUES ("UFCN0bYdHroPKu6KV5CJqg", false, 1, 5.0, false, null, "This business has pledged to make its customers its top priority during and after COVID-19.", null);
SELECT * FROM business_data;
SELECT COUNT(*) FROM business_data;


DELETE FROM business_data WHERE id = "ReV4Q3rEJ8neicQPc6pC0w";

DELETE FROM business_reviews WHERE (id = "UFCN0bYdHroPKu6KV5CJqg");

DROP TABLE business_data;