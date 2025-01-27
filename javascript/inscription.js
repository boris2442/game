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
});


forms.addEventListener("submit", (e)=>{
    e.preventDefault()
    alert("formulaire soumis avec succes!")
});


const wipe=document.querySelectorAll(".wipe-transition");
const bandes=document.querySelectorAll(".bandes");
// console.log(wipe)

const TLAnim=new TimelineMax();
function delay(n){
    return new Promise((done)=>{
        setTimeout(()=>{
            done();
        }, n)
    })
}
barba.init({
    sync:true,
    transitions:[
        {
            async leave(){
                const done=this.async()
                TLAnim 
                .to(bandes, {height:'100%', stagger:0.09})
            // TLAnim.to(wipe, {left: "0%", ease:"power2.out", duration:0.8});
            // await delay(1000)
            await delay(1500)
            done();
            },
          // },
         enter(){
        //    TLAnim
        //    .to(wipe, {left: '100%', ease:"power2.in", duration:0.8 }) 
        //     .set(wipe, {left: '-100%'})
        TLAnim 
        .to(bandes, {height:'0%', stagger:0.09})
        }
    }
    ]
})
