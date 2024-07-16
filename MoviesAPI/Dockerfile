FROM openjdk:17-jdk-slim

WORKDIR /app

COPY . /app

RUN chmod +x mvnw

RUN ./mvnw clean package -DskipTests

EXPOSE 8081  

CMD ["java", "-jar", "target/JavaMovieAPI-0.0.1-SNAPSHOT.jar"]

