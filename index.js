// Add your code here
function submitData(userName, userEmail) {
    let userInfo = {
        name: userName,
        email: userEmail
    }

    let Objconfig = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
    };

    return fetch("http://localhost:3000/users", Objconfig)
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            let id = object.id 
            document.body.innerHTML = object["id"];
        })
        .catch(function(error) {
            document.body.innerHTML = error["message"];
        });
}