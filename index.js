
let weight = 10500;
let touch = 75;
let labourtouch = 3;
let finalpurityvalue;
let newwslength;

let finaltouch = touch + labourtouch;
console.log(finaltouch);

let weightinstring = weight.toString();
let wslength = weightinstring.length;
console.log("wslength " + wslength);

let purity = weight * touch;
let purityInString = purity.toString()
let pslength = purityInString.length;
console.log("pslength "+ pslength);

let result = purityInString.substr(0,wslength);
console.log("purity without any operation performed on it "+result);
if(result > weight)
{
  newwslength = wslength - 1;
  console.log("new length "+newwslength);
  finalpurityvalue = purityInString.substr(0,newwslength);
  console.log(` purity is ${finalpurityvalue}`);
  productweight(finalpurityvalue,newwslength);
}
else
{
   console.log(` purity is ${result}`);
   productweight(result,wslength);
}

function productweight(p,l)
{
  let productweight;
  let purityinnumber;
  let noofmultiples = '1';
  let i = 0;
  
  if(typeof p === "string")
    {
      purityinnumber =  parseInt(p);
    }
  productweight = purityinnumber / finaltouch;
  console.log('product weight is ' +productweight);
  for(i; i < l; i++)
  {
    noofmultiples = noofmultiples + '0';
  }
  console.log("final " + noofmultiples);
  let no = parseInt(noofmultiples);
  let pwinwhole = productweight *no;
  console.log("product weight in whole number "+ pwinwhole);
  let pwinstring = pwinwhole.toString();
  let finalpw = pwinstring.substr(0,l);
  console.log('product weight is ' + finalpw);
}
