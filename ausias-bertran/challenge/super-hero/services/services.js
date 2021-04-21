function fetchHeroes() {
    return fetch(`../../store/store.json`)
        .then(response => response.json())
            .then(data => data)
           
}



// function getData(param = null) {
//         return fetch(`https://jsonplaceholder.typicode.com/posts/${param}`)
//               .then(response => response.json())
// 		.then(data => {
// 			return fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`)
// 			        .then(usersResponse => usersResponse.json())
// 			        .then(responseUser => responseUser)
// 	.catch(e => {console.error('-> lean bastardos!', e);});
// })}

// getNombre = async (idPost) => {
//     try {
//         const rta = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`);
//         const post = await rta.json(); const rtaUser = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`); const user = await rtaUser.json(); console.log(user);
//     } catch (error) { console.warning('-', error); }
// }

