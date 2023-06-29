const cardNo = "4102080880435620";
const cardNoArray = cardNo.split("");
let lunhArray = [];
luhnOne(cardNoArray);

function luhnOne(){
  for (let i = 0; i < cardNoArray.length; i++) {
    const arrayNo = cardNoArray[i];
    if (i % 2 === 1) {
      const double = arrayNo * 2;
      if (double > 9) {
        const addDig = Math.floor(double / 10) + (double % 10);
        cardNoArray[i] = addDig;
      }else{
        cardNoArray[i] = double;
      }  
    } 
  }
  console.log(cardNoArray);
}