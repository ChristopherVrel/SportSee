<div align="center">
    <img width="200" src="./src/assets/img/brand_logo.svg" alt="SportSee">
</div>
<h1 align="center" style="margin-top: 0px;">Projet 12</h1>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Back-end

In the back-end directory clone the repo from [here](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)

Install the dependencies with `npm install`

Run the back-end with `npm start` port 3000 by default

### Possible endpoints
This project includes four endpoints that you will be able to use:

- http://localhost:3000/user/${userId} - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
- http://localhost:3000/user/${userId}/activity - retrieves a user's activity day by day with kilograms and calories.
- http://localhost:3000/user/${userId}/average-sessions - retrieves the average sessions of a user per day. The week starts on Monday.
- http://localhost:3000/user/${userId}/performance - retrieves a user's performance (energy, endurance, etc.).
Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.

### Examples of queries
- http://localhost:3000/user/12/performance - Retrieves the performance of the user with id 12
- http://localhost:3000/user/18 - Retrieves user 18's main information.

## Front-end

In the Front-end directory

Install the dependencies with `npm install`

Run the front-end with `npm start` port 3001 by default

Open [http://localhost:3001](http://localhost:3001) to view it in your browser.