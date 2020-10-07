# [Indigo](https://devpost.com/software/indigo-7rw30z)

### Purpose
Indigo is a go-to for all things COVID-19, intended to incentivize safe tourism and travel to and in Indianapolis. The goal of Indigo is to make changes and other information more accessible to the public via crowdsourced business ratings and business-specific data. In a time of uncertainty, we feel that this is the best way to educate our users as Indiana slowly reopens.

### Deployment
Visit the deployment of indigo [here](https://indigo04.herokuapp.com). The process will re-compile and execute if the dyno is asleep, which takes approx. three minutes.

### Note on Heroku
Given the limitations of the free Heroku dyno that Indigo is currently hosted on, you may encounter slow searches or a white page after several searches. Firstly, these slow searches are a result of the static IP that has been assigned to our Heroku dyno, in order to set up a connection with our database. Additionally, please note that the aforementioned white page is temporary, as it is due to a shortage of memory on the dyno; this shortage is resolved automatically via Java Garbage Collection and other memory-saving processes within a few minutes. If you run into other issues, contact aniketagnihotri on GitHub or via email.

### Compilation
To compile Indigo and run it locally, Java and Maven must be installed on your machine. Using Maven, run 
```java
mvn clean verify
```
to compile your code. Then, navigate to your 'target' folder and run 
```java
java -jar Indigo-1.0-SNAPSHOT.jar
```
to execute the jar file on port 8080. Finally, query localhost:8080 to connect locally.

Note: IntelliJ's Maven Plugin is capable of performing these functions via the Maven tab.

### Frameworks and Resources
Our stack:  ReactJS, Maven, Spring Boot, SQL.
Additional resources: AWS RDS, Google Firebase, Yelp’s Fusion API, and Heroku. 
##### Database
An AWS RDS Database instance stores the reviews and business-specific data that users input. We used SQL for the creation of the tables in our database and to specify data search requests.
##### Back-end
We used Spring Boot to create a REST API to query, receive, and push data from our database and Yelp’s Fusions API to our front-end. Another helpful tool that we used for the back-end was Apache Maven, which allowed us to specify dependencies for our project, making it as simple as a click of a button to export, compile, and deploy our code to our deployment service, Heroku. 
##### Front-end
We used ReactJS, which serves the UI to the client by fetching data from our REST API and displaying it. We also used Google’s Firebase along with ReactJS in order to set up a user authentication system for Indigo. 

##### Created by Aniket Agnihotri, Jack Deputy, Halley Martin, Cage Thompson, and Angela Yang.
