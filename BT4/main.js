function calcu() {
  let service = +document.getElementById("service").value;
  let number = +document.getElementById("number").value;
  let connect = +document.getElementById("connect").value;
  let radioNhadan = document.getElementById("nhadan");
  let radioDoanhnghiep = document.getElementById("doanhnghiep");
  console.log("nhadan", radioNhadan.checked);
  console.log("doanhnghiep", radioDoanhnghiep.checked);
  if (radioNhadan.checked) {
    let total = number * 7.5 + 4.5 + 20.5;
    display(total);
  } else {
    if (connect < 10) {
      let total = number * 50 + 15 + 75;
      display(total);
    } else {
      let total = number * 50 + (connect - 10) * 5 + 75 + 15;
      display(total);
    }
  }
}
function display(total) {
  document.getElementById("output").innerHTML =
    "Tổng số tiền phải trả là: " + total;
}
