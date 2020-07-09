package org.crowdsourcingcovid.yelpoperations;

import okhttp3.Response;
import org.json.JSONArray;
import org.json.JSONObject;

import java.io.IOException;

public class BusinessConfigurator {

    public BusinessConfigurator() {

    }

    /*
     * Configures Business Listings and returns them in an array.
     */
    public YelpBusinessListing[] configureBusinessListing(Response response, int limit) throws IOException {
        String jsonData = response.body().string();
        JSONObject yelpResponse = new JSONObject(jsonData);
        JSONArray jsonArray = yelpResponse.getJSONArray("businesses");

        YelpBusinessListing[] businesses = new YelpBusinessListing[jsonArray.length()];
        for (int i = 0; i < jsonArray.length(); i++) {
            JSONObject jsonObject = jsonArray.getJSONObject(i);
            //new yelp business listing
            YelpBusinessListing business = new YelpBusinessListing();
            //try catch in order of what is most likely to be present for any given business

            //initialization of business id
            business.setId(jsonObject);
            //initialization of business name
            business.setName(jsonObject);
            //initialization of business yelp url
            business.setUrl(jsonObject);
            //initialization of business display address
            business.setDisplayAddress(jsonObject);
            //initialization of business yelp categories
            business.setCategories(jsonObject);
            //initialization of business open/closed state
            business.setClosed(jsonObject);
            //initialization of business yelp rating
            business.setRating(jsonObject);
            //initialization of business image_url
            business.setImage_url(jsonObject);
            //initialization of business yelp price
            business.setPrice(jsonObject);

            businesses[i] = business;

        }

        return businesses;

    }

    /*
     * Configures a single Business object and returns it.
     */
    public YelpBusiness configureBusiness(Response response, int limit) throws IOException {
        String jsonData = response.body().string();
        JSONObject yelpResponse = new JSONObject(jsonData);

        //new yelp business
        YelpBusiness business = new YelpBusiness();

        //initialization of business id
        business.setId(yelpResponse);
        //initialization of business alias
        business.setAlias(yelpResponse);
        //initialization of business name
        business.setName(yelpResponse);
        //initialization of business yelp url
        business.setUrl(yelpResponse);
        //initialization of business display phone
        business.setDisplayPhone(yelpResponse);
        //initialization of business display address
        business.setDisplayAddress(yelpResponse);
        //initialization of business yelp categories
        business.setCategories(yelpResponse);
        //initialization of photos
        business.setPhotos(yelpResponse);
        //initialization of business open/closed state
        business.setClosed(yelpResponse);
        //initialization of business yelp rating
        business.setRating(yelpResponse);
        //initialization of business yelp price
        business.setPrice(yelpResponse);

        return business;

    }

}
