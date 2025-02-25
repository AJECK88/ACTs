const counties = [
  {
    id: "1",
    name: "Algeria",
    imge: "/image-country-icon/Algeria.webp"
  },
  {
    id: "2",
    name: "Angola",
    imge: "/image-country-icon/Angola.png"
  },
  {
    id: "3",
    name: "Benin",
    imge: "/image-country-icon/Benin.png"
  },
  {
    id: "4",
    name: "Botswana",
    imge: "/image-country-icon/Botswana.webp"
  },
  {
    id: "5",
    name: "Burkina Faso",
    imge: "/image-country-icon/Bokina-Faso.png"
  },
  {
    id: "6",
    name: "Burundi",
    imge: "/image-country-icon/Burundi.png"
  },
  {
    id: "7",
    name: "Cabo Verde",
    imge: "/image-country-icon/Cape verde.webp"
  },
  {
    id: "8",
    name: "Cameroon",
    imge: "/image-country-icon/Comeroon.png"
  },
  {
    id: "9",
    name: "Central African Republic",
    imge: "/image-country-icon/central Africa republic.webp"
  },
  {
    id: "10",
    name: "Chad",
    imge: "/image-country-icon/Chad.webp"
  },
  {
    id: "11",
    name: "Comoros",
    imge: "/image-country-icon/comoros.webp"
  },
  {
    id: "12",
    name: "Congo",
    imge: "/image-country-icon/DR Congo.webp"
  },
  {
    id: "13",
    name: "Cote d'Ivoire",
    imge: "/image-country-icon/cote d'lvoire.webp"
  },
  {
    id: "14",
    name: "Djibouti",
    imge: "/image-country-icon/Djibouti.webp"
  },
  {
    id: "15",
    name: "Egypt",
    imge: "/image-country-icon/Egypt.webp"
  },
  {
    id: "16",
    name: "Equatorial Guinea",
    imge: "/image-country-icon/Equatorial Guinea.webp"
  },
  {
    id: "17",
    name: "Eritrea",
    imge: "/image-country-icon/Eritrea.webp"
  },
  {
    id: "18",
    name: "Eswatini",
    imge: "/image-country-icon/Eswatini.webp"
  },
  {
    id: "19",
    name: "Ethiopia",
    imge: "/image-country-icon/Ethiopia.webp"
  },
  {
    id: "20",
    name: "Gabon",
    imge: "/image-country-icon/Gabon.webp"
  },
  {
    id: "21",
    name: "Gambia",
    imge: "/image-country-icon/Gambia.webp"
  },
  {
    id: "22",
    name: "Ghana",
    imge: "/image-country-icon/Ghana.webp"
  },
  {
    id: "23",
    name: "Guinea",
    imge: "/image-country-icon/Guinea.webp"
  },
  {
    id: "24",
    name: "Guinea-Bissau",
    imge: "/image-country-icon/Guinea-Bissau.webp"
  },
  {
    id: "25",
    name: "Kenya",
    imge: "/image-country-icon/Kenya.webp"
  },
  {
    id: "26",
    name: "Lesotho",
    imge: "/image-country-icon/Lesotho.webp"
  },
  {
    id: "27",
    name: "Liberia",
    imge: "/image-country-icon/Liberia.webp"
  },
  {
    id: "28",
    name: "Libya",
    imge: "/image-country-icon/Libya.webp"
  },
  {
    id: "29",
    name: "Madagascar",
    imge: "/image-country-icon/Madagascar.webp"
  },
  {
    id: "30",
    name: "Malawi",
    imge: "/image-country-icon/Malawi.webp"
  },
  {
    id: "31",
    name: "Mali",
    imge: "/image-country-icon/Mali.webp"
  },
  {
    id: "32",
    name: "Mauritania",
    imge: "/image-country-icon/Mauritania.webp"
  },
  {
    id: "33",
    name: "Mauritius",
    imge: "/image-country-icon/Mauritius.webp"
  },
  {
    id: "34",
    name: "Morocco",
    imge: "/image-country-icon/Morocco.webp"
  },
  {
    id: "35",
    name: "Mozambique",
    imge: "/image-country-icon/Mozambique.webp"
  },
  {
    id: "36",
    name: "Namibia",
    imge: "/image-country-icon/Namibia.webp"
  },
  {
    id: "37",
    name: "Niger",
    imge: "/image-country-icon/Niger.webp"
  },
  {
    id: "38",
    name: "Nigeria",
    imge: "/image-country-icon/Nigerial.webp"
  },
  {
    id: "39",
    name: "Rwanda",
    imge: "/image-country-icon/Rwanda.webp"
  },
  {
    id: "40",
    name: "Sao Tome and Principe",
    imge: "/image-country-icon/Sao Tome and Principe.webp"
  },
  {
    id: "41",
    name: "Senegal",
    imge: "/image-country-icon/Senegal.webp"
  },
  {
    id: "42",
    name: "Seychelles",
    imge: "/image-country-icon/Seychelles.webp"
  },
  {
    id: "43",
    name: "Sierra Leone",
    imge: "/image-country-icon/Sierre Leone.webp"
  },
  {
    id: "44",
    name: "Somalia",
    imge: "/image-country-icon/Somalia.webp"
  },
  {
    id: "45",
    name: "South Africa",
    imge: "/image-country-icon/South Africa.webp"
  },
  {
    id: "46",
    name: "South Sudan",
    imge: "/image-country-icon/South Sudan.webp"
  },
  {
    id: "47",
    name: "Sudan",
    imge: "/image-country-icon/Sudan.webp"
  },
  {
    id: "48",
    name: "Tanzania",
    imge: "/image-country-icon/Tanzania.webp"
  },
  {
    id: "49",
    name: "Togo",
    imge: "/image-country-icon/Togo.webp"
  },
  {
    id: "50",
    name: "Tunisia",
    imge: "/image-country-icon/Tunisia.webp"
  },
  {
    id: "51",
    name: "Uganda",
    imge: "/image-country-icon/Uganda.webp"
  },
  {
    id: "52",
    name: "Zambia",
    imge: "/image-country-icon/Zambia.webp"
  },
  {
    id: "53",
    name: "Zimbabwe",
    imge: "/image-country-icon/Zimbabwe.webp"
  }
];

