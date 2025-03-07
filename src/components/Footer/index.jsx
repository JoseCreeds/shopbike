//import { Link } from 'react-router-dom'
import LogoDark from '@/assets/images/rijdenfooter.png'
import Visa from '@/assets/images/visa.png'
import Discover from '@/assets/images/discover.png'
import MasterCard from '@/assets/images/master_card.png'
import Paypal from '@/assets/images/paypal.png'
import AmaricanExpress from '@/assets/images/amarican_express.png'

function Footer() {
  return (
    <footer className="bg_gray">
      <div className="footer_top">
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
                        <h5>KOSTENLOSER VERSAND</h5>
                        <p>Informationen zum Spediteur</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="icon_box icon_box_style2">
                      <div className="icon">
                        <i className="flaticon-money-back"></i>
                      </div>
                      <div className="icon_box_content">
                        <h5>30 TAGE RÜCKGARANTIE</h5>
                        <p>Zufriedenheit oder Rückerstattung</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="icon_box icon_box_style2">
                      <div className="icon">
                        <i className="flaticon-support"></i>
                      </div>
                      <div className="icon_box_content">
                        <h5>RUND UM DIE UHR SUPPORT</h5>
                        <p>Verfolgen Sie Ihre Bestellungen</p>
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
          <div className="row mx-auto lg:max-w-80">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="widget">
                <div className="footer_logo">
                  <a href="/">
                    <img src={LogoDark} alt="logo" />
                  </a>
                </div>
                <p className="mb-3">
                  Kaufen Sie Ihr Trendfahrrad sicher und profitieren Sie von
                  unseren Sonderangeboten
                </p>
                <ul className="contact_info">
                  <li>
                    <i className="ti-location-pin"></i>
                    <p>{import.meta.env.VITE_SHOP_LOCALISATION}</p>
                  </li>
                  <li>
                    <i className="ti-email"></i>
                    <a href={`mailto:${import.meta.env.VITE_SHOP_EMAIL}`}>
                      {import.meta.env.VITE_SHOP_EMAIL}
                    </a>
                  </li>
                  <li>
                    <i className="ti-mobile"></i>
                    <p>{import.meta.env.VITE_SHOP_PHONE}</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="widget">
                <h6 className="widget_title">INFORMATIONEN</h6>
                <ul className="widget_links">
                  <li>
                    <a
                      href="#!"
                      onClick={(e) => {
                        e.preventDefault()
                        window.location.href = `/about-us`
                      }}
                    >
                      Über uns
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="#!"
                      onClick={(e) => {
                        e.preventDefault()
                        window.location.href = /faq
                      }}
                    >
                      FAQ
                    </a>
                  </li> */}
                  <li>
                    <a
                      href="#!"
                      onClick={(e) => {
                        e.preventDefault()
                        window.location.href = `/contact-us`
                      }}
                    >
                      Standort
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      onClick={(e) => {
                        e.preventDefault()
                        window.location.href = `/contact-us`
                      }}
                    >
                      Partnerprogramme
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      onClick={(e) => {
                        e.preventDefault()
                        window.location.href = `/contact-us`
                      }}
                    >
                      Kontakt
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="widget">
                <h6 className="widget_title" style={{ textTransform: 'none' }}>
                  Shop-Richtlinien
                </h6>
                <ul className="widget_links">
                  <li>
                    <a
                      href="#!"
                      onClick={(e) => {
                        e.preventDefault()
                        window.location.href = `/pc`
                      }}
                    >
                      Datenschutzrichtlinie
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      onClick={(e) => {
                        e.preventDefault()
                        window.location.href = `/pr`
                      }}
                    >
                      Rückerstattungsrichtlinie
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      onClick={(e) => {
                        e.preventDefault()
                        window.location.href = `/pe`
                      }}
                    >
                      Versandrichtlinie
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      onClick={(e) => {
                        e.preventDefault()
                        window.location.href = `/ugc`
                      }}
                    >
                      Nutzungsrichtlinie
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      onClick={(e) => {
                        e.preventDefault()
                        window.location.href = `/pp`
                      }}
                    >
                      Zahlungsrichtlinie
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
                Urheberrecht © 2023 RIJDENX. Alle Rechte vorbehalten.
              </p>
            </div>
            <div className="col-lg-6">
              <ul className="footer_payment text-center text-md-end">
                <li>
                  <a href="#!">
                    <img src={Visa} alt="visa" />
                  </a>
                </li>{' '}
                <li>
                  <a href="#!">
                    <img src={Discover} alt="discover" />
                  </a>
                </li>{' '}
                <li>
                  <a href="#!">
                    <img src={MasterCard} alt="master_card" />
                  </a>
                </li>{' '}
                <li>
                  <a href="#!">
                    <img src={Paypal} alt="paypal" />
                  </a>
                </li>{' '}
                <li>
                  <a href="#!">
                    <img src={AmaricanExpress} alt="amarican_express" />
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
