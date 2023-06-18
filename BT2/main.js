function calcu() {
  let kw = +document.getElementById("kw").value;
  let name = document.getElementById("name").value;
  let tiendien = pay(kw, 500, 650, 850, 1100, 1300);
  display(tiendien);
}
function pay(kw, price1, price2, price3, price4, price5) {
  let tiendien = 0;
  if (kw <= 50) {
    tiendien += price1 * kw;
  } else if (kw < 100) {
    tiendien += price1 * 50 + (kw - 50) * price2;
  } else if (kw < 200) {
    tiendien += price1 * 50 + price2 * 50 + (kw - 100) * price3;
  } else if (kw < 350) {
    tiendien += price1 * 50 + 50 * price2 + 100 * price3 + (kw - 200) * price4;
  } else {
    tiendien +=
      price1 * 50 +
      50 * price2 +
      100 * price3 +
      150 * price4 +
      (kw - 350) * price5;
  }
  return tiendien;
}
function display(tiendien) {
  document.getElementById("output").innerHTML =
    "Tiền điện của bạn là: " + tiendien;
}
