import React from "react";
import PropTypes from 'prop-types'
import defaultImage from '../../../assets/default-image.jpeg'
const Product = ({ image, name, price }) => {
  return (
    <article className="product">
      <h2>{name}</h2>
      <h2>${price}</h2>
      <img src={image} alt={name}/>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

Product.defaultProps = {
  name: 'default name',
  price: 2.99,
  image: defaultImage
}
export default Product;
