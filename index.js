// Add your code here

// PRACTICE CODE!!!
// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
// }

// let configObj = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)  
// }

// fetch("http://localhost:4000/dogs", configObj)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(object) {
//         return console.log(object);
//     })
//     .catch(function(error){
//         alert("Bad things!!!")
//         console.log(error.message);
//     });

function submitData(name, email) {

    let formData = {
            name,
            email    
    }

    let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)  
    }

    return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            document.body.innerHTML = object['id']
        })
        .catch(function(error){
            alert(error.message)
            document.body.innerHTML = (error.message);
        });
}