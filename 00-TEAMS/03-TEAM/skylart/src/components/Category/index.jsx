import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
<<<<<<< HEAD
import categoriesToPrint from '../../redux/store/constants/categoriesToPrint';
import { loadArtworksFromApi, loadCategory } from '../../redux/actions/actionCreators';
=======
import { loadArtworksFromApi, loadCategory } from '../../redux/actions/actionCreators';
import categoriesToPrint from '../../redux/store/constants/categoriesToPrint';
>>>>>>> 527bb19f... resolve second rebase conflict
import './Category.scss';

let alreadyCalledId = [2];
function Category({ dispatch, artworks, category }) {
  const { categoryId } = useParams();
  const departmentProp = categoriesToPrint.find((element) => element.id === +categoryId);
  useEffect(() => {
    if (!alreadyCalledId.includes(+categoryId)) {
      alreadyCalledId = [...alreadyCalledId, +categoryId];
      dispatch(loadArtworksFromApi(categoryId));
    }
  }, [categoryId]);
  useEffect(() => {
    artworks.slice(1, 16).map((artworkId) => dispatch(loadCategory(artworkId)));
  }, [artworks]);

  return (
    <>
      <ul className="category">
        {category.length && category.filter(
          (element) => departmentProp.department === element.department,
        ).map((individualDetail) => (
          <li className="category__item">
            <Link to={`/detail/${individualDetail.objectID}`}>
              <img
                src={individualDetail.primaryImageSmall}
                alt={individualDetail.primaryImageSmall}
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

Category.propTypes = {
  dispatch: PropTypes.func.isRequired,
  artworks: PropTypes.shape([]).isRequired,
  category: PropTypes.shape([]).isRequired,
};

function mapStateToProps({ artworks, category }) {
  return {
    artworks,
    category,
  };
}

export default connect(mapStateToProps)(Category);
