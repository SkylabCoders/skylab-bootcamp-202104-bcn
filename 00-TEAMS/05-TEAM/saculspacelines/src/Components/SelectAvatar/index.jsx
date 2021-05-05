import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadPeople, addUser } from '../../redux/Actions/actionCreator';
import CHARACTERS from '../../redux/Constants/Characters';
import './form.css';
import USERS from '../../redux/store/userList/index';

function SelectAvatar({ people, dispatch }) {
  const { faction } = useParams();
  const [currentAvatar, setCurrentAvatar] = useState({ name: 'none', imgUrl: 'https://static.filmin.es/images/user/579233/3/user_0_3_256x256.jpeg' });
  const [currentUsername, setCurrentUsername] = useState('Input your username');
  const LIGHT = 'light';
  const DARK = 'dark';
  const { user } = useAuth0();

  const handleAvatarSelection = (url) => {
    setCurrentAvatar(url);
  };

  const handleUsernameChange = (event) => {
    setCurrentUsername(event.target.value);
  };

  const handleSubmit = () => {
    const newUser = {
      email: user.email,
      username: currentUsername,
      faction,
      avatar: currentAvatar.imgUrl,
      wishlist: []
    };

    dispatch(addUser(newUser));
    console.log(USERS);
  };

  useEffect(() => {
    if (!people.lenght) dispatch(loadPeople());
  }, []);

  const lightList = CHARACTERS
    .filter((character) => character.faction.toLowerCase() === LIGHT.toLowerCase());

  const darkList = CHARACTERS
    .filter((character) => character.faction.toLowerCase() === DARK.toLowerCase());

  return (
    <section className="select-avatar">
      <div className="select-avatar__header header">
        <img
          className="header__img"
          src={currentAvatar.imgUrl}
          alt={currentAvatar.name}
        />
        <div className="header__username">
          <h2 className="header__username-name">{currentUsername}</h2>
          <input
            className="header__username-input"
            onChange={handleUsernameChange}
            type="text"
          />
        </div>
      </div>
      <ul className="select-avatar__ul ul">
        {
          faction.toLowerCase() === LIGHT.toLowerCase()
            ? lightList.map((lightCharacter) => (
              <li className="ul__list">
                <button
                  className="caracter-button"
                  type="button"
                  onClick={() => handleAvatarSelection(lightCharacter)}
                >
                  <img
                    className="caracter-img"
                    src={lightCharacter.imgUrl}
                    alt={lightCharacter.name}
                  />
                </button>
              </li>
            ))
            : darkList.map((darkCharacter) => (
              <li className="ul__list">
                <button
                  className="caracter-button"
                  type="button"
                  onClick={() => handleAvatarSelection(darkCharacter)}
                >
                  <img
                    className="caracter-img"
                    src={darkCharacter.imgUrl}
                    alt={darkCharacter.name}
                  />
                </button>
              </li>
            ))
        }
      </ul>
      <button type="button">BACK</button>
      <button onClick={handleSubmit} type="button">SUBMIT</button>
    </section>
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
