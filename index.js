function submitData(name, email) {
  const body = document.getElementsByTagName('body')[0]
  let data = {
    name: name,
    email: email
  }
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(data)
  };

  return fetch("http://localhost:3000/users", configObj)
    .then(function (response) {
      return response.json()
    })
    .then(function (object) {
      document.body.innerHTML = object.id
    })
    .catch(function (error) {
      document.body.innerHTML = error.message
    })
}