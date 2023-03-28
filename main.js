const divResultat = document.getElementById("resultat");

let tabJeu = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

let tabJeuResultat = [
  [1, 4, 3, 4],
  [1, 2, 3, 2],
  [7, 8, 6, 5],
  [8, 7, 5, 6],
];

let oldSelection = [];
let nbAffiche = 0;
let ready = true;
AfficherTableau();

function AfficherTableau() {
  let txt = "";
  for (let i = 0; i < tabJeu.length; i++) {
    txt += `<div>`;
    for (let j = 0; j < tabJeu[i].length; j++) {
      if (tabJeu[i][j] === 0) {
        txt +=
          "<button type='button' class='btn btn-primary m-2' style='whidth:100px; height:100px'  onClick='verif(\"" +
          i +
          "-" +
          j +
          "\")' >Afficher</button>";
      } else {
        txt += `<img src="${getImage(
          tabJeu[i][j]
        )}" style="whidth:100px;height:100px" >`;
      }
    }
    txt += `</div>`;
  }
  divResultat.innerHTML = txt;
}

function getImage(valeur) {
  let imgTxt = "img/";
  switch (valeur) {
    case 1:
      imgTxt += "img1.png";
      break;

    case 2:
      imgTxt += "img2.png";
      break;
    case 3:
      imgTxt += "img3.png";
      break;
    case 4:
      imgTxt += "img4.png";
      break;
    case 5:
      imgTxt += "img5.png";
      break;
    case 6:
      imgTxt += "img6.png";
      break;
    case 7:
      imgTxt += "img7.png";
      break;
    case 8:
      imgTxt += "img8.png";
      break;
    default:
      console.log("cas non pris en compte");
  }
  return imgTxt;
}

function verif(bouton) {
  nbAffiche++;
  if (ready) {
    let ligne = bouton.substr(0, 1);
    let colonne = bouton.substr(2, 1);
    console.log(ligne);
    console.log(colonne);
    tabJeu[ligne][colonne] = tabJeuResultat[ligne][colonne];
    AfficherTableau();

    if (nbAffiche > 1) {
      ready = false;
      setTimeout(() => {
        if (
          tabJeu[ligne][colonne] !==
          tabJeuResultat[oldSelection[0]][oldSelection[1]]
        ) {
          tabJeu[ligne][colonne] = 0;
          tabJeu[oldSelection[0]][oldSelection[1]] = 0;
        }
        AfficherTableau();
        ready = true;
        nbAffiche = 0;
      oldSelection = [ligne, colonne];

      }, 1000);

      //verification
    } else {
      oldSelection = [ligne, colonne];
    }
  }
}
