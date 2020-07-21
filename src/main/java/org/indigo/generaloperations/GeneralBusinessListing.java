package org.indigo.generaloperations;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/*
 * Class for holding the details for a BusinessListing. This class is intended to hold information
 * for the listings page returned after a search or query.
 */
public class GeneralBusinessListing {

    /*
     * These fields match both respective entries in a separate AWS RDS Database instance
     * and the JSON responses from the Yelp Fusion API.
     */
    private String id;
    private String name;
    private boolean isClosed;
    private String image_url;
    private String url;
    private String[] categories;
    private double rating;
    private String price;
    private String[] displayAddress;
    private boolean sponsored;
    private int numReviews;
    private double indigoRating;

    public GeneralBusinessListing() {
    }

    public String getId() {
        return id;
    }

    public void setId(JSONObject yelpResponse) {
        try {
            this.id = yelpResponse.getString("id");
        } catch (JSONException e) {
            this.id = "ID not available";
        }
    }

    public String getName() {
        return name;
    }

    public void setName(JSONObject yelpResponse) {
        try {
            this.name = yelpResponse.getString("name");
        } catch (JSONException e) {
            this.name = "Name not available";
        }
    }

    public boolean isClosed() {
        return isClosed;
    }

    public void setClosed(JSONObject yelpResponse) {
        try {
            isClosed = yelpResponse.getBoolean("closed");
        } catch (JSONException e) {
            this.isClosed = true;
        }
    }

    public String getImage_url() {
        return image_url;
    }

    public void setImage_url(JSONObject yelpResponse) {
        try {
            this.image_url = yelpResponse.getString("image_url");
        } catch (JSONException e) {
            this.image_url = null;
        }
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(JSONObject yelpResponse) {
        try {
            this.url = yelpResponse.getString("url");
        } catch (JSONException e) {
            this.url = "URL not provided";
        }
    }

    public String[] getCategories() {
        return categories;
    }

    public void setCategories(JSONObject yelpResponse) {
        try {
            JSONArray categories = yelpResponse.getJSONArray("categories");
            String[] newCategories = new String[3];
            for (int j = 0; j < categories.length(); j++) {
                newCategories[j] = (String) categories.get(j);
            }
            this.categories = newCategories;
        } catch (JSONException e) {
            this.categories = null;
        }
    }

    public double getRating() {
        return rating;
    }

    public void setRating(JSONObject yelpResponse) {
        try {
            this.rating = yelpResponse.getDouble("rating");
        } catch (JSONException e) {
            this.rating = 0.0;
        }
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(JSONObject yelpResponse) {
        try {
            this.price = yelpResponse.
                    getString("price");
        } catch (JSONException e) {
            this.price = "Price not available";
        }
    }

    public String[] getDisplayAddress() {
        return displayAddress;
    }

    public void setDisplayAddress(JSONObject yelpResponse) {
        try {
            JSONArray location = yelpResponse.getJSONArray("displayAddress");
            String[] locationArray = new String[2];
            locationArray[0] = (String) location.get(0);
            locationArray[1] = (String) location.get(1);
            this.displayAddress = locationArray;
        } catch (JSONException e) {
            this.displayAddress = new String[]{"Address not available", ""};
        }
    }

    public boolean isSponsored() {
        return sponsored;
    }

    public void setSponsored(JSONObject yelpResponse) {
        try {
            this.sponsored = yelpResponse.getBoolean("sponsored");
        } catch (JSONException e) {
            this.sponsored = false;
        }
    }

    public int getNumReviews() {
        return numReviews;
    }

    public void setNumReviews(JSONObject yelpResponse) {
        try {
            this.numReviews = yelpResponse.getInt("numReviews");
        } catch (JSONException e) {
            this.numReviews = 0;
        }
    }

    public double getIndigoRating() {
        return indigoRating;
    }

    public void setIndigoRating(JSONObject yelpResponse) {
        try {
            this.indigoRating = yelpResponse.getDouble("indigoRating");
        } catch (JSONException e) {
            this.indigoRating = 0.0;
        }
    }

}

