function onClickNumber(event) {
  let operators = ["+", "-", "*", "/"];

  let number = event.target.value;
  let textAreaElement = document.querySelector(".text");
  if (textAreaElement.value === "" && (number === "/" || number === "*")) {
    return "";
  }
  if (
    operators.includes(number) &&
    operators.includes(textAreaElement.value.slice(-1))
  ) {
    return "";
  }
  textAreaElement.value = textAreaElement.value + number;
}
function onDelete() {
  let textAreaElement = document.querySelector(".text");
  textAreaElement.value = textAreaElement.value.slice(0, -1);
}

function onReset() {
  let textAreaElement = document.querySelector(".text");
  textAreaElement.value = "";
}

function onClickEqual() {
  let textAreaElement = document.querySelector(".text");
  let result = textAreaElement.value;
  result = eval(result);
  console.log("result", result);

  textAreaElement.value = result;
}
