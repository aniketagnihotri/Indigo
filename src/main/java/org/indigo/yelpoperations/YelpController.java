package org.indigo.yelpoperations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/yelp")
public class YelpController {

    @Autowired
    YelpService service;

    /*
     * Searches for a random list of Businesses ListingData in Indianapolis.
     */
    @GetMapping("/searchBusinessListingRandom/{limit}")
    public YelpBusinessListing[] searchBusinessListingByRandom(@PathVariable int limit) {
        return service.searchBusinessListing(limit,null);
    }

    /*
     * Matches Business ListingData in Indianapolis given an entered name or category.
     */
    @GetMapping("/searchBusinessListingByTerm/{term}/{limit}")
    public YelpBusinessListing[] searchBusinessListingByTerm(@PathVariable String term, @PathVariable int limit) {
        return service.searchBusinessListing(limit, term);
    }

    /*
     * Matches a Business to a given Yelp Business ID.
     */
    @GetMapping("/searchBusinessByID/{id}/{limit}")
    public YelpBusiness searchBusinessByID(@PathVariable String id, @PathVariable int limit) {
        return service.searchBusiness(limit, id);
    }
    
}

