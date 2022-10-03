let square = document.querySelectorAll("#square");
let b1 = document.querySelectorAll("#b1");
let temp = Math.floor(Math.random() * 6 + 1);
let header = document.querySelector("#header");
let h5 = document.querySelector("#result");
let counts = document.querySelector("#counts");
let result = 0;
let flag = 0;
for (let i = 0; i < 8; i++) {
  let x = Math.floor(Math.random() * 255 + 1);
  let y = Math.floor(Math.random() * 255 + 1);
  let z = Math.floor(Math.random() * 255 + 1);
  result = "rgb(" + x + "," + y + "," + z + ")";
  square[i].style.backgroundColor = result;
  h5.textContent = "YOU HAVE " + (2 - flag) + " TURNS LEFT";
  square[i].addEventListener("click", () => {
    if (temp === i) {
      alert("you wonnnnn");
      window.location.reload();
    } else {
      flag++;
      if (flag === 2) {
      alert("you losee better luck next time");
      window.location.reload();
      }
    }
    h5.textContent = "YOU HAVE " + (2 - flag) + " TURNS LEFT";
  });
  if (temp === i) {
    header.textContent = result;
  }
}
