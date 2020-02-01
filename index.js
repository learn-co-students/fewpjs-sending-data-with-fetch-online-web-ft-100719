// Add your code here


function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: "Lucky",
                email: "lucky@thecodebusters.com"
            })
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            document.body.innerHTML = object["id"]
        })
        .catch(function(error) {
            alert("Houston, We have a problem. CALL THE CODEBUSTERS!");
            document.body.innerHTML = error.message
        })
};