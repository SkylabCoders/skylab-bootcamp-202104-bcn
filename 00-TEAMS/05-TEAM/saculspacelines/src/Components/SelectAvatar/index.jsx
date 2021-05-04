import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadPeople } from '../../redux/Actions/actionCreator';
import USERS from '../../redux/store/userList/index';
import CHARACTERS from '../../redux/Constants/Characters';
import '../Characters/form.css';

function SelectAvatar({ people, dispatch }) {
  useEffect(() => {
    if (!people.lenght) dispatch(loadPeople());
  }, []);

  const currentUserObject = USERS.find((user) => user.email === 'email');
  const { faction } = currentUserObject;
  const lightList = CHARACTERS.filter((character) => character.faction === 'LIGHT');
  const darkList = CHARACTERS.filter((character) => character.faction === 'DARK');

  return (
    <>
      <h1>Avatar</h1>
      <h2>Username</h2>
      <ul>
        {
            faction === 'LIGHT'
              ? (
                <li>
                  {lightList}
                </li>
              )
              : (
                <li>
                  {darkList}
                </li>
              )
        }
      </ul>
    </>
  );
}

SelectAvatar.propTypes = {
  people: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(store) {
  return {
    people: store.userActionReducer
  };
}

export default connect(mapStateToProps)(SelectAvatar);
