import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteProduct } from '../../../redux/actions/actionCreators';

const CartList = ({ cart, dispatch }) => {
  const handleClick = (element) => {
    dispatch(deleteProduct(element));
  };
  return (

    <>
      <h2>Carrito</h2>

      <ul className="main-cart__list">
        {
          cart.length
            ? (

              cart.map((element) => (
                <li key={element.name} className="main-cart__item">
                  <img className="main-cart__img" src={element.img.url} alt={element.name} />
                  <div className="main-cart__details">
                    <span className="main-cart__name">{element.name}</span>
                    <span className="main-cart__price">
                      {element.cost}
                      {' '}
                      €
                    </span>
                  </div>
                  <button
                    type="button"
                    className="main-cart__button"
                    onClick={() => handleClick(element.name)}
                  >
                    X

                  </button>
                </li>
              ))

            )
            : (
              <div>
                <h3>No tienes nada en tu carrito</h3>
                <Link to="/">Quiza te interese algo de nuestro catalogo</Link>
              </div>
            )
        }

      </ul>
    </>
  );
};

CartList.propTypes = {
  cart: PropTypes.shape([{
    name: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    img: {
      url: PropTypes.string.isRequired,
      hdUrl: PropTypes.string.isRequired
    }
  }]).isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ cart }) => ({
  cart
});

export default connect(mapStateToProps)(CartList);
