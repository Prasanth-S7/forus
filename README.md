
## Requirements
node version >= 20.10.0
## Steps to setUp the project locally
```git clone https://github.com/Prasanth-S7/forus```

Navigate to the client directory by ```cd client ```

``` npm install ```  to install all the dependencies

Navigate to the server directory by ``` cd ../server ```

Run ``` npm install ``` again to install all the dependencies

## Steps to setUp the database

Buy a free PostgreSQL instance from https://neon.tech or using docker by ``` docker pull postgres ```

Navigate to the server directory and run ``` npx prisma migrate dev ``` to migrate your database then ``` npx prisma generate ``` to generate prisma client

Navigate to the server and run ``` cp .env.example .env ``` and populate all the required variables

Run ``` npm run dev ``` in the client and server directory to run local server 

