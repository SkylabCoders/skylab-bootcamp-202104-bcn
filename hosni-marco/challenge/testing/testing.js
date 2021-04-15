function testing (a, b) {
    if(typeof(a) == typeof(b)){
        if(a == b){
            return true
        }else{
            return false
        }
    }else{
        return false
    }
}

console.log(testing(1, 1));
console.log(testing(NaN, NaN));
console.log(testing(0, -0));
console.log(testing(-0, 0));
console.log(testing(1, "1"));
console.log(testing(true, false));
console.log(testing(false, false));
console.log(testing('water', 'oil'));
