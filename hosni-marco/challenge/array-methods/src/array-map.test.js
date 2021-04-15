const array = [1, 2, 3, 4, 5];
const multiplyer = 10;
const result = [10, 20, 30, 40, 50];

function arrayMap(array, multiplyer) {
    return array * multiplyer;
}

describe('Given a map function', function(){
    for(let i = 0; i < array.length - 1; i++){
        describe(`When is invoked with values ${array[i]} and ${multiplyer}`, function(){
            test(`Then return ${result[i]}`, function(){
                let answer = arrayMap(array[i], multiplyer);
                expect(answer).toBe(result[i]);
            })
        })
    }
})

