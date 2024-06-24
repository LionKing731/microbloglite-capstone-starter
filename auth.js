/* auth.js provides LOGIN-related functions */

"use strict";

const apiBaseURL = "http://microbloglite.us-east-2.elasticbeanstalk.com";
// Backup server (mirror):   "https://microbloglite.onrender.com"

// NOTE: API documentation is available at /docs 
// For example: http://microbloglite.us-east-2.elasticbeanstalk.com/docs


// You can use this function to get the login data of the logged-in
// user (if any). It returns either an object including the username
// and token, or an empty object if the visitor is not logged in.



// You can use this function to see whether the current visitor is
// logged in. It returns either `true` or `false`.
function isLoggedIn () {
    return Boolean(localStorage.token);
}


// This function is already being used in the starter code for the
// landing page, in order to process a user's login. READ this code,
// and feel free to re-use parts of it for other `fetch()` requests
// you may need to write.
function login (loginData) {
    // POST /auth/login
    const options = { 
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
    };

    return fetch(apiBaseURL + "/auth/login", options)
        .then(response => response.json())
        .then(loginData => {
            if (loginData.message === "Invalid username or password") {
                console.error(loginData)
                // Here is where you might want to add an error notification 
                // or other visible indicator to the page so that the user is  
                // informed that they have entered the wrong login info.
                return null
            }

            window.localStorage.setItem("login-data", JSON.stringify(loginData));
            window.localStorage.token = loginData.token;
            window.location.assign("/posts");  // redirect

            return loginData;
        });
}


function logout () {

    fetch(apiBaseURL + "/auth/logout", {
        method: "GET",
        headers: {Authorization: `Bearer ${localStorage.token}`},
    }).then(() => {
        window.localStorage.removeItem("token");
        location = "/";
    });
}


// curl -X 'POST' \
//   'http://microbloglite.us-east-2.elasticbeanstalk.com/api/users' \
//   -H 'accept: application/json' \
//   -H 'Content-Type: application/json' \
//   -d '{
//   "username": "jiggaMan",
//   "fullName": "D Collier",
//   "password": "Derrick786"
// }'