import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadTvShows } from '../../application/store/actions/actionsCreator';
import Heading from '../../common/components/heading/Heading';
import { TYPE_PARAMS } from '../../common/services/films';
import { ContainerFilms, Grid, CardMovie } from './style';

const TvShows = ({ myShows, dispatch }) => {
  const baseImgUrl = 'https://image.tmdb.org/t/p/w200';

  useEffect(() => {
    dispatch(loadTvShows(TYPE_PARAMS.on_the_air));
  }, []);

  return (
    <ContainerFilms>
      <Heading type={1} content="Series Tv" />
      <Grid>
        {myShows.map((element) => (
          <CardMovie>
            <Link to={`/detailShow/${element.id}`}>
              <img key={element.id} src={`${baseImgUrl}${element.poster_path}`} alt={element.originalTitle} />
            </Link>
          </CardMovie>
        ))}
      </Grid>
    </ContainerFilms>

  );
};

TvShows.propTypes = {
  dispatch: PropTypes.func.isRequired,
  myShows: PropTypes.shape({
    map: PropTypes.func.isRequired,
    poster_path: PropTypes.string
  }).isRequired
};

const mapStateToProps = ({ shows }) => ({
  myShows: shows
});

export default connect(mapStateToProps)(TvShows);
