import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadBooks } from '../../actions/actionCreators';

const Dashboard = ({ books, dispatch }) => {
  useEffect(() => {
    // loadBooks().then((updatedBooks) => {
    //   console.log(updatedBooks);
    //   dispatch(updatedBooks);
    // });
    dispatch(loadBooks());
  }, []);

  const title = 'Dashboard';
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {
        (books) && (
          books.map((book) => (
            <li>
              <h3>{book.volumeInfo.title}</h3>
              <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="" />
              <p>{book.volumeInfo.description}</p>
            </li>
          ))
        )
      }
      </ul>

    </div>
  );
};

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
  books: PropTypes.shape([]).isRequired,
};

function mapStateToProps({ books }) {
  return { books };
}

export default connect(mapStateToProps)(Dashboard);
