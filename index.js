function submitData(userName, userEmail){
 let formData = {
   name: userName,
   email: userEmail
 }

 let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
 }

  fetch("http://localhost:3000/users", configObj)
    .then(function(resp) {
      return resp.json();
    })
    .then(function(obj) {
      let p = document.createElement("p")
      p.innerText = obj.id
      document.body.appendChild(p)
    })
    .catch(function(error) {
      let message = document.createElement("p")
      message.innerText = error.message
      document.body.appendChild(message)
    })
}