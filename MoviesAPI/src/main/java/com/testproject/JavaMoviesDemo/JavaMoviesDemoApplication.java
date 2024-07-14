package com.testproject.JavaMoviesDemo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import me.paulschwarz.springdotenv.DotenvPropertySource;


@SpringBootApplication
@RestController
public class JavaMoviesDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(JavaMoviesDemoApplication.class, args);
	}


}


