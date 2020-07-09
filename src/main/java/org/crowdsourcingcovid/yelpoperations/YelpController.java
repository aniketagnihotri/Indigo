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

    /*
     * Searches for a random list of Businesses Listings in Indianapolis.
     */
    @RequestMapping("/searchBusinessListingRandom/{limit}")
    public YelpBusinessListing[] searchBusinessListingByRandom(@PathVariable int limit) {
        return service.searchBusinessListing(limit,null);
    }

    /*
     * Matches Business Listings in Indianapolis given an entered name or category.
     */
    @RequestMapping("/searchBusinessListingByTerm/{term}/{limit}")
    public YelpBusinessListing[] searchBusinessListingByTerm(@PathVariable String term, @PathVariable int limit) {
        return service.searchBusinessListing(limit, term);
    }

    /*
     * Matches a Business to a given Yelp Business ID.
     */
    @RequestMapping("/searchBusinessByID/{id}/{limit}")
    public YelpBusiness searchBusinessByID(@PathVariable String id, @PathVariable int limit) {
        return service.searchBusiness(limit, id);
    }


}

