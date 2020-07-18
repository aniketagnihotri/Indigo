package org.indigo.generaloperations;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import org.indigo.yelpoperations.BusinessConfigurator;
import org.indigo.yelpoperations.YelpBusiness;
import org.indigo.yelpoperations.YelpController;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;


@Service
public class GeneralService {

    private final String YELP_CONTROLLER_SEARCHTERM = "http://localhost:8080/api/yelp/searchBusinessListingByTerm/";

    private final String YELP_CONTROLLER_RANDOM = "http://localhost:8080/api/yelp/searchBusinessListingRandom/";

    private final String DB_CONTROLLER_SEARCHDATA = "http://localhost:8080/api/db/getBusinessData/";

    //class for configuring a business from a response
    GeneralConfigurator configurator = new GeneralConfigurator();

    public List searchYelpBusinessListingRandom(int limit, String term) {
        OkHttpClient client = new OkHttpClient().newBuilder()
                .build();
        Request request = new Request.Builder()
                .url(YELP_CONTROLLER_RANDOM + limit)
                .method("GET", null)
                .addHeader("Content-Type",
                        "application/json")
                .addHeader("Accept", "application/json")
                .build();
        try {
            Response response = client.newCall(request).execute();
            List<GeneralBusinessListing> list = configurator.configureYelpBusinessListing(response, limit);
            return searchDBBusinessListing(list);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public List searchYelpBusinessListingByTerm(int limit, String term) {
        OkHttpClient client = new OkHttpClient().newBuilder()
                .build();
        Request request = new Request.Builder()
                .url(YELP_CONTROLLER_SEARCHTERM + term + "/" + limit)
                .method("GET", null)
                .addHeader("Content-Type",
                        "application/json")
                .addHeader("Accept", "application/json")
                .build();
        try {
            Response response = client.newCall(request).execute();
            List<GeneralBusinessListing> list = configurator.configureYelpBusinessListing(response, limit);
            return searchDBBusinessListing(list);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    /*
     * Sends a request to the Yelp Fusion API and returns an array of BusinessListings.
     */
    public List searchDBBusinessListing(List<GeneralBusinessListing> businesses) {

        for (int i = 0; i < businesses.size(); i++) {
            OkHttpClient client = new OkHttpClient().newBuilder()
                    .build();
            Request request = new Request.Builder()
                    .url(DB_CONTROLLER_SEARCHDATA + businesses.get(i).getId())
                    .method("GET", null)
                    .addHeader("Content-Type",
                            "application/json")
                    .addHeader("Accept", "application/json")
                    .build();
            try {
                Response response = client.newCall(request).execute();
                businesses.set(i, configurator.configureDBBusinessListing(response, businesses.get(i)));
            } catch (Exception e) {
                e.printStackTrace();
                return null;
            }
        }

        return businesses;

    }



}


