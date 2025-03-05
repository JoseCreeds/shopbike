import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import NewLetters from '@/components/NewLetters'
import Loader from '@/utils/loader'
import PropTypes from 'prop-types'
import productsList from '@/data/products'
import piecesList from '@/data/pieces'
import categorieList from '@/data/categorie'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { addToCart } from '@/store/slices/cartSlice'
import './style.css'
// import OwlCarousel from 'react-owl-carousel'
// import 'owl.carousel/dist/assets/owl.carousel.css'
// import 'owl.carousel/dist/assets/owl.theme.default.css'
// import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

export default function ProductDetail({ initialQuantity = 1 }) {
  const dispatch = useDispatch()
  const [activeTab, setActiveTab] = useState('description')
  const [formData, setFormData] = useState({
    rating: 0,
    message: '',
    name: '',
    email: '',
  })
  const [quantity, setQuantity] = useState(initialQuantity)

  const [errors, setErrors] = useState({})
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [selectedImage, setSelectedImage] = useState(
    product?.gallery?.length > 0 ? product.gallery[0] : ''
  )

  // slect size part
  const [selectedSize, setSelectedSize] = useState(null)

  const handleSizeClick = (size) => {
    setSelectedSize(size)
  }

  useEffect(() => {
    window.scrollTo(0, 0) // Remet la page en haut
  }, [])

  useEffect(() => {
    if (product?.gallery?.length > 0) {
      setSelectedImage(product.gallery[0])
    }
  }, [product])
  useEffect(() => {
    const productId = parseInt(id)

    const foundProduct =
      productsList.find((p) => p.id === productId) ||
      piecesList.find((p) => p.id === productId)

    if (foundProduct) {
      setProduct(foundProduct)
    }
  }, [id])

  if (!product) {
    return <p></p>
  }

  // product part end

  const handleStarClick = (value) => {
    setFormData((prev) => ({ ...prev, rating: value }))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let newErrors = {}
    if (!formData.rating) newErrors.rating = 'Veuillez donner une note.'
    if (!formData.message) newErrors.message = 'Le message est requis.'
    if (!formData.name) newErrors.name = 'Le nom est requis.'
    if (!formData.email) newErrors.email = "L'email est requis."

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    console.log('Formulaire soumis:', formData)
    alert('Merci pour votre avis !')
  }

  // Quantity part

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1)) // Empêcher la quantité d'aller sous 1
  }

  const handleChangeQte = (e) => {
    let value = parseInt(e.target.value, 10)
    if (isNaN(value) || value < 1) value = 1 // Empêcher les valeurs invalides
    setQuantity(value)
  }

  const category = categorieList.find((cat) => cat.id === product.categorie)

  return (
    <>
      <Loader />
      {/* <!-- START SECTION BREADCRUMB --> */}
      <div className="breadcrumb_section bg_gray page-title-mini">
        <div className="container">
          {/* <!-- STRART CONTAINER --> */}
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="page-title">
                <h1>Product Detail</h1>
              </div>
            </div>
            <div className="col-md-6">
              <ol className="breadcrumb justify-content-md-end">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Pages</a>
                </li>
                <li className="breadcrumb-item active">Product Detail</li>
              </ol>
            </div>
          </div>
        </div>
        {/* <!-- END CONTAINER--> */}
      </div>
      {/* <!-- END SECTION BREADCRUMB --> */}

      {/* <!-- START MAIN CONTENT --> */}
      <div className="main_content">
        {/* <!-- START SECTION SHOP --> */}
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
                <div className="product-image">
                  <Zoom>
                    <div className="product_img_box">
                      <img
                        id="product_img"
                        src={selectedImage}
                        data-zoom-image={product.picture}
                        alt="product_img1"
                      />

                      <span className=" product_img_zoom linearicons-zoom-in"></span>
                    </div>
                  </Zoom>
                  {product.gallery.length > 1 && (
                    <div className="image-thumbnails">
                      {product.gallery?.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Thumbnail ${index}`}
                          className={image === selectedImage ? 'active' : ''}
                          onClick={() => setSelectedImage(image)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="pr_detail">
                  <div className="product_description">
                    <h4 className="product_title">
                      <a href="#">{product.libelle}</a>
                    </h4>
                    <div className="product_price">
                      <span className="price">€ {product.price}</span>
                      <del>€ {product.old_price}</del>
                      <div className="on_sale">
                        <span>
                          {Math.floor(
                            ((product.old_price - product.price) /
                              product.old_price) *
                              100
                          )}
                          % Off
                        </span>
                      </div>
                    </div>
                    <div className="rating_wrap">
                      <div className="rating">
                        <div
                          className="product_rate"
                          style={{ width: '80%' }}
                        ></div>
                      </div>
                      <span className="rating_num">({product.rating})</span>
                    </div>
                    <div className="pr_desc">
                      <p>{product.description}</p>
                    </div>
                    <div className="product_sort_info">
                      <ul>
                        <li>
                          <i className="linearicons-shield-check"></i> Garantie
                          d&apos;un an
                        </li>
                        <li>
                          <i className="linearicons-sync"></i> 3Politique de
                          retour de 30 jours
                        </li>
                      </ul>
                    </div>

                    <div className="pr_switch_wrap">
                      <span className="switch_lable">Taille</span>
                      <div className="product_size_switch">
                        <span
                          onClick={() => handleSizeClick('xs')}
                          className={selectedSize === 'xs' ? 'active' : ''}
                        >
                          xs
                        </span>
                        <span
                          onClick={() => handleSizeClick('s')}
                          className={selectedSize === 's' ? 'active' : ''}
                        >
                          s
                        </span>
                        <span
                          onClick={() => handleSizeClick('m')}
                          className={selectedSize === 'm' ? 'active' : ''}
                        >
                          m
                        </span>
                        <span
                          onClick={() => handleSizeClick('l')}
                          className={selectedSize === 'l' ? 'active' : ''}
                        >
                          l
                        </span>
                        <span
                          onClick={() => handleSizeClick('xl')}
                          className={selectedSize === 'xl' ? 'active' : ''}
                        >
                          xl
                        </span>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="cart_extra">
                    <div className="cart-product-quantity">
                      <div className="quantity">
                        <input
                          type="button"
                          value="-"
                          className="minus"
                          onClick={decreaseQuantity}
                        />
                        <input
                          type="text"
                          name="quantity"
                          value={quantity}
                          title="Qty"
                          className="qty"
                          size="4"
                          onChange={handleChangeQte}
                        />
                        <input
                          type="button"
                          value="+"
                          className="plus"
                          onClick={increaseQuantity}
                        />
                      </div>
                    </div>
                    <div className="cart_btn">
                      <button
                        className="btn btn-fill-out btn-addtocart"
                        type="button"
                        onClick={(e) => {
                          e.preventDefault()
                          dispatch(addToCart(product))
                        }}
                      >
                        <i className="icon-basket-loaded"></i> Ajouter
                      </button>
                      <a className="add_compare" href="#">
                        <i className="icon-shuffle"></i>
                      </a>
                      <a className="add_wishlist" href="#">
                        <i className="icon-heart"></i>
                      </a>
                    </div>
                  </div>
                  <hr />
                  <ul className="product-meta">
                    <li>
                      Référence: <a href="#">{product.ref}</a>
                    </li>
                    <li>
                      Catégorie: <a href="#">{category.title}</a>
                    </li>
                  </ul>

                  <div className="product_share">
                    <span>Partager:</span>
                    <ul className="social_icons">
                      <li>
                        <a href="#">
                          <i className="ion-social-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ion-social-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ion-social-googleplus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ion-social-youtube-outline"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ion-social-instagram-outline"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="large_divider clearfix"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="tab-style3">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      {/* <a
                        className="nav-link active"
                        id="Description-tab"
                        data-bs-toggle="tab"
                        href="#Description"
                        role="tab"
                        aria-controls="Description"
                        aria-selected="true"
                      >
                        Description
                      </a> */}
                      <button
                        className={`nav-link active ${
                          activeTab === 'description' ? 'active' : ''
                        }`}
                        onClick={() => setActiveTab('description')}
                        id="Description-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#Description"
                        type="button"
                        role="tab"
                        aria-controls="Description"
                        aria-selected="true"
                      >
                        Description
                      </button>
                    </li>

                    <li className="nav-item">
                      {/* <a
                        className="nav-link"
                        id="Reviews-tab"
                        data-bs-toggle="tab"
                        href="#Reviews"
                        role="tab"
                        aria-controls="Reviews"
                        aria-selected="false"
                      >
                        Reviews
                      </a> */}
                      <button
                        className={`nav-link ${
                          activeTab === 'reviews' ? 'active' : ''
                        }`}
                        onClick={() => setActiveTab('reviews')}
                        id="Reviews-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#Reviews"
                        type="button"
                        role="tab"
                        aria-controls="Reviews"
                        aria-selected="false"
                      >
                        Reviews
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content shop_info_tab">
                    {activeTab === 'description' && (
                      <div
                        className="tab-pane fade show active"
                        id="Description"
                        role="tabpanel"
                        aria-labelledby="Description-tab"
                      >
                        <p>{product.description}</p>
                        <p>{product.description1}</p>
                      </div>
                    )}

                    {activeTab === 'reviews' && (
                      <div
                        className="tab-pane fade"
                        id="Reviews"
                        role="tabpanel"
                        aria-labelledby="Reviews-tab"
                      >
                        <div className="review_form field_form">
                          <h5>Add a review</h5>
                          <form className="row mt-3" onSubmit={handleSubmit}>
                            <div className="form-group col-12 mb-3">
                              <div className="star_rating">
                                {[1, 2, 3, 4, 5].map((value) => (
                                  <span
                                    key={value}
                                    data-value={value}
                                    onClick={() => handleStarClick(value)}
                                    style={{
                                      cursor: 'pointer',
                                      color:
                                        formData.rating >= value
                                          ? 'gold'
                                          : 'gray',
                                    }}
                                  >
                                    <i className="fas fa-star"></i>
                                  </span>
                                ))}
                              </div>
                              {errors.rating && (
                                <span className="text-danger">
                                  {errors.rating}
                                </span>
                              )}
                            </div>

                            <div className="form-group col-12 mb-3">
                              <textarea
                                placeholder="Votre avis *"
                                className="form-control"
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                              ></textarea>
                              {errors.message && (
                                <span className="text-danger">
                                  {errors.message}
                                </span>
                              )}
                            </div>

                            <div className="form-group col-md-6 mb-3">
                              <input
                                placeholder="Entrez votre nom *"
                                className="form-control"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                              />
                              {errors.name && (
                                <span className="text-danger">
                                  {errors.name}
                                </span>
                              )}
                            </div>

                            <div className="form-group col-md-6 mb-3">
                              <input
                                placeholder="Entrez votre email *"
                                className="form-control"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                              />
                              {errors.email && (
                                <span className="text-danger">
                                  {errors.email}
                                </span>
                              )}
                            </div>

                            <div className="form-group col-12 mb-3">
                              <button
                                type="submit"
                                className="btn btn-fill-out"
                              >
                                Soumettre l&apos;avis
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- END SECTION SHOP --> */}
      </div>

      <NewLetters />
    </>
  )
}
ProductDetail.propTypes = {
  initialQuantity: PropTypes.number,
}
