
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
        let digitAfterRound = parseInt(purityInString.charAt(newWeightInStringLength));
        if(digitAfterRound >= 7){
            console.log(digitAfterRound,'digit after the cut in the purity greater than 7');
            finalpurity = parseInt(finalpurityvalue) + 1;
        } else{
            finalpurity = finalpurityvalue;
        }
    }
    else
    {
        let digitAfterRound = parseInt(purityInString.charAt(weightInStringLength));
        if(digitAfterRound >= 7){
            console.log(digitAfterRound,'digit after the cut in the purity greater than 7');
            finalpurity = parseInt(result)  + 1;
        }else{
            finalpurity = result;
        }
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
    }else{
        purityinnumber =  purity;
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
    console.log(finalProdcutWeight,'finalProdcutWeight')
    return finalProdcutWeight;
}

export const katchaPurity = (inputList)=>{
    let purityarray =  inputList.map(({weight,touch})=>{
        let katchapurity = purity(weight,touch);
        console.log(katchapurity,'katchapurity');
        return katchapurity;
      });
      console.log(purityarray,'purityarray');
    let totalpurity = purityarray.reduce((accumulator,currentValue)=>{
        let currentPurity = parseInt(currentValue);
        let store = parseInt(accumulator);
       return( store +  currentPurity);
    });
    console.log(totalpurity,'totalpurity')

    return totalpurity;
}

export const katchaweight = (inputList) =>{
    let weightArray = inputList.map(({weight})=>weight);
    console.log(weightArray,'weightArray')

    let totalWeight = weightArray.reduce((accumulator,currentValue)=>{
        let currentWeight = parseInt(currentValue);
        let store = parseInt(accumulator);
       return( store +  currentWeight);
    })
    console.log(totalWeight,'totalWeight')

    return totalWeight;
}

export const katchaTouch = (purity,weight)=>{
    let parsedWeight = parseInt(weight);
    let parsedPurity = parseInt(purity);
    console.log(parsedWeight,'parsedWeight');
    console.log(parsedPurity,'parsedPurity');
    let touch = (parsedPurity / parsedWeight);
    console.log(touch,'touch');
    const afterDecimalPointTouchValue = touch.toString().split('.')[1];
    console.log(afterDecimalPointTouchValue);
    let finalTouch = afterDecimalPointTouchValue.substr(0,4);
    console.log(finalTouch,'finalTouch');
    let katchatouch = (finalTouch / 100).toFixed(2);
    console.log(katchatouch)
    return katchatouch;
}