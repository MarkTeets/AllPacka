# AllPacka

# Most current version:
The code from marks-dev branch was copied to and iterated on at https://github.com/AllpackaLabs/allpacka. This is the most current version of AllPacka.  

# Old ReadMe info:
This is an app that helps you and your friend prepare for any and every trip!

Once you fork and clone this repo, you will need to install the
depenedencies. Do this by running...

    npm install

To develop the client, run...

    npm start

To test the server with postman, or another app, enter the
server folder and run

    npm run dev

You're now up and running! Happy Hackinig!!

# Current File Structure

```
.
├── README.md
├── client
│   ├── App.jsx
│   ├── index.html
│   ├── index.js
│   ├── pages
│   │   └── UserHome
│   │       └── UserHomeComponents
│   └── src
│       ├── App.css
│       ├── App.jsx
│       ├── index.css
│       └── main.jsx
├── package-lock.json
├── package.json
├── server
│   ├── controllers
│   │   ├── cookieController.js
│   │   ├── sessionController.js
│   │   ├── tripController.js
│   │   └── userController.js
│   ├── models.js
│   ├── routes
│   │   ├── trip.js
│   │   └── user.js
│   └── server.js
└── webpack.config.js

```
