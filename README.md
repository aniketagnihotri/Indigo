# Indigo

### Purpose
Indigo is a go-to for all things COVID-19, intended to incentivize safe tourism and travel to and in Indianapolis. The goal of Indigo is to make changes and other information more accessible to the public via crowdsourced business ratings and business-specific data. In a time of uncertainty, we feel that this is the best way to educate our users as Indiana slowly reopens.

### Deployment and Compilation
Visit the deployment of indigo at https://indigo04.herokuapp.com. The process will re-compile and execute if the dyno is asleep, which takes approx. three minutes.

To compile Indigo and run it on your device, Java must be installed on your machine. Running 
```java
mvn clean verify
```
In addition, you will need a Yelp Fusion API Bearer Token (place in src/main/java/org.indigo.yelpoperations/YelpService.java).


### Note on Heroku
Given the limitations of the free Heroku dyno that Indigo is currently hosted on, you may encounter a white page after several searches. Please note that this white page is temporary, as it is due to a shortage of RAM on the dyno; the shortage is resolved automatically via Garbage Collection and other memory-saving processes within five minutes.

### Frameworks and Resources

##### Created by Aniket Agnihotri, Jack Deputy, Halley Martin, Cage Thompson, and Angela Yang.
