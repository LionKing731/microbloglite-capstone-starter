
// <!-- curl -X 'POST' \
// 'http://microbloglite.us-east-2.elasticbeanstalk.com/api/users' \
// -H 'accept: application/json' \
// -H 'Content-Type: application/json' \
// -d '{
// "username": "jiggaMan",
// "fullName": "D Collier",
// "password": "Derrick786"
// }' -->

function register (data) {
    return fetch(apiBaseURL + "/api/users", { 
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "accept": "application/json",

        },
        body: JSON.stringify({
            username : username.value,
            fullName: fullname.value,
            password: password.value
        }),
    })
        .then(() => location = "/")

}

registerButton.addEventListener("click", register)