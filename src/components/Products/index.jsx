import { useNavigate } from 'react-router-dom'
import productsList from '@/data/products.js'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/store/slices/cartSlice'

export default function Products() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Mélanger les produits à chaque changement de page

  const products = productsList.slice(0, 8)
  return (
    <>
      {/* <!-- START SECTION SHOP --> */}
      <div className="section small_pt pb_70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="h text-center">
                <h2 style={{ textTransform: 'uppercase' }}>
                  vélo pour les professionnels
                </h2>
              </div>
              <p className="text-center leads">
                Nous sommes votre spécialiste du vélo électrique. Qu&apos;il
                s&apos;agisse d&apos;un modèle d&apos;entrée de gamme ou
                d&apos;un Pedelec haut de gamme, votre vélo est le bienvenu ici.
              </p>
            </div>
          </div>

          {/* Product part */}

          <div className="row shop_container">
            {products.map((product) => (
              <div key={product.id} className="col-lg-3 col-md-4 col-6">
                <div className="product_box text-center">
                  <div className="product_img">
                    <a href="#">
                      <img src={product.picture} alt="furniture_img8" />
                    </a>
                    <div className="product_action_box">
                      <ul className="list_none pr_action_btn">
                        <li>
                          <a href="#" className="popup-ajax">
                            <i className="icon-shuffle"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="popup-ajax"
                            onClick={(e) => {
                              e.preventDefault()
                              const formattedLibelle = product.libelle.replace(
                                /\s+/g,
                                '-'
                              )
                              navigate(
                                `/product/${product.id}/${formattedLibelle}`
                              )
                            }}
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
                      <a href="#">{product.libelle}</a>
                    </h6>
                    <div className="product_price">
                      <span className="price">€ {product.price}</span>
                      <del>€{product.old_price}</del>
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
                          style={{ width: '78%' }}
                        ></div>
                      </div>
                      <span className="rating_num">({product.rating})</span>
                    </div>
                    <div className="pr_desc">
                      <p>{product.description}</p>
                    </div>
                    <div className="add-to-cart">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault()
                          dispatch(addToCart(product))
                        }}
                        className="btn btn-fill-out btn-radius"
                      >
                        <i className="icon-basket-loaded"></i> Ajouter
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <!-- END SECTION SHOP --> */}
    </>
  )
}
