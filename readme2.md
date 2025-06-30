# Low-Level Design (LLD) - E-Commerce Platform

This document provides a detailed breakdown of the internal architecture and implementation of the mobile client and backend API, reflecting the current project structure.

## 1. Backend Design (`backend/`)

The backend is a standard Maven project. The core logic resides in `src/main/java/` and configuration in `src/main/resources/`.

### 1.1. Data Models (JPA Entities)
*Location: `src/main/java/com/ecommerce/backend/model/`*

-   **`User.java`**: Stores user information (`id`, `name`, `email`, `passwordHash`, `role`).
-   **`Category.java`**: Defines product categories (`id`, `name`, `description`). Has a `@OneToMany` relationship with `Product`.
-   **`Product.java`**: Represents an item for sale (`id`, `name`, `price`, `imageUrl`, `stockQuantity`). Has a `@ManyToOne` relationship with `Category`.
-   **`Order.java`**: Represents a customer's order (`id`, `user`, `orderDate`, `totalAmount`, structured shipping fields). Has a `@OneToMany` relationship with `OrderItem`.
-   **`OrderItem.java`**: A line item in an order, linking a `Product` to an `Order` (`id`, `order`, `product`, `quantity`, `priceAtPurchase`).

### 1.2. API Endpoints (REST Controllers)
*Location: `src/main/java/com/ecommerce/backend/controller/`*

#### `AuthController.java` (`/api/auth`)
-   `POST /register`: Creates a new user.
-   `POST /login`: Authenticates a user and returns a JWT.

#### `ProductController.java` (`/api/products`)
-   `GET /`: Fetches all products.
-   `GET /{id}`: Fetches a single product by ID.
-   `GET /category/{categoryName}`: Fetches products by category.
-   `GET /search`: Searches for products by name via a `query` parameter.

#### `OrderController.java` (`/api/orders`)
-   `POST /`: (Authenticated) Places a new order. Expects an `OrderRequest` DTO with shipping address and cart items.
-   `GET /my-orders`: (Authenticated) Fetches the order history for the logged-in user.

#### `AdminController.java` (`/api/admin`)
*(All endpoints require ADMIN role)*
-   `POST /products`: Creates a new product.
-   `PUT /products/{id}`: Updates an existing product.
-   `DELETE /products/{id}`: Deletes a product.
-   `GET /orders`: Fetches all orders from all users.

### 1.3. Configuration & Security
*Location: `src/main/java/com/ecommerce/backend/config/`*

-   **`SecurityConfig.java`**: Defines endpoint permissions, configures the security filter chain, and sets up the `AuthenticationProvider`.
-   **`JwtAuthFilter.java`**: Intercepts every request to validate the JWT and set the security context.
-   **`DataInitializer.java`**: A `CommandLineRunner` that seeds the database with initial categories, products, and an admin user on startup if the tables are empty.
-   **`application.properties`**: Contains database connection details, server port, and other Spring Boot configurations.

---

## 2. Frontend Design (`mobile/`)

The frontend is an Expo-managed React Native application.

### 2.1. Folder Structure & Routing
*Location: `app/`*

The app uses Expo's file-based router.

-   **`app/_layout.tsx`**: The root layout. It wraps the entire app in global providers (`AuthProvider`, `CartProvider`, `CheckoutProvider`) and contains the top-level `Stack` navigator.
-   **`app/(tabs)/`**: A route group for the main tab bar navigator shown to authenticated users.
    -   `_layout.tsx`: Defines the tab bar structure (Home, Profile, etc.) and handles conditional rendering of the Admin tab.
    -   `index.tsx`: The home screen.
    -   `profile.tsx`: The user profile screen.
-   **`app/login.tsx` & `app/signup.tsx`**: Standalone screens for user authentication.
-   **`app/products/[productId].tsx`**: Dynamic route for displaying product details.
-   **`app/cart.tsx`**: The shopping cart screen.
-   **`app/checkout/`**: A route group for the multi-step checkout process.
    -   `_layout.tsx`: Defines the stack navigator for the checkout flow.
    -   `shipping.tsx`: Screen to collect the user's shipping address.
    -   `payment.tsx`: Screen to collect payment details.

### 2.2. Global State Management (React Context)
*Location: `app/lib/`*

-   **`AuthContext.tsx`**:
    -   **State:** `user`, `token`, `isAuthenticated`.
    -   **Functions:** `login(email, password)`, `logout()`.
    -   **Logic:** On login, it fetches a JWT from the backend, stores it in `AsyncStorage`, sets the user state, and updates the `apiClient` with the new token.

-   **`CartContext.tsx`**:
    -   **State:** `items` (an array of `CartItem`).
    -   **Functions:** `addToCart(product)`, `removeFromCart(productId)`, `updateQuantity(productId, amount)`.
    -   **Logic:** Manages the shopping cart. The cart's state is persisted to `AsyncStorage` to survive app restarts.

-   **`CheckoutContext.tsx`**:
    -   **State:** `shippingAddress`.
    -   **Functions:** `saveShippingAddress(address)`.
    -   **Logic:** Holds the shipping address between the `shipping` and `payment` steps of the checkout flow.

### 2.3. API Communication
*Location: `app/lib/api/apiClient.ts`*

-   A pre-configured Axios instance that sets the `baseURL` to the backend server's address.
-   It uses an interceptor to automatically add the `Authorization: Bearer <token>` header to every outgoing request if a token exists, simplifying API calls throughout the