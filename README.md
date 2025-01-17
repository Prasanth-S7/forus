# FORUS - FOCUSED OPERATIONAL RESCUERS UNIFIED SYSTEM

FORUS is a comprehensive Disaster Management and Control project designed to:

- **Minimize Wait Times**: Reduce delays in taking action during disaster situations.
- **Identify Potential Disaster Areas**: Predict and pinpoint regions where disasters might occur.
- **Provide Detailed Reports**: Generate thorough reports for each disaster event.
- **Analyze Social Media**: Utilize social media tweets to identify and verify disaster occurrences.

This system integrates real-time data analysis and verification to enhance disaster response and management efforts.

## Requirements

- **Node Version**: >= 20.10.0

## Steps to Set Up the Project Locally

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/Prasanth-S7/forus
    ```

2. **Navigate to the Client Directory and Install Dependencies**:
    ```bash
    cd client
    npm install
    ```

3. **Navigate to the Server Directory and Install Dependencies**:
    ```bash
    cd ../server
    npm install
    ```

## Steps to Set Up the Database

1. **Acquire a PostgreSQL Instance**:
   - You can get a free instance from [Neon](https://neon.tech) or use Docker:
     ```bash
     docker pull postgres
     ```

2. **Migrate the Database**:
    ```bash
    cd server
    npx prisma migrate dev
    npx prisma generate
    ```

3. **Set Up Environment Variables**:
    ```bash
    cp .env.example .env
    # Populate all the required variables in the .env file
    ```

4. **Set Up MailHog for Fake SMTP Server**:
    - Install via Docker:
      ```bash
      docker run -d -p 1025:1025 -p 8025:8025 mailhog/mailhog
      ```
    - You will be able to see the mail dashboard at [http://localhost:8025](http://localhost:8025)

## Running the Project

1. **Run the Client**:
    ```bash
    cd client
    npm run dev
    ```

2. **Run the Server**:
    ```bash
    cd ../server
    npm run dev
    ```

## Screenshots

![Home Page](https://github.com/Prasanth-S7/forus/blob/main/client/public/assets/home_forus.png)

![Transport Page](https://github.com/Prasanth-S7/forus/blob/main/client/public/assets/transport_forus.png)

![Tracking Page](https://github.com/Prasanth-S7/forus/blob/main/client/public/assets/tracking_forus.png)

![MoneyManager Page](https://github.com/Prasanth-S7/forus/blob/main/client/public/assets/money_forus.png)

![Vendors Page](https://github.com/Prasanth-S7/forus/blob/main/client/public/assets/vendors_forus.png)

![Disaster Navigator Page](https://github.com/Prasanth-S7/forus/blob/main/client/public/assets/navigator_forus.png)