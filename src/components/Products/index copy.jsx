export default function Products() {
  return (
    <>
      {/* <!-- START SECTION SHOP --> */}
      <div className="section small_pb small_pt">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="heading_s1 text-center">
                <h2>Exclusive Products</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="tab-style1">
                <ul
                  className="nav nav-tabs justify-content-center"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="arrival-tab"
                      data-bs-toggle="tab"
                      href="#arrival"
                      role="tab"
                      aria-controls="arrival"
                      aria-selected="true"
                    >
                      New Arrival
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="sellers-tab"
                      data-bs-toggle="tab"
                      href="#sellers"
                      role="tab"
                      aria-controls="sellers"
                      aria-selected="false"
                    >
                      Best Sellers
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="featured-tab"
                      data-bs-toggle="tab"
                      href="#featured"
                      role="tab"
                      aria-controls="featured"
                      aria-selected="false"
                    >
                      Featured
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="special-tab"
                      data-bs-toggle="tab"
                      href="#special"
                      role="tab"
                      aria-controls="special"
                      aria-selected="false"
                    >
                      Special Offer
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab_slider tab-content">
                <div
                  className="tab-pane fade show active"
                  id="arrival"
                  role="tabpanel"
                  aria-labelledby="arrival-tab"
                >
                  <div
                    className="product_slider carousel_slider owl-carousel owl-theme dot_style1"
                    data-loop="true"
                    data-margin="20"
                    data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "991":{"items": "4"}}'
                  >
                    <div className="item">
                      <div className="product_wrap">
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/el_img1.jpg"
                              alt="el_img1"
                            />
                            <img
                              className="product_hover_img"
                              src="assets/images/el_hover_img1.jpg"
                              alt="el_hover_img1"
                            />
                          </a>
                          <div className="product_action_box">
                            <ul className="list_none pr_action_btn">
                              <li className="add-to-cart">
                                <a href="#">
                                  <i className="icon-basket-loaded"></i> Add To
                                  Cart
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-compare.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-shuffle"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-quick-view.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-magnifier-add"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icon-heart"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">
                              Red & Black Headphone
                            </a>
                          </h6>
                          <div className="product_price">
                            <span className="price">$45.00</span>
                            <del>$55.25</del>
                            <div className="on_sale">
                              <span>35% Off</span>
                            </div>
                          </div>
                          <div className="rating_wrap">
                            <div className="rating">
                              <div
                                className="product_rate"
                                style="width:80%"
                              ></div>
                            </div>
                            <span className="rating_num">(21)</span>
                          </div>
                          <div className="pr_desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Phasellus blandit massa enim. Nullam id
                              varius nunc id varius nunc.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product_wrap">
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/el_img2.jpg"
                              alt="el_img2"
                            />
                            <img
                              className="product_hover_img"
                              src="assets/images/el_hover_img2.jpg"
                              alt="el_hover_img2"
                            />
                          </a>
                          <div className="product_action_box">
                            <ul className="list_none pr_action_btn">
                              <li className="add-to-cart">
                                <a href="#">
                                  <i className="icon-basket-loaded"></i> Add To
                                  Cart
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-compare.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-shuffle"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-quick-view.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-magnifier-add"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icon-heart"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">
                              Smart Watch External
                            </a>
                          </h6>
                          <div className="product_price">
                            <span className="price">$55.00</span>
                            <del>$95.00</del>
                            <div className="on_sale">
                              <span>25% Off</span>
                            </div>
                          </div>
                          <div className="rating_wrap">
                            <div className="rating">
                              <div
                                className="product_rate"
                                style="width:68%"
                              ></div>
                            </div>
                            <span className="rating_num">(15)</span>
                          </div>
                          <div className="pr_desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Phasellus blandit massa enim. Nullam id
                              varius nunc id varius nunc.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product_wrap">
                        <span className="pr_flash">New</span>
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/el_img3.jpg"
                              alt="el_img3"
                            />
                            <img
                              className="product_hover_img"
                              src="assets/images/el_hover_img3.jpg"
                              alt="el_hover_img3"
                            />
                          </a>
                          <div className="product_action_box">
                            <ul className="list_none pr_action_btn">
                              <li className="add-to-cart">
                                <a href="#">
                                  <i className="icon-basket-loaded"></i> Add To
                                  Cart
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-compare.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-shuffle"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-quick-view.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-magnifier-add"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icon-heart"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">
                              Nikon HD camera
                            </a>
                          </h6>
                          <div className="product_price">
                            <span className="price">$68.00</span>
                            <del>$99.00</del>
                          </div>
                          <div className="rating_wrap">
                            <div className="rating">
                              <div
                                className="product_rate"
                                style="width:87%"
                              ></div>
                            </div>
                            <span className="rating_num">(25)</span>
                          </div>
                          <div className="pr_desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Phasellus blandit massa enim. Nullam id
                              varius nunc id varius nunc.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product_wrap">
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/el_img4.jpg"
                              alt="el_img4"
                            />
                            <img
                              className="product_hover_img"
                              src="assets/images/el_hover_img4.jpg"
                              alt="el_hover_img4"
                            />
                          </a>
                          <div className="product_action_box">
                            <ul className="list_none pr_action_btn">
                              <li className="add-to-cart">
                                <a href="#">
                                  <i className="icon-basket-loaded"></i> Add To
                                  Cart
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-compare.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-shuffle"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-quick-view.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-magnifier-add"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icon-heart"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">
                              Audio Equipment
                            </a>
                          </h6>
                          <div className="product_price">
                            <span className="price">$69.00</span>
                            <del>$89.00</del>
                            <div className="on_sale">
                              <span>20% Off</span>
                            </div>
                          </div>
                          <div className="rating_wrap">
                            <div className="rating">
                              <div
                                className="product_rate"
                                style="width:70%"
                              ></div>
                            </div>
                            <span className="rating_num">(22)</span>
                          </div>
                          <div className="pr_desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Phasellus blandit massa enim. Nullam id
                              varius nunc id varius nunc.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product_wrap">
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/el_img5.jpg"
                              alt="el_img5"
                            />
                            <img
                              className="product_hover_img"
                              src="assets/images/el_hover_img5.jpg"
                              alt="el_hover_img5"
                            />
                          </a>
                          <div className="product_action_box">
                            <ul className="list_none pr_action_btn">
                              <li className="add-to-cart">
                                <a href="#">
                                  <i className="icon-basket-loaded"></i> Add To
                                  Cart
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-compare.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-shuffle"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-quick-view.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-magnifier-add"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icon-heart"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">
                              Smart Televisions
                            </a>
                          </h6>
                          <div className="product_price">
                            <span className="price">$45.00</span>
                            <del>$55.25</del>
                            <div className="on_sale">
                              <span>35% Off</span>
                            </div>
                          </div>
                          <div className="rating_wrap">
                            <div className="rating">
                              <div
                                className="product_rate"
                                style="width:80%"
                              ></div>
                            </div>
                            <span className="rating_num">(21)</span>
                          </div>
                          <div className="pr_desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Phasellus blandit massa enim. Nullam id
                              varius nunc id varius nunc.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product_wrap">
                        <span className="pr_flash bg-danger">Hot</span>
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/el_img6.jpg"
                              alt="el_img6"
                            />
                            <img
                              className="product_hover_img"
                              src="assets/images/el_hover_img6.jpg"
                              alt="el_hover_img6"
                            />
                          </a>
                          <div className="product_action_box">
                            <ul className="list_none pr_action_btn">
                              <li className="add-to-cart">
                                <a href="#">
                                  <i className="icon-basket-loaded"></i> Add To
                                  Cart
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-compare.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-shuffle"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-quick-view.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-magnifier-add"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icon-heart"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">
                              Samsung Smart Phone
                            </a>
                          </h6>
                          <div className="product_price">
                            <span className="price">$55.00</span>
                            <del>$95.00</del>
                            <div className="on_sale">
                              <span>25% Off</span>
                            </div>
                          </div>
                          <div className="rating_wrap">
                            <div className="rating">
                              <div
                                className="product_rate"
                                style="width:68%"
                              ></div>
                            </div>
                            <span className="rating_num">(15)</span>
                          </div>
                          <div className="pr_desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Phasellus blandit massa enim. Nullam id
                              varius nunc id varius nunc.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="sellers"
                  role="tabpanel"
                  aria-labelledby="sellers-tab"
                >
                  <div
                    className="product_slider carousel_slider owl-carousel owl-theme dot_style1"
                    data-loop="true"
                    data-margin="20"
                    data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "991":{"items": "4"}}'
                  >
                    <div className="item">
                      <div className="product_wrap">
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/el_img7.jpg"
                              alt="el_img7"
                            />
                            <img
                              className="product_hover_img"
                              src="assets/images/el_hover_img7.jpg"
                              alt="el_hover_img7"
                            />
                          </a>
                          <div className="product_action_box">
                            <ul className="list_none pr_action_btn">
                              <li className="add-to-cart">
                                <a href="#">
                                  <i className="icon-basket-loaded"></i> Add To
                                  Cart
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-compare.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-shuffle"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-quick-view.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-magnifier-add"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icon-heart"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">
                              Audio Theaters
                            </a>
                          </h6>
                          <div className="product_price">
                            <span className="price">$45.00</span>
                            <del>$55.25</del>
                            <div className="on_sale">
                              <span>35% Off</span>
                            </div>
                          </div>
                          <div className="rating_wrap">
                            <div className="rating">
                              <div
                                className="product_rate"
                                style="width:80%"
                              ></div>
                            </div>
                            <span className="rating_num">(21)</span>
                          </div>
                          <div className="pr_desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Phasellus blandit massa enim. Nullam id
                              varius nunc id varius nunc.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product_wrap">
                        <span className="pr_flash bg-danger">Hot</span>
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/el_img8.jpg"
                              alt="el_img8"
                            />
                            <img
                              className="product_hover_img"
                              src="assets/images/el_hover_img8.jpg"
                              alt="el_hover_img8"
                            />
                          </a>
                          <div className="product_action_box">
                            <ul className="list_none pr_action_btn">
                              <li className="add-to-cart">
                                <a href="#">
                                  <i className="icon-basket-loaded"></i> Add To
                                  Cart
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-compare.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-shuffle"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-quick-view.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-magnifier-add"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icon-heart"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">
                              Surveillance camera
                            </a>
                          </h6>
                          <div className="product_price">
                            <span className="price">$55.00</span>
                            <del>$95.00</del>
                            <div className="on_sale">
                              <span>25% Off</span>
                            </div>
                          </div>
                          <div className="rating_wrap">
                            <div className="rating">
                              <div
                                className="product_rate"
                                style="width:68%"
                              ></div>
                            </div>
                            <span className="rating_num">(15)</span>
                          </div>
                          <div className="pr_desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Phasellus blandit massa enim. Nullam id
                              varius nunc id varius nunc.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product_wrap">
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/el_img9.jpg"
                              alt="el_img9"
                            />
                            <img
                              className="product_hover_img"
                              src="assets/images/el_hover_img9.jpg"
                              alt="el_hover_img9"
                            />
                          </a>
                          <div className="product_action_box">
                            <ul className="list_none pr_action_btn">
                              <li className="add-to-cart">
                                <a href="#">
                                  <i className="icon-basket-loaded"></i> Add To
                                  Cart
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-compare.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-shuffle"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-quick-view.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-magnifier-add"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icon-heart"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">
                              oppo Reno3 Pro
                            </a>
                          </h6>
                          <div className="product_price">
                            <span className="price">$68.00</span>
                            <del>$99.00</del>
                            <div className="on_sale">
                              <span>20% Off</span>
                            </div>
                          </div>
                          <div className="rating_wrap">
                            <div className="rating">
                              <div
                                className="product_rate"
                                style="width:87%"
                              ></div>
                            </div>
                            <span className="rating_num">(25)</span>
                          </div>
                          <div className="pr_desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Phasellus blandit massa enim. Nullam id
                              varius nunc id varius nunc.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product_wrap">
                        <span className="pr_flash bg-success">Sale</span>
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/el_img10.jpg"
                              alt="el_img10"
                            />
                            <img
                              className="product_hover_img"
                              src="assets/images/el_hover_img10.jpg"
                              alt="el_hover_img10"
                            />
                          </a>
                          <div className="product_action_box">
                            <ul className="list_none pr_action_btn">
                              <li className="add-to-cart">
                                <a href="#">
                                  <i className="icon-basket-loaded"></i> Add To
                                  Cart
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-compare.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-shuffle"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-quick-view.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-magnifier-add"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icon-heart"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">
                              classNameical Headphone
                            </a>
                          </h6>
                          <div className="product_price">
                            <span className="price">$68.00</span>
                            <del>$99.00</del>
                            <div className="on_sale">
                              <span>20% Off</span>
                            </div>
                          </div>
                          <div className="rating_wrap">
                            <div className="rating">
                              <div
                                className="product_rate"
                                style="width:87%"
                              ></div>
                            </div>
                            <span className="rating_num">(25)</span>
                          </div>
                          <div className="pr_desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Phasellus blandit massa enim. Nullam id
                              varius nunc id varius nunc.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product_wrap">
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/el_img11.jpg"
                              alt="el_img11"
                            />
                            <img
                              className="product_hover_img"
                              src="assets/images/el_hover_img11.jpg"
                              alt="el_hover_img11"
                            />
                          </a>
                          <div className="product_action_box">
                            <ul className="list_none pr_action_btn">
                              <li className="add-to-cart">
                                <a href="#">
                                  <i className="icon-basket-loaded"></i> Add To
                                  Cart
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-compare.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-shuffle"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-quick-view.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-magnifier-add"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icon-heart"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">
                              Basics High-Speed HDMI
                            </a>
                          </h6>
                          <div className="product_price">
                            <span className="price">$69.00</span>
                            <del>$89.00</del>
                            <div className="on_sale">
                              <span>20% Off</span>
                            </div>
                          </div>
                          <div className="rating_wrap">
                            <div className="rating">
                              <div
                                className="product_rate"
                                style="width:70%"
                              ></div>
                            </div>
                            <span className="rating_num">(22)</span>
                          </div>
                          <div className="pr_desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Phasellus blandit massa enim. Nullam id
                              varius nunc id varius nunc.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product_wrap">
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/el_img12.jpg"
                              alt="el_img12"
                            />
                            <img
                              className="product_hover_img"
                              src="assets/images/el_hover_img12.jpg"
                              alt="el_hover_img12"
                            />
                          </a>
                          <div className="product_action_box">
                            <ul className="list_none pr_action_btn">
                              <li className="add-to-cart">
                                <a href="#">
                                  <i className="icon-basket-loaded"></i> Add To
                                  Cart
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-compare.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-shuffle"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-quick-view.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-magnifier-add"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icon-heart"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">
                              Sound Equipment for Low
                            </a>
                          </h6>
                          <div className="product_price">
                            <span className="price">$45.00</span>
                            <del>$55.25</del>
                            <div className="on_sale">
                              <span>35% Off</span>
                            </div>
                          </div>
                          <div className="rating_wrap">
                            <div className="rating">
                              <div
                                className="product_rate"
                                style="width:80%"
                              ></div>
                            </div>
                            <span className="rating_num">(21)</span>
                          </div>
                          <div className="pr_desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Phasellus blandit massa enim. Nullam id
                              varius nunc id varius nunc.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="featured"
                  role="tabpanel"
                  aria-labelledby="featured-tab"
                >
                  <div
                    className="product_slider carousel_slider owl-carousel owl-theme dot_style1"
                    data-loop="true"
                    data-margin="20"
                    data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "991":{"items": "4"}}'
                  >
                    <div className="item">
                      <div className="product_wrap">
                        <span className="pr_flash bg-danger">Hot</span>
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/el_img8.jpg"
                              alt="el_img8"
                            />
                            <img
                              className="product_hover_img"
                              src="assets/images/el_hover_img8.jpg"
                              alt="el_hover_img8"
                            />
                          </a>
                          <div className="product_action_box">
                            <ul className="list_none pr_action_btn">
                              <li className="add-to-cart">
                                <a href="#">
                                  <i className="icon-basket-loaded"></i> Add To
                                  Cart
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-compare.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-shuffle"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-quick-view.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-magnifier-add"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icon-heart"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">
                              Surveillance camera
                            </a>
                          </h6>
                          <div className="product_price">
                            <span className="price">$55.00</span>
                            <del>$95.00</del>
                            <div className="on_sale">
                              <span>25% Off</span>
                            </div>
                          </div>
                          <div className="rating_wrap">
                            <div className="rating">
                              <div
                                className="product_rate"
                                style="width:68%"
                              ></div>
                            </div>
                            <span className="rating_num">(15)</span>
                          </div>
                          <div className="pr_desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Phasellus blandit massa enim. Nullam id
                              varius nunc id varius nunc.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product_wrap">
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/el_img4.jpg"
                              alt="el_img4"
                            />
                            <img
                              className="product_hover_img"
                              src="assets/images/el_hover_img4.jpg"
                              alt="el_hover_img4"
                            />
                          </a>
                          <div className="product_action_box">
                            <ul className="list_none pr_action_btn">
                              <li className="add-to-cart">
                                <a href="#">
                                  <i className="icon-basket-loaded"></i> Add To
                                  Cart
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-compare.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-shuffle"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-quick-view.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-magnifier-add"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icon-heart"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">
                              Audio Equipment
                            </a>
                          </h6>
                          <div className="product_price">
                            <span className="price">$69.00</span>
                            <del>$89.00</del>
                            <div className="on_sale">
                              <span>20% Off</span>
                            </div>
                          </div>
                          <div className="rating_wrap">
                            <div className="rating">
                              <div
                                className="product_rate"
                                style="width:70%"
                              ></div>
                            </div>
                            <span className="rating_num">(22)</span>
                          </div>
                          <div className="pr_desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Phasellus blandit massa enim. Nullam id
                              varius nunc id varius nunc.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product_wrap">
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/el_img11.jpg"
                              alt="el_img11"
                            />
                            <img
                              className="product_hover_img"
                              src="assets/images/el_hover_img11.jpg"
                              alt="el_hover_img11"
                            />
                          </a>
                          <div className="product_action_box">
                            <ul className="list_none pr_action_btn">
                              <li className="add-to-cart">
                                <a href="#">
                                  <i className="icon-basket-loaded"></i> Add To
                                  Cart
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-compare.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-shuffle"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-quick-view.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-magnifier-add"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icon-heart"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">
                              Basics High-Speed HDMI
                            </a>
                          </h6>
                          <div className="product_price">
                            <span className="price">$69.00</span>
                            <del>$89.00</del>
                            <div className="on_sale">
                              <span>20% Off</span>
                            </div>
                          </div>
                          <div className="rating_wrap">
                            <div className="rating">
                              <div
                                className="product_rate"
                                style="width:70%"
                              ></div>
                            </div>
                            <span className="rating_num">(22)</span>
                          </div>
                          <div className="pr_desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Phasellus blandit massa enim. Nullam id
                              varius nunc id varius nunc.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product_wrap">
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/el_img1.jpg"
                              alt="el_img1"
                            />
                            <img
                              className="product_hover_img"
                              src="assets/images/el_hover_img1.jpg"
                              alt="el_hover_img1"
                            />
                          </a>
                          <div className="product_action_box">
                            <ul className="list_none pr_action_btn">
                              <li className="add-to-cart">
                                <a href="#">
                                  <i className="icon-basket-loaded"></i> Add To
                                  Cart
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-compare.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-shuffle"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-quick-view.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-magnifier-add"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icon-heart"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">
                              Red & Black Headphone
                            </a>
                          </h6>
                          <div className="product_price">
                            <span className="price">$45.00</span>
                            <del>$55.25</del>
                            <div className="on_sale">
                              <span>35% Off</span>
                            </div>
                          </div>
                          <div className="rating_wrap">
                            <div className="rating">
                              <div
                                className="product_rate"
                                style="width:80%"
                              ></div>
                            </div>
                            <span className="rating_num">(21)</span>
                          </div>
                          <div className="pr_desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Phasellus blandit massa enim. Nullam id
                              varius nunc id varius nunc.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product_wrap">
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/el_img7.jpg"
                              alt="el_img7"
                            />
                            <img
                              className="product_hover_img"
                              src="assets/images/el_hover_img7.jpg"
                              alt="el_hover_img7"
                            />
                          </a>
                          <div className="product_action_box">
                            <ul className="list_none pr_action_btn">
                              <li className="add-to-cart">
                                <a href="#">
                                  <i className="icon-basket-loaded"></i> Add To
                                  Cart
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-compare.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-shuffle"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-quick-view.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-magnifier-add"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icon-heart"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">
                              Audio Theaters
                            </a>
                          </h6>
                          <div className="product_price">
                            <span className="price">$45.00</span>
                            <del>$55.25</del>
                            <div className="on_sale">
                              <span>35% Off</span>
                            </div>
                          </div>
                          <div className="rating_wrap">
                            <div className="rating">
                              <div
                                className="product_rate"
                                style="width:80%"
                              ></div>
                            </div>
                            <span className="rating_num">(21)</span>
                          </div>
                          <div className="pr_desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Phasellus blandit massa enim. Nullam id
                              varius nunc id varius nunc.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product_wrap">
                        <span className="pr_flash bg-danger">Hot</span>
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/el_img6.jpg"
                              alt="el_img6"
                            />
                            <img
                              className="product_hover_img"
                              src="assets/images/el_hover_img6.jpg"
                              alt="el_hover_img6"
                            />
                          </a>
                          <div className="product_action_box">
                            <ul className="list_none pr_action_btn">
                              <li className="add-to-cart">
                                <a href="#">
                                  <i className="icon-basket-loaded"></i> Add To
                                  Cart
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-compare.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-shuffle"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-quick-view.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-magnifier-add"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icon-heart"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">
                              Samsung Smart Phone
                            </a>
                          </h6>
                          <div className="product_price">
                            <span className="price">$55.00</span>
                            <del>$95.00</del>
                            <div className="on_sale">
                              <span>25% Off</span>
                            </div>
                          </div>
                          <div className="rating_wrap">
                            <div className="rating">
                              <div
                                className="product_rate"
                                style="width:68%"
                              ></div>
                            </div>
                            <span className="rating_num">(15)</span>
                          </div>
                          <div className="pr_desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Phasellus blandit massa enim. Nullam id
                              varius nunc id varius nunc.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="special"
                  role="tabpanel"
                  aria-labelledby="special-tab"
                >
                  <div
                    className="product_slider carousel_slider owl-carousel owl-theme dot_style1"
                    data-loop="true"
                    data-margin="20"
                    data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "991":{"items": "4"}}'
                  >
                    <div className="item">
                      <div className="product_wrap">
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/el_img2.jpg"
                              alt="el_img2"
                            />
                            <img
                              className="product_hover_img"
                              src="assets/images/el_hover_img2.jpg"
                              alt="el_hover_img2"
                            />
                          </a>
                          <div className="product_action_box">
                            <ul className="list_none pr_action_btn">
                              <li className="add-to-cart">
                                <a href="#">
                                  <i className="icon-basket-loaded"></i> Add To
                                  Cart
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-compare.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-shuffle"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-quick-view.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-magnifier-add"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icon-heart"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">
                              Smart Watch External
                            </a>
                          </h6>
                          <div className="product_price">
                            <span className="price">$55.00</span>
                            <del>$95.00</del>
                            <div className="on_sale">
                              <span>25% Off</span>
                            </div>
                          </div>
                          <div className="rating_wrap">
                            <div className="rating">
                              <div
                                className="product_rate"
                                style="width:68%"
                              ></div>
                            </div>
                            <span className="rating_num">(15)</span>
                          </div>
                          <div className="pr_desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Phasellus blandit massa enim. Nullam id
                              varius nunc id varius nunc.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product_wrap">
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/el_img5.jpg"
                              alt="el_img5"
                            />
                            <img
                              className="product_hover_img"
                              src="assets/images/el_hover_img5.jpg"
                              alt="el_hover_img5"
                            />
                          </a>
                          <div className="product_action_box">
                            <ul className="list_none pr_action_btn">
                              <li className="add-to-cart">
                                <a href="#">
                                  <i className="icon-basket-loaded"></i> Add To
                                  Cart
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-compare.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-shuffle"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-quick-view.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-magnifier-add"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icon-heart"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">
                              Smart Televisions
                            </a>
                          </h6>
                          <div className="product_price">
                            <span className="price">$45.00</span>
                            <del>$55.25</del>
                            <div className="on_sale">
                              <span>35% Off</span>
                            </div>
                          </div>
                          <div className="rating_wrap">
                            <div className="rating">
                              <div
                                className="product_rate"
                                style="width:80%"
                              ></div>
                            </div>
                            <span className="rating_num">(21)</span>
                          </div>
                          <div className="pr_desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Phasellus blandit massa enim. Nullam id
                              varius nunc id varius nunc.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product_wrap">
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/el_img9.jpg"
                              alt="el_img9"
                            />
                            <img
                              className="product_hover_img"
                              src="assets/images/el_hover_img9.jpg"
                              alt="el_hover_img9"
                            />
                          </a>
                          <div className="product_action_box">
                            <ul className="list_none pr_action_btn">
                              <li className="add-to-cart">
                                <a href="#">
                                  <i className="icon-basket-loaded"></i> Add To
                                  Cart
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-compare.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-shuffle"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-quick-view.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-magnifier-add"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icon-heart"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">
                              oppo Reno3 Pro
                            </a>
                          </h6>
                          <div className="product_price">
                            <span className="price">$68.00</span>
                            <del>$99.00</del>
                            <div className="on_sale">
                              <span>20% Off</span>
                            </div>
                          </div>
                          <div className="rating_wrap">
                            <div className="rating">
                              <div
                                className="product_rate"
                                style="width:87%"
                              ></div>
                            </div>
                            <span className="rating_num">(25)</span>
                          </div>
                          <div className="pr_desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Phasellus blandit massa enim. Nullam id
                              varius nunc id varius nunc.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product_wrap">
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/el_img7.jpg"
                              alt="el_img7"
                            />
                            <img
                              className="product_hover_img"
                              src="assets/images/el_hover_img7.jpg"
                              alt="el_hover_img7"
                            />
                          </a>
                          <div className="product_action_box">
                            <ul className="list_none pr_action_btn">
                              <li className="add-to-cart">
                                <a href="#">
                                  <i className="icon-basket-loaded"></i> Add To
                                  Cart
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-compare.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-shuffle"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-quick-view.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-magnifier-add"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icon-heart"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">
                              Audio Theaters
                            </a>
                          </h6>
                          <div className="product_price">
                            <span className="price">$45.00</span>
                            <del>$55.25</del>
                            <div className="on_sale">
                              <span>35% Off</span>
                            </div>
                          </div>
                          <div className="rating_wrap">
                            <div className="rating">
                              <div
                                className="product_rate"
                                style="width:80%"
                              ></div>
                            </div>
                            <span className="rating_num">(21)</span>
                          </div>
                          <div className="pr_desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Phasellus blandit massa enim. Nullam id
                              varius nunc id varius nunc.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product_wrap">
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/el_img5.jpg"
                              alt="el_img5"
                            />
                            <img
                              className="product_hover_img"
                              src="assets/images/el_hover_img5.jpg"
                              alt="el_hover_img5"
                            />
                          </a>
                          <div className="product_action_box">
                            <ul className="list_none pr_action_btn">
                              <li className="add-to-cart">
                                <a href="#">
                                  <i className="icon-basket-loaded"></i> Add To
                                  Cart
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-compare.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-shuffle"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-quick-view.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-magnifier-add"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icon-heart"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">
                              Smart Televisions
                            </a>
                          </h6>
                          <div className="product_price">
                            <span className="price">$45.00</span>
                            <del>$55.25</del>
                            <div className="on_sale">
                              <span>35% Off</span>
                            </div>
                          </div>
                          <div className="rating_wrap">
                            <div className="rating">
                              <div
                                className="product_rate"
                                style="width:80%"
                              ></div>
                            </div>
                            <span className="rating_num">(21)</span>
                          </div>
                          <div className="pr_desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Phasellus blandit massa enim. Nullam id
                              varius nunc id varius nunc.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product_wrap">
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/el_img12.jpg"
                              alt="el_img12"
                            />
                            <img
                              className="product_hover_img"
                              src="assets/images/el_hover_img12.jpg"
                              alt="el_hover_img12"
                            />
                          </a>
                          <div className="product_action_box">
                            <ul className="list_none pr_action_btn">
                              <li className="add-to-cart">
                                <a href="#">
                                  <i className="icon-basket-loaded"></i> Add To
                                  Cart
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-compare.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-shuffle"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-quick-view.html"
                                  className="popup-ajax"
                                >
                                  <i className="icon-magnifier-add"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icon-heart"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">
                              Sound Equipment for Low
                            </a>
                          </h6>
                          <div className="product_price">
                            <span className="price">$45.00</span>
                            <del>$55.25</del>
                            <div className="on_sale">
                              <span>35% Off</span>
                            </div>
                          </div>
                          <div className="rating_wrap">
                            <div className="rating">
                              <div
                                className="product_rate"
                                style="width:80%"
                              ></div>
                            </div>
                            <span className="rating_num">(21)</span>
                          </div>
                          <div className="pr_desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Phasellus blandit massa enim. Nullam id
                              varius nunc id varius nunc.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- END SECTION SHOP --> */}
    </>
  )
}
