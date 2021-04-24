function printDataClient(printValue){
    const fnameClientPrint = document.getElementById('fname-information')
    const lnameClientPrint = document.getElementById('lname-information')
    fnameClientPrint.innerText = printValue.fname;
    lnameClientPrint.innerText = printValue.lname;
}
printDataClient(store.client);