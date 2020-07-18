/*
 * business_reviews table data, configuration, and other code.
 */
CREATE TABLE business_reviews
(
id varchar(30) NOT NULL,
user varchar(30) NOT NULL,
rating double(2,1) NOT NULL,
review varchar(500) NOT NULL,
dateTime varchar(20) NOT NULL
);

DESC business_reviews;

INSERT INTO business_reviews (id, user, rating, review, dateTime) VALUES ("test id", "test user", 3.5, "test review", "7/8/20");
SELECT * FROM business_reviews;

DELETE FROM business_reviews WHERE (id = "ReV4Q3rEJ8neicQPc6pC0w" AND rating = 0.0);

DROP TABLE business_reviews;