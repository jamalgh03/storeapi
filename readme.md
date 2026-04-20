# Storefront Backend API

This is a RESTful API for an online storefront, built with Node.js, TypeScript, and PostgreSQL.

## 1. Technologies Used
- **Node.js** & **Express**
- **TypeScript**
- **PostgreSQL** (Database)
- **Jasmine** (Testing framework)
- **JWT** (Authentication)
- **Bcrypt** (Password hashing)
- **db-migrate** (Database migrations)

## 2. Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Docker (optional, if using the provided docker-compose)
- PostgreSQL

### Installation
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   Database Setup
Create two databases in PostgreSQL:

full_storefront_dev

full_storefront_test

Configure your environment variables in a .env file (see Environment Variables section).

Run migrations to create tables:

Bash
db-migrate up
Environment Variables
Create a .env file in the root directory and add the following:

مقتطف الرمز
POSTGRES_HOST=127.0.0.1
POSTGRES_DB=full_storefront_dev
POSTGRES_TEST_DB=full_storefront_test
POSTGRES_USER=[YOUR_POSTGRES_USER]
POSTGRES_PASSWORD=[YOUR_POSTGRES_PASSWORD]
ENV=dev
BCRYPT_PASSWORD=[YOUR_SECRET_PEPPER]
SALT_ROUNDS=10
TOKEN_SECRET=[YOUR_JWT_SECRET]
3. Running the Project
Development Mode:

Bash
npm run watch
Run Tests:

Bash
npm run test
4. API Ports
Backend API: http://localhost:3000

PostgreSQL Database: 5432

5. Project Structure
src/models/: Database schemas and CRUD logic.

src/handlers/: API route logic and controllers.

src/tests/: Unit and endpoint tests.