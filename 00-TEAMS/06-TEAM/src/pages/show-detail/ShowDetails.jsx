import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { getShowById } from '../../application/store/actions/actionsCreator';
import {
  WrapperMovie, ContainerBackground, Description, Genres
} from '../movie-details/styles';
import Heading from '../../common/components/heading/Heading';

function ShowDetail({ selectedShow, dispatch }) {
  const { showId } = useParams();

  useEffect(() => {
    dispatch(getShowById(showId));
  }, [showId]);

  const baseImgUrl = 'https://image.tmdb.org/t/p/w300/';
  const baseImgUrlPoster = 'http://image.tmdb.org/t/p/original/';

  return (
    selectedShow.id ? (
      <>
        <WrapperMovie>
          <ContainerBackground img={`${baseImgUrlPoster}${selectedShow.backdrop_path}`} />
          <div className="container__info">
            <div className="container__info_col__Left">
              <img className="slider__img" src={`${baseImgUrl}${selectedShow.poster_path}`} alt="" />
            </div>
            <div className="container__info_col__Right">
              <Heading content={selectedShow.name} />
              <Description>
                {selectedShow.overview}
              </Description>
              <Genres>
                <ul>
                  {selectedShow.genres.map((element) => (
                    <li>
                      {' '}
                      {element.name}
                      {' '}
                    </li>
                  ))}
                </ul>
              </Genres>
            </div>
          </div>
        </WrapperMovie>
      </>
    )
      : (
        <h3>
          There is no hero with id=
          {showId}
        </h3>
      )
  );
}

ShowDetail.propTypes = {
  dispatch: PropTypes.func.isRequired,
  selectedShow: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.shape({
      map: PropTypes.func.isRequired,
      id: PropTypes.number,
      name: PropTypes.string
    }),
    poster_path: PropTypes.string,
    runtime: PropTypes.number,
    title: PropTypes.string,
    backdrop_path: PropTypes.string

  }).isRequired
};

function mapStateToProps({ selectedShow }) {
  return {
    selectedShow
  };
}

export default connect(mapStateToProps)(ShowDetail);
