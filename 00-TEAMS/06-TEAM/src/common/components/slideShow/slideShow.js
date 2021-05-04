import React, { useEffect } from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import loadMovies from '../../../redux/actions/actionsCreator';
import './style.css';
import next from './slideShowBtn';

function slideShow({ myMovies, dispatch }) {
  const baseImgUrl = 'https://image.tmdb.org/t/p/w780';
  useEffect(() => {
    dispatch(loadMovies());
  }, []);

  // return (
  //   <section className="container-slider">
  //     <div className="slider" id="slider">
  //       {
  //       myMovies.slice(0, 4).map((element) => (
  //         <div key={element.id} className="slider__section">
  //           <img className="slider__image" key={element.id} src={`${baseImgUrl}${element.poster_path}`} alt="" />
  //         </div>
  //       ))
  //     }
  //     </div>
  //     <button
  //       type="button"
  //       onClick={() => next('RIGHT')}
  //       className="slider__btn slider__btn--right"
  //       id="btn-right"
  //     >
  //       &#62;
  //     </button>
  //     <button
  //       type="button"
  //       onClick={() => next('LEFT')}
  //       className="slider__btn slider__btn--left"
  //       id="btn-left"
  //     >
  //       &#60;
  //     </button>
  //   </section>
  // );
}

slideShow.propTypes = {
  myMovies: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ movies }) => ({
  myMovies: movies
});

export default connect(mapStateToProps)(slideShow);
