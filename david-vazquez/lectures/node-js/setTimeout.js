function print(second,times){
    let counter = 1
    while(counter<=times){
        setTimeout((multiplier)=>{
            console.log(`Hello after ${second*multiplier} seconds`);
        }, second*counter*1000,counter)
        counter=counter+1;
    }
}

print(4,2);