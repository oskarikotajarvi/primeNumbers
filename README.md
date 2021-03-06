# primeNumbers
Repository for a coding challenge in which the requirements are following:

Using [ASP.NET / C# | Node.js | PHP], implement a backend REST API which:
1) Takes multiple integers as input, calculates the sum, and returns the sum including information whether the sum is a prime number or not.
2) Takes one integer as input and returns information whether the sum is a prime number or not.
 
Using [React | your favorite UI stack] implement also a frontend UI page to test the API. User should be able to enter 1-n integers that are sent to API endpoint 1, and single integer that is sent to API endpoint 2.
 
Endpoint 1 could for example (but not necessarily) look like this:
GET http://localhost/myapi/?action=sumandcheck&numbers=1,2,3
-> {"result": 6, "isPrime": false}
 
Endpoint 2 could for example (but not necessarily) look like this:
GET http://localhost/myapi/?action=checkprime&number=89
-> {"isPrime": true}

In this repo the challenge is implemented with NodeJS (express), ReactJS and Typescript

## Running the applications
At the moment there are no docker images created for the applications so the apps must be started by hand.
This can be done by running `npm run start:dev` in the `backend` folder. This starts the backend service running on port `5050`by default.
The frontend can be started by `npm run start:dev` in the `primenumber-client` folder. The frontend starts in the default port `3000`.
