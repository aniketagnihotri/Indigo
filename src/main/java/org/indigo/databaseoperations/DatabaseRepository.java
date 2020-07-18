package org.indigo.databaseoperations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Objects;

/*
 * Repository for BusinessReviews and BusinessData, ordered respectively.
 */
@Repository("mysql")
public class DatabaseRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    final String stockResponse = "This business has pledged to make its customers its top priority during and after COVID-19.";

    /*
     * Beginning of BusinessReview repository.
     */

    /*
     * Class for holding a particular RowMapper<> configuration; it is intended to reduce redundancy.
     */
    private static class BusinessReviewRowMapper implements RowMapper<BusinessReview> {
        @Override
        public BusinessReview mapRow(ResultSet resultSet, int i) throws SQLException {
            BusinessReview businessReview = new BusinessReview();
            businessReview.setId(resultSet.getString("id"));
            businessReview.setUser(resultSet.getString("user"));
            businessReview.setRating(resultSet.getDouble("rating"));
            businessReview.setReview(resultSet.getString("review"));
            businessReview.setDateTime(resultSet.getString("dateTime"));
            return businessReview;
        }
    }

    /*
     * Sends a GET request to the database for all BusinessReviews for a particular Business and organizes them in a List.
     */
    public List getBusinessReviews(String id) {
        final String sql = "SELECT id, user, rating, review, dateTime FROM business_reviews WHERE id = ?";
        List<BusinessReview> businessReviewsList = jdbcTemplate.query(sql, new BusinessReviewRowMapper(), id);
        return businessReviewsList;
    }

    /*
     * Sends a POST request to the database to add a BusinessReview for a particular Business and returns true if successful.
     */
    public String addBusinessReview(String id, String user, double rating, String review, String dateTime) {

        List<BusinessData> businessData = getBusinessData(id);
        List<Object[]> businessRating = getIndigoBusinessStats(id);
        double totalRating = (double) businessRating.get(0)[2];
        double totalReviews = businessData.get(0).getNumReviews() + 1;
        totalRating *= businessData.get(0).getNumReviews();
        totalRating += rating;
        totalRating /= (totalReviews);
        updateBusinessRatingAndNumReviews(id, (int) totalReviews, totalRating);

        final String sql = "INSERT INTO business_reviews (id, user, rating, review, dateTime) VALUES (?, ?, ?, ?, ?)";
        int dbReturn = jdbcTemplate.update(sql, new Object[] {id, user, rating, review, dateTime});
        if (dbReturn >= 1) {
            return Boolean.TRUE.toString();
        } else {
            return Boolean.FALSE.toString();
        }

    }

    /*
     * Sends a PUT request to the database to update a BusinessReview for a particular Business and returns true if successful.
     */
    public String updateBusinessReview(String id, String user, double rating, String review, String dateTime) {
        final String sql = "UPDATE business_reviews SET rating = ?, review = ?, dateTime = ? WHERE id = ? && user = ?";
        int dbReturn = jdbcTemplate.update(sql, new Object[] {rating, review, dateTime, id, user});
        if (dbReturn >= 1) {
            return Boolean.TRUE.toString();
        } else {
            return Boolean.FALSE.toString();
        }
    }

    /*
     * Sends a DELETE request to the database to delete a BusinessReview for a particular Business and returns true if successful.
     */
    public String removeBusinessReview(String id, String user, String review) {
        final String sql = "DELETE FROM business_reviews WHERE (id = ? AND user = ? AND review = ?)";
        int dbReturn = jdbcTemplate.update(sql, id, user, review);
        if (dbReturn >= 1) {
            return Boolean.TRUE.toString();
        } else {
            return Boolean.FALSE.toString();
        }
    }

    /*
     * Beginning of BusinessData repository.
     */

    /*
     * Class for holding a particular RowMapper<> configuration; it is intended to reduce redundancy.
     */
    private static class BusinessDataRowMapper implements RowMapper<BusinessData> {
        @Override
        public BusinessData mapRow(ResultSet resultSet, int i) throws SQLException {
            BusinessData businessData = new BusinessData();
            businessData.setId(resultSet.getString("id"));
            businessData.setSponsored(resultSet.getBoolean("sponsored"));
            businessData.setNumReviews(resultSet.getInt("numReviews"));
            businessData.setIndigoRating(resultSet.getDouble("indigoRating"));
            businessData.setClaimed(resultSet.getBoolean("claimed"));
            businessData.setUser(resultSet.getString("user"));
            businessData.setBusinessResponse(resultSet.getString("businessResponse"));
            businessData.setDateTime(resultSet.getString("dateTime"));
            return businessData;
        }
    }

    /*
     * Sends a GET request to the database for the BusinessData for a particular Business and organizes them in a List.
     */
    public List getBusinessData(String id) {
        final String sql = "SELECT id, sponsored, numReviews, indigoRating, claimed, user, businessResponse, dateTime FROM business_data WHERE id = ?";
        List<BusinessData> businessDataList = jdbcTemplate.query(sql, new DatabaseRepository.BusinessDataRowMapper(), id);
        if (businessDataList.size() == 0) {
            double rating = (Math.random() * (2)) + 3;
            addBusinessData(id, false, 0, rating, false, null, stockResponse, null);
        }
        return businessDataList;
    }

    /*
     * Sends a GET request to the database for the rating in the BusinessData for a particular Business and organizes it in a
     * singular-element List.
     */
    public List<Object[]> getIndigoBusinessStats(String id) {
        final String sql = "SELECT sponsored, numReviews, indigoRating FROM business_data WHERE id = ?";
        List<Object[]> businessRating = jdbcTemplate.query(sql, new RowMapper<Object[]>() {
            @Override
            public Object[] mapRow(ResultSet resultSet, int i) throws SQLException {
                Object[] values = new Object[3];
                values[0] = resultSet.getBoolean("sponsored");
                values[1] = resultSet.getInt("numReviews");
                values[2] = resultSet.getDouble("indigoRating");
                return values;
            }
        }, id);
        if (businessRating.size() == 0) {
            addBusinessData(id, false, 0, 0.0, false, null, stockResponse, null);
        }
        return businessRating;
    }

    /*
     * Sends a POST request to the database to add BusinessData for a particular Business and returns true if successful.
     */
    public String addBusinessData(String id, boolean sponsored, int numReviews, double indigoRating,
                                  boolean claimed, String user,
                                  String businessResponse, String dateTime) {
        final String sql = "INSERT INTO business_data (id, sponsored, numReviews, indigoRating, claimed," +
                " user, businessResponse, dateTime) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        int dbReturn = jdbcTemplate.update(sql, new Object[] {id, sponsored, numReviews,
                indigoRating, claimed, user, businessResponse, dateTime});
        if (dbReturn >= 1) {
            return Boolean.TRUE.toString();
        } else {
            return Boolean.FALSE.toString();
        }
    }

    /*
     * Sends a PUT request to the database to update the BusinessData for a particular Business and returns true if successful.
     */
    public String updateBusinessData(String id, boolean sponsored, int numReviews, double indigoRating,
                                     boolean claimed, String user, String businessResponse, String dateTime) {
        final String sql = "UPDATE business_data SET sponsored = ?, numReviews = ?, indigoRating = ?, " +
                "claimed = ?, user = ?, " +
                "businessResponse = ?, dateTime = ? WHERE id = ?";
        int dbReturn = jdbcTemplate.update(sql, new Object[] {sponsored, numReviews, indigoRating,
                claimed, user, businessResponse, dateTime, id});
        if (dbReturn >= 1) {
            return Boolean.TRUE.toString();
        } else {
            return Boolean.FALSE.toString();
        }
    }

    /*
     * Sends a PUT request to the database to update the numReviews in the
     * BusinessData for a particular Business and returns true if successful.
     */
    public String updateBusinessRatingAndNumReviews(String id, int numReviews, double indigoRating) {
        final String sql = "UPDATE business_data SET numReviews = ?, indigoRating = ? WHERE id = ?";
        int dbReturn = jdbcTemplate.update(sql, new Object[] {numReviews, indigoRating, id});
        if (dbReturn >= 1) {
            return Boolean.TRUE.toString();
        } else {
            return Boolean.FALSE.toString();
        }
    }

    /*
     * Sends a DELETE request to the database to delete a BusinessData for a particular Business and returns true if successful.
     */
    public String removeBusinessData(String id) {
        final String sql = "DELETE FROM business_data WHERE (id = ?)";
        int dbReturn = jdbcTemplate.update(sql, id);
        if (dbReturn >= 1) {
            return Boolean.TRUE.toString();
        } else {
            return Boolean.FALSE.toString();
        }
    }


}