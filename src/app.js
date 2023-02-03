/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = [".com", ".net", ".us", ".io"];

  let str = "";

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        str += `${pronoun[i]}${adj[j]}${noun[k]}.com\n`;
      }
    }
  }

  let arr = [];
  arr = str;

  // for (let l = 0; l < newArr.length; l++) {
  //   let fila = document.querySelector("#tabla");
  //   fila.innerHTML = newArr[l];
  // }

  const imprimirHtml = document.querySelector("#imprimirTexto");

  return (imprimirHtml.innerHTML = arr);

  // console.log("Hello Rigo from the console!");
};
