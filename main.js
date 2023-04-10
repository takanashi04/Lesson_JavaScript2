let result = document.getElementById("result");

function calcDisplay(btn) {
  let btnValue = btn.innerHTML;

  if (btnValue == "AC") {
    result.value = 0;
  } else if (btnValue == "=") {
    result.value = eval(result.value);
  } else if  (result.value == 0 )
        if (btnValue == "+"
         || btnValue == "-"
         || btnValue == "*"
         || btnValue == "/"
         || btnValue == ".") {
          btnValue == "0";
        } else {
        result.value = btnValue;
   } else if (result.value.slice(-1) == "+"
          || result.value.slice(-1) == "-"
          || result.value.slice(-1) == "*"
          || result.value.slice(-1) == "/"
          || result.value.slice(-1) == ".") {
            if (btnValue == "+"
             || btnValue == "-"
             || btnValue == "*"
             || btnValue == "/"
             || btnValue == ".") {
              btnValue == "";
            } else {
              result.value += btnValue;
        }
   } else {
      result.value += btnValue;
   }
}
