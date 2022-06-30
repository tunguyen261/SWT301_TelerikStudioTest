function CheckDay() {
  let CheckDay = +document.getElementById("Day").value;
  console.log("Day");
  let CheckMonth = +document.getElementById("Month").value;
  console.log("Month");
  let checkYear = +document.getElementById("Year").value;
  console.log("Year");
  switch (CheckMonth) {
    case 2:
      if (valid(checkYear, CheckMonth, CheckDay) == false) {
        window.location = "Fail.html";
      } else if (
        valid(checkYear, CheckMonth, CheckDay) == 29 ||
        valid(checkYear, CheckMonth, CheckDay) == 28
      )
        window.location = "Success.html";
      else {
        window.location = "Success.html";
      }
      break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      if (CheckDay > 31) window.location = "Fail.html";
      else if (CheckDay < 0) window.location = "Fail.html";
      else window.location = "Success.html";
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      if (CheckDay > 30) window.location = "Fail.html";
      else window.location = "Success.html";
      break;
    default:
      document.getElementById("result").innerHTML = "Nhập lại đi ạ!";
  }

  function valid(y, m, d) {
    if (y < 1 || m < 1 || m > 12 || d < 1 || d > 31) {
      return false;
    }
    var maxD = 31;
    if (m == 4 || m == 6 || m == 9 || m == 11) {
      maxD = 30;
    } else if (m == 2) {
      if (isLeap(y)) {
        maxD = 29; // cũ là 29
      } else {
        maxD = 28; // cũ là 28
      }
    }
    return d <= maxD;
  }
  function isLeap(y) {
    var result = false;
    if (y % 400 == 0 || (y % 4 == 0 && y % 100 != 0)) {
      result = true;
    }
    return result;
  }
}
function Cancel() {
  window.location = "CheckDay.html";
}
