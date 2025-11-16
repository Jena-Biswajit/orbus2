function prnWeekDay() {
  let day = document.getElementById("week_day").value;
  // alert(day)
  let el = document.getElementById("result");
  switch (day) {
    case "mon":
      el.innerHTML = "<h1 style='color:green;'>This is first day of week</h1>";
      break;
    case "tue":
      el.innerHTML = "This is second day of week";
      break;
    case "wed":
      el.innerHTML = "This is third day of week";
      break;
    case "thrus":
      el.innerHTML = "This is fourth day of week";
      break;
    case "fri":
      el.innerHTML = "This is fifth day of week";
      break;
    case "sat":
      el.innerHTML = "This is sixth day of week";
      break;
    case "sun":
      el.innerHTML = "This is seventh day of week";
      break;
  }
}
