// JavaScript Document
console.log("hello");


//OPENEN//
var openButton = document.querySelector("header > button");
openButton.onclick = openMenu;


function openMenu() {  
  var deNav = document.querySelector("nav");
  deNav.classList.add("toonMenu");
}




 //SLUITEN//
var sluitButton = document.querySelector("nav button");

sluitButton.onclick = sluitMenu;

function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}

