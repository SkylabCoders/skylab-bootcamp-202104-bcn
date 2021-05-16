import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadInfoLanguage } from '../redux/actions/actionCreators';

function Language({ dispatch, language }) {
  useEffect(() => {
    dispatch(loadInfoLanguage());
  }, []);
  return language.map((idioma) => (
    <>
      <p>
        {idioma.language}
      </p>
      <p>
        {idioma.level}
      </p>

    </>
  ));
}

function mapStateToProps(store) {
  return {
    language: store.language
  };
}

export default connect(mapStateToProps)(Language);
