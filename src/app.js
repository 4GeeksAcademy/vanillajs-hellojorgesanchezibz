import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let valor = [ "A","2","3","4","5","6","7","8","9","J","Q","K"]
  let suit = ["&spades;","&clubs;","&hearts;","&diams;"]
  let valorRandom = valor[Math.floor(Math.random()*valor.length)];
  let suitRandom = suit[Math.floor(Math.random()*suit.length)];

  document.querySelector(".numero").innerHTML = valorRandom;
  document.querySelector(".palo-alto").innerHTML = suitRandom;
    document.querySelector(".palo-bajo").innerHTML = suitRandom;

  
  
};
