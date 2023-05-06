const submitForm = (event) => {
    event.preventDefault(); // prevent the default form submission

    const name = document.getElementById("name").value;
    const lastName = document.getElementById("lastname").value;
    const data = {
      name: name,
      lastName: lastName
    };
    const json = JSON.stringify(data);
    document.body.appendChild(document.createTextNode(json));
  }

  const form = document.getElementById("myForm");
  form.addEventListener("submit", submitForm); 
