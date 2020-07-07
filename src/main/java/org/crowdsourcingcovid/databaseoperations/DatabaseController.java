package org.crowdsourcingcovid.databaseoperations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@Controller
@RequestMapping("/api/db")
public class DatabaseController {

    @Autowired
    private BusinessReviewsRepository businessReviewsRepository;

    @RequestMapping(path="/getBusiness/{id}")
    public @ResponseBody Collection<BusinessReview> getReviewsByBusiness(@PathVariable String id) {
        return businessReviewsRepository.getBusinessReviewsByID(id);
    }

    @RequestMapping(path="/addBusinessReview/{id}/{review}")
    public @ResponseBody void getReviewsByBusiness(@PathVariable String id, @PathVariable String review) {
        businessReviewsRepository.addBusinessReviewByID(id, review);
    }

}