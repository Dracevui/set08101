function weightInPotatoes(weightInKg) {
  const potatoWeight = 0.2;
  const weightInPotatoes = weightInKg / potatoWeight;
  const roundedWeight = weightInPotatoes.toFixed(2);
  return `You weigh ${
    roundedWeight % 1 === 0 ? parseInt(roundedWeight) : roundedWeight
  } potatoes!`;
}
function calculate() {
  const weightInput = document.getElementById("weightInput");
  const result = document.getElementById("result");
  const weight = parseFloat(weightInput.value);
  if (!isNaN(weight)) {
    result.innerHTML = weightInPotatoes(weight);
  } else {
    result.innerHTML = "Please enter a valid weight.";
  }
}
