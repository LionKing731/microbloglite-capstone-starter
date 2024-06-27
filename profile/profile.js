profilePost.addEventListener("click", e=>{
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