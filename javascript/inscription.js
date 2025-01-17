const symbols = /[^a-zA-Z0-9\s]/;
const inputName=document.querySelector("#inputName");
const spanName=document.getElementById("spanName");
const inputMail=document.querySelector("#inputMail");
const spanMail=document.querySelector("#spanMail");
const forms=document.querySelector("form");
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

