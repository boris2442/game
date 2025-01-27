window.onload = function () {
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".loader").style.transition = "5s ease-out";
  };

  const link=document.querySelector("#beginJoke");
  link.addEventListener("click", (e)=>{
    e.preventDefault();

    window.open("index.html")
  })


