const nextPokemons = () => {
    let backButton = document.getElementById("back-button");
    backButton.style.display = "flex";
    document.getElementById("photos-pokemon").innerHTML = "";
    siteOfDashboard.innerHTML = "";
    let buttonNext = document.getElementById("next-button");
    buttonNext.innerHTML = "Next";
    MIN_PAG += 10;
    return getPokemon(MIN_PAG, MAX_PAG);
} 
describe("Given a nextPokemons function", () => {
    it('should return an element of the specified type and title', () => {
      // Arrange
      const mock = { title: 'Hey', tag: 'h1' };
      const title = createTitle(mock.title, mock.tag);
      // Assert
      expect(title.innerText).toBe(mock.title);
      expect(title.tagName).toBe(mock.tag.toUpperCase());
    });
  });
  