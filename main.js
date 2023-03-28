const divResultat = document.getElementById("resultat");

let tabJeu = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

AfficherTableau();

function AfficherTableau() {
  let txt = "";
  for (let i = 0; i < tabJeu.length; i++) {
    txt += `<div>`;
    for (let j = 0; j < tabJeu[i].length; j++) {
      if (tabJeu[i][j] === 0) {
        txt += `<button type="button" class="btn btn-primary m-2" style="whidth:100px;height:100px">Afficher</button>`;
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
