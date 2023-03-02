
  // ┌────────────────────────────────────────────────────────────────────────────┐
  // │    input type color - mudança de cor do parágrafo                          │
  // └────────────────────────────────────────────────────────────────────────────┘
/*  */

let colorWell;
const defaultColor = "⁡⁣⁢#ff2c00";

window.addEventListener("load", startup, false);

function startup() {
    colorWell = document.querySelector("#colorWell");
    colorWell.value = defaultColor;
    colorWell.addEventListener("input", updateFirst, false);
    colorWell.addEventListener("change", updateAll, false);
    colorWell.select();
  }
  
  function updateFirst(event) {
    const colorChange = document.getElementById("colorChange");
    if (colorChange) {
        colorChange.style.color = event.target.value;
    }
  }

  function updateAll(event) {
  document.getElementById("colorChangep").forEach((colorChange) => {
    colorChange.style.color = event.target.value;
  });
}

  // ┌────────────────────────────────────────────────────────────────────────────┐
  // │    END OF input type color - mudança de cor do parágrafo                   │
  // └────────────────────────────────────────────────────────────────────────────┘
/*  */

