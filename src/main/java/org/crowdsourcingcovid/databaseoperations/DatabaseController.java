package org.crowdsourcingcovid.databaseoperations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@Controller
@RequestMapping("/api/db")
public class DatabaseController {

    @Autowired
    private DatabaseRepository databaseRepository;

    /*
     * Beginning of RequestMappings for BusinessReviews.
     */

    /*
     * Returns all BusinessReviews for a particular business ID.
     */
    @RequestMapping(path="/getBusinessReviews/{id}")
    public @ResponseBody Collection<BusinessReview> getBusinessReviews(@PathVariable String id) {
        return databaseRepository.getBusinessReviews(id);
    }

    /*
     * Sends a new BusinessReview to the database with several pieces of information.
     */
    @RequestMapping(path="/addBusinessReview/{id}/{user}/{rating}/{review}/{dateTime}")
    public @ResponseBody boolean addBusinessReview(@PathVariable String id, @PathVariable String user,
                                                       @PathVariable double rating, @PathVariable String review,
                                                       @PathVariable String dateTime) {
        return databaseRepository.addBusinessReview(id, user, rating, review, dateTime);
    }

    /*
     * Updates a BusinessReview stored in the database with several pieces of information.
     */
    @RequestMapping(path="/updateBusinessReview/{id}/{user}/{rating}/{review}/{dateTime}")
    public @ResponseBody boolean updateBusinessReview(@PathVariable String id, @PathVariable String user,
                                                       @PathVariable double rating, @PathVariable String review,
                                                       @PathVariable String dateTime) {
        return databaseRepository.updateBusinessReview(id, user, rating, review, dateTime);
    }

    /*
     * Deletes a particular BusinessReview from the database.
     */
    @RequestMapping("/removeBusinessReview/{id}/{user}/{review}")
    public @ResponseBody boolean removeBusinessReview(@PathVariable String id, @PathVariable String user, @PathVariable String review) {
        return databaseRepository.removeBusinessReview(id, user, review);
    }


    /*
     * Beginning of RequestMappings for BusinessData.
     */

    /*
     * Returns all BusinessData for a particular business ID.
     */
    @RequestMapping(path="/getBusinessData/{id}")
    public @ResponseBody Collection<BusinessData> getBusinessData(@PathVariable String id) {
        return databaseRepository.getBusinessData(id);
    }

    /*
     * Sends a new BusinessData to the database with several pieces of information.
     */
    @RequestMapping(path="/addBusinessData/{id}/{claimed}/{user}/{businessResponse}/{dateTime}")
    public @ResponseBody boolean addBusinessData(@PathVariable String id, @PathVariable boolean claimed,
                                                   @PathVariable String user, @PathVariable String businessResponse,
                                                   @PathVariable String dateTime) {
        return databaseRepository.addBusinessData(id, claimed, user, businessResponse, dateTime);
    }

    /*
     * Updates a BusinessData stored in the database with several pieces of information.
     */
    @RequestMapping(path="/updateBusinessData/{id}/{claimed}/{user}/{businessResponse}/{dateTime}")
    public @ResponseBody boolean updateBusinessData(@PathVariable String id, @PathVariable boolean claimed,
                                                    @PathVariable String user, @PathVariable String businessResponse,
                                                    @PathVariable String dateTime) {
        return databaseRepository.updateBusinessData(id, claimed, user, businessResponse, dateTime);
    }

    /*
     * Deletes a particular BusinessData from the database.
     */
    @RequestMapping("/removeBusinessData/{id}")
    public @ResponseBody boolean removeBusinessData(@PathVariable String id) {
        return databaseRepository.removeBusinessData(id);
    }

}