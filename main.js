let result = document.getElementById("result");

function calcDisplay(btn) {
  let btnValue = btn.innerHTML;

  if (btnValue == "AC") {
    result.value = 0;
  } else if (btnValue == "=") {
    result.value = eval(result.value);
  } else {
      if (result.value == 0 ) {
        result.value = btnValue;
        //2度押すと＋が消える。
        //足し算ができなくなる
    } else if (result.value.slice(-1) === "+") {
      result.value = result.value.slice(0,1);
    } else {
      result.value += btnValue;
    }
  }
}

// function operator(btn) {
//   let btnValue = btn.innerHTML;
//   if (result.value.slice(-1) === "+" || "-" || "*" || "/" ) {
//     return;
//   } else {
//     result.value += btnValue;
//   }
// }

//初期値の０を消して次の文字を入力
//→if文で０と入力した値を差し替える
//記号(+,-,*,/,.)が最初に入力された時は表示しない
//記号を連続で入力しないようにする
