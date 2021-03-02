const workerTouchForOwnSilver = 4.5; 
const workerTouchForGivenSilver = 3; 
let itemWeightInGram ;
let purity;
let purityFinalValue;
let finalTouch;
let touchNeeded;
let productWeight;
let integer;

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
        }
        else if(this.weightUnit ==='g')
        {
            itemWeightInGram = this.itemWeight;
        }
    }

    getPurity() 
    {
        purity = itemWeightInGram * this.userGivenTouch;
        let purityInString = purity.toString();
        // console.log(purityInString)
        if(itemWeightInGram < 100)
        {
            integer = 10;
            purityFinalValue = purityInString.substr(0,2);
            // this.getProductFinalWeight(purityFinalValue,integer);
            console.log(`purity is ${purityFinalValue} gram`);
        }
        else  if(itemWeightInGram < 999)
        {
            integer = 100;
            purityFinalValue = purityInString.substr(0,3);
            this.getProductFinalWeight(purityFinalValue,integer);
            console.log(`purity is ${purityFinalValue} gram`);
        }
        else if(itemWeightInGram < 9999)
        {
            if(itemWeightInGram < 1000)
            {
                integer = 1000;
            }
            else
            {
                integer = 1001;
            }
            purityFinalValue = (purityInString.substr(0,3));
            this.getProductFinalWeight(purityFinalValue,integer);
            console.log(`purity is ${purityFinalValue/1000} kg`);
        }
        else
        {
            integer = 10000;
            purityFinalValue = (purityInString.substr(0,4)) ;
            this.getProductFinalWeight(purityFinalValue,integer);
            console.log(`purity is ${purityFinalValue/ 1000} kg`);
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
        console.log('touch including labour\'s touch is ' + finalTouch);

    }

    getProductFinalWeight(purityFinalValue,integer)
    {
        var position = {
                        '10':2,
                        '100':3,
                        '1000':3,
                        '1001':4,      
                        '10000':5,    
                        }
        productWeight = ((purityFinalValue / finalTouch)*integer).toString().substr(0,position[integer]) ;
        console.log(`product weight is ${productWeight} g`);
    }
   
}

const client1 = new Client(1.1,'kg',60,0);

client1.convertWeightToGram();
client1.getFinalTouch();
client1.getPurity();

