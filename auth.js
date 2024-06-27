

"use strict";

const apiBaseURL = "http://microbloglite.us-east-2.elasticbeanstalk.com";

function isLoggedIn () {
    return Boolean(localStorage.token);
}

function login (loginData) {

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
            debugger;
            if (loginData.message === "Invalid username or password") {
                console.error(loginData)

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
