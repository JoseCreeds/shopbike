//import LogoDarkr from '@/assets/images/logo_dark.png'
import { useState } from 'react'
import LogoDark from '@/assets/images/rijden.png'
import LogoLight from '@/assets/images/logo_light.png'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '@/store/slices/cartSlice'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const cartItems = useSelector((state) => state.cart.cartItems)
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )
  const dispatch = useDispatch()

  return (
    <>
      {/* <!-- START HEADER --> */}
      <header className="header_wrap">
        <div className="top-header light_skin bg_dark d-none d-md-block">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-8">
                <div className="header_topbar_info">
                  <div className="header_offer">
                    <span>Livraison gratuite à partir de 200 euro</span>
                  </div>
                  <div className="download_wrap">
                    <span className="me-3">Télécharger App</span>
                    <ul className="icon_list text-center text-lg-start">
                      <li>
                        <a href="#">
                          <i className="fab fa-apple"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-android"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-windows"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-4">
                <div className="d-flex align-items-center justify-content-center justify-content-md-end">
                  <span>Plus de 50% de réduction aujourd&apos;hui !</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="middle-header dark_skin">
          <div className="container">
            <div className="nav_block">
              <a className="navbar-brand" href="/">
                <img className="logo_light" src={LogoLight} alt="logo" />
                <img className="logo_dark" src={LogoDark} alt="logo" />
              </a>
              <div className="product_search_form radius_input search_form_btn">
                <form>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="custom_select">
                        <select className="first_null not_chosen">
                          <option value="">Toutes catégories</option>
                          {/* <option value="Dresses">Dresses</option>
                          <option value="Shirt-Tops">Shirt &amp; Tops</option>
                          <option value="T-Shirt">T-Shirt</option>
                          <option value="Pents">Pents</option>
                          <option value="Jeans">Jeans</option> */}
                        </select>
                      </div>
                    </div>
                    <input
                      className="form-control"
                      placeholder="Rechercher vélo..."
                      required=""
                      type="text"
                    />
                    <button type="submit" className="search_btn3">
                      Rechercher
                    </button>
                  </div>
                </form>
              </div>
              {/* Login part */}
              <ul className="navbar-nav attr-nav align-items-center">
                <li>
                  <a
                    href="#"
                    className="nav-link"
                    onClick={(e) => {
                      e.preventDefault()
                      window.location.href = `/login`
                    }}
                  >
                    <i className="linearicons-user"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    <i className="linearicons-heart"></i>
                    <span className="wishlist_count">0</span>
                  </a>
                </li>
                <li className="dropdown cart_dropdown">
                  <a
                    className="nav-link cart_trigger"
                    href="#"
                    data-bs-toggle="dropdown"
                    onClick={(e) => {
                      e.preventDefault()
                      window.location.href = `/cart`
                    }}
                  >
                    <i className="linearicons-bag2"></i>
                    <span className="cart_count">{totalItems}</span>
                    <span className="amount">
                      <span className="currency_symbol">€</span>{' '}
                      {totalPrice.toFixed(2)}
                    </span>
                  </a>
                  <div className="cart_box cart_right dropdown-menu dropdown-menu-right">
                    {cartItems.length === 0 ? (
                      <p className="text-center p-3">Votre panier est vide</p>
                    ) : (
                      // <ul className="cart_list">
                      //   <li>
                      //     <a href="#" className="item_remove">
                      //       <i className="ion-close"></i>
                      //     </a>
                      //     <a href="#">
                      //       <img
                      //         src="assets/images/cart_thamb1.jpg"
                      //         alt="cart_thumb1"
                      //       />
                      //       Variable product 001
                      //     </a>
                      //     <span className="cart_quantity">
                      //       {' '}
                      //       1 x{' '}
                      //       <span className="cart_amount">
                      //         {' '}
                      //         <span className="price_symbole">$</span>
                      //       </span>
                      //       78.00
                      //     </span>
                      //   </li>
                      //   <li>
                      //     <a href="#" className="item_remove">
                      //       <i className="ion-close"></i>
                      //     </a>
                      //     <a href="#">
                      //       <img
                      //         src="assets/images/cart_thamb2.jpg"
                      //         alt="cart_thumb2"
                      //       />
                      //       Ornare sed consequat
                      //     </a>
                      //     <span className="cart_quantity">
                      //       {' '}
                      //       1 x{' '}
                      //       <span className="cart_amount">
                      //         {' '}
                      //         <span className="price_symbole">$</span>
                      //       </span>
                      //       81.00
                      //     </span>
                      //   </li>
                      // </ul>

                      <>
                        <ul className="cart_list">
                          {cartItems.map((item) => (
                            <li key={item.id}>
                              <a
                                href="#"
                                className="item_remove"
                                onClick={() =>
                                  dispatch(removeFromCart(item.id))
                                }
                              >
                                <i className="ion-close"></i>
                              </a>
                              <a href="#">
                                <img src={item.picture} alt={item.libelle} />
                                {item.libelle}
                              </a>
                              <span className="cart_quantity">
                                {item.quantity} x{' '}
                                <span className="cart_amount">
                                  <span className="price_symbole">€</span>{' '}
                                </span>
                                {item.price.toFixed(2)}
                              </span>
                            </li>
                          ))}
                        </ul>

                        <div className="cart_footer">
                          <p className="cart_total">
                            <strong>Sous-total:</strong>{' '}
                            <span className="cart_price">
                              <span className="price_symbole">€</span>{' '}
                            </span>
                            {totalPrice.toFixed(2)}
                          </p>
                          <p className="cart_buttons">
                            <a
                              href="#"
                              className="btn btn-fill-line view-cart"
                              onClick={(e) => {
                                e.preventDefault()
                                window.location.href = `/cart`
                              }}
                            >
                              Panier
                            </a>
                            <a
                              href="#"
                              className="btn btn-fill-out checkout"
                              onClick={(e) => {
                                e.preventDefault()
                                window.location.href = `/checkout`
                              }}
                            >
                              Payer
                            </a>
                          </p>
                        </div>
                      </>
                    )}
                    {/* <div className="cart_footer">
                      <p className="cart_total">
                        <strong>Subtotal:</strong>{' '}
                        <span className="cart_price">
                          {' '}
                          <span className="price_symbole">$</span>
                        </span>
                        159.00
                      </p>
                      <p className="cart_buttons">
                        <a href="cart" className="btn btn-fill-line view-cart">
                          View Cart
                        </a>
                        <a
                          href="checkout"
                          className="btn btn-fill-out checkout"
                        >
                          Checkout
                        </a>
                      </p>
                    </div> */}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom_header dark_skin main_menu_uppercase border-top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-4 col-sm-6 col-3">
                <div className="categories_wrap">
                  <button
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navCatContent"
                    aria-expanded="false"
                    className="categories_btn categories_menu"
                  >
                    <span>Toutes Categories </span>
                    <i className="linearicons-menu"></i>
                  </button>
                  <div id="navCatContent" className="navbar collapse">
                    <ul>
                      {/* <li className="dropdown dropdown-mega-menu">
                        <a
                          className="dropdown-item nav-link dropdown-toggler"
                          href="#"
                          data-bs-toggle="dropdown"
                        >
                          <i className="flaticon-tv"></i> <span>Computer</span>
                        </a>
                        <div className="dropdown-menu">
                          <ul className="mega-menu d-lg-flex">
                            <li className="mega-menu-col col-lg-7">
                              <ul className="d-lg-flex">
                                <li className="mega-menu-col col-lg-6">
                                  <ul>
                                    <li className="dropdown-header">
                                      Featured Item
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Vestibulum sed
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Donec porttitor
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Donec vitae facilisis
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Curabitur tempus
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Vivamus in tortor
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Donec vitae ante ante
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Etiam ac rutrum
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Quisque condimentum
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="mega-menu-col col-lg-6">
                                  <ul>
                                    <li className="dropdown-header">
                                      Popular Item
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Curabitur laoreet
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Vivamus in tortor
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Donec vitae facilisis
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Quisque condimentum
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Etiam ac rutrum
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Donec vitae ante ante
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Donec porttitor
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Curabitur tempus
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="mega-menu-col col-lg-5">
                              <div className="header-banner2">
                                <img
                                  src="assets/images/menu_banner7.jpg"
                                  alt="menu_banner1"
                                />

                                <div className="banne_info">
                                  <h6>10% Off</h6>
                                  <h4>Computers</h4>
                                  <a href="#">Shop now</a>
                                </div>
                              </div>
                              <div className="header-banner2">
                                <img
                                  src="assets/images/menu_banner8.jpg"
                                  alt="menu_banner2"
                                />

                                <div className="banne_info">
                                  <h6>15% Off</h6>
                                  <h4>Top Laptops</h4>
                                  <a href="#">Shop now</a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="dropdown dropdown-mega-menu">
                        <a
                          className="dropdown-item nav-link dropdown-toggler"
                          href="#"
                          data-bs-toggle="dropdown"
                        >
                          <i className="flaticon-responsive"></i>{' '}
                          <span>Mobile & Tablet</span>
                        </a>
                        <div className="dropdown-menu">
                          <ul className="mega-menu d-lg-flex">
                            <li className="mega-menu-col col-lg-7">
                              <ul className="d-lg-flex">
                                <li className="mega-menu-col col-lg-6">
                                  <ul>
                                    <li className="dropdown-header">
                                      Featured Item
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Vestibulum sed
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Donec porttitor
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Donec vitae facilisis
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Curabitur tempus
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Vivamus in tortor
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Donec vitae ante ante
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Etiam ac rutrum
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="mega-menu-col col-lg-6">
                                  <ul>
                                    <li className="dropdown-header">
                                      Popular Item
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Curabitur laoreet
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Vivamus in tortor
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Donec vitae facilisis
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Quisque condimentum
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Etiam ac rutrum
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Donec vitae ante ante
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Donec porttitor
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="mega-menu-col col-lg-5">
                              <div className="header-banner2">
                                <a href="#"><img src="assets/images/menu_banner6.jpg" alt="menu_banner" /></a>
                                 
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="dropdown dropdown-mega-menu">
                        <a
                          className="dropdown-item nav-link dropdown-toggler"
                          href="#"
                          data-bs-toggle="dropdown"
                        >
                          <i className="flaticon-camera"></i>{' '}
                          <span>Camera</span>
                        </a>
                        <div className="dropdown-menu">
                          <ul className="mega-menu d-lg-flex">
                            <li className="mega-menu-col col-lg-7">
                              <ul className="d-lg-flex">
                                <li className="mega-menu-col col-lg-6">
                                  <ul>
                                    <li className="dropdown-header">
                                      Featured Item
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Vestibulum sed
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Donec porttitor
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Donec vitae facilisis
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Curabitur tempus
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Vivamus in tortor
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Donec vitae ante ante
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Etiam ac rutrum
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="mega-menu-col col-lg-6">
                                  <ul>
                                    <li className="dropdown-header">
                                      Popular Item
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Curabitur laoreet
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Vivamus in tortor
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Donec vitae facilisis
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Quisque condimentum
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Etiam ac rutrum
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Donec vitae ante ante
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Donec porttitor
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="mega-menu-col col-lg-5">
                              <div className="header-banner2">
                                <a href="#"><img src="assets/images/menu_banner9.jpg" alt="menu_banner"/></a>
                                 
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="dropdown dropdown-mega-menu">
                        <a
                          className="dropdown-item nav-link dropdown-toggler"
                          href="#"
                          data-bs-toggle="dropdown"
                        >
                          <i className="flaticon-plugins"></i>{' '}
                          <span>Accessories</span>
                        </a>
                        <div className="dropdown-menu">
                          <ul className="mega-menu d-lg-flex">
                            <li className="mega-menu-col col-lg-4">
                              <ul>
                                <li className="dropdown-header">Womans</li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="shop-list-left-sidebar.html"
                                  >
                                    Vestibulum sed
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="shop-left-sidebar.html"
                                  >
                                    Donec porttitor
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="shop-right-sidebar.html"
                                  >
                                    Donec vitae facilisis
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="shop-list.html"
                                  >
                                    Curabitur tempus
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="shop-load-more.html"
                                  >
                                    Vivamus in tortor
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="mega-menu-col col-lg-4">
                              <ul>
                                <li className="dropdown-header">Mens</li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="shop-cart.html"
                                  >
                                    Donec vitae ante ante
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="checkout.html"
                                  >
                                    Etiam ac rutrum
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="wishlist.html"
                                  >
                                    Quisque condimentum
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="compare.html"
                                  >
                                    Curabitur laoreet
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="order-completed.html"
                                  >
                                    Vivamus in tortor
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="mega-menu-col col-lg-4">
                              <ul>
                                <li className="dropdown-header">Kids</li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="shop-product-detail.html"
                                  >
                                    Donec vitae facilisis
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="shop-product-detail-left-sidebar.html"
                                  >
                                    Quisque condimentum
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="shop-product-detail-right-sidebar.html"
                                  >
                                    Etiam ac rutrum
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="shop-product-detail-thumbnails-left.html"
                                  >
                                    Donec vitae ante ante
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="shop-product-detail-thumbnails-left.html"
                                  >
                                    Donec porttitor
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a
                          className="dropdown-item nav-link nav_item"
                          href="coming-soon.html"
                        >
                          <i className="flaticon-headphones"></i>{' '}
                          <span>Headphones</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item nav-link nav_item"
                          href="404.html"
                        >
                          <i className="flaticon-console"></i>{' '}
                          <span>Gaming</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item nav-link nav_item"
                          href="login.html"
                        >
                          <i className="flaticon-watch"></i>{' '}
                          <span>Watches</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item nav-link nav_item"
                          href="register.html"
                        >
                          <i className="flaticon-music-system"></i>{' '}
                          <span>Home Audio & Theater</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item nav-link nav_item"
                          href="coming-soon.html"
                        >
                          <i className="flaticon-monitor"></i>{' '}
                          <span>TV & Smart Box</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item nav-link nav_item"
                          href="404.html"
                        >
                          <i className="flaticon-printer"></i>{' '}
                          <span>Printer</span>
                        </a>
                      </li> */}
                      <li>
                        <ul className="more_slide_open">
                          {/* <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="login.html"
                            >
                              <i className="flaticon-fax"></i>{' '}
                              <span>Fax Machine</span>
                            </a>
                          </li> */}
                          {/* <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="/shop"
                            >
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="30"
                                  height="24"
                                  viewBox="0 0 24 21"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="icon"
                                >
                                  <circle cx="5.5" cy="17.5" r="3.5"></circle>
                                  <circle cx="18.5" cy="17.5" r="3.5"></circle>
                                  <path d="M15 6h-5l-4 11h10"></path>
                                  <path d="M6.5 14.5 2 12"></path>
                                  <path d="m21 12-4.5 2.5"></path>
                                  <path d="m10 10 3 3 2-3-3-3z"></path>
                                </svg>
                              </span>
                              {'  '}
                              <span>Vélo</span>
                            </a>
                          </li> */}
                        </ul>
                      </li>
                    </ul>
                    <div className="more_categories">Plus de Categories</div>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-9 col-md-8 col-sm-6 col-9">
                <nav className="navbar navbar-expand-lg">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSidetoggle"
                    aria-controls="navbarSidetoggle"
                    aria-expanded="false"
                    aria-label="Toggle navigation"

                    // className="navbar-toggler side_navbar_toggler"
                    // type="button"
                    // data-bs-toggle="collapse"
                    // data-bs-target="#navbarSidetoggle"
                    // aria-expanded="false"
                  >
                    <span className="ion-android-menu"></span>
                  </button>
                  <div className="pr_search_icon">
                    <a
                      href="#"
                      className="nav-link pr_search_trigger"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="linearicons-magnifier"></i>
                    </a>
                  </div>
                  <div
                    className="collapse navbar-collapse mobile_side_menu"
                    id="navbarSidetoggle"
                  >
                    <ul className="navbar-nav">
                      <li className="dropdown">
                        <a
                          // data-bs-toggle="dropdown"
                          className="nav-link"
                          href="/"
                        >
                          Home
                        </a>
                      </li>

                      <li className="dropdown ">
                        <a
                          className="nav-link"
                          href="#"
                          onClick={(e) => {
                            e.preventDefault()
                            window.location.href = `/shop`
                          }}
                          // data-bs-toggle="dropdown"
                        >
                          Shop
                        </a>
                      </li>
                      <li>
                        <Link className="nav-link nav_item" to="/contact-us">
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="contact_phone contact_support">
                    <i className="linearicons-phone-wave"></i>
                    <span>123-456-7689</span>
                  </div>
                </nav>
              </div>  */}
              <div className="col-lg-9 col-md-8 col-sm-6 col-9">
                <nav className="navbar navbar-expand-lg">
                  {!isMenuOpen && (
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSidetoggle"
                      aria-controls="navbarSidetoggle"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                      onClick={toggleMenu}
                    >
                      <span className="ion-android-menu"></span>
                    </button>
                  )}

                  <div className="pr_search_icon">
                    <a
                      href="#"
                      className="nav-link pr_search_trigger"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="linearicons-magnifier"></i>
                    </a>
                  </div>
                  <div
                    className="collapse navbar-collapse mobile_side_menu"
                    id="navbarSidetoggle"
                  >
                    {/* Bouton de fermeture */}
                    {isMenuOpen && (
                      <button
                        className="btn-close d-block d-lg-none"
                        type="button"
                        onClick={toggleMenu}
                        aria-label="Close"
                        style={{
                          width: '30px',
                          height: '30px',
                          fontSize: '1.5rem',
                          padding: '5px',
                          color: '#ff0000',
                          backgroundColor: 'transparent',
                        }}
                      ></button>
                    )}

                    <ul className="navbar-nav">
                      <li className="dropdown">
                        <a
                          // data-bs-toggle="dropdown"
                          className="nav-link"
                          href="/"
                        >
                          Home
                        </a>
                      </li>

                      <li className="dropdown ">
                        <a
                          className="nav-link"
                          href="#"
                          onClick={(e) => {
                            e.preventDefault()
                            window.location.href = `/shop`
                          }}
                          // data-bs-toggle="dropdown"
                        >
                          Shop
                        </a>
                      </li>
                      <li>
                        <Link className="nav-link nav_item" to="/contact-us">
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="contact_phone contact_support">
                    <i className="linearicons-phone-wave"></i>
                    <span>123-456-7689</span>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- END HEADER --> */}
    </>
  )
}
