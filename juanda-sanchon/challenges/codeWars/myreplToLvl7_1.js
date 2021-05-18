let friendsArray = ["Ryan", "Kieran", "Mark","98"];

function friend(friends){
    let friendList = [];
    let i=0;
    const regex = /^[0-9]*$/;

    while(i<friends.length ){
        if(!regex.test(friends[i])){
            if(friends[i].length === 4){
                friendList.push(friends[i]);
            }
        }
        i++;
    }

    return (console.log(friendList));

  }

friend(friendsArray);

//Posibles:
// function friend(friends){
//     return friends.filter(n => n.length === 4)
//   }
//En este caso no comprueba la parte numérica