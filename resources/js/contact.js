let submit = (e) => {
    // Verificacion y "refrescar" conceptos de semana pasada
    e.preventDefault();
    console.log(e);
    console.log("CTA Connected");
    // Vamos a traernos el valor de los inputs del html
    let yourName = document.querySelector("#yourName").value;
    let yourEmail = document.querySelector("#yourEmail").value;
    let yourPhone = document.querySelector("#yourPhone").value;
    let yourMessage = document.querySelector("#yourMessage").value;
  
  
    // Uso de fetch para empujar valores del title y el body del formulario al api PUBLICO externo
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        name: yourName,
        email: yourEmail,
        phone: yourPhone,
        message: yourMessage
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  
  document.querySelector(".form-boton").addEventListener("click", submit);