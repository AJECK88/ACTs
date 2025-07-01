/* || creating newe element to be use by ech country */
const CameroonDOM = document.createElement("section")
     CameroonDOM.id = "CameronCarBooking"
      const body= document.querySelector("body")
//
const busTravelAgencies = [
  {
    id: 1,
    name: "General Express Voyages",
    location:[ 
      "Yaoundé",
      "Douala", 
      "Bafoussam",
      "Bamenda",
      "Ngaoundéré"
    ],
    info: "One of the largest and most popular bus companies in Cameroon, known for its comfort and reliability on intercity routes.",
    image: "https://www.generalexpressvoyages.com/logo.png"
  },
  {
    id: 2,
    name: "Garanti Express",
    location: [
      "Yaoundé", 
      "Douala", 
      "Bafoussam", 
      "Bamenda",
      "Maroua"
    ],
    info: "Offers safe and comfortable travel with modern buses and frequent departures between major cities.",
    image: "https://www.garantiexpress.com/logo.png"
  },
  {
    id: 3,
    name: "Finexs Voyages",
    location: [
      "Douala",
      "Yaoundé",
      "Bafoussam",
      "Bamenda"
    ],
    info: "Known for punctuality and good customer service, serving key cities in Cameroon.",
    image: "https://www.finexsvoyages.com/logo.png"
  },
  {
    id: 4,
    name: "Buca Voyages",
    location: [
      "Douala", 
      "Yaoundé", 
       "Bafoussam", 
       "Bamenda"
    ],
    info: "Provides affordable and reliable bus services with a focus on passenger safety.",
    image: "https://www.bucavoyages.com/logo.png"
  },
  {
    id: 5,
    name: "Amour Mezam",
    location: [
      "Bamenda", 
      "Yaoundé",
       "Douala", 
       "Bafoussam"
    ],
    info: "A trusted agency for travel between the Northwest and other regions, with comfortable buses.",
    image: "https://www.amourmezam.com/logo.png"
  },
  {
    id: 6,
    name: "Touristique Express",
    location:[
      "Yaoundé", 
      "Ngaoundéré", 
      "Garoua", 
      "Maroua"
    ],
    info: "Specializes in long-distance travel to the northern regions of Cameroon.",
    image: "https://www.touristiqueexpress.com/logo.png"
  },
  {
    id: 7,
    name: "Musango Voyages",
    location: [
      "Douala", 
      "Yaoundé", 
      "Limbe", 
      "Buea"
    ],
    info: "Popular for travel to the Southwest region, offering regular and executive buses.",
    image: "https://www.musangovoyages.com/logo.png"
  },
  {
    id: 8,
    name: "Avenir Voyages",
    location: [
      "Douala", 
      "Yaoundé", 
      "Bafoussam"
    ],
    info: "Provides reliable intercity bus services with a focus on customer satisfaction.",
    image: "https://www.avenirvoyages.com/logo.png"
  },
  {
    id: 9,
    name: "United Express",
    location: [
      "Douala", 
      "Yaoundé", 
      "Bamenda"
    ],
    info: "Known for its efficient service and comfortable buses on major routes.",
    image: "https://www.unitedexpress.com/logo.png"
  },
  {
    id: 10,
    name: "Binam Voyages",
    location:[ 
      "Douala", 
      "Yaoundé", 
      "Bafoussam", 
      "Bamenda"
    ],
    info: "Offers safe and affordable travel options for passengers across Cameroon.",
    image: "https://www.binamvoyages.com/logo.png"
  },
  {
    id: 11,
    name: "Transcam Voyages",
    location: [
      "Douala", 
      "Yaoundé", 
      "Bafoussam"
    ],
    info: "Provides regular bus services with a reputation for punctuality.",
    image: "https://www.transcamvoyages.com/logo.png"
  },
  {
    id: 12,
    name: "Guaranti Express",
    location: [
      "Douala", 
      "Yaoundé", 
      "Bafoussam"
    ],
    info: "A well-known agency for intercity travel with modern buses.",
    image: "https://www.guarantiexpress.com/logo.png"
  },
  {
    id: 13,
    name: "LeCar",
    location: [
      "Douala", 
      "Yaoundé", 
      "Bafoussam"
    ],
    info: "Offers executive and standard bus services with a focus on comfort.",
    image: "https://www.lecar.com/logo.png"
  },
  {
    id: 14,
    name: "Mondial Express",
    location: [
      "Douala", 
      "Yaoundé", 
      "Bafoussam"
    ],
    info: "Provides affordable and reliable bus travel between major cities.",
    image: "https://www.mondialexpress.com/logo.png"
  },
  {
    id: 15,
    name: "Société Camerounaise de Transport (SCT)",
    location: [
      "Yaoundé", 
      "Douala", 
      "Bafoussam"
    ],
    info: "A government-affiliated agency offering intercity bus services.",
    image: "https://www.sct.cm/logo.png"
  },
  {
    id: 16,
    name: "Transsag Express",
    location: [
      "Douala", 
      "Yaoundé", 
      "Bafoussam"
    ],
    info: "Known for its safety standards and comfortable buses.",
    image: "https://www.transsagexpress.com/logo.png"
  },
  {
    id: 17,
    name: "Buca Voyages",
    location: [
      "Douala", 
      "Yaoundé", 
      "Bamenda"
    ],
    info: "Offers reliable and affordable travel options for passengers.",
    image: "https://www.bucavoyages.com/logo.png"
  },
  {
    id: 18,
    name: "Fako Travelers",
    location: [
      "Douala", 
      "Limbe", 
      "Buea"
    ],
    info: "Specializes in travel to the Southwest region, especially Limbe and Buea.",
    image: "https://www.fakotravellers.com/logo.png"
  },
  {
    id: 19,
    name: "Maya Express",
    location:[ 
      "Douala" ,  
      "Yaoundé",  
      "Bafoussam"
    ],
    info: "Provides regular and executive bus services for intercity travel.",
    image: "https://www.mayaexpress.com/logo.png"
  },
  {
    id: 20,
    name: "Transline Voyages",
    location: [
      "Douala", 
      "Yaoundé", 
      "Bafoussam"
    ],
    info: "Offers comfortable and safe travel options between major cities.",
    image: "https://www.translinevoyages.com/logo.png"
  },
  {
    id: 21,
    name: "Moghamo Express",
    location: [
      "Bamenda", 
      "Douala", 
      "Yaoundé", 
      "Bafoussam"
    ],
    info: "Moghamo Express is known for its reliable service and comfortable buses, connecting the Northwest region with major cities.",
    image: "/images/bookinCarLogo/Moghamo images.jpeg"
  }
];

const getBusTravelAgencies = () => {
      
      body.appendChild(CameroonDOM);
     busTravelAgencies.sort((a, b) => a.name.localeCompare(b.name));
  
     busTravelAgencies.forEach((e) => { 
      const location = e.location.map(loc => `<span class ="AgencyLocations" ><i class="fa-solid fa-location-dot"></i>${loc}</span>`).join("");
      console.log(location)     
         let region = `
          <div class="agency-card">
          <div class = "header_Agency">
                <img src="${e.image}" alt="${e.name} logo" class="agency-logo">
                <h3 class = "Agency_card_Name">${e.name}</h3>
                </div>
                <div class="agency-details">
                 <figure class="agency-image">
                    <img src="${e.image}" alt="${e.name} image" class="agency-image">
                 </figure>
                <div class="location"><strong>Agency Locations</strong>${location}</div>
                </div>
                
          </div>
         `;
        CameroonDOM.innerHTML += region;
        
     });
};
 getBusTravelAgencies();