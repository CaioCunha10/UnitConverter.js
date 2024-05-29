//Selecionando elementos
const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outputElement = document.querySelector("#output");
const convertButton = document.querySelector("#convert-btn");
const messageElement = document.querySelector("#message");

// Função para converter as unidades

function convert() {
  const fromValue = fromElement.value;
  const toValue = toElement.value;
  if (fromValue === toValue) {
    outputElement.value = inputElement.value;
    messageElement.textContent = "";
    return;
  }
  //converter entrada para metro
  let meters;
  switch (fromValue) {
    case "m":
      meters = inputElement.value;
      break;
    case "km":
      meters = inputElement.value * 1000;
      break;
    case "cm":
      meters = inputElement.value / 100;
      break;
    case "mm":
      meters = inputElement.value / 1000;
      break;
  }
  //converter entrada para metro
  let result;
  switch (toValue) {
    case "m":
      result = meters;
      break;
    case "km":
      result = meters / 1000;
      break;
    case "cm":
      result = meters * 100;
      break;
    case "mm":
      meters = meters * 1000;
      break;
  }
  outputElement.value = result.toFixed(2);
  const fromLabel = fromElement.options[fromElement.selectedIndex].text;
  const toLabel = fromElement.options[toElement.selectedIndex].text;
  const message = `${
    inputElement.value
  } ${fromLabel} equivalem a ${result.toFixed(2)} ${toLabel}`;
  messageElement.textContent = message;
}
convertButton.addEventListener("click", convert);
