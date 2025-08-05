console.log("Starting the application...");
let countEl = document.getElementById("count");
let incrementBtn = document.getElementById("increment");
let decrementBtn = document.getElementById("decrement");
let resetBtn = document.getElementById("reset");

function initializeApp() {
  let count = 0;

  return {
    decrease: () => {
      count--;
      countEl.innerText = count;
    },
    increase: () => {
      count++;
      countEl.innerText = count;
    },
    reset: () => {
      count = 0;
      countEl.innerText = count;
    },
  };
}

const app = initializeApp();
countEl.innerText = 0;

incrementBtn.addEventListener("click", app.increase);
decrementBtn.addEventListener("click", app.decrease);
resetBtn.addEventListener("click", app.reset);
