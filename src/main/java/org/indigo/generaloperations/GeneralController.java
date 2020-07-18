package org.indigo.generaloperations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/general")
public class GeneralController {

    @Autowired
    private GeneralService service;

    /*
     * Beginning of RequestMappings for BusinessReviews.
     */

    /*
     * Searches for a random list of Businesses ListingData in Indianapolis.
     */
    @GetMapping("/searchBusinessListingRandom/{limit}")
    public List searchBusinessListingByRandom(@PathVariable int limit) {
        return service.searchYelpBusinessListingRandom(limit,null);
    }

    /*
     * Matches Business ListingData in Indianapolis given an entered name or category.
     */
    @GetMapping("/searchBusinessListingByTerm/{term}/{limit}")
    public List searchBusinessListingByTerm(@PathVariable String term, @PathVariable int limit) {
        return service.searchYelpBusinessListingByTerm(limit, term);
    }

}