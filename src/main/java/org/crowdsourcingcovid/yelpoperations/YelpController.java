package org.crowdsourcingcovid.yelpoperations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class YelpController {

    @Autowired
    YelpService service;

    @RequestMapping("/yelp")
    public ArrayList<YelpBusiness> getAllBusinesses() {
        return service.getAllBusinesses();
    }

    @RequestMapping("/yelp/{city}/{limit}")
    public YelpBusiness[] getBusinesses(@PathVariable String city, @PathVariable int limit) {
        return service.getBusinesses(city, limit);
    }

}

