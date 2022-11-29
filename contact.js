/* JS by Clodagh Byrne*/
document.addEventListener("submit", function (e) {
  e.preventDefault(); 
  handleSubmit();// Call the function handleSubmit to hide the form and show the message
});

function handleSubmit(event) {
  // Variables
  const at = document.getElementById("email").value.indexOf("@");
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const form = document.getElementById("contactForm");
  const containerDiv = document.getElementById("container");
  let submitOK = "true";  // 'let' because its value can change

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

  // Handle invalid submission
  if (submitOK === "false") {
      return false;
  }

  // Create new paragraph element and text node
  const newParagraph = document.createElement("p");
  const newContent = document.createTextNode(fname + ", thank you for your details. We will be in touch via " + email + " shortly.");
 
  newParagraph.appendChild(newContent);// Put text node into paragraph element
   containerDiv.appendChild(newParagraph);// Add paragraph to container div

  // Hide the form
  form.style.display = "none";
}