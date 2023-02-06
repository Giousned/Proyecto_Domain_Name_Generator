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
            strHackDomains.length === 2
          ) {
            let newArr = [];
            newArr = [...nouns[k]];

            let lastLetter = newArr.pop();
            let lastLetter2 = newArr.pop();

            let newArr2 = newArr.join("");
            strList += `<li>${pronouns[i]}${adjectives[j]}${newArr2}.${lastLetter2}${lastLetter}</li>`;
          } else if (
            strHackNouns.endsWith(strHackDomains) &&
            strHackDomains.length === 3
          ) {
            let newArr = [];
            newArr = [...nouns[k]];

            let lastLetter = newArr.pop();
            let lastLetter2 = newArr.pop();
            let lastLetter3 = newArr.pop();

            let newArr2 = newArr.join("");
            strList += `<li>${pronouns[i]}${adjectives[j]}${newArr2}.${lastLetter3}${lastLetter2}${lastLetter}</li>`;
          } else
            strList += `<li>${pronouns[i]}${adjectives[j]}${nouns[k]}${domains[l]}</li>`;
        }
      }
    }
  }

  arrOrdened = `<ol>${strList}</ol>`;

  const imprimirHtml = document.querySelector("#imprimirTexto");

  return (imprimirHtml.innerHTML = arrOrdened);
};

// for (let i = 0; i < pronouns.length; i++) {
//   for (let j = 0; j < adjectives.length; j++) {
//     for (let k = 0; k < nouns.length; k++) {
//       for (let l = 0; l < domains.length; l++) {
//         let strHackNouns = nouns[k];
//         let strHackDomains = domains[l].slice(1);

//         if (
//           strHackNouns.endsWith(strHackDomains) &&
//           strHackDomains.length === 2
//         ) {
//           let newArr = [];
//           newArr = [...nouns[k]];

//           let lastLetter = newArr.pop();
//           let lastLetter2 = newArr.pop();

//           let newArr2 = newArr.join("");
//           strList += `<li>${pronouns[i]}${adjectives[j]}${newArr2}.${lastLetter2}${lastLetter}</li>`;
//         } else if (
//           strHackNouns.endsWith(strHackDomains) &&
//           strHackDomains.length === 3
//         ) {
//           let newArr = [];
//           newArr = [...nouns[k]];

//           let lastLetter = newArr.pop();
//           let lastLetter2 = newArr.pop();
//           let lastLetter3 = newArr.pop();

//           let newArr2 = newArr.join("");
//           strList += `<li>${pronouns[i]}${adjectives[j]}${newArr2}.${lastLetter3}${lastLetter2}${lastLetter}</li>`;
//         } else
//           strList += `<li>${pronouns[i]}${adjectives[j]}${nouns[k]}${domains[l]}</li>`;
//       }
//     }
//   }
// }

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
