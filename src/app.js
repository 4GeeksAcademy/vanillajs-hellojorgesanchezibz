import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generarCarta() {
  //write your code here
  let valor = [ "A","2","3","4","5","6","7","8","9","J","Q","K"]
  let suit = [{Symbol:"♠",className:"spades"},
    {Symbol:"♣", className:"clubs"},
    {Symbol:"♥", className:"hearts"},
    {Symbol:"♦", className:"diams"}]
  let valorRandom = valor[Math.floor(Math.random()*valor.length)];
  let suitRandom = suit[Math.floor(Math.random()*suit.length)];

  document.querySelector(".numero").innerHTML = valorRandom;
  document.querySelector(".palo-alto").innerHTML = suitRandom.Symbol ;
    document.querySelector(".palo-bajo").innerHTML = suitRandom.Symbol ;

    document.querySelector(".palo-alto").className = "palo-alto " + suitRandom.className;
  document.querySelector(".palo-bajo").className = "palo-bajo " + suitRandom.className;
};

document.querySelector("#btn").addEventListener("click",generarCarta);
window.onload=generarCarta;
setInterval(generarCarta, 3000); // intervalo de tres segundos 