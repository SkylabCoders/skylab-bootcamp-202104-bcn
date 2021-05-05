import React from 'react';
import Avatar from '../../Images/dorin.png';
import './style/style.css';

function WishList() {
  return (
    <div>
      <div className="header-container">
        <img src={Avatar} alt="avatar" className="avatar" />
        <div className="header-container__item">
          <h2>User</h2>
        </div>
      </div>
      <div className="button-container">
        <button type="button" className="button-container__item-changename">Change name</button>
        <button type="button" className="button-container__item-changefaction">Change Faction</button>
      </div>
      <div className="main-container">
        <h3 className="main-container__title">Wishlist</h3>
        <div className="wishlist-container">
          <tr className="wishlist-container__tablerow">
            <td className="wishlist-container__tabledata">
              planet
            </td>
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
