 // Add your code here
// let submitData = {
//     userName: "Tom",
//     userEmail: "Tommy@gmail.com"
//   };

function submitData (name, email) {
    let userInfo = {
        name: name,
        email: email
    }

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
    }

    return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
        return response.json()
    })
    .then(function(object) {
        document.body.innerHTML = object["id"]
    })
    .catch(function(error) {
        document.body.innerHTML = error.message
    })

    
}

submitData()


  // method: "POST" is missing from the object below
    // let formData = {
    //     dogName: "Byron",
    //     dogBreed: "Poodle"
    //   };
       
    //   let configObj = {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Accept": "application/json"
    //     },
    //     body: JSON.stringify(formData)
    //   };
       
    //   fetch("http://localhost:3000/dogs", configObj)
    //     .then(function(response) {
    //       return response.json();
    //     })
    //     .then(function(object) {
    //       console.log(object);
    //     });