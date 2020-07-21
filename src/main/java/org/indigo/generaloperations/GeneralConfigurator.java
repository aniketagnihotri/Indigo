package org.indigo.generaloperations;

import okhttp3.Response;
import org.json.JSONArray;
import org.json.JSONObject;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class GeneralConfigurator {

    public GeneralConfigurator() {

    }

    /*
     * Configures Business ListingData and returns them in an array.
     *
     * @param response  the given response from a GET request sent by GeneralService.
     * @param limit     the size of the list of GeneralBusinessListings to return.
     * @return List     containing all BusinessListings in the given response.
     */
    public List configureYelpBusinessListing(Response response, int limit) throws IOException {
        String jsonData = response.body().string();
        JSONArray yelpResponse = new JSONArray(jsonData);

        List<GeneralBusinessListing> businesses = new ArrayList<>(yelpResponse.length());
        for (int i = 0; i < yelpResponse.length(); i++) {
            JSONObject jsonObject = yelpResponse.getJSONObject(i);
            //new yelp business listing
            GeneralBusinessListing business = new GeneralBusinessListing();
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

            businesses.add(business);

        }

        return businesses;

    }

    /*
     * Configures a GeneralBusinessListing with matching database data and returns it.
     *
     * @param response  the given response from a GET request sent by GeneralService.
     * @param business  the business on which to add information to.
     * @return GeneralBusinessListing   an updates business with all fields filled.
     */
    public GeneralBusinessListing configureDBBusinessListing(Response response, GeneralBusinessListing business) throws IOException {
        String jsonData = response.body().string();
        JSONArray yelpResponse = new JSONArray(jsonData);
        if (yelpResponse.length() == 0) {
            return business;
        }

        JSONObject jsonObject = yelpResponse.getJSONObject(0);

        //initialization of business id
        business.setNumReviews(jsonObject);
        //initialization of business name
        business.setSponsored(jsonObject);
        //initialization of business yelp url
        business.setIndigoRating(jsonObject);

        return business;

    }

}
