function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  const phoneRegex = /^[+\-]?[0-9\-]+$/;
  return phoneRegex.test(phone);
}

async function checkEmailExists(email) {
  const apiUrl = `https://emailvalidation.abstractapi.com/v1/?api_key=f4fdd1f036354c9899fc2ef111d2135e&email=${email}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    if (data && data.deliverability) {
      return data.deliverability === "DELIVERABLE"; 
    } else {
      console.error("Invalid response from the email validation API.");
      return false;
    }
  } catch (error) {
    console.error("Error checking email:", error);
    return false;
  }
}

async function emailSend() {
  const fromEmail = document.getElementById("email").value.trim();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("number").value.trim();
  const message = document.getElementById("message").value.trim();


  if (!isValidEmail(fromEmail)) {
    alert("Please enter a valid email address.");
    return; 
  }

  
  const emailExists = await checkEmailExists(fromEmail);
  if (!emailExists) {
    alert("The email address does not exist. Please enter a valid email.");
    return; 
  }


  if (!isValidPhone(phone)) {
    alert("Please enter a valid phone number (only digits, '+' and '-' are allowed).");
    return; 
  }


  if (!name || !message) {
    alert("Please fill in all the fields.");
    return; 
  }


  try {
    const response = await Email.send({
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
    });
    alert("Email sent successfully! Response: " + response);
  } catch (error) {
    console.error("Failed to send email. Error:", error);
    alert("Failed to send email. Please try again.");
  }
}
