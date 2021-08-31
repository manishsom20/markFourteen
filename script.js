var initialPrice = document.querySelector("#initial-price");
var quantityStocks = document.querySelector("#quantity-stock");
var currentPrice = document.querySelector("#current-price");
var btnCalculate = document.querySelector("#calc");
var outputMsg = document.querySelector("#output");

function clickHandler() {
  var initialP = Number(initialPrice.value);
  var quantityS = Number(quantityStocks.value);
  var currentP = Number(currentPrice.value);
  hideMsg();
  if(initialP>0) {
    if(quantityS>0) {
      if(currentP>0) {
        logic(initialP,quantityS,currentP);
      } else {
        showMsg("Invalid Current Price");
      }
    } else {
      showMsg("Invalid Quantity of Stocks");
    }
  } else {
    showMsg("Invalid Intial Price");
  }
}

function hideMsg() {
  outputMsg.style.display = "none";
}

function showMsg(msg) {
  outputMsg.style.display = "block";
  outputMsg.innerText = msg;
}

function logic(ip,qs,cp) {
  if(cp>ip) {
    var profit = (cp-ip)*qs;
    var profitPercent = (profit/ip)*100;
    showMsg(`Hey, the profit is ${profit} and the percent is ${profitPercent}%`);
  } else if(ip>cp) {
    var loss = (ip-cp)*qs;
    var lossPercent = (loss/ip)*100;
    showMsg(`Hey, the loss is ${loss} and the percent is ${lossPercent}%`);
  } else {
    showMsg("No pain no gain and no gain no pain");
  }
}

btnCalculate.addEventListener("click",clickHandler);