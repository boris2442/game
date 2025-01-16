// https://api.blablagues.net/?rub=blagues

// fetch("https://api.blablagues.net/?rub=blagues").then((res) =>res.json()).then((data) =>(document.body.textContent='data.data.content.text_head'
// ))
const headerTitle=document.querySelector("#header-title");
const content = document.getElementById("paraText");
console.log(paraText)
function getJoke(){

    fetch("https://api.blablagues.net/?rub=blagues").then((res)=>res.json()).then((data) =>{
        console.log(data.data.content);
        headerTitle.textContent=data.data.content.text_head;
        content.textContent=data.data.content.text !=="" ?data.data.content.text:data.data.content.text_hidden;
    })
    
}
getJoke()
document.body.addEventListener("click", getJoke)