/*

let title = document.getElementById("title")
title.innerHTML = "IMM"

let image = document.getElementById("image")
image.src = "medias/X.jpg"


Première version

title = document.querySelector("#monId")

title.addEventListener("click", function() {
    
    console.log("élement cliqué")

})
*/

/*Deuxième version plus simple

title = document.querySelector("#title")
title.addEventListener("click", function(){


    this.classList.toggle("Turquoise")

})


function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
*/

/* Exercice simulation de combat */

class Sorcier {
  constructor(attack, precision, vie) {
      this.attack = attack;
      this.precision = precision;
      this.vie = vie;
  }

}

let Harry = new Sorcier(1,0.5,10);
console.log("Harry : Attack point = " +Harry.attack+ ", Precison = " +Harry.precision+ ", Vie = " +Harry.vie+ ".");


let Ron = new Sorcier(1,0.8,10);
console.log("Ron : Attack point = " +Ron.attack+ ", Precison = " +Ron.precision+ ", Vie = " +Ron.vie+ ".");


while (Ron.vie > 0 && Harry.vie > 0 ){
  console.log("Harry attack ron")


  if (Harry.precision > Math.random()){

      Ron.vie = Ron.vie - Harry.attack;

      console.log("Harry touched Ron, Ron's PV: " +Ron.vie)

      console.log("Ron attack Harry")

      if (Ron.precision > Math.random()){
    
          Harry.vie = Harry.vie - Ron.attack;
          console.log("Ron touched Harry, Harry's PV: " +Harry.vie)
    
      } else {
        console.log("Ron missed")
      }
    

  } else {

    console.log("Harry missed")

    console.log("Ron attack Harry")

    if (Ron.precision > Math.random()){
  
        Harry.vie = Harry.vie - Ron.attack;
        console.log("Ron touched Harry, Harry's PV: " +Harry.vie)
  
    } else {
      console.log("Ron missed")
    }
  
  
  }

  console.log ("End of the round")

}


if (Harry.vie == 0){

  console.log ("Harry lost and Ron won")
}

if (Ron.vie == 0){

  console.log ("Ron lost and Harry won")
}


 
/* dark mode */

function lightMode(){

  var navbar = document.querySelector (".nav")
  navbar.classList.toggle("dark_mode");

  var ever = document.querySelector (".every")
  ever.classList.toggle("dark_mode_every");

  var element = document.body;
  element.classList.toggle("dark_mode_body");

  var ever = document.querySelector (".flex-container4")
  ever.classList.toggle("dark_mode_flex");

  var ever = document.querySelector (".menu_deroulant")
  ever.classList.toggle("dark_mode_menu");

  var filtre = document.querySelector (".filtre")
  filtre.classList.toggle("dark_mode_filtre");

}


/* carrousel (page index) */

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* Api (page les cartes) */
/* harry */
function fetchSpells (info){
  return fetch ("https://hp-api.lainocs.fr/characters/" + info)
      .then((response) => response.json())
}

async function displaySpells(info){
  const data = await fetchSpells(info)
  document.getElementById("harry").innerHTML=`
      <h3>${data.name}</h3>
     
      <p>${data.house}</p>

      <p>${data.blood}</p>

  `
}

displaySpells("harry-potter")

/* draco */
function fetchDraco (infod){
  return fetch ("https://hp-api.lainocs.fr/characters/" + infod)
      .then((response) => response.json())
}

async function displayDraco(infod){
  const data = await fetchDraco(infod)
  document.getElementById("draco").innerHTML=`
      <h3>${data.name}</h3>
     
      <p>${data.house}</p>

      <p>${data.blood}</p>

  `
}

displayDraco("draco-malfoy")

/* hermione */
function fetchHermi (infoh){
  return fetch ("https://hp-api.lainocs.fr/characters/" + infoh)
      .then((response) => response.json())
}

async function displayHermi(infoh){
  const data = await fetchHermi(infoh)
  document.getElementById("hermione").innerHTML=`
      <h3>${data.name}</h3>
     
      <p>${data.house}</p>

      <p>${data.blood}</p>

  `
}

displayHermi("hermione-granger")

/* luna */
function fetchLuna (infol){
  return fetch ("https://hp-api.lainocs.fr/characters/" + infol)
      .then((response) => response.json())
}

async function displayLuna(infol){
  const data = await fetchLuna(infol)
  document.getElementById("luna").innerHTML=`
      <h3>${data.name}</h3>
     
      <p>${data.house}</p>

      <p>${data.blood}</p>
      
  `
}

displayLuna("luna-lovegood")

/* show hide harry's info*/

function hideHarry(){
  var x = document.getElementById("harry");
  if (x.style.display === "none"){
    x.style.display = "block";
  }else{
    x.style.display = "none";
  }
}

/* show hide draco's info*/

function hideDraco(){
  var x = document.getElementById("draco");
  if (x.style.display === "none"){
    x.style.display = "block";
  }else{
    x.style.display = "none";
  }
}

/* show hide hermione's info*/

function hideHermi(){
  var x = document.getElementById("hermione");
  if (x.style.display === "none"){
    x.style.display = "block";
  }else{
    x.style.display = "none";
  }

  
}

/* show hide luna's info*/

function hideLuna(){
  var x = document.getElementById("luna");
  if (x.style.display === "none"){
    x.style.display = "block";
  }else{
    x.style.display = "none";
  }
}
