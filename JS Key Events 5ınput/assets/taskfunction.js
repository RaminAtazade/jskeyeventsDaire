function setBoxSize() {
    var sizeValue = document.getElementById("size").value;
    document.querySelector(".qutu").style.width = sizeValue + "px";
    document.querySelector(".qutu").style.height = sizeValue + "px";
  }
  
  document.getElementById("size").addEventListener("input", setBoxSize);
function setBallSize(){
    var sizeValue = document.getElementById("sizeofball").value;
    document.querySelector(".daire").style.width = sizeValue +"px"
    document.querySelector(".daire").style.height = sizeValue +"px";
}
document.getElementById("sizeofball").addEventListener("input", setBallSize)

function setColorOfBall() {
    var colorOfBallValue = document.getElementById("colorofball").value;
    document.querySelector(".daire").style.backgroundColor = colorOfBallValue;
  }
  document.getElementById("colorofball").addEventListener("input", setColorOfBall);
  
  function setBackgroundColor() {
    var bgColorValue = document.getElementById("bgcolor").value;
    document.querySelector(".qutu").style.backgroundColor = bgColorValue;
  }
  document.getElementById("bgcolor").addEventListener("input", setBackgroundColor);

//   burani silmemeliyem
function moveLeft() {
    var daire = document.querySelector(".daire");
    var daireWidth = parseInt(getComputedStyle(daire).getPropertyValue("width"), 10);
    daire.style.left = (daire.offsetLeft - daireWidth) + "px";
  }
  
  document.getElementById("sol").onclick = moveLeft;

  function moveRight() {
    var daire = document.querySelector(".daire");
    var daireWidth = parseInt(getComputedStyle(daire).getPropertyValue("width"), 10);
    daire.style.left = (daire.offsetLeft + daireWidth) + "px";
  }
  document.getElementById("sag").onclick = moveRight;
  
  function moveUp() {
    var daire = document.querySelector(".daire");
    var daireHeight = parseInt(getComputedStyle(daire).getPropertyValue("width"), 10);
    daire.style.top = (daire.offsetTop - daireHeight) + "px";
  }
  document.getElementById("ust").onclick = moveUp;
  
  function moveDown() {
    var daire = document.querySelector(".daire");
    var daireHeight = parseInt(getComputedStyle(daire).getPropertyValue("height"), 10);
    daire.style.top = (daire.offsetTop + daireHeight) + "px";
  }
  document.getElementById("alt").onclick = moveDown;

// step sayina gore buttona tiklanma testi 

// const stepsInput = document.querySelector('#steps');
// const solButton = document.querySelector('#sol');

// solButton.addEventListener('click', () => {
//   const steps = parseInt(stepsInput.value);
//   if (Number.isInteger(steps) && steps > 1) {
//     for (let i = 1; i < steps; i++) {
//       solButton.click();
//     }
//   }
// });
//  pult classim ucun 
// transition ile islemir ama mentiqen isleyir
// asagidaki function eger kecdiklerimize uygun deyilse ignore ederek qiymet yazin please
const stepsInput = document.querySelector('#steps');
const pultButtons = document.querySelectorAll('.pult button');

pultButtons.forEach(button => {
  button.addEventListener('click', () => {
    const steps = parseInt(stepsInput.value);
    if (Number.isInteger(steps) && steps > 1) {
      for (let i = 1; i < steps; i++) {
        button.click();
      }
    }
  });
});


  
  