function submitData(usersName, usersEmail) {
  let formData = {
    name: usersName,
    email: usersEmail
  };

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  }

  const body = document.getElementsByTagName('body')[0]

  return fetch('http://localhost:3000/users', configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {;
    body.innerHTML = object.id;
  })
  .catch(function(error) {
    alert("Something went wrong.")
    body.innerHTML = error.message;
  })
}