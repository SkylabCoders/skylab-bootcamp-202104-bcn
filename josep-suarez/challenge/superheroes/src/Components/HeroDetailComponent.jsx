import React from "react";
import {useParams} from "react-router"
import {Link} from "react-router-dom"
import heroes from "./superherosData";
import '../heroDetails.css'

function HeroDetail (){
    const {heroId} = useParams();
    const selectedhero = heroes.find((hero) => hero.id === heroId)
    return (
        <ul class="listDetails">
            <li>{selectedhero.superhero}</li>
            <li>{selectedhero.id}</li>
            <li>{selectedhero.publisher}</li>
            <li>{selectedhero.alter_ego}</li>
            <li>{selectedhero.first_appearance}</li>
            <li>{selectedhero.characters}</li>
            <Link to={`/`}>Atrás</Link>
        </ul>
    
    )   
}


export default HeroDetail