let objDemo = {
    nombre: "josep",
    edad: 26,
    verdad: true
}
for (let propertyName in objDemo){
console.log(objDemo);
}
//el object.keys muestra todas las propiedas(no el valor), del objeto al que apunta
let josep = Object.keys(objDemo);
console.log(josep);