package org.indigo.databaseoperations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    @GetMapping(path="/getBusinessReviews/{id}")
    public @ResponseBody List getBusinessReviews(@PathVariable String id) {
        return databaseRepository.getBusinessReviews(id);
    }

    /*
     * Sends a new BusinessReview to the database with several pieces of information.
     */
    @PostMapping(path="/addBusinessReview")
    public String addBusinessReview(@RequestBody BusinessReview businessReview) {
        return databaseRepository.addBusinessReview(businessReview.getId(), businessReview.getUser(),
                businessReview.getRating(), businessReview.getReview(), businessReview.getDateTime());
    }

    /*
     * Updates a BusinessReview stored in the database with several pieces of information.
     */
    @PutMapping(path="/updateBusinessReview")
    public String updateBusinessReview(@RequestBody BusinessReview businessReview) {
        return databaseRepository.updateBusinessReview(businessReview.getId(), businessReview.getUser(),
                businessReview.getRating(), businessReview.getReview(), businessReview.getDateTime());
    }

    /*
     * Deletes a particular BusinessReview from the database.
     */
    @DeleteMapping("/removeBusinessReview")
    public String removeBusinessReview(@RequestBody BusinessReview businessReview) {
        return databaseRepository.removeBusinessReview(businessReview.getId(), businessReview.getUser(), businessReview.getReview());
    }


    /*
     * Beginning of RequestMappings for BusinessData.
     */

    /*
     * Returns all BusinessData for a particular business ID.
     */
    @GetMapping(path="/getBusinessData/{id}")
    public @ResponseBody List getBusinessData(@PathVariable String id) {
        return databaseRepository.getBusinessData(id);
    }

    /*
     * Sends a new BusinessData to the database with several pieces of information.
     */
    @PostMapping(path="/addBusinessData")
    public String addBusinessData(@RequestBody BusinessData businessData) {
        return databaseRepository.addBusinessData(businessData.getId(), businessData.isClaimed(),
                businessData.getUser(), businessData.getBusinessResponse(), businessData.getDateTime());
    }

    /*
     * Updates a BusinessData stored in the database with several pieces of information.
     */
    @PutMapping(path="/updateBusinessData")
    public String updateBusinessData(@RequestBody BusinessData businessData) {
        return databaseRepository.updateBusinessData(businessData.getId(), businessData.isClaimed(),
                businessData.getUser(), businessData.getBusinessResponse(), businessData.getDateTime());
    }

    /*
     * Deletes a particular BusinessData from the database.
     */
    @DeleteMapping("/removeBusinessData")
    public String removeBusinessData(@RequestBody BusinessData businessData) {
        return databaseRepository.removeBusinessData(businessData.getId());
    }

}