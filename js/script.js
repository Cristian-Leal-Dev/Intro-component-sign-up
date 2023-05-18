document.getElementsByTagName("form")[0].addEventListener("submit", function(event){
    event.preventDefault(); 
  
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("yourEmail").value;
    const password = document.getElementById("yourPassword").value;
    const checkbox = document.getElementById("myCheckBox").checked;
    const emailRegex = /^[^@]+@\w+(\.\w+)+\w$/;
    let errorMessage = "";
  
    if (firstName === "" || lastName === "" || email === "" || password === "") {
      errorMessage += "All fields must be filled out.\n";
    }
    if (!checkbox) {
      errorMessage += "You must agree to the terms and conditions.\n";
    }
    if (!emailRegex.test(email)) {
      errorMessage += "Email must be in the format: name@host.tld\n";
    }
    if (errorMessage !== "") {
      alert(errorMessage);
    } else {
      alert("Form submitted successfully!");
    }
  });
  