const display = document.querySelector('.display');
const button = document.querySelectorAll('.btn');

const add = (a, b) => {
  return a + b;
}

const subtract = (a, b) => {
  return a - b;
}

const multiply = (a, b) => {
  return a * b;
}

const divide = (a, b) => {
  return a / b;
}

const operate = (operator, num1, num2) => {
  if (operator === "+") {
    add(num1, num2);
  }
  else if (operator === "-") {
    subtract(num1, num2);
  }
  else if (operator === "*") {
    multiply(num1, num2);
  }
  else if (operator === "/") {
    divide(num1, num2);
  }
  else {
    return "ERROR";
  }
}

const updateDisplay = (digit) => {
  const value = digit.target.value;
  display.textContent  = value;
}

button.forEach(btn => btn.addEventListener('click', updateDisplay));


//console.log(add(2, 2)); // 4
//console.log(subtract(3, 2)); // 1
//console.log(multiply(2, 4)); // 8 
//console.log(divide(4, 2)); // 2