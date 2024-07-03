document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    function sendEmail() {
        const senderEmail = document.getElementById("email").value;

        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "arunkumar.msg192@gmail.com",
            Password : "9C793760E8BA2D97C5691971B9C89F537B63",
            To : 'arunkumar.msg192@gmail.com',
            From : senderEmail,
            Subject : "This is the subject",
            Body : "And this is the body"
        }).then(
            message => {
                console.log("Email sent successfully:", message);
                alert("Email sent successfully: " + message);
            }
        ).catch(
            error => {
                console.error("Failed to send email:", error);
                alert("Failed to send email: " + error);
            }
        );
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("Form submitted");
        sendEmail();
    });
});
