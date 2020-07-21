package org.indigo.databaseoperations;

/*
 * Class for holding the details for BusinessData.
 */
public class BusinessData {

    /*
     * These fields match respective entries in a separate AWS RDS Database instance.
     */
    private String id;
    private boolean sponsored;
    private int numReviews;
    private double indigoRating;
    private boolean claimed;
    private String user;
    private String businessResponse;
    private String dateTime;

    public BusinessData() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public boolean isSponsored() {
        return sponsored;
    }

    public void setSponsored(boolean sponsored) {
        this.sponsored = sponsored;
    }

    public int getNumReviews() {
        return numReviews;
    }

    public void setNumReviews(int numReviews) {
        this.numReviews = numReviews;
    }

    public double getIndigoRating() {
        return indigoRating;
    }

    public void setIndigoRating(double indigoRating) {
        this.indigoRating = indigoRating;
    }

    public boolean isClaimed() {
        return claimed;
    }

    public void setClaimed(boolean claimed) {
        this.claimed = claimed;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getBusinessResponse() {
        return businessResponse;
    }

    public void setBusinessResponse(String businessResponse) {
        this.businessResponse = businessResponse;
    }

    public String getDateTime() {
        return dateTime;
    }

    public void setDateTime(String dateTime) {
        this.dateTime = dateTime;
    }

}
