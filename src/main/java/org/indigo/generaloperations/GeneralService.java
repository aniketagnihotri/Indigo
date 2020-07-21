package org.indigo.generaloperations;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GeneralService {

    @Value("${app.yelp_controller_searchterm}")
    private String yelp_controller_searchterm;

    @Value("${app.yelp_controller_random}")
    private String yelp_controller_random;

    @Value("${app.db_controller_searchdata}")
    private String db_controller_searchdata;

    /*
     * GeneralConfigurator object, which gives this Service access to its methods.
     */
    GeneralConfigurator configurator = new GeneralConfigurator();

    public List searchYelpBusinessListingRandom(int limit, String term) {
        OkHttpClient client = new OkHttpClient().newBuilder()
                .build();
        Request request = new Request.Builder()
                .url(yelp_controller_random + limit)
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
     * Sends a GET request to the YelpController and returns a List of BusinessListings.
     *
     * @param limit limit of businesses to retrieve from the Yelp API.
     * @param term  searchTerm to send to the Yelp API.
     * @return List containing business search results.
     */
    public List searchYelpBusinessListingByTerm(int limit, String term) {
        OkHttpClient client = new OkHttpClient().newBuilder()
                .build();
        Request request = new Request.Builder()
                .url(yelp_controller_searchterm + term + "/" + limit)
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
     * Sends a GET request to the DatabaseController and returns a List of BusinessListings with their BusinessData fields filled.
     *
     * @param businesses list of businesses to make database calls for.
     * @return List containing businesses with all fields filled.
     */
    public List searchDBBusinessListing(List<GeneralBusinessListing> businesses) {
        for (int i = 0; i < businesses.size(); i++) {
            OkHttpClient client = new OkHttpClient().newBuilder()
                    .build();
            Request request = new Request.Builder()
                    .url(db_controller_searchdata + businesses.get(i).getId())
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


