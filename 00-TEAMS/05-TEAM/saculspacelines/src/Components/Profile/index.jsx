import React from 'react';
import './style/style.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import USERS from '../../redux/store/userList';

const Profile = ({ auth }) => {
  const {
    user
  } = useAuth0();

  const currentUser = auth.isLoggedIn ? USERS.find((userElement) => userElement.email === user.email) : '';
  const currentWishlist = currentUser.wishlist;
  const { username, avatar } = currentUser;
  const history = useHistory();

  const handleBack = () => {
    history.push('/select-destiny');
  };

  return (
    <div>
      <div className="header-container">
        <img src={avatar} alt="avatar" className="avatar" />
        <div className="header-container__item">
          <h2>{username}</h2>
        </div>
      </div>
      <div className="change-container">
        <button type="button" className="change-container__item">Change name</button>
        <button type="button" className="change-container__item">Change Faction</button>
      </div>
      <div className="main-container">
        <h3 className="main-container__title">Wishlist</h3>
        <div className="wishlist-container" />
        {
           currentWishlist?.length && currentWishlist.map((item) => (
             <tr className="wishlist-container__tablerow">
               <td className="wishlist-container__tabledata">
                 {`${item.planet.name} ${item.starship.name} ${item.price}`}
                 {' '}
                 <button type="button" className="wishlist-container__button">modify</button>
                 <button type="button" className="wishlist-container__button">delete</button>
               </td>
             </tr>
           ))
        }
      </div>
      <div className="footer-container">
        <button onClick={handleBack} type="button" className="footer-container__button--back">Back</button>
        <button type="button" className="footer-container__button--big">Reset Profile</button>
      </div>
    </div>
  );
};

Profile.propTypes = {
  auth: PropTypes.shape({
    isLoggedIn: PropTypes.bool,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired
    })
  }).isRequired
};

const mapStateToProps = ({ authReducer }) => ({
  auth: authReducer
});

export default connect(mapStateToProps)(Profile);
