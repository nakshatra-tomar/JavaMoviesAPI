FROM openjdk:17-jdk-slim

WORKDIR /app

COPY . /app

# Grant execute permission to mvnw
RUN chmod +x mvnw

RUN ./mvnw clean install

EXPOSE 8080

CMD ["java", "-jar", "target/your-app.jar"]
