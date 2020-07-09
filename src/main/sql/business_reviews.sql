/*
 * business_reviews table data
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

INSERT INTO business_reviews (id, user, rating, review, dateTime) VALUES ("test id", "test user", 3.5, "test review", "July 08, 2020");
SELECT * FROM business_reviews;

UPDATE business_reviews SET rating = 5.0, review = "hello", dateTime = "July 7, 2020" WHERE id = "test id" && user = "test user";

DELETE FROM business_reviews WHERE user = "test user" AND review = "test review";

DROP TABLE business_reviews;