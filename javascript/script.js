// https://api.blablagues.net/?rub=blagues

// fetch("https://api.blablagues.net/?rub=blagues").then((res) =>res.json()).then((data) =>(document.body.textContent='data.data.content.text_head'
// ))
const headerTitle=document.querySelector("#header-title");
const content = document.getElementById("paraText");
// console.log(content)
function getJoke(){

    fetch("https://api.blablagues.net/?rub=blagues").then((res)=>res.json()).then((data) =>{
        console.log(data.data.content);
        headerTitle.textContent=data.data.content.text_head;
        content.textContent=data.data.content.text !=="" ?data.data.content.text:data.data.content.text_hidden;
    })
    
}
getJoke()
document.body.addEventListener("click", getJoke);

window.onload = function () {
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".loader").style.transition = "5s ease-out";
  };


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
  