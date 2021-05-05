import React from 'react';
import './style/style.css';
import USERS from '../../redux/store/userList';

const { username, avatar, wishlist } = USERS[0];
const { planet, starship, price } = wishlist[0];

function WishList() {
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
        <div className="wishlist-container">
          <tr className="wishlist-container__tablerow">
            <td className="wishlist-container__tabledata">
              {planet}
            </td>
            <td>{starship}</td>
            <td>
              {price}
              {' '}
              <button type="button" className="wishlist-container__button">modify</button>
              {' '}
              <button type="button" className="wishlist-container__button">delete</button>
            </td>
          </tr>
          <tr className="wishlist-container__tablerow">
            <td>planet</td>
            <td>starship</td>
            <td>
              price
              {' '}
              <button type="button" className="wishlist-container__button">modify</button>
              {' '}
              <button type="button" className="wishlist-container__button">delete</button>
            </td>
          </tr>
          <tr className="wishlist-container__tablerow">
            <td>planet</td>
            <td>starship</td>
            <td>
              price
              {' '}
              <button type="button" className="wishlist-container__button">modify</button>
              {' '}
              <button type="button" className="wishlist-container__button">delete</button>
            </td>
          </tr>
        </div>
      </div>
      <div className="footer-container">
        <button type="button" className="footer-container__button">Back</button>
        <button type="button" className="footer-container__button--big">Reset Profile</button>
      </div>
    </div>
  );
}
export default WishList;
