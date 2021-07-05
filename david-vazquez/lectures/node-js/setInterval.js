

const func1 = () =>{
    console.log('hello world');
    counter += 1;
    if(counter === 5){
        console.log('done');
        clearInterval(timer)
    }
};
const timer = setInterval(func1,1000);