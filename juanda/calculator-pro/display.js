//control de pantalla
class Display{
    constructor(CalculatorDisplay,ShowDisplay){
        this.CalculatorDisplay = CalculatorDisplay;
        this.ShowDisplay = ShowDisplay;
        this.calculator = new Calculator();
        this.operationType; 
        this.FirstValor = "";
        this.SecondValor = "";
        this.signs = {
            sumar : '+',
            restar : '-',
            dividir : '/',
            multiplicar : 'x'
        }
    }

    delete(){
        this.FirstValor = "";
        this.showValue();
    }
    deleteAll(){
        this.FirstValor = '';
        this.SecondValor = '';
        this.operationType = undefined;
        this.showValue();
    }
    compute(mathOperation){
        if(this.operationType !== 'igual'){
            this.calculate();
        }
        this.operationType = mathOperation;
        this.SecondValor = this.FirstValor || this.SecondValor; //se coloca el firstValor caso que haya
        this.FirstValor = '';
        this.showValue();
    }
    addnumber(number){ //se modifica el valor inicial del display, por el que se acabe de introducir
        number === ',' ? number = '.' : number = number;
        //this.FirstValor === '.' && this.FirstValor  ? number = '0.': number = number ;
        number === '.' && (this.FirstValor.length < 1) ? number = '0.' : number = number;
        //if(number.substr(0,1) === '.'){
        //    number = '0.';
        //}
        if(number === '.' && this.FirstValor.includes('.')){ //si number es igual a ',' y ya se incluye
            return
        }else{
            this.FirstValor = this.FirstValor.toString() + number.toString();
            this.showValue();
        }
    }
    showValue(){
        this.CalculatorDisplay.textContent = this.FirstValor;
        this.ShowDisplay.textContent = this.SecondValor;
        if(this.SecondValor===''){
            this.CalculatorDisplay.textContent = this.FirstValor; 
        }else if(!isNaN(this.SecondValor)){
            this.ShowDisplay.textContent = `${this.SecondValor} ${this.signs[this.operationType] || "" }`;
        }
    }
    calculate(){
        let SecondValor = parseFloat(this.SecondValor); //pasamos de string a float
        let FirstValor = parseFloat(this.FirstValor);

        if (isNaN(FirstValor) || isNaN(SecondValor)){
            return;
        }else{
            this.FirstValor = this.calculator[this.operationType](SecondValor,FirstValor);
        }
    }

    testNumber(number){
        let number2;
            if(number.length);
    }

}