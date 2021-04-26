import React, { useState } from 'react'
import HeroItemComponent from './HeroItemComponent';


function HeroesListComponent() {
    const [heroes, setHeroes] = useState([
        { id: 11, name: 'Dr Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
    ]);
    const [selectedHero, setSelectedHero] = useState(null)

    function onHandleSelectedHero(hero){
        setSelectedHero(hero.name)
      }

    return (
        <div>
        <ul>
            {heroes && heroes.map(
                (hero) => <HeroItemComponent key = {hero.name} heroName = {hero.name} selectedHero = {onHandleSelectedHero} hero = {hero}/>
            )}
        </ul>

        <div>{selectedHero}</div>
        </div>
    )
//
}
export default HeroesListComponent;