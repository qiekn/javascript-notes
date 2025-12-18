console.log("Hello World!\n");

function isJavaScriptFun(answer) {
  if (answer.toLowerCase() === "yes") {
    console.log("😎 没错！JavaScript 真有趣！");
  } else if (answer.toLowerCase() === "no") {
    console.log("🤨 哦？也许你还没发现它好玩的地方……！");
  } else {
    console.log("❓ 请输入 yes 或 no，不然我听不懂！");
  }
}

let answer = "yes";
isJavaScriptFun(answer);
