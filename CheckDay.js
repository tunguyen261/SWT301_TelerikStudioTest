function CheckDay() {
  let CheckDay = +document.getElementById("Day").value;
  console.log("Day");
  let CheckMonth = +document.getElementById("Month").value;
  console.log("Month");
  let checkYear = +document.getElementById("Year").value;
  console.log("Year");
  if (valid(checkYear, CheckMonth, CheckDay) == 30) {
    window.location = "Success.html";
  } else if (valid(checkYear, CheckMonth, CheckDay) == 31) {
    window.location = "Success.html";
  } else if (valid(checkYear, CheckMonth, CheckDay) == 29) {
    window.location = "Success.html";
  } else if (valid(checkYear, CheckMonth, CheckDay) == 28) {
    window.location = "Success.html";
  } else if (valid(checkYear, CheckMonth, CheckDay) == false) {
    window.location = "Fail.html";
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
        maxD = 29;
      } else {
        maxD = 28;
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
