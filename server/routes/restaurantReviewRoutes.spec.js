require("babel-polyfill");
process.env.NODE_ENV = "test";

let getRestaurantModelQuery = require("../data_access/modelFactory").getRestaurantModelQuery;
let getRestaurantModelModify = require("../data_access/modelFactory").getRestaurantModelModify;
let getRestaurantReviewModelQuery = require("../data_access/modelFactory").getRestaurantReviewsModelQuery;
let getRestaurantReviewModelModify = require("../data_access/modelFactory").getRestaurantReviewModelModify;

import {describe, it, before, beforeEach}           from "mocha";
import {expect, assert, should} from "chai";

let request = require("supertest");
let app = require("../app");
let RestaurantQuery;
let RestaurantModify;
let RestaurantReviewQuery;
let RestaurantReviewModify;

let restaurant;

describe("Restaurants",  () => {

    before((done) => {
        getRestaurantModelQuery()
            .then(model => {
                RestaurantQuery = model;
            });

        getRestaurantModelModify()
            .then(model => {
                RestaurantModify = model;
            });

        getRestaurantReviewModelQuery()
            .then(model => {
                RestaurantReviewQuery = model;
                done();
            });

        getRestaurantReviewModelModify
            .then(model => {
                RestaurantReviewModify = model;
                done();
            });
    });

    beforeEach((done) => {
        getRestaurantModelQuery.aggregate({$sample: {size: 1}})
            .exec()
            .then(results => {
                restaurant = results.pop();
                done();
            });
    });
    /*
     * Test the /GET restaurant review route
     */
    describe("/GET restaurant reviews by restaurant", () => {
        it("it should GET all the reviews", () => {
            return request(app)
                .get(`/api/restaurants/${restaurant._id}/reviews`)
                .then(response => {
                    expect(response.statusCode).to.eq(200);
                    expect(response.body.length).to.be.above(0);
                });
        });
    });
});