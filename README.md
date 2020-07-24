# Indigo

### Purpose
Indigo is a go-to for all things COVID-19, intended to incentivize safe tourism and travel to and in Indianapolis. The goal of Indigo is to make changes and other information more accessible to the public via crowdsourced business ratings and business-specific data. In a time of uncertainty, we feel that this is the best way to educate our users as Indiana slowly reopens.

### Deployment
Visit the deployment of indigo at https://indigo04.herokuapp.com. The process will re-compile and execute if the dyno is asleep, which takes approx. three minutes.

### Compilation
To compile Indigo and run it locally, Java must be installed on your machine. Run 
```java
mvn clean verify
```
to compile your code. Then navigate to your 'target' folder and run 
```java
java -jar Indigo-1.0-SNAPSHOT.jar
```
to execute it on port 8080. Finally, query localhost:8080 to connect.
IntelliJ's Maven Plugin will perform these functions via the Maven tab.

### Note on Heroku
Given the limitations of the free Heroku dyno that Indigo is currently hosted on, you may encounter a white page after several searches. Please note that this white page is temporary, as it is due to a shortage of RAM on the dyno; the shortage is resolved automatically via Garbage Collection and other memory-saving processes within five minutes.

### Frameworks and Resources

##### Created by Aniket Agnihotri, Jack Deputy, Halley Martin, Cage Thompson, and Angela Yang.
