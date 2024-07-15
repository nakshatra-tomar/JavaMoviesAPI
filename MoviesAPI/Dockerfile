FROM openjdk:17-jdk-slim

WORKDIR /app

COPY . /app


RUN chmod +x mvnw

RUN ./mvnw clean install

EXPOSE 8080

CMD ["java", "-jar", "JavaMovieAPI-0.0.1-SNAPSHOT.jar"]
