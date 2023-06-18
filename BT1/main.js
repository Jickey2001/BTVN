function bt1() {
  let point = +document.getElementById("point").value;
  let area = +document.getElementById("area").value;
  let obj = +document.getElementById("obj").value;
  let fpoint = +document.getElementById("fpoint").value;
  let spoint = +document.getElementById("spoint").value;
  let tpoint = +document.getElementById("tpoint").value;
  let ans = 0;
  if (fpoint == 0 || spoint == 0 || tpoint == 0) {
    document.getElementById("output").innerHTML =
      "Bạn đã rớt do có 1 trong 3 môn bị điểm 0";
  } else {
    let ans = fpoint + spoint + tpoint + obj + area;
    if (ans < point) {
      document.getElementById("output").innerHTML =
        "Bạn đã rớt do tổng điểm thấp hơn điểm chuẩn. Tổng điểm: " + ans;
    } else {
      document.getElementById("output").innerHTML =
        "Bạn đã đậu. Tổng điểm: " + ans;
    }
  }
  document.getElementById("output").value = ans;
}
