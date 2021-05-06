import React from 'react';
import { PropTypes } from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadDetail } from '../../redux/actions/actionCreators';
import GoBackButton from '../Common/GoBackButton';
import Footer from '../Common/Footer';

function Detail({ dispatch, category, detail }) {
  const { artworkId } = useParams();
  const selectedArtwork = category.find((artwork) => artwork.objectID === +artworkId);
  dispatch(loadDetail(selectedArtwork));

  return (
    <>
      <figure>
        <img src="" alt="" />
        <h2>
          {' '}

          {' '}
        </h2>
      </figure>

      <div className="information-container">
        <h3>Artwork title</h3>
        <span>any</span>
        <span>autor</span>
        <ul>
          <li>
            Artist:
            {' '}
            {detail.department}
          </li>
          <li>Date: </li>
          <li>Culture: </li>
          <li>Medium: </li>
          <li>Dimensions: </li>
          <li>Credit Line: </li>
          <li>Accession Number: </li>
        </ul>
        <button type="button">Add to favorites</button>
        <GoBackButton />
      </div>

      <ul>
        <li>imatges</li>
      </ul>
      <Footer />
    </>
  );
}

Detail.propTypes = {
  dispatch: PropTypes.func.isRequired,
  category: PropTypes.shape([]).isRequired,
  detail: PropTypes.shape({
    objectId: PropTypes.number,
    department: PropTypes.string,
    objectDate: PropTypes.string,
  }).isRequired,
};

function mapStateToProps({ category, detail }) {
  return {
    category,
    detail,
  };
}
export default connect(mapStateToProps)(Detail);
