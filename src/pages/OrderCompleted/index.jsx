import NewLetters from '@/components/NewLetters'
import Loader from '@/utils/loader'
import './style.css'
//import { useSelector } from 'react-redux'
//import ls from '@/utils/setWithExpiration'

export default function OrderCompleted() {
  //const cartItems = useSelector((state) => state.cart.cartItems)
  const cartItems = JSON.parse(localStorage.getItem('cartBackup')) || []
  //const cartItems = ls.getWithExpiration('cartBackup') || []

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )
  const total = subTotal
  const currentDate = new Date().toLocaleDateString('fr-FR')

  const orderData = JSON.parse(localStorage.getItem('data')).normal

  return (
    <>
      <Loader />

      {/* <!-- START SECTION BREADCRUMB --> */}
      <div className="breadcrumb_section bg_gray page-title-mini">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="page-title">
                <h1>Bestellung Abgeschlossen</h1>
              </div>
            </div>
            <div className="col-md-6">
              <ol className="breadcrumb justify-content-md-end">
                <li className="breadcrumb-item">
                  <a href="#!">Startseite</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#!">Seiten</a>
                </li>
                <li className="breadcrumb-item active">
                  Bestellung Abgeschlossen
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- END SECTION BREADCRUMB --> */}

      {/* <!-- START MAIN CONTENT --> */}
      <div className="main_content">
        <div className="section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="text-center order_complete">
                  <i className="fas fa-check-circle"></i>
                  <h3 style={{ color: '#FF324D' }}>
                    Danke. Ihre Bestellung wurde erhalten.
                  </h3>
                  <div className="container">
                    <div className="row justify-content-center text-center align-items-center">
                      <div className="col-12 col-md position-relative border-separator">
                        <p>Bestellnummer:</p>
                        <h6>{orderData.numCommande}</h6>
                      </div>
                      <div className="col-12 col-md position-relative border-separator">
                        <p>Datum:</p>
                        <h6>{currentDate}</h6>
                      </div>
                      <div className="col-12 col-md position-relative border-separator">
                        <p>E-Mail:</p>
                        <h6>{orderData.email}</h6>
                      </div>
                      <div className="col-12 col-md position-relative border-separator">
                        <p>Gesamt:</p>
                        <h6>€ {total.toFixed(2)} </h6>
                      </div>
                      <div className="col-12 col-md position-relative border-separator-last">
                        <p>Zahlungsmethode:</p>
                        <h6>Direktüberweisung</h6>
                      </div>
                    </div>
                  </div>

                  <p style={{ marginTop: '15px', textAlign: 'justify' }}>
                    Bitte geben Sie den Kontoinhaber (
                    {import.meta.env.VITE_B_P_NAME}) sowie den Verwendungszweck
                    oder die Zahlungsreferenz an (dies ist Ihre fünfstellige
                    Bestellnummer, z. B. 15423), damit unsere Bank Ihre
                    Bestellung und Zahlung korrekt zuordnen kann. Andernfalls
                    wird eine Rückerstattung eingeleitet, da die Bank Ihre
                    Bestellung nicht mit der Zahlung verknüpfen kann, wenn der
                    genaue Kontoinhaber und der Verwendungszweck in unseren
                    Bankdaten nicht angegeben werden. Nach erfolgter Zahlung
                    senden Sie bitte den Zahlungsbeleg per E-Mail.
                  </p>

                  <div style={{ marginTop: '40px', textAlign: 'justify' }}>
                    <h4 style={{ textTransform: 'uppercase' }}>
                      Unsere Bankdaten
                    </h4>
                    <p> {import.meta.env.VITE_B_P_NAME}:</p>
                  </div>

                  <div className="container">
                    <div className="row justify-content-center text-center align-items-center">
                      <div className="col-12 col-md position-relative border-separator">
                        <p>Bank:</p>
                        <h5>{import.meta.env.VITE_B_NAME}</h5>
                      </div>
                      <div className="col-12 col-md position-relative border-separator">
                        <p>Bankleitzahl:</p>
                        <h5>{import.meta.env.VITE_NUM}</h5>
                      </div>
                      <div
                        className="col-12 col-md position-relative border-separator-last"
                        style={{ borderRight: 'none !important' }}
                      >
                        <p>BIC:</p>
                        <h5>{import.meta.env.VITE_BIC}</h5>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: '70px', textAlign: 'justify' }}>
                    <h4 style={{ textTransform: 'uppercase' }}>
                      Bestelldetails
                    </h4>
                  </div>

                  <div className="table-responsive order_table">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Produkt</th>
                          <th>Gesamt</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.length === 0 ? (
                          <tr>
                            <td colSpan="2" className="text-center">
                              Ihr Warenkorb ist leer
                            </td>
                          </tr>
                        ) : (
                          cartItems.map((item) => (
                            <tr key={item.id}>
                              <td>
                                {item.libelle}{' '}
                                <span className="product-qty">
                                  x {item.quantity}
                                </span>
                              </td>
                              <td>
                                € {(item.price * item.quantity).toFixed(2)}
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                      <tfoot>
                        <tr>
                          <th>Zwischensumme</th>
                          <td className="product-subtotal">
                            € {subTotal.toFixed(2)}
                          </td>
                        </tr>
                        <tr>
                          <th>Versand</th>
                          <td>Kostenloser Versand</td>
                        </tr>
                        <tr>
                          <th>Gesamt</th>
                          <td className="product-subtotal">
                            € {total.toFixed(2)}
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NewLetters />
    </>
  )
}
