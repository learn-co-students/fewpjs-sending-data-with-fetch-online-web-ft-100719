// Add your code here

const submitData = (userName, userEmail) =>{
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    }
    return fetch("http://localhost:3000/users", configObj)
        .then(resp => {return resp.json();})
        .then(user => {
            let id = user.id;
            document.body.innerHTML = user["id"];
        })
        .catch(error =>{document.body.innerHTML = error.message;});
}