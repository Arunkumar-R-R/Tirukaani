let weight = 411;
let touch = 65;
  
let weightinstring = weight.toString();
let wslength = weightinstring.length;
console.log(wslength);

let purity = weight * touch;
let purityInString = purity.toString()
let pslength = purityInString.length;
console.log(pslength);

let result = purityInString.substr(0,wslength);

if(result > weight)
{
  let newwslength = wslength - 1;
  let re = purityInString.substr(0,newwslength);
  console.log(` purity is ${re}`);
}
else
{
   console.log(` purity is ${result}`);
}
