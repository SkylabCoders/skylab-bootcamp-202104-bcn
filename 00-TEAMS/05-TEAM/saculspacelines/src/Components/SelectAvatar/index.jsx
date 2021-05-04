import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { useAuth0 } from '@auth0/auth0-react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadPeople } from '../../redux/Actions/actionCreator';
import CHARACTERS from '../../redux/Constants/Characters';
import '../Characters/form.css';

function SelectAvatar({ people, dispatch }) {
  const { faction } = useParams();
  const [currentAvatar, setCurrentAvatar] = useState({ name: 'none', imgUrl: 'https://static.filmin.es/images/user/579233/3/user_0_3_256x256.jpeg' });
  const LIGHT = 'light';
  const DARK = 'dark';
  // const { user } = useAuth0();

  const handleAvatarSelection = (url) => {
    setCurrentAvatar(url);
  };

  useEffect(() => {
    if (!people.lenght) dispatch(loadPeople());
  }, []);

  const lightList = CHARACTERS
    .filter((character) => character.faction.toLowerCase() === LIGHT.toLowerCase());
  const darkList = CHARACTERS
    .filter((character) => character.faction.toLowerCase() === DARK.toLowerCase());

  return (
    <>
      <img
        src={currentAvatar.imgUrl}
        alt={currentAvatar.name}
      />
      <h2>Username</h2>
      <p>{faction}</p>
      <ul>
        {
          faction.toLowerCase() === LIGHT.toLowerCase()
            ? lightList.map((lightCharacter) => (
              <li>
                {lightCharacter.name}
                <button
                  type="button"
                  onClick={() => handleAvatarSelection(lightCharacter)}
                >
                  <img
                    src={lightCharacter.imgUrl}
                    alt={lightCharacter.name}
                  />
                </button>

              </li>
            ))
            : darkList.map((darkCharacter) => (
              <li>
                {darkCharacter.name}
                <button
                  type="button"
                  onClick={() => handleAvatarSelection(darkCharacter)}
                >
                  <img
                    src={darkCharacter.imgUrl}
                    alt={darkCharacter.name}
                  />
                </button>
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
