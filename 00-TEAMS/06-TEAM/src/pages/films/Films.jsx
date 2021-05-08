import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadGridMovies } from '../../application/store/actions/actionsCreator';
import Heading from '../../common/components/heading/Heading';
import { TYPE_PARAMS } from '../../common/services/films';
import { ContainerFilms } from './style';

const showMoviesGrid = ({ myGrid, dispatch }) => {
  const baseImgUrl = 'https://image.tmdb.org/t/p/w200';
  useEffect(() => {
    dispatch(loadGridMovies(TYPE_PARAMS.popular));
  }, []);
  return (
    <>
      <ContainerFilms>
        <Heading type={1} content="Todas nuestras películas" />
        <div className="shows-conatiner">
          {myGrid.map((element) => (
            <Link to={`/detail/${element.id}`}>
              <img key={element.id} src={`${baseImgUrl}${element.poster_path}`} alt={element.originalTitle} />
            </Link>
          ))}
        </div>
      </ContainerFilms>
    </>
  );
};

showMoviesGrid.propTypes = {
  dispatch: PropTypes.func.isRequired,
  myGrid: PropTypes.shape({
    map: PropTypes.func.isRequired,
    poster_path: PropTypes.string
  }).isRequired
};

const mapStateToProps = ({ moviesGrid }) => ({
  myGrid: moviesGrid
});

export default connect(mapStateToProps)(showMoviesGrid);
