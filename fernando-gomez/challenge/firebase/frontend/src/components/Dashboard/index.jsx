/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { loadCurriculum } from '../../redux/actions/actionCreators';
import './form.css';

function Dashboard({ curriculum, dispatch }) {
  useEffect(() => {
    if (!curriculum.length) dispatch(loadCurriculum());
  }, []);

  return (
    <>
      <header className="presentation-images">
        <img
          src={curriculum.profileBackgroundImage}
          alt="react-brackground"
          className="presentation-images__background"
        />
        <img
          src={curriculum.profileImage}
          alt="best-developer"
          className="presentation-images__avatar"
        />
      </header>

      <h1 className="title">
        {curriculum.name}
      </h1>
      <section className="resumee">
        <h2 className="resumee__title">
          Looking beyond the design and UI experience,
          Fernando builds solid web applications that
          can be maintained in the long term thanks to
          his good coding practices.
        </h2>
        <p className="resumee__description">
          Fernando&rsquo;s passion for computers began from his childhood,
          he has always been surrounded by technology, computers,
          wires and buttons.
        </p>
        After volunteering in Brazil,
        he began studying computer engineering and shortly after
        refining his skills in a development bootcamp at Skylab Coders Academy.
        <p />
      </section>

      <nav className="bottom-nav">
        <Link
          to="/studies-and-work"
          className="bottom-nav__studies-work"
        >
          <i className="fas fa-graduation-cap" />
          <i className="fas fa-briefcase" />
        </Link>
        <Link
          to="/github"
          className="bottom-nav__github"
        >
          <i className="fab fa-github" />
        </Link>
        <Link
          to="/skills"
          className="bottom-nav__skills"
        >
          <i className="fas fa-code" />
        </Link>
      </nav>

      <Link to="/contact">Contact me!</Link>

    </>
  );
}

Dashboard.propTypes = {
  curriculum: PropTypes.arrayOf(PropTypes.shape({
    length: PropTypes.number,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps({ curriculum }) {
  return {
    curriculum,
  };
}

export default connect(mapStateToProps)(Dashboard);
