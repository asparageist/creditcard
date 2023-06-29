const cardNo = "4102080880435620";
const cardNoArray = cardNo.split("");

function luhnOne(){
  const arrayOne = [];
  for (let i = cardNoArray.length - 1; i >= 0; i--) {
    if (i % 2 === 0) {
      arrayOne.push(cardNoArray[i] * 2);
    } else {
      arrayOne.push(cardNoArray[i]);
    }
  }
  return arrayOne;
}