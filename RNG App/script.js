function generateRandomNumber() {
    // Get min and max values
    const min = parseInt(document.getElementById("min-input").value);
    const max = parseInt(document.getElementById("max-input").value);
  
    // Check if inputs are valid
    if (isNaN(min) || isNaN(max)) {
      alert("Please enter valid numbers");
      return;
    }
  
    // Generate random number
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  
    // Display result
    document.getElementById("result-number").innerHTML = randomNumber;
  }
  