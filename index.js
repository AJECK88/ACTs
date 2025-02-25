const display = document.querySelector(".EmergencyGrouping")


display.addEventListener("click", ()=>{
    document.querySelector(".imergency").classList.toggle("active")
});

 function displays(){
  
   let bar = document.querySelector(".Nav_bar")
 bar.innerHTML = bar.innerHTML != '<i class=" fa-solid fa-x"></i>' 
 ? '<i class=" fa-solid fa-x"></i>' : '<i class=" fa-solid fa-bars"></i>'
 document.querySelector(".left_nav").classList.toggle("active")
 console.log(document.querySelector(".left_nav"))
    
 }