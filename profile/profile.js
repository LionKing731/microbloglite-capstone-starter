profilePost.addEventListener("click", e=>{
    fetch(apiBaseURL + "/api/posts", {
        method: "POST",
        // mode: "cors",
        // credentials: "same-origin",
        // cache: "no-cache",
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