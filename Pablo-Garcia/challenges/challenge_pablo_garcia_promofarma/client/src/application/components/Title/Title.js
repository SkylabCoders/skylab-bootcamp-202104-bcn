import React from 'react';
import PropTypes from 'prop-types';
import Heading from './style';

const Title = ({ type, content }) => {
  const Tag = `h${type}`;
  return (
    <Heading>
      <Tag>
        {' '}
        {content}
        {' '}
      </Tag>
    </Heading>

  );
};

Title.propTypes = {
  type: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};
export default Title;
