import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addFavorite, deleteFavorite } from '../../../redux/actions/actionCreators';
import './Favoritebutton.scss';

function FavoriteButton({ dispatch, favorites, category }) {
  const { artworkId } = useParams();
  const selectedArtwork = category.find((artwork) => artwork.objectID === +artworkId);
  function handleAdd() {
    dispatch(addFavorite(selectedArtwork));
  }
  function handleDelete() {
    dispatch(deleteFavorite(selectedArtwork));
  }
  const notInFavoritesTemplate = () => {
    <button type="button" className="favorite-button" onClick={() => handleAdd()}>Add to Favorites</button>;
  };
  const inFavoritesTemplate = () => {
    <button type="button" className="favorite-button" onClick={() => handleDelete()}>Delete from Favorites</button>;
  };
  return (
    <>
      <button type="button" className="favorite-button" onClick={() => handleAdd()}>Add to Favorites</button>

      {favorites.length
        ? notInFavoritesTemplate()
        : inFavoritesTemplate()}
    </>
  );
}

FavoriteButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
  favorites: PropTypes.shape([]).isRequired,
  category: PropTypes.shape([]).isRequired,
};

function mapStateToProps({ favorites, category }) {
  return {
    favorites,
    category,
  };
}

export default connect(mapStateToProps)(FavoriteButton);
