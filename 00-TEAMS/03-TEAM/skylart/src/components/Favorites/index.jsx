import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Favorites.scss';

function Favorites({ favorites }) {
  return (
    <>
      <h2>Favorites</h2>
      <ul className="category">
        {favorites.length && favorites.map(
          (favoriteArtwork) => (
            <li className="category__item" key={favoriteArtwork.objectID}>
              <Link to={`/detail/${favoriteArtwork.objectID}`}>
                <p className="detail-name">{favoriteArtwork.title}</p>
                <img
                  src={favoriteArtwork.primaryImageSmall}
                  alt={favoriteArtwork.primaryImageSmall}
                />
              </Link>
            </li>
          ),
        )}
      </ul>
    </>
  );
}
Favorites.propTypes = {
  favorites: PropTypes.shape([]).isRequired,
};

function mapStateToProps({ favorites }) {
  return {
    favorites,
  };
}

export default connect(mapStateToProps)(Favorites);
