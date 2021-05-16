import React from 'react';
import './resume.css';
// import PropTypes from 'prop-types';

const Resume = () => (
  <div className="window">
    <div className="bar">
      <div className="btn" />
    </div>
    <div className="body">
      <pre>
        <div className="comment"># run this command:</div>
        <div className="prompt">
          $
          <span className="command">echo hi</span>
        </div>
        <div className="prompt">hi</div>
        <div className="prompt">
          $
          <span className="pulse">_</span>
        </div>
      </pre>
    </div>
  </div>
);

Resume.propTypes = {

};

export default Resume;
