// la partie reservation 
// recuperation de notre formulaire 

// import emailjs from "/node_modules/emailjs-com"

// Initialisation EmailJS
(function () {
    emailjs.init("xpYDsF5Qu0Mchaa4G"); // Remplacez par votre clé publique EmailJS
  })();

  // Gestionnaire de soumission de formulaire
  const formulaire = document.getElementById("myForm")
  console.log(formulaire);
  formulaire.addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les données du formulaire
    const name = document.querySelector(".nom").value;
    const prenom = document.querySelector(".prenom").value;
    const email = document.querySelector(".email").value;
    const message = document.querySelector(".message").value;
    const telephone = document.querySelector(".telephone").value;
    const date = document.querySelector(".date").value;
    const place = document.querySelector(".place").value;

    // Envoyer les données via EmailJS
    emailjs.send("service_565m2ua", "template_65vw4wn", {
      from_name: name,
      from_prenom: prenom,
      from_email: email,
      message: message,
      telephone: telephone,
      date: date,
      place: place,
      
    })
    .then(
      function () {
        alert("Email envoyé avec succès !");
      },

      function (error) {
        alert("Une erreur est survenue : " + JSON.stringify(error));
      }
    );
 
    formulaire.reset()

  });
  

//   formulaire.reset()
// fonction pour le message d'envoie
