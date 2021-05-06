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

  // function createReturnComponent() {
  //   return <span>{detail.period}</span>;
  // }

  // function verifyHasPeriod() {
  //   const hasPeriod = detail.period;
  //   return hasPeriod;
  // }

  return (
    <>
      <figure>
        <img src={detail.primaryImage} alt={detail.title} />
        <h2>{detail.title}</h2>
      </figure>

      <div className="information-container">
        <h3>{detail.title}</h3>
        {/* {if (hasPeriod) {
      return <createReturnComponent />;
    }} */}
        <span>{detail.artistDisplayName}</span>
        <span>{detail.objectDate}</span>
        {/* {
          hasPeriod && (
          <span>
            Period:
            {' '}
            {detail.period}
          </span>
          )
        } */}
        <ul>
          <li>
            Title:
            {' '}
            {detail.title}
          </li>
          <li>
            Artist:
            {' '}
            {detail.artistDisplayName}
          </li>
          <li>
            Date:
            {' '}
            {detail.objectDate}
          </li>
          <li>
            Period:
            {' '}
            {detail.period}
          </li>
          <li>
            Medium:
            {' '}
            {detail.medium}
          </li>
          <li>
            Dimensions:
            {' '}
            {detail.dimensions}
          </li>
          <li>
            Credit Line:
            {' '}
            {detail.creditLine}
          </li>
          <li>
            Accession Number:
            {' '}
            {detail.accessionNumber}
          </li>
        </ul>
        <button type="button">Add to favorites</button>
        <GoBackButton />
      </div>

      <ul>
        <li>imatges</li>
      </ul>
    </>
  );
}

Detail.propTypes = {
  dispatch: PropTypes.func.isRequired,
  category: PropTypes.shape([]).isRequired,
  detail: PropTypes.shape({
    objectId: PropTypes.number,
    primaryImage: PropTypes.string,
    title: PropTypes.string,

    artistDisplayName: PropTypes.string,
    objectDate: PropTypes.string,
    period: PropTypes.string,

    medium: PropTypes.string,
    dimensions: PropTypes.string,
    creditLine: PropTypes.string,
    accessionNumber: PropTypes.string,
  }).isRequired,
};

function mapStateToProps({ category, detail }) {
  return {
    category,
    detail,
  };
}
export default connect(mapStateToProps)(Detail);
