package org.indigo.yelpoperations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/yelp")
public class YelpController {

    /*
     * Autowired YelpService object, which gives this Controller access to those methods.
     */
    @Autowired
    YelpService service;

    /*
     * Searches for a random list of BusinessListing data in Indianapolis.
     *
     * @param limit    the limit of businesses that can be returned from the search.
     * @return      the list of businesses with all data filled from Yelp and the database.
     */
    @GetMapping("/searchBusinessListingRandom/{limit}")
    public List searchBusinessListingByRandom(@PathVariable int limit) {
        return service.searchBusinessListing(limit,null);
    }

    /*
     * Matches BusinessListing data in Indianapolis given an entered name or category.
     *
     * @param term  the search term to return results for.
     * @param limit    the limit of businesses that can be returned from the search.
     * @return List     the list of businesses with all data filled from Yelp and the database.
     */
    @GetMapping("/searchBusinessListingByTerm/{term}/{limit}")
    public List searchBusinessListingByTerm(@PathVariable String term, @PathVariable int limit) {
        return service.searchBusinessListing(limit, term);
    }

    /*
     * Matches a Business to a given Yelp Business ID.
     *
     * @param id    the id of a particular business.
     * @param limit    the limit of businesses that can be returned from the search.
     * @return YelpBusiness     the matching businesses with all data filled from Yelp and the database.
     */
    @GetMapping("/searchBusinessByID/{id}/{limit}")
    public YelpBusiness searchBusinessByID(@PathVariable String id, @PathVariable int limit) {
        return service.searchBusiness(limit, id);
    }
    
}

