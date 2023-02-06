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
  let arr = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        let newArr = [];
        newArr = [...noun[k]];

        let lastLetter = newArr.pop();
        let lastLetter2 = newArr.pop();

        let newArr2 = newArr.join("");
        str += `<li>${pronoun[i]}${adj[j]}${newArr2}.${lastLetter2}${lastLetter}</li>`;
      }
    }
  }

  arr = `<ol>${str}</ol>`;

  const imprimirHtml = document.querySelector("#imprimirTexto");

  return (imprimirHtml.innerHTML = arr);
};

// LISTA CON LAS EXTENSIONES RAMDON, CADA VEZ UNA DIFERENTE
// for (let i = 0; i < pronoun.length; i++) {
//   for (let j = 0; j < adj.length; j++) {
//     for (let k = 0; k < noun.length; k++) {
//       let randomNumber = Math.floor(Math.random() * extension.length);
//       str += `<li>${pronoun[i]}${adj[j]}${noun[k]}${extension[randomNumber]}</li>`;
//     }
//   }
// }

// LISTA CON TODAS LAS EXTENSIONES POSIBLES
// for (let i = 0; i < pronoun.length; i++) {
//   for (let j = 0; j < adj.length; j++) {
//     for (let k = 0; k < noun.length; k++) {
//       for (let l = 0; l < extension.length; l++) {
//         str += `<li>${pronoun[i]}${adj[j]}${noun[k]}${extension[l]}</li>`;
//       }
//     }
//   }
// }

// LISTA AÑADIENDO A MANO (HARDCODEANDO) LA EXTENSION .COM
// for (let i = 0; i < pronoun.length; i++) {
//   for (let j = 0; j < adj.length; j++) {
//     for (let k = 0; k < noun.length; k++) {
//       str += `<li>${pronoun[i]}${adj[j]}${noun[k]}.com</li>`;
//     }
//   }
// }

// console.log("Hello Rigo from the console!");
