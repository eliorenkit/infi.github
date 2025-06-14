AOS.init();

gsap.from("header", {
  duration: 1,
  y: -100,
  opacity: 0,
  ease: "bounce.out"
});

// EmailJS Contact Form (Set your EmailJS keys below)
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this, 'YOUR_PUBLIC_KEY')
    .then(() => alert("Message sent!"))
    .catch(err => alert("Failed to send message: " + err));
});
