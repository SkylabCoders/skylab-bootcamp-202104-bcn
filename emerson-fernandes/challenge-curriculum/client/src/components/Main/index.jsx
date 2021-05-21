import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import loadData from '../../redux/actions/actionCreators';
import './style/style.css';

function Main({ data, dispatch }) {
  // eslint-disable-next-line no-debugger
  debugger;
  useEffect(() => {
    if (!data.length)dispatch(loadData());
  }, []);

  return (
    <>
      <div className="Side-container">
        <div>
          {
              data.map((item) => (
                <h1>
                  {item.name}
                  {' '}
                </h1>
              ))
          }
        </div>

        <div>Informacion profile</div>
        <div>Contact</div>
      </div>
      <main className="test">
        <div>Employment</div>
        <div>Education</div>
        <div>Skill</div>
      </main>

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
