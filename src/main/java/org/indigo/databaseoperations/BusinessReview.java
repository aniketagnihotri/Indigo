package org.indigo.databaseoperations;

/*
 * Class for holding the details for a BusinessReview.
 */
public class BusinessReview {

    /*
     * These fields match respective entries in a separate AWS RDS Database instance.
     */
    private String id;
    private String user;
    private double rating;
    private String review;
    private String dateTime;

    public BusinessReview() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public String getDateTime() {
        return dateTime;
    }

    public void setDateTime(String dateTime) {
        this.dateTime = dateTime;
    }

}
