import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import NewLetters from '@/components/NewLetters'
import Loader from '@/utils/loader'
import productsList from '@/data/products.js'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/store/slices/cartSlice'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import BannerLeftImg from '@/assets/images/sidebar_banner_img.webp'
import BannerLeftImg2 from '@/assets/images/sidebar_banner_img2.webp'
import Pieces from '@/components/Pieces'

export default function Shop() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [view, setView] = useState('list') // Par défaut, la vue est 'list'

  // Fonction pour changer la vue en Grid
  const handleGridView = () => {
    setView('grid')
  }
  // Fonction pour changer la vue en List
  const handleListView = () => {
    setView('list')
  }

  const [currentPage, setCurrentPage] = useState(1) // Page actuelle
  const itemsPerPage = 6 // Nombre d'éléments par page

  // State pour la plage de prix sélectionnée
  const [priceRange, setPriceRange] = useState({ min: 50, max: 7000 })

  // Fonction pour mettre à jour la plage de prix
  const handlePriceChange = (event) => {
    const { name, value } = event.target
    setPriceRange((prev) => ({
      ...prev,
      [name]: Number(value),
    }))
    setCurrentPage(1) // Réinitialiser à la page 1 après un filtre
  }

  // Filtrer les produits en fonction du prix sélectionné
  const filteredProducts = useMemo(() => {
    return productsList.filter(
      (product) =>
        product.price >= priceRange.min && product.price <= priceRange.max
    )
  }, [productsList, priceRange])

  // Fonction pour mélanger un tableau (Fisher-Yates Shuffle)
  const shuffleArray = (array) => {
    let shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  // Mélanger les produits filtrés à chaque changement de page
  const shuffledProducts = useMemo(
    () => shuffleArray(filteredProducts),
    [currentPage, filteredProducts]
  )

  // Pagination après filtrage et mélange
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = shuffledProducts.slice(indexOfFirstItem, indexOfLastItem)

  // Changer de page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  // Gestion des boutons "Next" et "Previous"
  const nextPage = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1)
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1)

  return (
    <>
      <Loader />
      {/* <!-- START SECTION BREADCRUMB --> */}
      <div className="breadcrumb_section bg_gray page-title-mini">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="#">
                <h3>Fahrradgeschäft</h3>
              </div>
            </div>
            <div className="col-md-6">
              <ol className="breadcrumb justify-content-md-end">
                <li className="breadcrumb-item">
                  <a href="#!">Startseite</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#!">Seiten</a> {/* Pages */}
                </li>
                <li className="breadcrumb-item active">Geschäft</li>{' '}
                {/* Magasin */}
              </ol>
            </div>
          </div>
        </div>
        {/* <!-- END CONTAINER--> */}
      </div>

      {/* <!-- END SECTION BREADCRUMB --> */}

      {/* <!-- START MAIN CONTENT --> */}
      <div className="main_content">
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 order-lg-1 order-2">
                <div className="row align-items-center mb-4 pb-1">
                  <div className="col-12">
                    <div className="row align-items-center mb-4 pb-1">
                      <div className="col-12">
                        <div className="product_header">
                          <div className="product_header_right">
                            <div className="products_view">
                              <a
                                href="javascript:void(0);"
                                className={`shorting_icon grid ${
                                  view === 'grid' ? 'active' : ''
                                }`}
                                onClick={handleGridView} // Ändert die Ansicht auf Grid
                              >
                                <i className="ti-view-grid"></i>
                              </a>
                              <a
                                href="javascript:void(0);"
                                className={`shorting_icon list ${
                                  view === 'list' ? 'active' : ''
                                }`}
                                onClick={handleListView} // Ändert die Ansicht auf List
                              >
                                <i className="ti-layout-list-thumb"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`row shop_container loadmore ${
                    view === 'grid' ? 'grid' : 'list'
                  } `}
                  data-item="10"
                  data-item-show="4"
                  data-finish-message="Keine weiteren Artikel zum Anzeigen"
                  data-btn="Mehr Laden"
                >
                  {currentItems.map((product) => (
                    <div key={product.id} className="col-md-4 col-6">
                      <div className="product">
                        <Zoom>
                          <div className="product_img">
                            <a href="#!">
                              <img src={product.picture} alt="product_img1" />
                            </a>
                            <div className="product_action_box">
                              <ul className="list_none pr_action_btn">
                                <li className="add-to-cart">
                                  <a
                                    href="#!"
                                    onClick={(e) => {
                                      e.preventDefault()
                                      dispatch(addToCart(product))
                                    }}
                                  >
                                    <i className="icon-basket-loaded"></i> In
                                    den Warenkorb
                                  </a>
                                </li>
                                {/* <li>
                      <a href="#!" className="popup-ajax">
                        <i className="icon-shuffle"></i>
                      </a>
                    </li> */}
                                <li>
                                  <a
                                    href="#!"
                                    onClick={(e) => {
                                      e.preventDefault()
                                      const formattedLibelle =
                                        product.libelle.replace(/\s+/g, '-')
                                      navigate(
                                        `/product/${product.id}/${formattedLibelle}`
                                      )
                                    }}
                                    className="popup-ajax"
                                  >
                                    <i className="icon-eye"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#!">
                                    <i className="icon-heart"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Zoom>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a
                              href="#!"
                              onClick={(e) => {
                                e.preventDefault()
                                const formattedLibelle =
                                  product.libelle.replace(/\s+/g, '-')
                                navigate(
                                  `/product/${product.id}/${formattedLibelle}`
                                )
                              }}
                            >
                              {product.libelle}
                            </a>
                          </h6>
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
                            <span className="rating_num">
                              ({product.rating})
                            </span>
                          </div>
                          <div className="pr_desc">
                            <p>{product.description}</p>
                          </div>

                          <div className="list_product_action_box">
                            <ul className="list_none pr_action_btn">
                              <li className="add-to-cart">
                                <a
                                  href="#!"
                                  onClick={(e) => {
                                    e.preventDefault()
                                    dispatch(addToCart(product))
                                  }}
                                >
                                  <i className="icon-basket-loaded"></i>{' '}
                                  Hinzufügen
                                </a>
                              </li>
                              {/* <li>
                    <a href="#!" className="popup-ajax">
                      <i className="icon-shuffle"></i>
                    </a>
                  </li> */}
                              <li>
                                <a
                                  href="#!"
                                  onClick={(e) => {
                                    e.preventDefault()
                                    const formattedLibelle =
                                      product.libelle.replace(/\s+/g, '-')
                                    navigate(
                                      `/product/${product.id}/${formattedLibelle}`
                                    )
                                  }}
                                >
                                  <i className="icon-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#!">
                                  <i className="icon-heart"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="row">
                  <div className="col-12">
                    <ul className="pagination mt-3 justify-content-center pagination_style1">
                      <li
                        className={`page-item ${
                          currentPage === 1 ? 'disabled' : ''
                        }`}
                        onClick={prevPage}
                      >
                        <a className="page-link" href="#">
                          <i className="linearicons-arrow-left"></i>
                        </a>
                      </li>

                      {Array.from({ length: totalPages }, (_, index) => (
                        <li
                          key={index}
                          className={`page-item ${
                            currentPage === index + 1 ? 'active' : ''
                          }`}
                          onClick={() => paginate(index + 1)}
                        >
                          <a className="page-link" href="#">
                            {index + 1}
                          </a>
                        </li>
                      ))}
                      {/* Next Button */}
                      <li
                        className={`page-item ${
                          currentPage === totalPages ? 'disabled' : ''
                        }`}
                        onClick={nextPage}
                      >
                        <a className="page-link" href="#">
                          <i className="linearicons-arrow-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 mt-4 pt-2 mt-lg-0 pt-lg-0 order-lg-2 order-1">
                <div className="sidebar">
                  <div className="widget">
                    <h5 className="widget_title">Kategorien</h5>
                    <ul className="widget_categories">
                      <li>
                        <a href="#!">
                          <span className="categories_name">E-BIKE</span>
                          {/* <span className="categories_num">
                ({productsList.length})
              </span> */}
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <span className="categories_name">TROTTINETTE</span>
                          {/* <span className="categories_num">(3)</span> */}
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <span className="categories_name">RENNRAD TEILE</span>
                          {/* <span className="categories_num">(5)</span> */}
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <span className="categories_name">OUTDOOR</span>
                          {/* <span className="categories_num">(3)</span> */}
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Preisfilter */}
                  <div className="widget">
                    <h5 className="widget_title">Filter</h5>
                    <div className="filter_price">
                      <div className="price_range">
                        <span>
                          Preis: €{priceRange.min} - €{priceRange.max}
                        </span>
                        {'  '}
                        <input
                          type="range"
                          name="min"
                          min="100"
                          max="2000"
                          value={priceRange.min}
                          onChange={handlePriceChange}
                        />
                        {'  '}
                        <input
                          type="range"
                          name="max"
                          min="2000"
                          max="7000"
                          value={priceRange.max}
                          onChange={handlePriceChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="widget">
                    <div className="shop_banner">
                      <div className="banner_img overlay_bg_20">
                        <img
                          src={BannerLeftImg}
                          style={{ height: '280px', width: 'inherit' }}
                          alt="sidebar_banner_img"
                        />
                      </div>
                      <div className="shop_bn_content2 text_white">
                        <h5 className="text-uppercase shop_subtitle">
                          Neue Kollektion
                        </h5>
                        <h3 className="text-uppercase shop_title">
                          Bis zu 30% Rabatt
                        </h3>
                        <a
                          href="#!"
                          className="btn btn-white rounded-0 btn-sm text-uppercase"
                        >
                          Bestellen
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="widget">
                    <div className="shop_banner">
                      <div className="banner_img overlay_bg_20">
                        <img
                          src={BannerLeftImg2}
                          style={{ height: '280px', width: 'inherit' }}
                          alt="sidebar_banner_img"
                        />
                      </div>
                      <div className="shop_bn_content2 text_white">
                        {/* <h5 className="text-uppercase shop_subtitle">
              Neue Kollektion
            </h5> */}
                        <h5 className="text-uppercase shop_title">
                          Bis zu 50% Rabatt
                        </h5>
                        <a
                          href="#!"
                          className="btn btn-white rounded-0 btn-sm text-uppercase"
                        >
                          Bestellen
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Pieces />
          </div>
        </div>
      </div>
      {/* <!-- END MAIN CONTENT --> */}

      <NewLetters />
    </>
  )
}
