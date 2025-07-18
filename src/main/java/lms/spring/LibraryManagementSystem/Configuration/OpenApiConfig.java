package lms.spring.LibraryManagementSystem.Configuration;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Library Management System API")
                        .description("API documentation for the Library Management System")
                        .version("1.0.0")
                        .contact(new Contact()
                                .name("Support Team")
                                .email("sk5580655@gmail.com")
                                .url("https://library.com"))
                        .license(new License()
                                .name("Apache 2.0")
                                .url("http://www.apache.org/licenses/LICENSE-2.0.html")));
    }
}