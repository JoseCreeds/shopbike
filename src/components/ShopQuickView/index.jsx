import PropTypes from 'prop-types'

const ProductPopup = ({ product, onClose }) => {
  return (
    <div className="ajax_quick_view">
      <div className="row">
        <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
          <div className="product-image">
            <div className="product_img_box">
              <img
                id="product_img"
                src={product.picture}
                alt={product.libelle}
              />
            </div>
            <div id="pr_item_gallery" className="product_gallery_item">
              {product.gallery.map((img, index) => (
                <div key={index} className="item">
                  <a href="#" className="product_gallery_item">
                    <img src={img} alt={`product_small_img${index + 1}`} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="pr_detail">
            <h4 className="product_title">{product.libelle}</h4>
            <div className="product_price">
              <span className="price">${product.price}</span>
              {product.oldPrice && <del>${product.oldPrice}</del>}
            </div>
            <div className="pr_desc">
              <p>{product.description}</p>
            </div>
            <div className="cart_btn">
              <button className="btn btn-fill-out btn-addtocart">
                Add to cart
              </button>
            </div>
            <button className="close-btn" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Définir les PropTypes pour le composant ProductPopup
ProductPopup.propTypes = {
  product: PropTypes.shape({
    libelle: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    oldPrice: PropTypes.number,
    picture: PropTypes.string.isRequired,
    gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired, // Validation pour description
  }).isRequired,
  onClose: PropTypes.func.isRequired,
}

export default ProductPopup
