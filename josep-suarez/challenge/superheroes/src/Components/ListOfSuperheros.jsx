import React, {useState} from "react";
import {Link} from "react-router-dom"
import heroes from "./superherosData";

function ListOfSuperheros () {
    const [selectedHero, setInfoHero] =  useState(undefined);
    return (    
        <ul>
            {heroes.map((hero) => {
              return  <li key={hero.id}>
                    <a href="www.google.es">{hero.alter_ego+" "+hero.publisher}</a>
                    <button type="button" onClick={() => setInfoHero(hero)}>Ver más</button>
                    {
                    selectedHero && (selectedHero.id === hero.id) && (
                    <div>
                        <p>{hero.superhero}-{hero.publisher}</p>
                        <Link to={`.././heroes/${hero.id}`}>Ver más</Link>
                    </div>
                    )}  
                </li>
            })}
        </ul>  
         )
}
export default ListOfSuperheros