import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './style';

const Heading = ({ type, content }) => {
  const Tag = `h${type}`;
  return (
    <Title>
      <Tag>
        {' '}
        {content}
      </Tag>
    </Title>
  );
};

Heading.propTypes = {
  type: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired
};

export default Heading;
