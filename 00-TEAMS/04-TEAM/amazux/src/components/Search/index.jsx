import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { splitQueryStringIntoArray, filterProductsByName } from '../../helpers/index';

const Search = () => {
  const { searchQuery } = useParams();
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(searchQuery);
  }, [searchQuery]);
  return (
    <div>
      <h2>{searchQuery}</h2>
    </div>
  );
};

Search.propTypes = {
//   products: PropTypes.shape([]).isRequired
};

function mapStateToProps({ products }) {
  return { products };
}

export default connect(mapStateToProps)(Search);
