function sendMail() {/*contact from js*/
  var params = {/*contact from js*/
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,/*contact from js*/
    message: document.getElementById("message").value,/*contact from js*/
  };
/*contact from js*/
  const serviceID = "service_o18sqvq";
  const templateID = "template_5392xqn";/*contact from js*/
/*contact from js*/
    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";/*contact from js*/
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })  /*contact from js*/
    .catch(err=>console.log(err));
/*contact from js*/
}

