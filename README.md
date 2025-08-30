# postgresql-TEST

A simple backend API template using **TypeScript**, **Node.js**, **PostgreSQL**, and the [`pg`](https://www.npmjs.com/package/pg) package for database connectivity.

## Features

- Written in TypeScript for type safety
- RESTful API structure
- Easy integration with PostgreSQL via `pg` package
- Simple project structure for quick setup and extension

## Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [PostgreSQL](https://www.postgresql.org/) (v12+ recommended)
- [npm](https://www.npmjs.com/)

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/VarshithSoma/postgresql-TEST.git
   cd postgresql-TEST
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Configure Environment Variables:**

   Create a `.env` file in the project root and fill in your PostgreSQL connection details:

   ```
   POSTGRESQL_URL=URL
   ```

## Database Integration

- Uses the [`pg`](https://node-postgres.com/) package for PostgreSQL.
- Connection settings managed with environment variables.

---
