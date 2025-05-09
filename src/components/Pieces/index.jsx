import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/store/slices/cartSlice'
import piecesList from '@/data/pieces.js'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Products() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const firstTenPieces = piecesList.slice(0, 4)
  const remainingPieces = piecesList.slice(4)

  return (
    <>
      {/* <!-- START SECTION SHOP --> */}
      <div className="section small_pt pb_20">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading_tab_header">
                <div className="#">
                  <h2>
                    Statten Sie Ihre Fahrräder mit den besten Zubehörteilen aus
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="product_slider product_list ">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={20}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    767: { slidesPerView: 2 },
                    991: { slidesPerView: 3 },
                    1199: { slidesPerView: 3 },
                  }}
                >
                  {/* Durchlaufe die ersten zehn Produkte */}
                  {firstTenPieces.map((piece) => (
                    <SwiperSlide key={piece.id}>
                      <div className="product">
                        <div className="product_img">
                          <a href="#!" onClick={(e) => e.preventDefault()}>
                            <img src={piece.picture} alt="product_img1" />
                          </a>
                          <div className="product_action_box">
                            <ul className="list_none pr_action_btn">
                              <li className="add-to-cart">
                                <a
                                  href="#!"
                                  onClick={(e) => {
                                    e.preventDefault()
                                    dispatch(addToCart(piece))
                                  }}
                                >
                                  <i className="icon-basket-loaded"></i> In den
                                  Warenkorb
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a
                              href="#!"
                              onClick={(e) => {
                                e.preventDefault()
                                const formattedLibelle = piece.libelle.replace(
                                  /\s+/g,
                                  '-'
                                )
                                navigate(
                                  `/product/${piece.id}/${formattedLibelle}`
                                )
                              }}
                            >
                              {piece.libelle}
                            </a>
                          </h6>
                          <div className="product_price">
                            <span className="price">€ {piece.price}</span>
                            <del>€ {piece.old_price}</del>
                            <div className="on_sale">
                              <span>
                                {Math.floor(
                                  ((piece.old_price - piece.price) /
                                    piece.old_price) *
                                    100
                                )}
                                % Rabatt
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
                            <span className="rating_num">({piece.rating})</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div style={{ margin: '40px auto' }}></div>
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={20}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    767: { slidesPerView: 2 },
                    991: { slidesPerView: 3 },
                    1199: { slidesPerView: 3 },
                  }}
                >
                  {/* Durchlaufe die restlichen Produkte */}
                  {remainingPieces.map((piece) => (
                    <SwiperSlide key={piece.id}>
                      <div className="product">
                        <div className="product_img">
                          <a href="#!" onClick={(e) => e.preventDefault()}>
                            <img src={piece.picture} alt="product_img1" />
                          </a>
                          <div className="product_action_box">
                            <ul className="list_none pr_action_btn">
                              <li className="add-to-cart">
                                <a
                                  href="#!"
                                  onClick={(e) => {
                                    e.preventDefault()
                                    dispatch(addToCart(piece))
                                  }}
                                >
                                  <i className="icon-basket-loaded"></i> In den
                                  Warenkorb
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a
                              href="#!"
                              onClick={(e) => {
                                e.preventDefault()
                                const formattedLibelle = piece.libelle.replace(
                                  /\s+/g,
                                  '-'
                                )
                                navigate(
                                  `/product/${piece.id}/${formattedLibelle}`
                                )
                              }}
                            >
                              {piece.libelle}
                            </a>
                          </h6>
                          <div className="product_price">
                            <span className="price">€ {piece.price}</span>
                            <del>€ {piece.old_price}</del>
                            <div className="on_sale">
                              <span>
                                {Math.floor(
                                  ((piece.old_price - piece.price) /
                                    piece.old_price) *
                                    100
                                )}
                                % Rabatt
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
                            <span className="rating_num">({piece.rating})</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- END SECTION SHOP --> */}
    </>
  )
}
