import React from 'react';
import PropTypes from 'prop-types';
import './timeline.css';

const Timeline = ({ events, title }) => (
  <div className="timeline">
    <h2>{title}</h2>
    <ul className="timeline">
      {events.map((event, index) => (
        <li key={`${event.title}`}>
          <div className={index % 2 === 0 ? 'direction-r' : 'direction-l'}>
            <div className="flag-wrapper">
              <span className="flag">{`${event.title}`}</span>
              <span className="time-wrapper">
                <span className="time">
                  {`${event.startDate.split('T')[0]} - ${event.finishDate ? event.finishDate.split('T')[0] : 'present'}`}
                </span>

              </span>
            </div>
            <div className="desc">{`in ${event.organization}`}</div>
          </div>
        </li>
      ))}
    </ul>
  </div>

);

Timeline.propTypes = {
  title: PropTypes.string.isRequired,
  events: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      startDate: PropTypes.string,
      finishDate: PropTypes.string,
      organization: PropTypes.string,
      description: PropTypes.string,
    }),
  ).isRequired,
};

Timeline.defaulfProps = {
  events: {
    title: '',
    startDate: '',
    finishDate: '',
    organization: '',
    description: '',
  },
};

export default Timeline;
