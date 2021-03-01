const userGivenItem = 1400;
const userGivenTouch = 75;
const expectedTouch = 60;
const workersTouch = 3;




function purityCalc(userGivenItem,userGivenTouch){
    // w*t = p
    const purity = userGivenItem * userGivenTouch;
    if (userGivenItem < 999)
    {
        let purityInString = purity.toString();
        let purityFinalValue = purityInString.substr(0,3);
        let integer = 999;
        console.log("the purity is "+purityFinalValue);
        weightCalc(purityFinalValue,integer);
    }
    else if(userGivenItem <9999)
    {
        let purityInString = purity.toString();
        let purityFinalValue = purityInString.substr(0,4);
        let integer = 9999;
        console.log("the purity is "+purityFinalValue);
        weightCalc(purityFinalValue,integer);
    }
    else if(userGivenItem < 99999) // 99kg
    {
        let purityInString = purity.toString();
        let purityFinalValue = purityInString.substr(0,5);
        let integer = 99999;
        console.log("the purity is "+purityFinalValue);
        weightCalc(purityFinalValue,integer);
    }

}
function weightCalc(purityFinalValue,integer) {
    if(expectedTouch > 0)
    {
        if(expectedTouch > userGivenTouch)
        {
            var touchNeeded = (expectedTouch - userGivenTouch);
            console.log("touch need be added is " + touchNeeded);
            var finalTouch = userGivenTouch + workersTouch + touchNeeded;
            console.log('final touch is ' + finalTouch);
        }
        else
        {
            var touchNeeded = (userGivenTouch - expectedTouch);
            console.log("touch need be reduced is " + touchNeeded);
            var finalTouch = userGivenTouch + workersTouch - touchNeeded;
            console.log('final touch is ' + finalTouch);
        }
    
    }
    else
    {
        var finalTouch = userGivenTouch + workersTouch;
        console.log('touch is ' + finalTouch);
    }
    var productWeight = (purityFinalValue / finalTouch);
    if(integer == 999)
    {
        let finalProductWeight = (productWeight*1000).toString().substr(0,3);
        console.log("final product weight is " + finalProductWeight);
        if(expectedTouch > 0)
        {
            if(expectedTouch > userGivenTouch)
            {
                console.log("profit is " + (userGivenItem - finalProductWeight));
            }
            else
            {
                console.log(" no profit and extra weight need to be added is " + (finalProductWeight-userGivenItem));
            }
        }
        else
        {
            console.log("profit is " + (userGivenItem - finalProductWeight));
        }
      
    }
    else if(integer == 9999)
    {
        
        let finalProductWeight = (productWeight*1000).toString().substr(0,4);
        console.log("final product weight is " + finalProductWeight);
        if(expectedTouch > 0)
        {
            if(expectedTouch > userGivenTouch)
            {
                console.log("profit is " + (userGivenItem - finalProductWeight));
            }
            else
            {
                console.log(" no profit and extra weight need to be added is " + (finalProductWeight-userGivenItem));
            }
        }
        else
        {
            console.log("profit is " + (userGivenItem - finalProductWeight));
        }
      
     }
    else if(integer == 99999)
    {

        let finalProductWeight = (productWeight*10000).toString().substr(0,5);
        console.log("final product weight is " + finalProductWeight);
        if(expectedTouch > 0)
        {
            if(expectedTouch > userGivenTouch)
            {
                console.log("profit is " + (userGivenItem - finalProductWeight));
            }
            else
            {
                console.log(" no profit and extra weight need to be added is " + (finalProductWeight-userGivenItem));
            }
        }
        else
        {
            console.log("profit is " + (userGivenItem - finalProductWeight));
        }

    }
}

purityCalc(userGivenItem,userGivenTouch);