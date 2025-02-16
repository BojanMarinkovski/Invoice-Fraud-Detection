# Invoice Fraud Detection - Setup Guide

## Database Setup

### Prerequisites
- Install **MySQL** on your device.

### Steps
1. Create a schema named **`invoice_fraud_detection`**.
2. Navigate to `invoice-fraud-detection-be/DDL` and execute the following SQL scripts **in order**:
   - `2025-02-16-001_create_invoice_tbl.sql`
   - `2025-02-16-002_add_invoice_data.sql`

---

## Backend Setup

### Prerequisites
- Install **Java 17** on your machine.
- Install and use an **IDE** that supports Java, Spring, and Maven projects (e.g., **IntelliJ** (preferred) or Eclipse).

### Steps
1. Import the project as a **Maven project**.
2. Download Maven sources to get the required libraries on your machine.
3. Execute the following Maven goals:
   ```sh
   mvn clean install
   ```
   (Alternatively, use the **clean and install** goals from the IDE.)
4. Navigate to `src/main/resources/application.properties` and update the following properties to match your database configuration:
   ```properties
   spring.datasource.url=<your_database_url>
   spring.datasource.username=<your_database_username>
   spring.datasource.password=<your_database_password>
   ```
5. Start the project from the IDE.
   - If the IDE does not automatically detect the application's entry point, manually start it from the class **`InvoiceFraudDetectionBeApplication`**.

---

## Frontend Setup

### Prerequisites
- Install **Node.js 22.14.0** (includes **npm 10.9.2**).

### Steps
1. Navigate to the frontend folder:
   ```sh
   cd invoice-fraud-detection-ui
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend application:
   ```sh
   npm run start
   ```
