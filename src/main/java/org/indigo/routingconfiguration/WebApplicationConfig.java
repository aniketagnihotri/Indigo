package org.indigo.routingconfiguration;

import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.boot.web.servlet.ErrorPage;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/*
 * This class adds a routing configuration to avoid routing conflicts
 * between Spring Boot and React.
 */
@Configuration
public class WebApplicationConfig extends WebMvcConfigurerAdapter {

    /*
     * addViewControllers() forwards any pages that redirect to "/notFound" to index.html, which
     * manages the routing for React.
     *
     * @param registry  assists with the automation of controllers.
     */
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/notFound").setViewName("forward:/index.html");
    }

    /*
     * containerCustomizer() defines "/notFound" as an error page, which is redirected to.
     *
     * @return EmbeddedServletContainerCustomizer   customizes the servlet container.
     */
    @Bean
    public EmbeddedServletContainerCustomizer containerCustomizer() {
        return container -> {
            container.addErrorPages(new ErrorPage(HttpStatus.NOT_FOUND,
                    "/notFound"));
        };
    }

}
