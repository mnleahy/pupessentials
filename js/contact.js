/*JS by Clodagh Byrne*/
//Message on clicking submit
function alter() {
	// variables and response message
	var name = document.getElementById("myName").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	if(name!="" && email!="" && message!=""){
		document.getElementById("name").innerHTML = name+", thank you for your details. We will be in touch via "+email+" shortly";
		hide();
	}
	else{
		document.getElementById("name").innerHTML ="Please fill in all fields of the form before submitting";
	}
}

//Email address validation
function email_validation(){
	'use strict';
	var mailformat = /^\w+([\.\-]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,3})+$/;
	var email_name = document.getElementById("email");
	var email_value = document.getElementById("email").value;
	var email_length = email_value.length;
	if(!email_value.match(mailformat) || email_length === 0){
		document.getElementById('email_err').innerHTML = 'This is not a valid email format.';
		email_name.focus();
		document.getElementById('email_err').style.color = "#F3071C";
	}
	else{
		document.getElementById('email_err').innerHTML = 'Valid email format';
		document.getElementById('email_err').style.color = "#19B438";
	}
}
