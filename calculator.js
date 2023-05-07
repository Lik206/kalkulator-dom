const addBtn = document.getElementById("add-btn");
const subtractBtn = document.getElementById("subtract-btn");
const multiplyBtn = document.getElementById("multiply-btn");
const divideBtn = document.getElementById("divide-btn");
const resetBtn = document.getElementById('reset-btn')

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
resetBtn.addEventListener("click", reset)

function add() {
  const input1 = parseInt(document.getElementById("input1").value);
  const input2 = parseInt(document.getElementById("input2").value);
  const result = input1 + input2;
  document.getElementById("result").value = result;
}

function subtract() {
  const input1 = parseInt(document.getElementById("input1").value);
  const input2 = parseInt(document.getElementById("input2").value);
  const result = input1 - input2;
  document.getElementById("result").value = result;
}

function multiply() {
  const input1 = parseInt(document.getElementById("input1").value);
  const input2 = parseInt(document.getElementById("input2").value);
  const result = input1 * input2;
  document.getElementById("result").value = result;
}

function divide() {
  const input1 = parseInt(document.getElementById("input1").value);
  const input2 = parseInt(document.getElementById("input2").value);
  const result = input1 / input2;
  document.getElementById("result").value = result;
}

function reset() {
  input1.value = "";
  input2.value = "";
  document.getElementById('result').value = "";
}
