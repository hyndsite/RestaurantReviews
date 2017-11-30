# Restaurant Reviews

## Overview


The Restaurant Reviews API provides the ability to:
- Get a list of restaurants by city
- Get a list of all restaurants (bonus)
- Post a restaurant that is not in the database
- Post a review for a restaurant
- Get of a list of reviews by user
- Get all reviews (bonus)
- Delete a review

In additional this API:
- Is security focused
- Architected for a larger ecosystem / application
- Microservices / SOA ready with complete Containerization
-- API Container
-- Database container
-- Reverse Proxy container

## Instructions

##### Requirements
1. Docker
2. (OSX / Linux) OS

##### Running API
1. Root directory: run the following terminal docker command
```sh
docker-compose up
```
*This will:*
- ***pull down the API, nginx proxy and MongoDB docker images. Create respective containers and run the API***
- ***Seed database with 50 Restaruants, users, and hundreds of reviews***


## API Consumption:
**/GET Restaurants filter: city**
http://localhost:7000/api/restaurants

| API | Route | JSON Example|
| ------ | ------ | ------ | 
| /GET Restaurants filter: city | http://localhost:7000/api/restaurants?city=name | 
| /GET Restaurants | http://localhost:7000/api/restaurants |
| /POST Restaurant | http://localhost:7000/api/restaurants  | { <BR> "name": "New Test Restaurant",  <BR> "address": {  <BR> &nbsp;&nbsp;&nbsp;"line1": "126 Cherry Lane",  <BR> &nbsp;&nbsp;&nbsp;"line2": "additional line",  <BR>  &nbsp;&nbsp;&nbsp;"city": "Denver",  <BR> &nbsp;&nbsp;&nbsp; "state": "Colorado",  <BR> &nbsp;&nbsp;&nbsp;"zipCode": "13930" } <BR> } |
| /GET Reviews | http://localhost:7000/api/reviews |
| /POST Restaurant Review | http://localhost:7000/api/restaurants/{restaurant_id}/reviews | {<BR> "reviewer": "peter@parker.com",<BR>"review": {<BR> &nbsp;&nbsp;&nbsp;"location": "3",<BR> &nbsp;&nbsp;&nbsp;"ambiance": "2",<BR> &nbsp;&nbsp;&nbsp;"foodPresentation": "4",<BR> &nbsp;&nbsp;&nbsp;"foodQuality": "4",  <BR> &nbsp;&nbsp;&nbsp;"foodTaste": "5",<BR> &nbsp;&nbsp;&nbsp;"hospitality": "3",<BR> &nbsp;&nbsp;&nbsp;"costAccuracy": "2"}} |
| /GET Reviews by Restaurant | http://localhost:7000/api/restaurants/{restaurant_id}/reviews
| /GET Reviews filter: user | http://localhost:7000/api/reviews?reviewer=*email*> | |
| /DELETE Review  | http://localhost:7000/api/restaurants/{restaurant_id}/reviews/{review_id} |


## Security

Disclaimer: *due to limitations to the requirements, authentication/authorization is limited.  However, all plumbing for proper user management is in place including:
- Proper user credential management
- Proper user session/jwt management


##### Security Features included

**Database**
- Principle of least privilege with separation of Mongo Users/roles for performing persistence vs. retrieval

**API**
- Proper Function Access control

**Data**
- Proper unstrusted user data handling through whitelist validation


## Improvements

1. Additional unit tests to accompany existing tests
2. Provide Open Connect ID Provider for trusted client authorization
3. Minor changes to support Windows environment 
4. PenTesting 

## Additional Notes

This API exercises the ability to stand up a REST based API within a large application / microservices / SOA ecosystem. while  emphasizing security as a first citizen. 

