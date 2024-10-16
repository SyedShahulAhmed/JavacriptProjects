const box = document.querySelector('.container')

for (let i = 0; i <32; i++) {
    const colorbox = document.createElement("div");
    colorbox.classList.add("Color-container")
    box.appendChild(colorbox)
}
const colors = document.querySelectorAll(".Color-container");

generatecolors()

function generatecolors(){
    colors.forEach((colorbox)=>{
        const newcolorcode = randomColor();
        colorbox.style.backgroundColor = "#" + newcolorcode;
        colorbox.innerHTML = "#" + newcolorcode;
    });
}
function randomColor() {
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorcode = "";
    for (let index = 0; index < colorCodeLength; index++) {
      const randomNum = Math.floor(Math.random() * chars.length);
      colorcode += chars.substring(randomNum, randomNum + 1);
    }
    return colorcode;
  }