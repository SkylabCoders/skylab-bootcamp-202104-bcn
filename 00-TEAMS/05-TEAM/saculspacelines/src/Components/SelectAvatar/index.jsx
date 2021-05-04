import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { useAuth0 } from '@auth0/auth0-react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadPeople } from '../../redux/Actions/actionCreator';
import CHARACTERS from '../../redux/Constants/Characters';
import '../Characters/form.css';

function SelectAvatar({ people, dispatch }) {
  const { faction } = useParams();
  const LIGHT = 'light';
  const DARK = 'dark';
  // const { user } = useAuth0();

  useEffect(() => {
    if (!people.lenght) dispatch(loadPeople());
  }, []);

  const lightList = CHARACTERS
    .filter((character) => character.faction.toLowerCase() === LIGHT.toLowerCase());
  const darkList = CHARACTERS
    .filter((character) => character.faction.toLowerCase() === DARK.toLowerCase());

  return (
    <>
      <h1>USERAVATAR</h1>
      <h2>Username</h2>
      <p>{faction}</p>
      <ul>
        {
          faction.toLowerCase() === LIGHT.toLowerCase()
            ? lightList.map((lightCharacter) => (
              <li>
                {lightCharacter.name}
                <img
                  src={lightCharacter.imgUrl}
                  alt={lightCharacter.name}
                />
              </li>
            ))
            : darkList.map((darkCharacter) => (
              <li>
                {darkCharacter.name}
                <img
                  src={darkCharacter.imgUrl}
                  alt={darkCharacter.name}
                />
              </li>
            ))
        }
      </ul>
      <button type="button">BACK</button>
      <button type="button">SUBMIT</button>
    </>
  );
}

SelectAvatar.propTypes = {
  people: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ userActionReducer, authReducer }) {
  return {
    people: userActionReducer,
    auth: authReducer
  };
}

export default connect(mapStateToProps)(SelectAvatar);
