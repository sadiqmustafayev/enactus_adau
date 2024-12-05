function emailSend() {
  const fromEmail = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const phone = document.getElementById("number").value;
  const message = document.getElementById("message").value;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "sadiqmustafayev20@gmail.com", 
    Password: "39E9114BD7C2398415A6902EFD4B8928B4F0",
    To: "sadiqmustafayev20@gmail.com",
    From: "sadiqmustafayev20@gmail.com",
    Subject: "New Contact From Enquiry",
    Body: `
      <h3>New Contact Enquiry</h3>
      <p><strong>Full Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${fromEmail}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  }).then(
    (response) => alert("Email sent successfully! Response: " + response)
  ).catch(
    (error) => alert("Failed to send email. Error: " + error)
  );
}
