
//emailJS
function SendMail(){
    var params = {
      from_name : document.getElementById("FullName").value,
      email_id : document.getElementById("email_id").value,
      message : document.getElementById("Message").value
    };
    console.log(params)
    emailjs.send("service_xpeoro7", "template_kv49v15", params).then(function(response){
      console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
      console.log('FAILED...', error);
   });
    
  }
  