
function calculateLoan(){
const amount=document.querySelector('#amount').value;
console.log("amount");    
const interest_rate=document.querySelector('#interest').value;
const months=document.querySelector('#months').value;
const interest=(amount * (interest_rate * 0.01)) / months;
const payments=((amount / months) + interest).toFixed(2);
document.querySelector('#payment').innerText = ('EMI = '   +  payments);

}