import React from 'react';

const Button = ({ operation, sign }) => (
  <button onClick={operation}>{sign}</button>
);

export default Button;
