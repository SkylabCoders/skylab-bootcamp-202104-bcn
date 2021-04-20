/*
function getHeroes(){
    return heroes.map(({ name }) => name);

}

module.exports = {
    getHeroes,
};*/

function getHeroIDFromUrl(url, paramToSearch='heroID'){
    return new URLSearchParams(url).get('heroID');
}