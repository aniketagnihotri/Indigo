package org.crowdsourcingcovid.yelpoperations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/yelp")
public class YelpController {

    @Autowired
    YelpService service;

    @RequestMapping("/getBusinessByCity/{city}/{limit}")
    public YelpBusiness[] getBusinesses(@PathVariable String city, @PathVariable int limit) {
        return service.getBusinesses(city, limit);
    }

    @RequestMapping("/getBusinessByID/{id}")
    public YelpBusiness getBusinesses(@PathVariable String id) {
        return null;
    }

}

