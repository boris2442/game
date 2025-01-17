const symbols = /[^a-zA-Z0-9\s]/;
const inputName=document.querySelector("#inputName");
const spanName=document.getElementById("spanName");
const inputMail=document.querySelector("#inputMail");
const spanMail=document.querySelector("#spanMail");
const forms=document.querySelector("form");
const textarea=document.querySelector("textarea")
const spanTextarea=document.querySelector("#spanTextarea")

inputName.addEventListener("input", (e) =>{
    const valueName=e.target.value;
    if(valueName.length<3 || valueName.length>20){
        inputName.classList.add("error");
        spanName.textContent='ce champ doit avoir entre 3 et 20 caracteres';
    }else if(symbols.test(valueName)){
        inputName.classList.add("error");
     spanName.textContent='ce champ ne peut pas contenir ce caractere';
    }else{
        inputName.classList.remove("error");
        spanName.textContent="";
    }
});

textarea.addEventListener("input", (e)=>{
    const valueTextarea=e.target.value;
    if(valueTextarea.length<3 || valueTextarea.length>250){
        textarea.classList.add("error");
        spanTextarea.textContent='ce champ doit avoir entre 3 et 250 caracteres';
   }
else{
        textarea.classList.remove("error");
        spanTextarea.textContent="";
    } 
})


forms.addEventListener("submit", (e)=>{
    e.preventDefault()
    alert("formulaire soumis avec succes!")
})



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
  