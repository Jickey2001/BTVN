function calcu() {
  let name = document.getElementById("name").value;
  let salary = +document.getElementById("salary").value;
  let number = +document.getElementById("number").value;
  let total = salary - 4600000 - number * 1600000;
  let tienthue = pay(total, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35);
  display(tienthue);
}
function pay(total, price1, price2, price3, price4, price5, price6, price7) {
  let tienthue = 0;
  if (total <= 60000000) {
    tienthue += tienthue * price1;
  } else if (total <= 120000000) {
    tienthue += 60000000 * price1 + (total - 60000000) * price2;
  } else if (total <= 210000000) {
    tienthue +=
      60000000 * price1 + 60000000 * price2 + (total - 120000000) * price3;
  } else if (total <= 384000000) {
    tienthue +=
      60000000 * price1 +
      60000000 * price2 +
      90000000 * price3 +
      (total - 210000000) * price4;
  } else if (total <= 624000000) {
    tienthue +=
      60000000 * price1 +
      60000000 * price2 +
      90000000 * price3 +
      174000000 * price4 +
      (total - 384000000) * price5;
  } else if (total <= 960000000) {
    tienthue +=
      60000000 * price1 +
      60000000 * price2 +
      90000000 * price3 +
      174000000 * price4 +
      240000000 * price5 +
      (total - 624000000) * price6;
  } else {
    tienthue +=
      60000000 * price1 +
      60000000 * price2 +
      90000000 * price3 +
      174000000 * price4 +
      240000000 * price5 +
      336000000 * price6 +
      (total - 960000000) * price7;
  }
  return tienthue;
}
function display(tienthue) {
  document.getElementById("output").innerHTML =
    "Số tiền thuế của bạn là:" + tienthue;
}
