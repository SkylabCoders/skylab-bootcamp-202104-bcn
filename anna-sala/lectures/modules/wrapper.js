// console.log(arguments);

// exports.a = 42; //este hace copia del module export
// module.exports.b = 37; //se usa mas pq no hace la copia 

global.answer = 42; // si no encuentra la propiedad de answer, la crea (igual que hacemos en el front con window)

// console.log(global); //propiedad global