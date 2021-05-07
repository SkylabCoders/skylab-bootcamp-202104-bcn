import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const CartList = ({ cartList }) => (

  <>
    <h2>Carrito</h2>

    <ul className="cart-list">
      {
          cartList.length
            ? (

              cartList.map((element) => (
                <li key={element.name} className="products__item">
                  <img className="products__img" src={element.img.url} alt={element.name} />
                  <div className="products__details">
                    <span className="products__name">{element.name}</span>
                    <span className="products__price">
                      {element.cost}
                      {' '}
                      €
                    </span>
                  </div>
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

CartList.propTypes = {
  cartList: PropTypes.shape([{
    name: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    img: {
      url: PropTypes.string.isRequired,
      hdUrl: PropTypes.string.isRequired
    }
  }]).isRequired
};

const mapStateToProps = (store) => ({
  cartList: store.cart
});

export default connect(mapStateToProps)(CartList);
