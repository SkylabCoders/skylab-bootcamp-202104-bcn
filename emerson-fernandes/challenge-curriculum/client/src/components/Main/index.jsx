import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import loadData from '../../redux/actions/actionCreators';
import './style/style.css';

function Main({ data, dispatch }) {
  useEffect(() => {
    if (!data.length)dispatch(loadData());
  }, []);

  return (
    <>
      <div className="main-container">
        <div className="side-container">
          <div>
            {
            data.map((item) => <img src={item.avatarPicture} className="side-container__avatar" alt="avatar" />)
          }
          </div>
          <div className="side-container__title">
            {
            data.map((item) => (
              <h1>
                {item.name}
                {' '}
              </h1>
            ))
          }
          </div>
          <div>
            {
            data.map((item) => (
              <h2>
                {item.label}
                {' '}
              </h2>
            ))
          }
          </div>
          <div>
            <h2>Profile</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Amet excepturi similique
              explicabo impedit? Deserunt nostrum, unde
              ipsum soluta perferendis commodi adipisci
              facere placeat dolorum, eaque totam voluptates
              id rem molestiae.
            </p>
          </div>
          <div className="contact-container">
            <h2>Contact</h2>
            <ul>
              {
             data.map((item) => (
               <li>
                 {item.email}
                 {' '}
               </li>
             ))
           }
              {
             data.map((item) => (
               <li>
                 {item.cellphone}
                 {' '}
               </li>
             ))
           }
              {
             data.map((item) => (
               <li>
                 {item.contact.address}
                 {' '}
               </li>
             ))
           }
              {
             data.map((item) => (
               <li>
                 {item.contact.city}
                 {' '}
               </li>
             ))
           }
            </ul>
          </div>
        </div>
        <div className="skill-container">
          <div className="container">
            {/* <!-- Left vertical line --> */}
            <div className="container__line" />
            {/*  <!-- The timeline items container --> */}
            <ul className="container__items">
              {/* <!-- Each timeline item --> */}
              <li className="container__item">
                {/* <!-- The circle and title --> */}
                <div className="container__top">
                  {/*  <!-- The circle --> */}
                  <div className="container__circle" />

                  {/* <!-- The title --> */}
                  <div className="container__title">
                    <h3>Employment</h3>
                  </div>
                </div>

                {/*  <!-- The description --> */}
                <div className="container__desc">
                  Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Quaerat, ad! Fugit laboriosam,
                  molestias aspernatur rem nemo odit debitis sed
                  expedita amet placeat repellendus corrupti? Illum
                  vero repellendus quae mollitia cum.
                </div>
              </li>
              <li className="container__item">
                {/* <!-- The circle and title --> */}
                <div className="container__top">
                  {/*  <!-- The circle --> */}
                  <div className="container__circle" />

                  {/* <!-- The title --> */}
                  <div className="container__title">
                    <h3>Education</h3>
                  </div>
                </div>

                {/*  <!-- The description --> */}
                <div className="container__desc">
                  Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Quaerat, ad! Fugit laboriosam,
                  molestias aspernatur rem nemo odit debitis sed
                  expedita amet placeat repellendus corrupti? Illum
                  vero repellendus quae mollitia cum.
                </div>
              </li>
              <li className="container__item">
                {/* <!-- The circle and title --> */}
                <div className="container__top">
                  {/*  <!-- The circle --> */}
                  <div className="container__circle" />

                  {/* <!-- The title --> */}
                  <div className="container__title">
                    <h3>Skill</h3>
                  </div>
                </div>

                {/*  <!-- The description --> */}
                <div className="container__desc">
                  Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Quaerat, ad! Fugit laboriosam,
                  molestias aspernatur rem nemo odit debitis sed
                  expedita amet placeat repellendus corrupti? Illum
                  vero repellendus quae mollitia cum.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

Main.propTypes = {
  data: PropTypes.shape([{}]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(store) {
  return {
    data: store.data
  };
}

export default connect(mapStateToProps)(Main);
