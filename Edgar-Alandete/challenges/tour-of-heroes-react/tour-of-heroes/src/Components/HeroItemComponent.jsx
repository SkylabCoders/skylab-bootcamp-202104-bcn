import React from 'react'

function HeroItemComponent({heroName}) {
    return (<li key = {heroName}>{heroName}</li>);
}

export default HeroItemComponent;
