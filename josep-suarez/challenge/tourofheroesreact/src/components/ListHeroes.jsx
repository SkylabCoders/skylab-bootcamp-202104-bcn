import React from "react";

function ListHeroes ({heroesItems, setSelectedHero}) {
    return (    
        <li>
            {heroesItems.map(hero => <button type="button" onClick={() => setSelectedHero(hero.id + "-" + hero.name)}>{hero.name}</button>)}
        </li>  
         )
}

export default ListHeroes