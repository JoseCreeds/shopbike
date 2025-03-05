import NewLetters from '@/components/NewLetters'
import Loader from '@/utils/loader'
import './style.css'
//import { useSelector } from 'react-redux'

export default function OrderCompleted() {
  //const cartItems = useSelector((state) => state.cart.cartItems)
  const cartItems = JSON.parse(localStorage.getItem('cartBackup')) || []

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )
  const total = subTotal
  const currentDate = new Date().toLocaleDateString('fr-FR')

  const generateOrderNumber = () => {
    const randomNumber = Math.floor(100 + Math.random() * 900)
    return `BA${randomNumber}`
  }

  const orderNumber = generateOrderNumber()

  const email = JSON.parse(localStorage.getItem('data')).normal?.email

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
                <h1>Order Completed</h1>
              </div>
            </div>
            <div className="col-md-6">
              <ol className="breadcrumb justify-content-md-end">
                <li className="breadcrumb-item">
                  <a href="#!">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#!">Pages</a>
                </li>
                <li className="breadcrumb-item active">Order Completed</li>
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
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="text-center order_complete">
                  <i className="fas fa-check-circle"></i>
                  <h3 style={{ color: '#FF324D' }}>
                    Merci. Votre commande a été reçue.
                  </h3>
                  <div className="container">
                    <div className="row justify-content-center text-center align-items-center">
                      <div className="col-12 col-md position-relative border-separator">
                        <p>Num commande:</p>
                        <h6>{orderNumber}</h6>
                      </div>
                      <div className="col-12 col-md position-relative border-separator">
                        <p>Date:</p>
                        <h6>{currentDate}</h6>
                      </div>
                      <div className="col-12 col-md position-relative border-separator">
                        <p>E-mail:</p>
                        <h6>{email}</h6>
                      </div>
                      <div className="col-12 col-md position-relative border-separator">
                        <p>En tout:</p>
                        <h6>€ {total.toFixed(2)} </h6>
                      </div>
                      <div className="col-12 col-md position-relative border-separator-last">
                        <p>Mode de paiement:</p>
                        <h6>Virement bancaire direct</h6>
                      </div>
                    </div>
                  </div>

                  <p style={{ marginTop: '15px', textAlign: 'justify' }}>
                    Veuillez indiquer le titulaire du compte (
                    {import.meta.env.VITE_B_P_NAME}) ainsi que la finalité ou la
                    référence de paiement (il s&apos;agit de votre numéro de
                    commande à cinq chiffres, par exemple 15423) afin que notre
                    banque puisse attribuer correctement votre commande et votre
                    paiement. Cela empêche un remboursement car la banque ne
                    peut pas lier votre commande à votre paiement et lancera un
                    remboursement si vous ne précisez pas le titulaire exact du
                    compte et l&apos;objet du paiement dans nos coordonnées
                    bancaires. Une fois le paiement effectué, veuillez envoyer
                    le reçu de paiement par email.
                  </p>

                  <div style={{ marginTop: '40px', textAlign: 'justify' }}>
                    <h4 style={{ textTransform: 'uppercase' }}>
                      Nos coordonnées bancaires
                    </h4>
                    <p> {import.meta.env.VITE_B_P_NAME}:</p>
                  </div>

                  <div className="container">
                    <div className="row justify-content-center text-center align-items-center">
                      <div className="col-12 col-md position-relative border-separator">
                        <p>Banque:</p>
                        <h5>{import.meta.env.VITE_B_NAME}</h5>
                      </div>
                      <div className="col-12 col-md position-relative border-separator">
                        <p>Numéro d&apos;identification bancaire:</p>
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
                      détails de la commande
                    </h4>
                  </div>

                  <div className="table-responsive order_table">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Produit</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.length === 0 ? (
                          <tr>
                            <td colSpan="2" className="text-center">
                              Votre panier est vide
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
                          <th>Sous-total</th>
                          <td className="product-subtotal">
                            € {subTotal.toFixed(2)}
                          </td>
                        </tr>
                        <tr>
                          <th>Livraison</th>
                          <td>Livraison gratuite</td>
                        </tr>
                        <tr>
                          <th>Total</th>
                          <td className="product-subtotal">
                            € {total.toFixed(2)}
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>

                  {/* <a href="/" className="btn btn-fill-out">
                    Continue Shopping
                  </a> */}
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
