// =============================
// Part 1: JavaScript Basics
// =============================
document.getElementById("checkAgeBtn").addEventListener("click", function() {
  let age = prompt("Enter your age:"); // user input
  age = Number(age); // convert string to number

  // Conditional check
  let message;
  if (age >= 18) {
    message = "✅ You are an adult!";
  } else {
    message = "❌ You are a minor.";
  }

  document.getElementById("ageResult").textContent = message;
});

// =============================
// Part 2: Functions
// =============================

// Function to calculate total price with tax
function calculateTotal(price, taxRate) {
  return price + (price * taxRate);
}

// Another function to format currency
function formatCurrency(amount) {
  return "$" + amount.toFixed(2);
}

document.getElementById("calculateBtn").addEventListener("click", function() {
  let total = calculateTotal(100, 0.15); // price=100, tax=15%
  document.getElementById("totalResult").textContent = 
    "Total with tax: " + formatCurrency(total);
});

// =============================
// Part 3: Loops
// =============================
document.getElementById("loopBtn").addEventListener("click", function() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear list before appending

  // Countdown using a for loop
  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = "Countdown: " + i;
    list.appendChild(li);
  }

  // While loop example (optional extra)
  let j = 1;
  while (j <= 3) {
    let li = document.createElement("li");
    li.textContent = "Extra loop item " + j;
    list.appendChild(li);
    j++;
  }
});

// =============================
// Part 4: DOM Manipulation
// =============================

// Toggle visibility
document.getElementById("toggleBtn").addEventListener("click", function() {
  let message = document.getElementById("toggleMessage");
  if (message.style.display === "none") {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
});

// Add new list item dynamically
document.getElementById("addItemBtn").addEventListener("click", function() {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item " + (document.getElementById("itemList").children.length + 1);
  document.getElementById("itemList").appendChild(newItem);
});
