import React from 'react';
import './style/style.css';
import USERS from '../../redux/store/userList';

function WishList() {
  const currentUser = USERS.find((user) => user.username === 'emerson');
  const currentWishlist = currentUser.wishlist;
  const { username, avatar } = currentUser;

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
            currentWishlist.map((item) => (
              <tr className="wishlist-container__tablerow">
                <td className="wishlist-container__tabledata">
                  {`${item.planet} ${item.starship} ${item.price}`}
                  {' '}
                  <button type="button" className="wishlist-container__button">modify</button>
                  <button type="button" className="wishlist-container__button">delete</button>
                </td>
              </tr>
            ))
        }
      </div>
      <div className="footer-container">
        <button type="button" className="footer-container__button--back">Back</button>
        <button type="button" className="footer-container__button--big">Reset Profile</button>
      </div>
    </div>
  );
}
export default WishList;
