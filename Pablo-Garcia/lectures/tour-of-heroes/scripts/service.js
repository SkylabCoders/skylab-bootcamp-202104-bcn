function getHeroes(){
    return heroes.map(({ name }) => name);

}

module.exports = {
    getHeroes,
};