

    
    function calculator (num1, num2) {


        if  (isNaN(num1) || isNaN(num2)){
            
            if (isNaN(num1) && isNaN(num2)){

                if (num1 !== undefined && num2 !== undefined) {console.log(`Both values "${num1}" and "${num2}" are incorrect.`)}
                else {console.log ("Incorrect values. Please, try again with different ones.")}
                

            }else if (isNaN(num1)) {

                if (num1 !== undefined) {console.log(`"${num1}" is not a number.`)}
           
                console.log (`The square root of ${num2} is: ${parseFloat((Math.sqrt(num2)).toFixed(3))}`); // I used parseFloat to get rid of the zeros to the right of the decimals.

            } else if (isNaN(num2)) {

                if (num2 !== undefined) {console.log(`"${num2}" is not a number.`)}

                console.log (`The square root of ${num1} is: ${parseFloat((Math.sqrt(num1)).toFixed(3))}`);
            }
        

        } else {

            
            function decimals (result) {
                if (result % 1 !== 0) return parseFloat(result.toFixed(3));  
                else return result;
            }

            let arr=[];

            arr.push(` ${num1} + ${num2} = ${decimals(num1 + num2)} `);
            arr.push(` ${num1} - ${num2} = ${decimals(num1 - num2)} `);
            arr.push(` ${num1} * ${num2} = ${decimals(num1 * num2)} `);
            arr.push(` ${num1} / ${num2} = ${decimals(num1 / num2)} `);

            console.log (`Results: ${arr}`);


        }
        
    }
    
    
    
    
    
    
    
    