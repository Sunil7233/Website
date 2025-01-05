const btn1 = document.getElementById("btn-1");

const box = document.querySelector(".box");

const text = document.querySelector(".input");

const croix = document.querySelector(".croix")

const calculatrice = document.querySelector(".calculatrice")

let nombreP = "";
let nombreS = "";
let signe = "";
let nombre = "";
let nombreA = "";
let compte = 0;
let resultat = "";
let premierNombre = 0;
let valider = true;
let ouvert = false;

calculatrice.addEventListener("click", () => {
  console.log(100);
  if(ouvert=== false){
    box.style.display= "grid";
    ouvert = true; 
  }
  else{
    box.style.display="none"; 
    ouvert = false
  }
})


croix.addEventListener("click", () => {
  console.log(200);
  box.style.display= "none";
  ouvert = false
})

box.addEventListener("click", (e) => {
   console.log(e.target.outerText);
  if (
    e.target.outerText === "+" ||
    e.target.outerText === "/" ||
    e.target.outerText === "-" ||
    e.target.outerText === "*"
  ) {
    if (compte === 1) {
      nombre += signe;
      switch (signe) {
        case "+":
          resultat = Number(nombreP) + Number(nombreS);
          console.log(resultat);
          break;

        case "-":
          resultat = Number(nombreP) - Number(nombreS);
          break;

        case "/":
          resultat = Number(nombreP) / Number(nombreS);
          break;

        case "*":
          resultat = Number(nombreP) * Number(nombreS);
          break;
      }
      nombre = resultat;
      signe = e.target.outerText;
      nombreP = nombre;
      nombreS = "";
      nombre += e.target.outerText;
      nombreA = "(" + nombreA +")" + signe;
      console.log(nombre);
      valider = true;
    } else if (premierNombre === 0) {
      alert("Tappez d'abord un nombre");
      nombre = "";
      nombreA = "";
      signe = "";
    } else {
      compte += 1;
      nombre += e.target.outerText;
      nombreA = nombreA + e.target.outerText;
      signe = e.target.outerText;
      console.log("mince");
    }
  } else if (e.target.outerText === "=") {
    if (signe === "+") {
      resultat = Number(nombreP) + Number(nombreS);
    } else if (signe === "-") {
      resultat = Number(nombreP) - Number(nombreS);
    } else if (signe === "/") {
      resultat = Number(nombreP) / Number(nombreS);
    } else if (signe === "*"){
      resultat = Number(nombreP) * Number(nombreS);
    } else{
      resultat = nombreP;
    }
    nombre = resultat;
    nombreA = nombre;
    nombreS = "";
    console.log("fini");
    valider = false;
  }  else {
    if (compte === 0 && valider === true) {
      if(e.target.outerText === "π"){
        
        if (nombre <1){
          nombreA = nombre + e.target.outerText;
          nombreP += Math.PI;
          nombre += Math.PI;
        }else{
          nombreA = nombre + e.target.outerText;
          nombreP = nombreP * Math.PI;
          nombre += nombreP;
          
        }
      } else if(e.target.outerText === "x²"){
        nombreA = "(" + nombreA + ")" + "²";
        nombre = nombreP * nombreP;
        nombreP = nombre;
        console.log(nombreP);
      }else{
        nombreP += e.target.outerText;
        nombre += e.target.outerText;
        nombreA = nombre;
      }
      premierNombre = 1;
    } else if (compte === 1 && valider === true) {
      if(e.target.outerText === "π"){
        if (nombreS <1){
          nombreA = nombreA + e.target.outerText;
          nombreS += Math.PI;
          
        }else{
          nombreA = nombreA + e.target.outerText;
          nombreS = nombreS * Math.PI;
          nombre += nombreS
        }
      } else{
        nombreS += e.target.outerText;
        nombre += e.target.outerText;
        nombreA = nombreA + e.target.outerText;
      }
      
    }
  }

  text.innerHTML = `
    <h1>${nombreA}</h2>`;
});

box.addEventListener(
  "click",
  (e) => {
    if (e.target.outerText == "AC") {
      signe = "";
      nombre = "";
      nombreA = "";
      nombreP = "";
      nombreS = "";
      premierNombre = 0;
      compte = 0;
      resultat = "";
      text.innerHTML = `
        <h1>${nombreA}</h2>`;
      valider = true;
      e.stopPropagation();
    }
  },
  true
);
