function showSocials(event) {
    event.preventDefault();

    const socialIcons = document.getElementById("socialIcons");

    socialIcons.classList.toggle("show");
}

function scrollToHome(event) {
    event.preventDefault();

    document.getElementById("home").scrollIntoView({
        behavior: "smooth"
    });
}

    function scrollToAbout(event) {
    event.preventDefault();

    document.getElementById("About").scrollIntoView({
        behavior: "smooth"
    });
}

    function scrollToContact(event) {
    event.preventDefault();

    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
    }

    function showSocials(event) {
    event.preventDefault();

    const socialIcons = document.getElementById("socialIcons");

    socialIcons.classList.toggle("show");
}


function sendEmail(event){
   let parms ={
    name:document.getElementById("name").value,
    email: document.getElementById("email").value,
    message : document.getElementById("message").value
   }
   emailjs.send("service_rka7vou", "template_961f53s", parms).then(alert("your has been successfully sent"))
}
