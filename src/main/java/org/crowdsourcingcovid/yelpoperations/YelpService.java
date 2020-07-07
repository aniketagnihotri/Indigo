package org.crowdsourcingcovid.yelpoperations;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

import javax.print.DocFlavor;
import java.io.IOException;
import java.util.ArrayList;

@Service
public class YelpService {

    private final String URL = "https://api.yelp.com/v3/businesses/search?";
    private final String ACCESS_TOKEN = "cwzzLM8QtCjZ8LgGT0AU_CbX3NPFtoXWeaFAYLhXeAeVIRcizK0Ie699l6hr2Kt4j9nt5BvlgsoPrrR6g7qA4kGv-jaDdQuOWNBCCQ-4TuHaqDNtixhSkiU7Pzf5XnYx";
    private ArrayList<YelpBusiness> yelpBusinesses = new ArrayList<>();

    public ArrayList<YelpBusiness> getAllBusinesses() {
        return yelpBusinesses;
    }

    public YelpBusiness[] getBusinesses(String city, int limit) {
        OkHttpClient client = new OkHttpClient().newBuilder()
                .build();
        Request request = new Request.Builder()
                .url(getURL(city, limit))
                .method("GET", null)
                .addHeader("Authorization",
                        "Bearer " + ACCESS_TOKEN)
                .build();
        try {
            Response response = client.newCall(request).execute();
            return configureBusinesses(response, limit);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public YelpBusiness[] configureBusinesses(Response response, int limit) throws IOException {
        String jsonData = response.body().string();
        JSONObject yelpResponse = new JSONObject(jsonData);
        JSONArray jsonArray = yelpResponse.getJSONArray("businesses");

        YelpBusiness[] businesses = new YelpBusiness[limit];
        for (int i = 0; i < jsonArray.length(); i++) {
            JSONObject jsonObject = jsonArray.getJSONObject(i);

            YelpBusiness business = new YelpBusiness();
            business.setId(jsonObject.getString("id"));
            business.setAlias(jsonObject.getString("alias"));
            business.setName(jsonObject.getString("name"));
            business.setImageURL(jsonObject.getString("image_url"));
            business.setClosed(jsonObject.getBoolean("is_closed"));
            business.setUrl(jsonObject.getString("url"));
            business.setRating(jsonObject.getDouble("rating"));
            business.setPrice(jsonObject.getString("price"));
            JSONArray location = jsonObject.getJSONObject("location").getJSONArray("display_address");
            String[] locationArray = new String[2];
            locationArray[0] = location.getString(0);
            locationArray[1] = location.getString(1);
            business.setDisplayAddress(locationArray);
            business.setDisplayPhone(jsonObject.getString("display_phone"));

            businesses[i] = business;
            yelpBusinesses.add(business);
        }
        return businesses;
    }

    public String getURL(String city, int limit) {
        String url = URL + "location=" + city + "&limit=" + limit;
        return url;
    }

}


