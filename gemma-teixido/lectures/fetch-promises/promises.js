function getData(param = null) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${param}`)
          .then(response => response.json())
    .then(data => {
        return fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`)
                .then(usersResponse => usersResponse.json())
                .then(responseUser => responseUser)
.catch(e => {console.error('-> lean bastardos!', e);});
})}