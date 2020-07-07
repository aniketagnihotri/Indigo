package org.crowdsourcingcovid.databaseoperations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Collection;
import java.util.List;

@Repository("mysql")
public class BusinessReviewsRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private static class BusinessReviewRowMapper implements RowMapper<BusinessReview> {
        @Override
        public BusinessReview mapRow(ResultSet resultSet, int i) throws SQLException {
            BusinessReview businessReview = new BusinessReview();
            businessReview.setId(resultSet.getString("id"));
            businessReview.setReview(resultSet.getString("review"));
            return businessReview;
        }
    }

    public List getBusinessReviewsByID(String id) {
        final String sql = "SELECT id, review FROM business_reviews where id = ?";
        List<BusinessReview> businessReviewsList = jdbcTemplate.query(sql, new BusinessReviewRowMapper(), id);
        System.out.println(businessReviewsList.size());
        return businessReviewsList;
    }

    public boolean addBusinessReviewByID(String id, String review) {
        final String sql = "INSERT INTO business_reviews (id, review) VALUES (?, ?)";
        try {
            jdbcTemplate.update(sql, new Object[]{id, review});
            return true;
        } catch (Exception e) {
            return false;
        }
    }

}