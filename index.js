const b = document.querySelector("body");

let formData = (name, email) => {
  return {
    name: name,
    email: email
  };
};

let configObj = (name, email) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(formData(name, email))
  };
};

const submitData = (name, email) => {
  return fetch("http://localhost:3000/users", configObj(name,email))
  .then(parseJSON)
  .then(renderId)
  .catch(function(error) {
    b.append("Unauthorized Access")
    console.log(error.message);
  });
};

const renderId = (json) => {
  b.append(json.id)
}

const parseJSON = (response) => {
  return response.json();
}