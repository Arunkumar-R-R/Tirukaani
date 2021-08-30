
function weightInStringLengthCalc(parsedWeight){
    let weightinstring = parsedWeight.toString();
    let weightInStringLength = weightinstring.length;
    return weightInStringLength;
}

export const purity = (weight,touch) =>{
    let finalpurity;

    let parsedWeight = parseInt(weight);
    let parsedTouch = parseFloat(touch);

    let weightInStringLength = weightInStringLengthCalc(parsedWeight);

    let purity = parsedWeight * parsedTouch;
    let purityInString = purity.toString()

    let result = purityInString.substr(0,weightInStringLength);
    if(result > parsedWeight)
    {
        let newWeightInStringLength = weightInStringLength - 1;
        let finalpurityvalue = purityInString.substr(0,newWeightInStringLength);
        finalpurity = finalpurityvalue;
    }
    else
    {
        finalpurity = result;
    }

    return finalpurity;
}

export const addDeliveryTouch = (labourtouch,thiruvanideliverytouch) =>{
    let labourTouch = parseFloat(labourtouch);
    let thiruvaniDeliveryTouch = parseFloat(thiruvanideliverytouch);
    let updatedtouch = labourTouch + thiruvaniDeliveryTouch;
    return updatedtouch;
}

export const finalTouch = (touch,labourTouch) =>{
    let clienttouch = parseFloat(touch);
    let labourtouch = parseFloat(labourTouch);
    let finaltouch = clienttouch + labourtouch;
    return finaltouch;
}

export const estimatedProductWeight = (purity, finalTouch, weight) =>{
    let purityinnumber;
    let noofmultiples = '1';
    let finalProdcutWeight;
    let i = 0;

    let parsedWeight = parseInt(weight);
    let weightInStringLength = weightInStringLengthCalc(parsedWeight);

    if(typeof purity === "string")
    {
        purityinnumber =  parseInt(purity);
    }

    let productweight = purityinnumber / finalTouch;
    
    for( i ; i < weightInStringLength; i++)
    {
        noofmultiples = noofmultiples + '0';
    }
    
    let number = parseInt(noofmultiples);
    let productWeightInWhole = productweight * number;
    let productWeightInString = productWeightInWhole.toString();


    finalProdcutWeight = productWeightInString.substr(0,weightInStringLength);

    if( weight < finalProdcutWeight)
    {
        finalProdcutWeight = productWeightInString.substr(0,weightInStringLength - 1);
    }
    return finalProdcutWeight;
}

export const katchaPurity = (inputList)=>{
    let purityarray =  inputList.map(({weight,touch})=>{
        let katchapurity = purity(weight,touch);
        return katchapurity;
      });
    let totalpurity = purityarray.reduce((accumulator,currentValue)=>{
        let currentPurity = parseInt(currentValue);
        let store = parseInt(accumulator);
       return( store +  currentPurity);
    });
    return totalpurity;
}

export const katchaweight = (inputList) =>{
    let weightArray = inputList.map(({weight})=>weight);
    let totalWeight = weightArray.reduce((accumulator,currentValue)=>{
        let currentWeight = parseInt(currentValue);
        let store = parseInt(accumulator);
       return( store +  currentWeight);
    })
    return totalWeight;
}

export const katchaTouch = (purity,weight)=>{
    let finalTouch;
    let newWeightInStringLength;
    let finaltouchvalue;
    let parsedWeight = parseInt(weight);
    let parsedPurity = parseInt(purity);
    
  
    let weightInStringLength = weightInStringLengthCalc(parsedWeight);

    let touch = parsedPurity / parsedWeight;

    const afterDecimalPointTouchValue = touch.toString().split(".")[1];

    let result = afterDecimalPointTouchValue.substr(0,weightInStringLength);

    if(weightInStringLength === 5){
         newWeightInStringLength = weightInStringLength - 1;
         finaltouchvalue = afterDecimalPointTouchValue.substr(0,newWeightInStringLength);
         finalTouch = parseInt(finaltouchvalue);
    }
    else{
        finalTouch = result;
    }
    
    let katchatouch = (finalTouch / 100).toFixed(2);
    
    return katchatouch;
}