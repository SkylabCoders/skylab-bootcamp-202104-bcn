const phrase = "my pyx";

function getCount(str) {
    var vowelsCount = 0;
    var m = str.match(/[aeiou]/gi);
    //contamos vocales+y
    if(m !== null){
        vowelsCount = m.length;
    }
    
    return vowelsCount;
}

getCount(phrase);