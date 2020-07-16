package org.indigo.yelpoperations;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/*
 * Class for holding the details for a BusinessListing. This class is intended to hold information
 * for the listings page returned after a search or query.
 */
public class YelpBusinessListing {

    String id;
    String name;
    boolean isClosed;
    String image_url;
    String url;
    String[] categories;
    double rating;
    String price;
    String[] displayAddress;

    public YelpBusinessListing() {
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
            isClosed = yelpResponse.getBoolean("is_closed");
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
            JSONArray yelpCategories = yelpResponse.getJSONArray("categories");
            String[] categories = new String[yelpCategories.length()];
            for (int j = 0; j < yelpCategories.length(); j++) {
                JSONObject category = (JSONObject) yelpCategories.get(j);
                categories[j] = category.getString("title");
            }
            this.categories = categories;
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
            JSONArray location = yelpResponse.getJSONObject("location").getJSONArray("display_address");
            String[] locationArray = new String[2];
            locationArray[0] = location.getString(0);
            locationArray[1] = location.getString(1);
            this.displayAddress = locationArray;
        } catch (JSONException e) {
            this.displayAddress = new String[]{"Address not available", ""};
        }
    }

}

