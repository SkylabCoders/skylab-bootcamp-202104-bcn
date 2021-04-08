//indice. 
const CalculatorDisplay = document.getElementById('display-one');
const ShowDisplay = document.getElementById('display-two');
const ButtonNumbers = document.querySelectorAll('.number');
const ButtonsOperators = document.querySelectorAll('.operacion');

const display = new Display(CalculatorDisplay,ShowDisplay);


ButtonNumbers.forEach(button => {
    button.addEventListener('click',() =>{
        display.addnumber(button.innerHTML);   
    });
});

ButtonsOperators.forEach(btn => {
    btn.addEventListener('click', () => {
        display.compute(btn.value);
    });
})
