const [main] = document.getElementsByTagName('main');

const heroesLi = getHeroes().map((hero) => `<li>${hero}</li>`);
const innerHTML = `
<h1>Heroes</h1>
<ul>
    ${heroesLi}
</ul>
`;

main.innerHTML = innerHTML;