const counties_container = document.querySelector(".Names_Image_country");
counties.forEach((e) => {
  let country = `
    <div class=" countyAndImage countyAndImage-${e.id}" data-country-id =${e.id} id ="${e.id}" > <span>${e.name}</span><img src="${e.imge}" width="20px" alt="photo"></div>
    `;
  counties_container.innerHTML += country;


const counties_selected = document.querySelector(".select_county");


});
   document.querySelector('.dowp ,.county').addEventListener('click', (e)=>{
    document.querySelector('.Names_Image_country').classList.toggle('active')
    document.querySelector('.dowp').innerHTML = document.querySelector('.dowp').innerHTML === '<i class="fa-solid fa-chevron-up"></i>' ? '<i class="fa-solid fa-chevron-down"></i>' : '<i class="fa-solid fa-chevron-up"></i>'
   });
  document.querySelectorAll(".countyAndImage").forEach((link)=>{
    link.addEventListener('click', ()=>{
      const num = (link.dataset.countryId)
  
    const v = document.querySelector(`.countyAndImage-${link.dataset.countryId}`).innerHTML
       document.querySelector(".countys").innerHTML = v;
         document.querySelector('.dowp').innerHTML = document.querySelector('.dowp').innerHTML === '<i class="fa-solid fa-chevron-up"></i>' ? '<i class="fa-solid fa-chevron-down"></i>' : '<i class="fa-solid fa-chevron-up"></i>'
       document.querySelector('.Names_Image_country').classList.remove('active')
    })
    

  
    
   

  })