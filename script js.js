document.addEventListener("DOMContentLoaded", () => {
    const calculationType = document.getElementById("calculationType");
    const toSpend = document.getElementById("toSpend");
    const salesTax = document.getElementById("salesTax");
    const calculate = document.getElementById("calculate");
    const reset = document.getElementById("reset");
    const results = document.getElementById("results");
    const displayAmount = document.getElementById("displayAmount");
    const displayTax = document.getElementById("displayTax");
    const totalAmount = document.getElementById("totalAmount");
  
    calculate.addEventListener("click", () => {
      const amount = parseFloat(toSpend.value);
      const taxRate = parseFloat(salesTax.value) / 100;
  
      if (isNaN(amount) || amount <= 0 || isNaN(taxRate) || taxRate <= 0) {
        alert("Please enter valid positive numbers for both fields.");
        return;
      }
  
      let beforeTax, tax, total;
  
      if (calculationType.value === "calculateTax") {
        tax = amount * taxRate;
        total = amount + tax;
        beforeTax = amount;
      } else if (calculationType.value === "calculateInitial") {
        total = amount;
        beforeTax = total / (1 + taxRate);
        tax = total - beforeTax;
      }
  
      displayAmount.textContent = `₹${beforeTax.toFixed(2)}`;
      displayTax.textContent = `₹${tax.toFixed(2)}`;
      totalAmount.textContent = `₹${total.toFixed(2)}`;
      results.classList.remove("hidden");
    });
  
    reset.addEventListener("click", () => {
      results.classList.add("hidden");
      toSpend.value = "";
      salesTax.value = "";
      calculationType.value = "calculateTax";
    });
  });