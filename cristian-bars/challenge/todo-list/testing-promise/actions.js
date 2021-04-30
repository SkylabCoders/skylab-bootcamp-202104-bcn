/* function mySync() {
  return true;
}
module.exports = { mySync }; */

getPoke = async () => {
  try {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((response) => response.json())
      .then((data) => data);
  } catch (error) {

  }
};

module.exports = { getPoke };
