import React from 'react';
import PropTypes from 'prop-types';
import './terminal.css';

const Terminal = ({ cv }) => (
  <div>
    <div className="window">
      <div className="bar">
        <div className="btn" />
      </div>
      <div className="body">
        <pre>

          <div className="comment"># run this command:</div>
          <div className="prompt">
            $
            <span className="command">show cv</span>
          </div>
          <div className="prompt">- - - - - - - - - - - - - </div>
          <div className="prompt">{`${cv.name} ${cv.lastName} CV`}</div>
          <div className="prompt">- - - - - - - - - - - - - </div>
          <div className="prompt">Nationality:</div>
          <div className="prompt">{`  ${cv.nationality}`}</div>
          <div className="prompt">{`BirthDate: ${cv.birthDate.split('T')[0]}`}</div>
          <div className="prompt">
            $
            <span className="command">show experience and studies</span>
          </div>
          <div className="prompt">
            $
            <span className="pulse">_</span>
          </div>
        </pre>
      </div>
    </div>
  </div>
);

Terminal.propTypes = {
  cv: PropTypes.shape({
    name: PropTypes.string,
    lastName: PropTypes.string,
    birthDate: PropTypes.string,
    nationality: PropTypes.string,
  }).isRequired,
};

Terminal.defaulfProps = {
  cv: {
    name: '',
    lastName: '',
    birthDate: '',
    nationality: '',
  },
};

export default Terminal;
