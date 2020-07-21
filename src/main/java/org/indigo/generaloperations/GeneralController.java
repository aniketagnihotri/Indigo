package org.indigo.generaloperations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/general")
public class GeneralController {

    /*
     * Autowired GeneralService object, which gives this Controller access to those methods.
     */
    @Autowired
    private GeneralService service;

    /*
     * Beginning of RequestMappings for BusinessReviews.
     */

    /*
     * Searches for a random list of GeneralBusinessListing data in Indianapolis.
     *
     * @param limit    the limit of businesses that can be returned from the search.
     * @return List     the list of businesses with all data filled from Yelp and the database.
     */
    @GetMapping("/searchBusinessListingRandom/{limit}")
    public List searchBusinessListingByRandom(@PathVariable int limit) {
        return service.searchYelpBusinessListingRandom(limit,null);
    }

    /*
     * Matches GeneralBusinessListing data in Indianapolis given an entered name or category.
     *
     * @param term  the search term to return results for.
     * @param limit    the limit of businesses that can be returned from the search.
     * @return List     the list of businesses with all data filled from Yelp and the database.
     */
    @GetMapping("/searchBusinessListingByTerm/{term}/{limit}")
    public List searchBusinessListingByTerm(@PathVariable String term, @PathVariable int limit) {
        return service.searchYelpBusinessListingByTerm(limit, term);
    }

}