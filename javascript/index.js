window.onload = function () {
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".loader").style.transition = "5s ease-out";
  };

//   const link=document.querySelector("#beginJoke");
//   link.addEventListener("click", (e)=>{
//     e.preventDefault();

//     window.open("index.html")
//   })



// Assurez-vous que Barba.js est bien chargé
document.addEventListener('DOMContentLoaded', () => {
    barba.init({
      // Définir les options de Barba.js
      transitions: [
        {
          // Transition entre les pages
          name: 'default-transition',
          once(data) {
            // Action au premier chargement
            console.log('Page chargée pour la première fois');
          },
          leave(data) {
            // Action lors du départ de la page actuelle
            return new Promise((resolve) => {
              data.current.container.classList.add('fade-out');  // Applique une classe CSS pour le fade-out
              setTimeout(resolve, 500);  // Délai pour le fade-out
            });
          },
          enter(data) {
            // Action lors de l'entrée dans la nouvelle page
            data.next.container.classList.add('fade-in');  // Applique une classe CSS pour le fade-in
          },
        },
      ],
    });
  });
  