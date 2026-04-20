# Storefront Backend Project Requirements

## 1. Database Schema

### Users Table
- `id`: Serial (Primary Key)
- `firstName`: Varchar(100)
- `lastName`: Varchar(100)
- `password`: Varchar (Hashed using bcrypt)

### Products Table
- `id`: Serial (Primary Key)
- `name`: Varchar(255)
- `price`: Integer
- `category`: Varchar(100) (Optional)

### Orders Table
- `id`: Serial (Primary Key)
- `user_id`: Integer (Foreign Key referencing Users.id)
- `status`: Varchar(20) (Active or Complete)

### Order_Products Table (Join Table for many-to-many)
- `id`: Serial (Primary Key)
- `order_id`: Integer (Foreign Key referencing Orders.id)
- `product_id`: Integer (Foreign Key referencing Products.id)
- `quantity`: Integer

---

## 2. API Endpoints

### Products
- `GET /products`: Index [No Auth Required]
- `GET /products/:id`: Show [No Auth Required]
- `POST /products`: Create [Requires Token]
- `GET /products/popular`: Top 5 most popular products [Extra]

### Users
- `GET /users`: Index [Requires Token]
- `GET /users/:id`: Show [Requires Token]
- `POST /users`: Create (Sign up) [No Auth Required]
- `GET /users/:id/recent-orders`: 5 most recent purchases for a user [Extra]

### Orders
- `POST /orders`: Create [Requires Token]
- `GET /orders/user/:id`: Current Order by user (Active orders) [Requires Token]

---

## 3. Technical Constraints
- **Language**: TypeScript
- **Database**: PostgreSQL
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: Bcrypt with Salt
- **Testing**: Jasmine for Unit and Endpoint testing