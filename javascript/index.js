window.onload = function () {
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".loader").style.transition = "5s ease-out";
  };

  const link=document.querySelector("#beginJoke");
  link.addEventListener("click", (e)=>{
    e.preventDefault();

    window.open("index.html")
  })



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

