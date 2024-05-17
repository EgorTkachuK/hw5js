
let num1 = parseFloat(prompt("Введіть перше число"));
let operator = prompt("Введіть дію ( + , - , * , /):");
let num2 = parseFloat(prompt("Введіть друге число"));
let result;
switch (operator) {
  case "+":
    result = alert( num1 + num2);
    break;
  case "-":
    result = alert(num1 - num2);
    break;
  case "*":
    result = alert(num1 * num2);
    break;
  case "/":
    if (num2 !== 0) {
      result = alert ( num1 / num2);
    } else {
      result =alert ("Не можна ділити на 0");
    }
    break;
  default:
    result = alert ( "Invalid operator");
}
console.log(`Результат : ${result}`);