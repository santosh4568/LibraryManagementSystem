package lms.spring.LibraryManagementSystem.Configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Arrays;

@Configuration
public class CorsConfiguration {

    @Bean
    public CorsFilter corsFilter() {
        org.springframework.web.cors.CorsConfiguration corsConfiguration = new org.springframework.web.cors.CorsConfiguration();

        // Allow the frontend's origin
        corsConfiguration.setAllowedOrigins(Arrays.asList("http://localhost:5173", "http://localhost:3000", "http://localhost:5174"));
    
        // Specify allowed HTTP methods
        corsConfiguration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
    
        // Allow all headers
        corsConfiguration.setAllowedHeaders(Arrays.asList("*"));
    
        // Allow credentials
        corsConfiguration.setAllowCredentials(true);
    
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", corsConfiguration);
    
        return new CorsFilter(source);
    }
}
