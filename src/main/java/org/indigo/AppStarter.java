package org.indigo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
public class AppStarter {

    /*
     * Main method for the back-end. Begins execution.
     */
    public static void main(String[] args) {
        SpringApplication.run(AppStarter.class, args);
    }

}
