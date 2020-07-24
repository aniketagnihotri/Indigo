# [Indigo](https://devpost.com/software/indigo-7rw30z)

### Purpose
Indigo is a go-to for all things COVID-19, intended to incentivize safe tourism and travel to and in Indianapolis. The goal of Indigo is to make changes and other information more accessible to the public via crowdsourced business ratings and business-specific data. In a time of uncertainty, we feel that this is the best way to educate our users as Indiana slowly reopens.

### Deployment
Visit the deployment of indigo [here](https://indigo04.herokuapp.com). The process will re-compile and execute if the dyno is asleep, which takes approx. three minutes.

### Note on Heroku
Given the limitations of the free Heroku dyno that Indigo is currently hosted on, you may encounter a white page after several searches. Please note that this white page is temporary, as it is due to a shortage of RAM on the dyno; the shortage is resolved automatically via Garbage Collection and other memory-saving processes within a few minutes. If you run into other issues, contact aniketagnihotri on GitHub or via email.

### Compilation
To compile Indigo and run it locally, Java must be installed on your machine. Run 
```java
mvn clean verify
```
to compile your code. Then, navigate to your 'target' folder and run 
```java
java -jar Indigo-1.0-SNAPSHOT.jar
```
to execute it on port 8080. Finally, query localhost:8080 to connect.

Note: IntelliJ's Maven Plugin will perform these functions via the Maven tab.

### Frameworks and Resources
The frameworks and tools we used in our solution were Spring Boot, ReactJS, SQL, AWS RDS, Google’s Firebase, Maven, Yelp’s Fusion API, and Heroku. 
######Database
We created an AWS RDS Database instance to store the reviews and business-specific data that users input. We used SQL for the creation of the tables in our database and to specify data search requests.
######Back-end
We used Spring Boot to create a REST API to query, receive, and push data from our database and Yelp’s Fusions API to our front-end. Another helpful tool that we used for the back-end was Apache Maven, which allowed us to specify dependencies for our project, making it as simple as a click of a button to export, compile, and deploy our code to our deployment service, Heroku. 
######Front-end
We used ReactJS, which serves the UI to the client by fetching data from our REST API and displaying it. We also used Google’s Firebase along with ReactJS in order to set up a user authentication system for Indigo. 

##### Created by Aniket Agnihotri, Jack Deputy, Halley Martin, Cage Thompson, and Angela Yang.
