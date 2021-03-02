const workerTouchForOwnSilver = 4.5; 
const workerTouchForGivenSilver = 3; 
let itemWeightInGram ;
let purity;
let purityFinalValue;
let finalTouch;
let touchNeeded;

class Client
{

    constructor(weight,unit,touch,expTouch)
    {
        this.itemWeight = weight;
        this.weightUnit = unit;
        this.userGivenTouch = touch;
        this.expectedTouch = expTouch;
        // const userGivenItem = itemWeight * 1000;
    }

    convertWeightToGram()
    {
        if(this.weightUnit === 'kg')
        {
            itemWeightInGram = this.itemWeight * 1000;
            // console.log(`kg to gram is ${itemWeightInGram}`);
        }
        else if(this.weightUnit ==='g')
        {
            itemWeightInGram = this.itemWeight;
            // console.log(`gram is ${itemWeightInGram}`);
        }
    }

    getPurity() 
    {
        purity = itemWeightInGram * this.userGivenTouch;
        let purityInString = purity.toString();
        if(itemWeightInGram <= 999)
        {
            purityFinalValue = purityInString.substr(0,3);
            console.log(`purity is ${purityFinalValue} gram`);
        }
        else if(itemWeightInGram <= 9999)
        {
            purityFinalValue = (purityInString.substr(0,4)) / 1000;
            // let purityInKg = purityFinalValue / 1000;
            console.log(`purity is ${purityFinalValue} kg`);
        }
        else
        {
            purityFinalValue = (purityInString.substr(0,5)) / 1000;
            // let purityInKg = purityFinalValue / 1000;
            console.log(`purity is ${purityFinalValue} kg`);
        }
    }

    getFinalTouch()
    {
        if(this.expectedTouch > 0)
        {
            if(this.expectedTouch > this.userGivenTouch)
            {
                touchNeeded = (this.expectedTouch - this.userGivenTouch);
                finalTouch = this.userGivenTouch + workerTouchForGivenSilver + touchNeeded;
            }
            else
            {
                touchNeeded = (this.userGivenTouch - this.expectedTouch);
                finalTouch = this.userGivenTouch + workerTouchForGivenSilver - touchNeeded;
            }
        }
        else
        {
            finalTouch = this.userGivenTouch + workerTouchForGivenSilver;
        }
        console.log('touch including worker\'s touch is ' + finalTouch);

    }
    getProductFinalWeight()
    {
        
    }
   
}

const client1 = new Client(500,'g',75, 80);

client1.convertWeightToGram();
client1.getPurity();
client1.getFinalTouch();
