// === Part 2: JavaScript Functions ===

// Global variable
let globalSpeed = 1000;

// Function with parameters and return value
function calculateSpeed(base, multiplier) {
  return base * multiplier;
}

// Function to display the result of a calculation
function showCalculation() {
  const result = calculateSpeed(200, 3); // 200 * 3 = 600
  document.getElementById('calc-result').textContent = `Calculated speed: ${result}ms`;
}

// Function demonstrating local scope
function localScopeExample() {
  let localMessage = "I'm local to this function!";
  console.log(localMessage);
}

// Function to toggle visibility of the modal
function toggleModal() {
  const modal = document.getElementById('modal');
  modal.classList.toggle('show');
}

// === Part 3: Combining CSS + JS ===

// Function to trigger a CSS animation by adding a class
function triggerAnimation() {
  const box = document.querySelector('.box');
  box.classList.remove('slide-in'); // reset
  void box.offsetWidth; // force reflow
  box.classList.add('slide-in');
}