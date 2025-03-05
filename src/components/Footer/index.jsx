//import { Link } from 'react-router-dom'
import LogoDark from '@/assets/images/rijdenfooter.png'

function Footer() {
  return (
    <footer className="bg_gray">
      <div className=" footer_top">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="shopping_info">
                <div className="row justify-content-center">
                  <div className="col-md-4">
                    <div className="icon_box icon_box_style2">
                      <div className="icon">
                        <i className="flaticon-shipped"></i>
                      </div>
                      <div className="icon_box_content">
                        <h5>LIVRAISON GRATUITE</h5>
                        <p>informations sur le transporteur</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="icon_box icon_box_style2">
                      <div className="icon">
                        <i className="flaticon-money-back"></i>
                      </div>
                      <div className="icon_box_content">
                        <h5>Garantie de retour de 30 jours</h5>
                        <p>Satisfaction ou remboursement</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="icon_box icon_box_style2">
                      <div className="icon">
                        <i className="flaticon-support"></i>
                      </div>
                      <div className="icon_box_content">
                        <h5>ASSISTANCE 24/7</h5>
                        <p>Suivez vos commandes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="middle_footer small_pt pb_20">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="widget">
                <div className="footer_logo">
                  <a href="/">
                    <img src={LogoDark} alt="logo" />
                  </a>
                </div>
                <p className="mb-3">
                  Achetez votre vélo de tendance en toute sécurité tout en
                  bénéficiant de nos offres spéciales
                </p>
                <ul className="contact_info">
                  <li>
                    <i className="ti-location-pin"></i>
                    <p>123 Street, Old Trafford, NewYork, USA</p>
                  </li>
                  <li>
                    <i className="ti-email"></i>
                    <a href="mailto:info@sitename.com">info@sitename.com</a>
                  </li>
                  <li>
                    <i className="ti-mobile"></i>
                    <p>+ 457 789 789 65</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="widget">
                <h6 className="widget_title">Liens utils</h6>
                <ul className="widget_links">
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        window.location.href = `/about-us`
                      }}
                    >
                      A propos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        window.location.href = `/faq`
                      }}
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        window.location.href = `/contact-us`
                      }}
                    >
                      Localisation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        window.location.href = `/contact-us`
                      }}
                    >
                      Affiliates
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        window.location.href = `/contact-us`
                      }}
                    >
                      Contact
                    </a>
                    {/* <a href="#">Contact Us</a> */}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="widget">
                <h6 className="widget_title">My Account</h6>
                <ul className="widget_links">
                  <li>
                    <a href="#">My Account</a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        window.location.href = `/ugc`
                      }}
                    >
                      Condition générale d&apos;utilisation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        window.location.href = `/contact-us`
                      }}
                    >
                      Returns
                    </a>
                  </li>
                  {/* <li>
                    <a href="#">Orders History</a>
                  </li>
                  <li>
                    <a href="#">Order Tracking</a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="widget">
                <h6 className="widget_title">Télécharger App</h6>
                <ul className="app_list">
                  <li>
                    <a href="#">
                      <img src="assets/images/f1.png" alt="f1" />
                    </a>
                  </li>{' '}
                  <li>
                    <a href="#">
                      <img src="assets/images/f2.png" alt="f2" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="widget">
                <h6 className="widget_title">Social</h6>
                <ul className="social_icons">
                  <li>
                    <a href="#" className="sc_facebook">
                      <i className="ion-social-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="sc_twitter">
                      <i className="ion-social-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="sc_google">
                      <i className="ion-social-googleplus"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="sc_youtube">
                      <i className="ion-social-youtube-outline"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="sc_instagram">
                      <i className="ion-social-instagram-outline"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom_footer border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-center text-md-start mb-md-0">
                Droits d&apos;auteur © 2024 SHOPWISE. Tous droits réservés.
              </p>
            </div>
            <div className="col-lg-6">
              <ul className="footer_payment text-center text-md-end">
                <li>
                  <a href="#">
                    <img src="assets/images/visa.png" alt="visa" />
                  </a>
                </li>{' '}
                <li>
                  <a href="#">
                    <img src="assets/images/discover.png" alt="discover" />
                  </a>
                </li>{' '}
                <li>
                  <a href="#">
                    <img
                      src="assets/images/master_card.png"
                      alt="master_card"
                    />
                  </a>
                </li>{' '}
                <li>
                  <a href="#">
                    <img src="assets/images/paypal.png" alt="paypal" />
                  </a>
                </li>{' '}
                <li>
                  <a href="#">
                    <img
                      src="assets/images/amarican_express.png"
                      alt="amarican_express"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
