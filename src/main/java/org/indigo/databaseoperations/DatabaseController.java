package org.indigo.databaseoperations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/*
 * Controller for all database requests.
 */
@RestController
@RequestMapping("/api/db")
public class DatabaseController {

    /*
     * Autowired DatabaseRepository object, which gives this Controller access to those methods.
     */
    @Autowired
    private DatabaseRepository databaseRepository;

    /*
     * Beginning of RequestMappings for BusinessReviews.
     */

    /*
     * Gets all BusinessReviews for a particular business ID.
     *
     * @param id    matches a business id and is passed to the method via the RequestMapping path.
     * @return List of business reviews for a given business.
     */
    @GetMapping(path="/getBusinessReviews/{id}")
    public @ResponseBody List getBusinessReviews(@PathVariable String id) {
        return databaseRepository.getBusinessReviews(id);
    }

    /*
     * Sends a new BusinessReview to the database with several pieces of information.
     *
     * @param businessReview    an object containing the data to POST to the database.
     * @return String   returns either TRUE or FALSE as a String.
     */
    @PostMapping(path="/addBusinessReview")
    public String addBusinessReview(@RequestBody BusinessReview businessReview) {
        return databaseRepository.addBusinessReview(businessReview.getId(), businessReview.getUser(),
                businessReview.getRating(), businessReview.getReview(), businessReview.getDateTime());
    }

    /*
     * Updates a BusinessReview stored in the database with several pieces of information.
     *
     * @param businessReview    an object containing the data to PUT to the database.
     * @return String   returns either TRUE or FALSE as a String.
     */
    @PutMapping(path="/updateBusinessReview")
    public String updateBusinessReview(@RequestBody BusinessReview businessReview) {
        return databaseRepository.updateBusinessReview(businessReview.getId(), businessReview.getUser(),
                businessReview.getRating(), businessReview.getReview(), businessReview.getDateTime());
    }

    /*
     * Deletes a particular BusinessReview from the database.
     *
     * @param businessReview    an object containing the data to DELETE from the database.
     * @return String   returns either TRUE or FALSE as a String.
     */
    @DeleteMapping("/removeBusinessReview")
    public String removeBusinessReview(@RequestBody BusinessReview businessReview) {
        return databaseRepository.removeBusinessReview(businessReview.getId(), businessReview.getUser(), businessReview.getReview());
    }


    /*
     * Beginning of RequestMappings for BusinessData.
     */

    /*
     * Gets all BusinessData for a particular business ID.
     *
     * @param id    matches a business id and is passed to the method via the RequestMapping path.
     * @return List the list of business data for a given business.
     */
    @GetMapping(path="/getBusinessData/{id}")
    public @ResponseBody List getBusinessData(@PathVariable String id) {
        return databaseRepository.getBusinessData(id);
    }

    /*
     * Gets solely the rating, numReviews, and isSponsored fields from the BusinessData for a particular business ID.
     *
     * @param id    matches a business id and is passed to the method via the RequestMapping path.
     * @return List  the list of rating, numReviews, and isSponsored fields from the BusinessData for a given business.
     */
    @GetMapping(path="/getIndigoBusinessStats/{id}")
    public @ResponseBody List getIndigoBusinessRating(@PathVariable String id) {
        return databaseRepository.getIndigoBusinessStats(id);
    }

    /*
     * Sends a new BusinessData to the database with several pieces of information.
     *
     * @param businessData  an object containing the data to POST to the database.
     * @return String   returns either TRUE or FALSE as a String.
     */
    @PostMapping(path="/addBusinessData")
    public String addBusinessData(@RequestBody BusinessData businessData) {
        return databaseRepository.addBusinessData(businessData.getId(), businessData.isSponsored(),
                businessData.getNumReviews(), businessData.getIndigoRating(), businessData.isClaimed(),
                businessData.getUser(), businessData.getBusinessResponse(), businessData.getDateTime());
    }

    /*
     * Updates a BusinessData stored in the database with several pieces of information.
     *
     * @param businessData  an object containing the data to PUT to the database.
     * @return  String  returns either TRUE or FALSE as a String.
     */
    @PutMapping(path="/updateBusinessData")
    public String updateBusinessData(@RequestBody BusinessData businessData) {
        return databaseRepository.updateBusinessData(businessData.getId(), businessData.isSponsored(),
                businessData.getNumReviews(), businessData.getIndigoRating(), businessData.isClaimed(),
                businessData.getUser(), businessData.getBusinessResponse(), businessData.getDateTime());
    }

    /*
     * Deletes a particular BusinessData from the database.
     *
     * @param   businessData    an object containing the data to DELETE from the database.
     * @return String   returns either TRUE or FALSE as a String.
     */
    @DeleteMapping("/removeBusinessData")
    public String removeBusinessData(@RequestBody BusinessData businessData) {
        return databaseRepository.removeBusinessData(businessData.getId());
    }

}