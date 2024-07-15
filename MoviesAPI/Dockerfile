FROM openjdk:17-jdk-slim

WORKDIR /app

COPY . /app

RUN ./mvnw clean install

EXPOSE 8080

CMD ["./mvnw", "spring-boot:run"]
