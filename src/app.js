/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const pronouns = ["the", "your", "every", "one", "our", "such"];
  const adjectives = [
    "great",
    "adventurous",
    "big",
    "arrogant",
    "charming",
    "creepy",
    "grotesque",
    "hungry"
  ];
  const nouns = ["sitcom", "lotus", "cubes", "jogger", "racoon", "planet"];
  const domains = [".com", ".us", ".es", ".io", ".net", ".shop"];

  let strList = "";
  let arrOrdened = [];

  for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjectives.length; j++) {
      for (let k = 0; k < nouns.length; k++) {
        for (let l = 0; l < domains.length; l++) {
          let strHackNouns = nouns[k];
          let strHackDomains = domains[l].slice(1);

          if (
            strHackNouns.endsWith(strHackDomains) &&
            strHackDomains.length === 3
          ) {
            let newArr = [];
            newArr = nouns[k].slice(0, -3);

            strList += `<li>${pronouns[i]}${adjectives[j]}${newArr}${domains[l]}</li>`;
          } else if (
            strHackNouns.endsWith(strHackDomains) &&
            strHackDomains.length === 2
          ) {
            let newArr = [];
            newArr = nouns[k].slice(0, -2);

            strList += `<li>${pronouns[i]}${adjectives[j]}${newArr}${domains[l]}</li>`;
          } else
            strList += `<li>${pronouns[i]}${adjectives[j]}${nouns[k]}${domains[l]}</li>`;
        }
      }
    }
  }

  arrOrdened = `<ol>${strList}</ol>`;

  const imprimirHtml = document.querySelector("#imprimirTexto");
  const mensajeHtml = document.querySelector("#mensaje");

  mensajeHtml.innerHTML =
    pronouns.length * adjectives.length * nouns.length * domains.length;

  return (imprimirHtml.innerHTML = arrOrdened);
};

// LISTA CLONANDO EL ARRAY Y USANDO EL METODO DE POP PARA IR ELIMINANDO LAS ULTIMAS LETRAS
//         if (strHackNouns.endsWith(strHackDomains) &&strHackDomains.length === 2) {
//           let newArr = [];
//           newArr = [...nouns[k]];
//           let lastLetter = newArr.pop();
//           let lastLetter2 = newArr.pop();
//           let newArr2 = newArr.join("");
//           strList += `<li>${pronouns[i]}${adjectives[j]}${newArr2}.${lastLetter2}${lastLetter}</li>`;

//         } else if (strHackNouns.endsWith(strHackDomains) &&strHackDomains.length === 3) {
//           let newArr = [];
//           newArr = [...nouns[k]];
//           let lastLetter = newArr.pop();
//           let lastLetter2 = newArr.pop();
//           let lastLetter3 = newArr.pop();
//           let newArr2 = newArr.join("");
//           strList += `<li>${pronouns[i]}${adjectives[j]}${newArr2}.${lastLetter3}${lastLetter2}${lastLetter}</li>`;

//         } else
//           strList += `<li>${pronouns[i]}${adjectives[j]}${nouns[k]}${domains[l]}</li>`;

// LISTA CON LAS EXTENSIONES RAMDON, CADA VEZ UNA DIFERENTE
// for (let i = 0; i < pronoun.length; i++) {
//   for (let j = 0; j < adj.length; j++) {
//     for (let k = 0; k < noun.length; k++) {
//       let randomNumber = Math.floor(Math.random() * extension.length);
//       str += `<li>${pronoun[i]}${adj[j]}${noun[k]}${extension[randomNumber]}</li>`;
//     }
//   }
// }

// console.log("Hello Rigo from the console!");
