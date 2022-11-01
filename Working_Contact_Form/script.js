function sendEmail() {
    Email.send({
    // ============> TRY YOUR CREDENTIALS FOR TESTING PURPOSE ONLY ON LOCAL ENVIRONMENT <===========
      Host: "smtp.gmail.com", // google smtp server
      Username: "username", // your email address
      Password: "password", // password
      To: "them@website.com", // in which email address u wan to receive email
      From: document.getElementById("email").value,
      Subject: "New Contact Form Enquiry",
      Body:
        "Name: " +
        document.getElementById("name").value +
        "<br> Email: " +
        document.getElementById("email").value +
        "<br> Phone No.: " +
        document.getElementById("phone").value +
        "<br> Message: " +
        document.getElementById("message").value,
    }).then((message) => alert("Message Sent Successfully"));
}