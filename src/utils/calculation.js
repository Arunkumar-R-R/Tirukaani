
function weightInStringLengthCalc(parsedWeight)
{
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


