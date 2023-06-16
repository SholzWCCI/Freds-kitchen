document.addEventListener("DOMContentLoaded", () => {
  // Instantiate new object
  const donutMaker = new DonutMaker();

  // target HTML elements
  const donutCount = document.querySelector(".donut-count");
  const donutBtn = document.querySelector(".make-donut");
  const donutValue = document.querySelector(".donut-value");

  const acValue = document.querySelector(".ac-count");
  const acBtn = document.querySelector(".ac-btn");
  const acCost = document.querySelector(".ac-cost");

  const multiplierCount = document.querySelector(".m-count");
  const multiplierBtn = document.querySelector(".m-btn");
  const multiplierCost = document.querySelector(".m-cost");

  const resetBtn = document.querySelector(".reset");

  // Create update functions
  const updateDonutCount = () => {
    donutCount.textContent = Math.round(donutMaker.getDonutCount());
  };

  const updateAutoClickerCount = () => {
    acValue.textContent = Math.round(donutMaker.getAutoClickerCount());
  };

  const updateAutoClickerCost = () => {
    acCost.textContent = Math.round(donutMaker.getAutoClickerCost());
  };

  const updateMultiplierCount = () => {
    multiplierCount.textContent = Math.round(donutMaker.getMultiplierCount());
  };

  const updateMultiplierCost = () => {
    multiplierCost.textContent = Math.round(donutMaker.getMultiplierCost());
  };

  const updateDonutValue = () => {
    donutValue.textContent = donutMaker.getDonutValue().toFixed(1);
  };

  // Create Auto Clicker
  const autoClicker = setInterval(autoClick, 1000);

  function autoClick() {
    updateDonutCount();
    donutMaker.makeAutoClickerWork();
    enableAutoClickerBtn();
    enableMultiplierBtn();
  }

  // Create button functionality
  donutBtn.addEventListener("click", () => {
    donutMaker.donutClicked();
    updateDonutCount();
  });

  acBtn.addEventListener("click", () => {
    donutMaker.addAutoClicker();
    updateAutoClickerCount();
    updateAutoClickerCost();
  });

  multiplierBtn.addEventListener("click", () => {
    donutMaker.addMultiplier();
    updateMultiplierCount();
    updateMultiplierCost();
    updateDonutValue();
  });

  // Enabling autoclickers and multipliers
  function enableAutoClickerBtn() {
    if (donutMaker.getDonutCount() >= donutMaker.getAutoClickerCost()) {
      acBtn.removeAttribute("disabled");
    } else {
      acBtn.disabled = true;
    }
  }

  function enableMultiplierBtn() {
    if (donutMaker.getDonutCount() >= donutMaker.getMultiplierCost()) {
      multiplierBtn.removeAttribute("disabled");
    } else {
      multiplierBtn.disabled = true;
    }
  }

  // Clear screen functionality
  resetBtn.addEventListener("click", () => {
    location.reload();
  });

  // Initial update of values
  updateDonutCount();
  updateAutoClickerCount();
  updateAutoClickerCost();
  updateMultiplierCount();
  updateMultiplierCost();
  updateDonutValue();
});
