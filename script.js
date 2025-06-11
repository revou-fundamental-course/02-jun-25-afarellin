window.onload = function() {
  const userName = prompt("Please enter your name:");
  document.getElementById("welcome").innerText = `Hi ${userName}, Welcome to our school's website!`;

  const form = document.getElementById("contactForm");
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const gender = document.getElementById("gender").value;
    const message = document.getElementById("messageContent").value;

    if (!name || !email || !phone || !gender || !message) {
      alert("All fields are required!");
      return;
    }

    const result = `Name: ${name}<br>Email: ${email}<br>Phone: ${phone}<br>Gender: ${gender}<br>Message: ${message}`;
    document.getElementById("formResult").innerHTML = result;
  });
};