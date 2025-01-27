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