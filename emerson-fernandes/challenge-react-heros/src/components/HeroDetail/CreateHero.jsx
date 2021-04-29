import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CreateHero = (props) => (
    
    const [heroName,setHeroName] = useState(null)

    function handleNameChange(event){
        setHeroName(event.target.value)
    }
    
    return(

    <div>
        <h2>Create New Herp</h2>
        <label htmlFor="hero-name">
        Hero name:
        <input id="hero-name" onChange={handleNameChange} placeholder="Hero name" />
        </label>
    </div>
    )
);

CreateHero.propTypes = {

};

export default CreateHero;
