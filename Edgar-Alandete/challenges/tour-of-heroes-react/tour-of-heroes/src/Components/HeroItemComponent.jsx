import React from 'react'

function HeroItemComponent({selectedHero, hero}) {
    return (<li key = {hero.name}><button onClick= {()=>selectedHero(hero)} >{hero.name}</button></li>);
}
export default HeroItemComponent;
