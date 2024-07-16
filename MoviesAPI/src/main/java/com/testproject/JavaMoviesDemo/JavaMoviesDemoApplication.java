package com.testproject.JavaMoviesDemo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import me.paulschwarz.springdotenv.DotenvPropertySource;

@SpringBootApplication
@RestController
public class JavaMoviesDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(JavaMoviesDemoApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**")
						.allowedOrigins("http://ec2-54-242-49-73.compute-1.amazonaws.com:3000")
						.allowedMethods("*")
						.allowedHeaders("*")
						.allowCredentials(true).maxAge(3600);
			}
		};
	}
}
