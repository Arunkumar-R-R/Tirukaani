let finalpurityvalue;
let newWslength;

export const purity = (weight,touch) =>{
    let parsedWeight = parseInt(weight);
    let parsedTouch = parseFloat(touch);
    let weightinstring = parsedWeight.toString();
    let wslength = weightinstring.length;
    
    let purity = parsedWeight * parsedTouch;
    let purityInString = purity.toString()


    let result = purityInString.substr(0,wslength);
    let finalpurity;
    if(result > parsedWeight)
    {
        newWslength = wslength - 1;
        finalpurityvalue = purityInString.substr(0,newWslength);
        finalpurity = finalpurityvalue;
    }
    else
    {
        finalpurity = result;
    }

    return finalpurity;
}