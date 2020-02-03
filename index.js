// Add your code here
function form(action, method, formData) {

  const configurationObject = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  return fetch(action, configurationObject);
}

function addPToDom(pInnerText) {
  const p = document.createElement("p")
  p.textContent = pInnerText;
  document.body.appendChild(p);
}

function submitData(name, email) {
  return form("http://localhost:3000/users", "POST", { name: name, email: email })
    .then(resp => resp.json())
    .then((obj) => {
      addPToDom(obj.id);
    })
    .catch((error) => {
      addPToDom(error.message);
    });
}

