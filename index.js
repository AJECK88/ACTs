
 function dropdawn(){
  document.querySelector(".imergency").classList.toggle("actives")
    const dropdown = document.querySelector(".emergency_dropdown");
    dropdown.innerHTML = dropdown.innerHTML != '<i class="fa-solid fa-chevron-up"></i>'
    ?'<i class="fa-solid fa-chevron-up"></i>': '<i class="fa-solid fa-chevron-down"></i>'
   
};

 function displays(){
   let bar = document.querySelector(".Nav_bar")
 bar.innerHTML = bar.innerHTML != '<i class=" fa-solid fa-x"></i>' 
 ? '<i class=" fa-solid fa-x"></i>' : '<i class=" fa-solid fa-bars"></i>'
 document.querySelector(".left_nav").classList.toggle("active")
 }
const teams = document.querySelectorAll(".flex_box_About");

    teams.forEach((team) => {
        setInterval(() => {
        team.scrollLeft += 350;
        if (team.scrollLeft >= team.scrollWidth - team.clientWidth) {
            team.scrollLeft = 0;
        }
    } , 4000);   
    });

