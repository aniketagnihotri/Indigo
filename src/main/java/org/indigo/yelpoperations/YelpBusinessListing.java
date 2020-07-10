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
            e.printStackTrace();
        }
    }

    public String getName() {
        return name;
    }

    public void setName(JSONObject yelpResponse) {
        try {
            this.name = yelpResponse.getString("name");
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    public boolean isClosed() {
        return isClosed;
    }

    public void setClosed(JSONObject yelpResponse) {
        try {
            isClosed = yelpResponse.getBoolean("is_closed");
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    public String getImage_url() {
        return image_url;
    }

    public void setImage_url(JSONObject yelpResponse) {
        this.image_url = yelpResponse.getString("image_url");
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(JSONObject yelpResponse) {
        try {
            this.url = yelpResponse.getString("url");
        } catch (JSONException e) {
            e.printStackTrace();
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
            e.printStackTrace();
        }
    }

    public double getRating() {
        return rating;
    }

    public void setRating(JSONObject yelpResponse) {
        try {
            this.rating = yelpResponse.getDouble("rating");
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(JSONObject yelpResponse) {
        try {
            this.price = yelpResponse.getString("price");
        } catch (JSONException e) {
            e.printStackTrace();
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
            e.printStackTrace();
        }
    }

}

