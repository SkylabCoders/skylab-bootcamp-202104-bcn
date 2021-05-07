import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

// const productCardList = (product) => {
//   const [totalProductsCartList, setTotalProductsCartList] = useState([]);

// const productsInCart = () => (
//   <li key={product.name} className="products__item">
//     <img className="products__img" src={product.img.url} alt={product.name} />
//     <div className="products__details">
//       <span className="products__name">{product.name}</span>
//       <span className="products__price">
//         {product.cost}
//         {' '}
//         €
//       </span>
//     </div>
//   </li>
// );
const CartList = () => (
  <>
    <h2>Carrito</h2>

    <ul className="cart-list">
      { false
        // totalProductsCartList.length
        ? (
        // productsInCart()
          <div>productos del carro</div>
        )
        : (
          <div>
            <h3>No tienes nada en tu carrito</h3>
            <Link to="/">Quiza te interese algo de nuestro catalogo</Link>
          </div>
        )}

    </ul>
  </>
);

// CartList.propTypes = {
//   product: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     cost: PropTypes.number.isRequired,
//     category: PropTypes.string.isRequired,
//     _id: PropTypes.string.isRequired,
//     img: {
//       url: PropTypes.string.isRequired,
//       hdUrl: PropTypes.string.isRequired
//     }
//   }).isRequired
// };

export default CartList;
