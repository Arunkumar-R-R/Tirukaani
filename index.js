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
        if(itemWeightInGram < 100)
        {
            integer = 10;
            purityFinalValue = purityInString.substr(0,1);
            this.getProductFinalWeight(purityFinalValue,integer);
            console.log(`purity is ${purityFinalValue} gram`);
        }
        else  if(itemWeightInGram < 1000)
        {
            integer = 100;
            purityFinalValue = purityInString.substr(0,3);
            this.getProductFinalWeight(purityFinalValue,integer);
            console.log(`purity is ${purityFinalValue} gram`);
        }
        else if(itemWeightInGram <10000)
        {
            integer = 1000;
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
            '10':{
                'endPosition':2,
                'unit':'g'
                 },
            '100':{
                'endPosition':3,
                'unit':'g'
                 },
            '1000':{
                'endPosition':4,
                'unit':'g'
                   },
            '10000':{
                'endPosition':5,
                'unit':'kg'
                 }
        }
        productWeight = ((purityFinalValue / finalTouch)*integer).toString().substr(0,position[integer].endPosition) ;
        console.log(`product weight is ${productWeight} ${position[integer].unit}`);
    }
   
}

const client1 = new Client(89,'g',65,0);

client1.convertWeightToGram();
client1.getFinalTouch();
client1.getPurity();
// client1.getProductFinalWeight();

