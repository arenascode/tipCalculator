console.log(`hello world!`);

//Input Bill
const inputBill = document.getElementById("inputBill");

//percentage buttons
const percentageTipBtns = document.getElementsByClassName("tipSelected");
const arrayOfDefaultTips = Array.from(percentageTipBtns);
//custom input Tip
const customInputTip = document.querySelector(`input[data-tip="custom"]`);
//Input people quantity
const peopleQty = document.querySelector(".inputNumberOfPeople");
console.log(peopleQty.value);
const resetBtn = document.getElementById('resetBtn')

//Outputs elements
const tipAmountDiv = document.querySelector(".tipValue");
const totalPerPersonDiv = document.querySelector(".totalValue");
const emptyField = document.querySelector("#emptyField");
let selectedPercentage = 0;
let billWithoutTip = 0;
let totalPerPerson = 0;
let tipByPerson = 0;

// Obtain the percentage of tip
arrayOfDefaultTips.forEach((e) =>
  e.addEventListener("click", () => {
    selectedPercentage = Number(e.dataset.tip);
    arrayOfDefaultTips.forEach((btn) => {
      btn.classList.remove('clicked')
    })
    console.log(`element selected ${selectedPercentage}`);
    e.classList.add('clicked')
  })
);

function customTip(e) {
  selectedPercentage = Number(e.target.value) / 100;
  console.log(`CustomTip ${selectedPercentage}`);
  totalBillWithTips(e);
}
//console.log(percentageTipBtns[5].dataset.tip);

function totalBillWithTips(e) {
  e.preventDefault();
  //obtain value of input
  const isItEmpty = peopleQty.value == 0; /* || peopleQty.value == undefined; */
  console.log(isItEmpty);
  if (isItEmpty) {
    console.log(`number of people cant' be zero`);
    peopleQty.classList.add("inputEmpty");

    emptyField.style.display = "block";
  } else {
    peopleQty.classList.remove("inputEmpty");
    emptyField.style.display = "none";
    let billWithoutTip = Number(inputBill.value);
    console.log(`BillWhitoutTip ${billWithoutTip}`);
    //total Bill + Tips

    let totalTipAmount = selectedPercentage * billWithoutTip;
    let tipPerPerson = (totalTipAmount / peopleQty.value).toFixed(2);
    console.log(`I'm tip x Person ${tipPerPerson}`);
    let totalWithTip = Math.floor(billWithoutTip + totalTipAmount);
    console.log(`totalWithTip ${totalWithTip}`);
    totalPerPerson = ((totalWithTip / Number(peopleQty.value))).toFixed(2);
    console.log(`TotalByPerson ${totalPerPerson}`);
    tipAmountDiv.innerText = `$${tipPerPerson}`;
    totalPerPersonDiv.innerText = `$${totalPerPerson}`;
  }
}

arrayOfDefaultTips.forEach((element) => {
  element.addEventListener("click", totalBillWithTips);
});

function resetCalculation() {
  location.reload()
}
// let totalBill = totalBillWithTips(e)
// console.log(totalBill);
