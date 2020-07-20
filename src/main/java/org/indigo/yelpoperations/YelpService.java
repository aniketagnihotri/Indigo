package org.indigo.yelpoperations;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class YelpService {

    //search URL of Yelp API
    private final String SEARCH_URL = "https://api.yelp.com/v3/businesses/search?location=indianapolis";
    //search business by Yelp ID
    private final String SEARCH_ID_URL = "https://api.yelp.com/v3/businesses/";
    //personal API Bearer Token
    private final String BEARER_TOKEN = "cwzzLM8QtCjZ8LgGT0AU_CbX3NPFtoXWeaFAYLhXeAeVIRcizK0Ie699l6hr2Kt4j9nt5BvlgsoPrrR6g7qA4kGv-jaDdQuOWNBCCQ-4TuHaqDNtixhSkiU7Pzf5XnYx";
    //class for configuring a business from a response
    BusinessConfigurator businessConfigurator = new BusinessConfigurator();

    /*
     * Configures the Yelp API URL for inclusion in the request sent by searchBusinessListing().
     */
    public String getSEARCH_URL(int limit, String term) {
        if (term == null) {
            return SEARCH_URL + "&limit=" + limit;
        } else {
            return SEARCH_URL + "&limit=" + limit + "&term=" + term;
        }
    }

    /*
     * Sends a request to the Yelp Fusion API and returns an array of BusinessListings.
     */
    public List searchBusinessListing(int limit, String term) {
//        OkHttpClient client = new OkHttpClient().newBuilder()
//                .build();
//        Request request = new Request.Builder()
//                .url(getSEARCH_URL(limit, term))
//                .method("GET", null)
//                .addHeader("Authorization",
//                        "Bearer " + BEARER_TOKEN)
//                .build();

        OkHttpClient client = new OkHttpClient().newBuilder()
                .build();
        Request request = new Request.Builder()
                .url("http://bot.whatismyipaddress.com/")
                .method("GET", null)
                .build();


        try {
            Response response = client.newCall(request).execute();
            businessConfigurator.configureBusinessListing(response, limit);
            return null;
//            Response response = client.newCall(request).execute();
//            System.out.println(response);
//            return businessConfigurator.configureBusinessListing(response, limit);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    /*
     * Sends a request to the Yelp Fusion API and returns a singular Business.
     */
    public YelpBusiness searchBusiness(int limit, String id) {
        OkHttpClient client = new OkHttpClient().newBuilder()
                .build();
        Request request = new Request.Builder()
                .url(SEARCH_ID_URL + id)
                .method("GET", null)
                .addHeader("Authorization",
                        "Bearer " + BEARER_TOKEN)
                .build();
        try {
            Response response = client.newCall(request).execute();
            return businessConfigurator.configureBusiness(response, limit);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

}


