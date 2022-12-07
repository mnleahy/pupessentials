/* JS by Clodagh Byrne*/

function alter() {
	// variables and response message
  var x = document.getElementById("myName").value;
	document.getElementById("name").innerHTML = x+", thank you for your details. We will be in touch via ";
	var x = document.getElementById("myEmail").value;
	document.getElementById("email").innerHTML = x+" shortly.";
	hide();
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
