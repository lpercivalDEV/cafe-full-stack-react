# Full Stack React Cafe App
This is a full stack application that uses React that allows employees to login or create an account, submit customer orders, and check orders off as complete.

## Installation
1. Open your terminal/shell
2. Clone my repo by typing: `git clone https://github.com/lpercivalDEV/cafe-full-stack-react.git`
3. cd into project directory and run `npm install`

## Usage
1. Open two terminals (or terminal tabs)
2. cd into `barista-auth` directory and run `node server.js`to start the application
3. Navigate to `localhost:8080`

4. cd into `client-side` directory and run `npm start` to start the react application
5. Navigate to `localhost:3000`

## Credit
Modified from Scotch.io's auth tutorial


![alt tag](https://github.com/lpercivalDEV/cafe-full-stack-react/blob/master/cafe-landing.png)
![alt tag](https://github.com/lpercivalDEV/cafe-full-stack-react/blob/master/cafe-tracker.png)
![alt tag](https://github.com/lpercivalDEV/cafe-full-stack-react/blob/master/cafe-react.png)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node.js, Mongodb, Express, Passport, EJS, React

I created an application that allows coffee house employees to handle incoming orders.

The "cashier" can submit orders that are then posted to the screen. Once the order has been made, workers can mark the order as complete by clicking on the "check mark" icon which removes the item from the list.
The orders are stored in a database which can be accessed by an "admin".

The application uses a node server to host the files and passport for user login and authentication. EJS and Express allow for database information to be passed through to the DOM. As orders are created, a post request is sent to create the database object, the page is then refreshed and the DOM is updated with the new order information.

On the other host, the React portion of the app will pull the list of order items from the database and print them to the page. As orders are created, this page will update its list of items to coincide with what orders were placed.


## Optimizations

If I had more time, I would improve the CSS, add different 'views' for the admin and employees, and update the react portion of the app to show more order information such as name and when the order was placed (time-stamps).

I would also like to add the ability to show which employee is marking an order as complete.


## Examples:
Take a look at some of my other projects I have made:

**My Portfolio Site:** http://www.lillythedev.com

**React Body Temp App:** https://github.com/lpercivalDEV/react-body-temp-demo

**Card Matching Game:** https://github.com/lpercivalDEV/matching-card-game
