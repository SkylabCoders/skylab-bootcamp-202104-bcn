import React from 'react';
import PropTypes from 'prop-types';
import { createHero } from '../../redux/action/actionCreator';

const CreateHero = ({hero,dispatch}) => (

    const [heroName, setHeroName] = usesState();

function handleNameChange(event) {
    setHeroName(event.target.value);
}
        
useEffect(() => {
    setHeroName(hero?.name);
}, [hero]);

function dispatchCreateHero() {
    dispatch(craeteHero(hero));
}

return (    
    <>
        <h2>Create New Hero</h2>
        <label htmlForm="hero-name">
            Hero name:
             <input
                id="hero-name"
                onChange={handleNameChange}
                placeholder="Hero name"
                />
        </label>
        <button onClick={ createHero }...
        </>
    )
)

CreateHero.propTypes = {
    hero: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,...
    })
}