/************TypeScript*************** */


function greeter(person:string):string {         //especifico que la parametro person sera de tipo STRING. ademas especifico que el return sera :STRING tmb
    return `Hello ${person}`;
}

let user:string = 'Jave User';          //especifico que la variable user sera de tipo String.

document.body.innerHTML = greeter(user)