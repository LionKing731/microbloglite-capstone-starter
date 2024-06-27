/* Posts Page JavaScript */

"use strict";


buttonPostMessage.addEventListener("click", e=>{
    fetch(apiBaseURL + "/api/posts", {
        method: "POST",
 
        headers: {
            accept: "application/json",
            "Content-type" : "application/json",
            Authorization: "Bearer " + localStorage.token
        },
        body: JSON.stringify({
            text: messageElement.value
        })
    }).then(response =>{
        console.log(response);
        location = "/posts/";
});

})


function getMessage(message){
    return `
        <div id="user-cont" class="card">
            <div class="card-body">
                <h3 id="username" class="card-title">${message.username}</h3>
                <h5 class="card-text">${message.text}</h5>
            </div>    
        </div>
        
    `;
}

function showMessages (messages) {
    if(messages.hasOwnProperty("message")){
        location = "/";
        return;
    }
    messagesOutput.innerHTML = messages.map(getMessage).join("");
}

fetch(apiBaseURL + "/api/posts?limit=1000&offset=0", {
    method: "GET",
    headers: {Authorization: `Bearer ${localStorage.token}`}

}).then(response => {
    if(response.statusCode >= 400){
        console.log(response);
        location = "/";
    }
    return response.json()
    }).then(data =>{
        showMessages(data);
    })