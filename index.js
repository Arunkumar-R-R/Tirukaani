let pur ;
let finalpurityvalue;
let newwslength;

function Form1SubmitFunction(e)
{
  e.preventDefault();
  let weightins = document.getElementById("itemweight").value;
  // console.log(typeof weight);
  weight = parseInt(weightins);
  let touchins  = document.getElementById("touch").value;
  // console.log(touchins);
  touch = parseFloat(touchins);
  // console.log(touch);
// let labourtouch = 3;
let p = document.querySelector('#purity');

let weightinstring = weight.toString();
let wslength = weightinstring.length;
// console.log("wslength " + wslength);

let purity = weight * touch;
let purityInString = purity.toString()
// let pslength = purityInString.length;
// console.log("pslength "+ pslength);

let result = purityInString.substr(0,wslength);
// console.log("purity without any operation performed on it "+result);
  if(result > weight)
  {
    newwslength = wslength - 1;
    // console.log("new length "+newwslength);
    finalpurityvalue = purityInString.substr(0,newwslength);
    pur = finalpurityvalue;
    console.log(`purity is ${finalpurityvalue} gm`);
    p.innerText = `purity is ${finalpurityvalue} gm`;
    // productweight(finalpurityvalue,newwslength);
  }
  else
  {
    pur = result;
    console.log(`purity is ${result} gm`);
    p.innerText = `purity is ${result} gm`;
     productweight(result,wslength);
  }

}

function Form2SubmitFunction(e)
{
  e.preventDefault();
  let averagetouchins  = document.getElementById("averagetouch").value;
  averagetouch = parseFloat(averagetouchins);

  let labourtouchins  = document.getElementById("labourtouch").value;
  labourtouch = parseFloat(labourtouchins);

  let finaltouch = averagetouchins + labourtouch;
  console.log("final touch is " + finaltouch);
  productweight()
  return false;
}

function productweight(p,l)
{
  let productweight;
  let purityinnumber;
  let noofmultiples = '1';
  let finalpw;
  let i = 0;
  let fpw = document.querySelector('#productweight');

  if(typeof p === "string")
    {
      purityinnumber =  parseInt(p);
    }
  productweight = purityinnumber / finaltouch;
  // console.log('product weight is ' +productweight);
  
  for(i; i < l; i++)
  {
    noofmultiples = noofmultiples + '0';
  }
  // console.log("final " + noofmultiples);
  
  let no = parseInt(noofmultiples);
  let pwinwhole = productweight*no;
  // console.log("product weight in whole number "+ pwinwhole);
  
  let pwinstring = pwinwhole.toString();
  finalpw = pwinstring.substr(0,wslength);
  if(weight<finalpw)
  {
    finalpw = pwinstring.substr(0,wslength-1);
  }
  console.log(`product weight is ${finalpw} gm`);
  fpw.innerText = `product weight is ${finalpw} gm`;
}



