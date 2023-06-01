console.log(`hello world!`);

//Input Bill
const inputBill = document.getElementById('inputBill')

//percentage buttons
const percentageTipBtns = document.getElementsByClassName('tipSelected')
const arrayOfTips = Array.from(percentageTipBtns)
//custom input Tip
const customInputTip = document.querySelector(`input[data-tip="custom"]`)
//Input people quantity
const peopleQty = document.querySelector('.inputNumberOfPeople')
console.log(peopleQty.value);

let selectedTip = 0
let billWithoutTip = 0
let totalByPerson = 0
let tipByPerson = 0

// Obtain the percentage of tip
arrayOfTips.forEach(e =>
  e.addEventListener('click', () => {
    selectedTip = Number(e.dataset.tip)
    console.log(`element selected ${selectedTip}`);
  })
)

function totalBillWithTips(e) {
  e.preventDefault()
  console.log(`Tip Percentage ${selectedTip}`);
    //obtain value of input 
  let billWithoutTip = Number(inputBill.value)
  console.log(`BillWhitoutTip ${billWithoutTip}`);
    //total Bill + Tips
    if (e.target.dataset.tip == 'custom') {
      let customTip = Number((customInputTip.value)/100)
      selectedTip = customTip
    }
    let totalWithTip = billWithoutTip * selectedTip
  console.log(`totalWithTip ${totalWithTip}`);
  totalByPerson = totalWithTip / Number(peopleQty.value)
  console.log(`TotalByPerson ${totalByPerson}`);
}



// arrayOfTips.forEach(element => {
//   element.addEventListener('click', totalBillWithTips)
// })


// let totalBill = totalBillWithTips(e)
// console.log(totalBill);