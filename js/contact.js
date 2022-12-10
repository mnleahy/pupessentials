/* JS by Clodagh Byrne*/

function alter() {
	// variables and response message
	var name = document.getElementById("myName").value;
	var email = document.getElementById("myEmail").value;
	var message = document.getElementById("message").value;
	if(name!="" && email!="" && message!=""){
		document.getElementById("name").innerHTML = name+", thank you for your details. We will be in touch via "+email+" shortly";
		hide();
	}
	else{
		document.getElementById("name").innerHTML ="Please fill in all fields of the form before submitting";
	}
}
	// hide the form after submission
  function hide() {
  document.getElementById("hideform").style.display="none";
  }

  // Check char limit
  if (fname.length > 50) {
        alert("The name may have no more than 50 characters");
        submitOK = "false";
  }

  // Check valid email
  if (at === -1) {
      alert("Not a valid email address!");
      submitOK = "false";
  }
