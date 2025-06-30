# E-Commerce Platform

Shop app built with Expo (React Native) and Springboot, along with SQL database.

## High-Level Architecture

Client server architecture, with clear seperation of concerns.

```
+--------------------------------+      +--------------------------------+      +---------------------+
|                                |      |                                |      |                     |
|  Mobile Client (React Native)  | <=>  |   Backend API (Spring Boot)    | <=>  |  Database (RDBMS)   |
|                                |      |                                |      |                     |
+--------------------------------+      +--------------------------------+      +---------------------+
           (HTTPS/REST)                         (JPA/JDBC)
```

### Core Components

1.  **Frontend**
    *   A cross-platform mobile application built with React Native and Expo.
    *   Renders the user interface and client side states, via REST API calls.
2.  **Backend**
    *   A robust RESTful API built with Java and the Spring Boot framework.
    *   Handles all logic, manages data persistence, login/signin users with JWT.
3.  **Database**
    *   A relational database MySQL used.
    *   Persistently stores all application data, including users, products, categories, and orders.

## Features

-   **User Authentication:** Secure user registration and login using JWT.
-   **Product Catalog:** View products by category or browse all available items.

## Technology Stack

### Backend
-   **Java 17**
-   **Spring Boot 3**
-   **Spring Security** (for JWT Authentication & Authorization)
-   **Spring Data JPA** (for database interaction)
-   **Maven** (for dependency management)

### Frontend
-   **React Native**
-   **Expo**
-   **TypeScript**
-   **Expo Router** (for file-based navigation)
-   **Axios** (for API communication)



### Prerequisites
-   Java JDK 17 or later
-   Node.js and npm
-   A configured relational database

### 1. Running the Backend API

1.  Navigate to the backend directory:
    ```bash
    cd backend
    ```
2.  Update the `src/main/resources/application.properties` file with your database credentials.
3.  Run the application using the Maven wrapper:
    ```bash
    ./mvnw spring-boot:run
    ```
    The API will be available at `http://localhost:8080`.

### 2. Running the Mobile Client

1.  Navigate to the mobile directory:
    ```bash
    cd mobile
    ```
2.  Install the required dependencies:
    ```bash
    npm install
    ```
3.  Start the Expo development server:
    ```bash
    npx expo start
    ```
