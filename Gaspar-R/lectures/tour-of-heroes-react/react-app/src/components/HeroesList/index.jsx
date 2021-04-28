import React from 'react';


function HeroesList() {
    return (
    <>

        <h2>My Heroes</h2>

        <div>
        <label id="new-hero">Hero name: </label>
        <input for="new-hero" #heroName />

        <!-- (click) passes input value to add() and then clears the input -->
        <button class="add-button" (click)="add(heroName.value); heroName.value=''">
            Add hero
        </button>
        </div>

        <ul class="heroes">
        <li>
            <a routerLink="/detail/{{hero.id}}">
            <span class="badge">{{hero.id}}</span> {{hero.name}}
            </a>
            <button class="delete" title="delete hero"
            (click)="delete(hero)">x</button>
        </li>
        </ul>
</>
    );
}

export HeroesList
