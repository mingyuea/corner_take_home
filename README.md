This is the project for the Corner Health take home assignment.

## Instructions

Before starting, ensure that you have your environment variables set correctly in a .env file. The .env.example is included to facilitate this. An Healthie API key must be included here.

To run, you must first open up a terminal and run the command `npm install`. Once installation is finished, run the command `npm run build` to build the project, then run the command `npm run start` to start the server.

The Node/Express server should be running on PORT 8989.

To get patient eligibility, you can send a webhook payload via a POST request to the URL "localhost:8989/appointments/check_eligibility"
