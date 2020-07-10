package org.indigo.yelpoperations;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/*
 * Class for holding the details for a Business. This class is intended to hold information
 * for a standalone page detailing a singular business.
 */
public class YelpBusiness {

    String id;
    String alias;
    String name;
    boolean isClosed;
    String url;
    String displayPhone;
    String[] categories;
    double rating;
    String[] photos;
    String price;
    String[] displayAddress;

    public YelpBusiness() {
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

    public String getAlias() {
        return alias;
    }

    public void setAlias(JSONObject yelpResponse) {
        try {
            this.alias = yelpResponse.getString("alias");
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

    public String getDisplayPhone() {
        return displayPhone;
    }

    public void setDisplayPhone(JSONObject yelpResponse) {
        try {
            this.displayPhone = yelpResponse.getString("display_phone");
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

    public String[] getPhotos() {
        return photos;
    }

    public void setPhotos(JSONObject yelpResponse) {
        try {
            JSONArray listedPhotos = yelpResponse.getJSONArray("photos");
            String[] photos = new String[listedPhotos.length()];
            for (int i = 0; i < listedPhotos.length(); i++) {
                photos[i] = (String) listedPhotos.get(i);
            }
            this.photos = photos;
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

