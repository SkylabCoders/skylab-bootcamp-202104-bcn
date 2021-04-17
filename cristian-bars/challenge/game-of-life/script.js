function matrix(a,b){
    let arrayGeneral = [];
    let row = [];
    for (let i = 0; i<a; i++){
        for (let j = 0; j<b; j++){
            row[j] = 0;
        }
        arrayGeneral[i]=row;
    }
    console.log(arrayGeneral);
};

matrix(5,5);

/*let arrayGeneral = [[0,0,0,0,0],[0,0,0,0,0],[0,1,1,1,0],[0,0,0,0,0],[0,0,0,0,0]];

console.log(arrayGeneral[i][j]);
console.log(arrayGeneral[i][j]);
console.log(arrayGeneral[i][j]);
console.log(arrayGeneral[i][j]);
console.log(arrayGeneral[i][j]);


/*function check(){
    for (let i = 0; i<5; i++){
        for (let j = 0; j<5; j++){
            console.log(arrayGeneral[i][j]);
        }
    }
}

check();*/