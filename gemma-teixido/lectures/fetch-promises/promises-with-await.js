getNombre = async (idPost) => {
    try {
        const rta = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`);
          const post = await rta.json();
          const rtaUser = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
           const user = await rtaUser.json();
         console.log(user);
    } catch(error) {
        console.warning('-', error);
    }
}