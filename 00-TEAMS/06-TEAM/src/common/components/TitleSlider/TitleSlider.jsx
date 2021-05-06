import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './style';

const Heading = ({ Type, Content }) => {
  const Tag = `h${Type}`;
  return (
    <Title>
      <Tag>
        {' '}
        {Content}
      </Tag>
    </Title>
  );
};

Heading.propTypes = {
  Type: PropTypes.string.isRequired,
  Content: PropTypes.string.isRequired
};

export default Heading;
