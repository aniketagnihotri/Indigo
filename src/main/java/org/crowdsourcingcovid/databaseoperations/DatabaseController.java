package org.crowdsourcingcovid.databaseoperations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class DatabaseController {
    @Autowired
    private BusinessReviewsRepository businessReviewsRepository;

    @PostMapping(path="/add") // Map ONLY POST Requests
    public @ResponseBody String addNewBusiness (@RequestParam String name
            , @RequestParam String email) {

        BusinessReviews newReview = new BusinessReviews();
        newReview.setId("clientAdd");
        newReview.setReview("added from REST API client");
        return "Saved";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<BusinessReviews> getAllUsers() {
        return businessReviewsRepository.findAll();
    }
}