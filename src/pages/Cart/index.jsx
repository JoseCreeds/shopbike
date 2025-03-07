import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import NewLetters from '@/components/NewLetters'
import Loader from '@/utils/loader'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, updateQuantity } from '@/store/slices/cartSlice'
import './style.css'
import { toast } from 'react-toastify'

export default function Cart() {
  const navigate = useNavigate()
  const [couponCode, setCouponCode] = useState('')

  const handleCouponSubmit = (e) => {
    e.preventDefault()

    if (couponCode.trim()) {
      toast.error('Ungültiger Gutscheincode!')
      setCouponCode('')
    } else {
      toast.error('Bitte geben Sie einen gültigen Gutscheincode ein.')
    }
  }

  const cartItems = useSelector((state) => state.cart.cartItems)
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )
  const dispatch = useDispatch()

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
                <h1>Warenkorb</h1> {/* "Panier" traduit en "Warenkorb" */}
              </div>
            </div>
            <div className="col-md-6">
              <ol className="breadcrumb justify-content-md-end">
                <li className="breadcrumb-item">
                  <a href="#!">Startseite</a>{' '}
                  {/* "Home" traduit en "Startseite" */}
                </li>
                <li className="breadcrumb-item">
                  <a href="#!">Seiten</a> {/* "Pages" traduit en "Seiten" */}
                </li>
                <li className="breadcrumb-item active">Warenkorb</li>{' '}
                {/* "Panier" traduit en "Warenkorb" */}
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
              <div className="col-12">
                <div className="table-responsive shop_cart_table">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">&nbsp;</th>
                        <th className="product-name">Produkt</th>{' '}
                        {/* "Produit" traduit en "Produkt" */}
                        <th className="product-price">Preis</th>{' '}
                        {/* "Prix" traduit en "Preis" */}
                        <th className="product-quantity">Menge</th>{' '}
                        {/* "Quantité" traduit en "Menge" */}
                        <th className="product-subtotal">Zwischensumme</th>{' '}
                        {/* "Total" traduit en "Zwischensumme" */}
                        <th className="product-remove">Entfernen</th>{' '}
                        {/* "Supprimer" traduit en "Entfernen" */}
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.length === 0 ? (
                        <tr>
                          <td colSpan="6" className="text-center">
                            Ihr Warenkorb ist leer.{' '}
                            {/* "Votre panier est vide." traduit en "Ihr Warenkorb ist leer." */}
                          </td>
                        </tr>
                      ) : (
                        cartItems.map((item) => (
                          <tr key={item.id}>
                            <td className="product-thumbnail">
                              <a
                                href="#!"
                                onClick={(e) => {
                                  e.preventDefault()
                                  const formattedLibelle = item.libelle.replace(
                                    /\s+/g,
                                    '-'
                                  )
                                  navigate(
                                    `/product/${item.id}/${formattedLibelle}`
                                  )
                                }}
                              >
                                <img src={item.picture} alt={item.libelle} />
                              </a>
                            </td>
                            <td className="product-name" data-title="Produkt">
                              <a
                                href="#!"
                                onClick={(e) => {
                                  e.preventDefault()
                                  const formattedLibelle = item.libelle.replace(
                                    /\s+/g,
                                    '-'
                                  )
                                  navigate(
                                    `/product/${item.id}/${formattedLibelle}`
                                  )
                                }}
                              >
                                {item.libelle}
                              </a>
                            </td>
                            <td className="product-price" data-title="Preis">
                              €{item.price.toFixed(2)}
                            </td>
                            <td className="product-quantity" data-title="Menge">
                              <div className="quantity">
                                <input
                                  type="button"
                                  value="-"
                                  className="minus"
                                  onClick={() =>
                                    item.quantity > 1 &&
                                    dispatch(
                                      updateQuantity({
                                        id: item.id,
                                        quantity: item.quantity - 1,
                                      })
                                    )
                                  }
                                />
                                <input
                                  type="text"
                                  name="quantity"
                                  value={item.quantity}
                                  className="qty"
                                  readOnly
                                />
                                <input
                                  type="button"
                                  value="+"
                                  className="plus"
                                  onClick={() =>
                                    dispatch(
                                      updateQuantity({
                                        id: item.id,
                                        quantity: item.quantity + 1,
                                      })
                                    )
                                  }
                                />
                              </div>
                            </td>
                            <td
                              className="product-subtotal"
                              data-title="Gesamt"
                            >
                              €{(item.price * item.quantity).toFixed(2)}
                            </td>
                            <td
                              className="product-remove"
                              data-title="Entfernen"
                            >
                              <a
                                href="#!"
                                onClick={() =>
                                  dispatch(removeFromCart(item.id))
                                }
                              >
                                <i className="ti-close"></i>
                              </a>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="6" className="px-0">
                          <div className="row g-0 align-items-center">
                            <div className="col-lg-4 col-md-6 mb-3 mb-md-0">
                              <div className="coupon field_form input-group">
                                <input
                                  type="text"
                                  value={couponCode}
                                  onChange={(e) =>
                                    setCouponCode(e.target.value)
                                  }
                                  className="form-control form-control-sm"
                                  placeholder="Gutschein-Code eingeben.."
                                />
                                <div className="input-group-append">
                                  <button
                                    className="btn btn-fill-out btn-sm"
                                    type="submit"
                                    onClick={handleCouponSubmit}
                                  >
                                    Gutschein anwenden
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-8 col-md-6  text-start  text-md-end">
                              <a
                                className="btn btn-line-fill btn-sm"
                                href="shop"
                              >
                                Weiter im Shop
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="medium_divider"></div>
                <div className="divider center_icon">
                  <i className="ti-shopping-cart-full"></i>
                </div>
                <div className="medium_divider"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="heading_s1 mb-3">
                  <h6>Lieferung berechnen</h6>
                </div>
                <form className="field_form shipping_calculator">
                  <div className="form-row">
                    <div className="form-group col-lg-12 mb-3">
                      <div className="custom_select">
                        <select className="form-control">
                          <option value="">Wählen Sie eine Option...</option>
                          <option value="AX">Åland-Inseln</option>
                          <option value="AF">Afghanistan</option>
                          <option value="AL">Albanien</option>
                          <option value="DZ">Algerien</option>
                          <option value="AD">Andorra</option>
                          <option value="AO">Angola</option>
                          <option value="AI">Anguilla</option>
                          <option value="AQ">Antarktis</option>
                          <option value="AG">Antigua und Barbuda</option>
                          <option value="AR">Argentinien</option>
                          <option value="AM">Armenien</option>
                          <option value="AW">Aruba</option>
                          <option value="AU">Australien</option>
                          <option value="AT">Österreich</option>
                          <option value="AZ">Aserbaidschan</option>
                          <option value="BS">Bahamas</option>
                          <option value="BH">Bahrain</option>
                          <option value="BD">Bangladesch</option>
                          <option value="BB">Barbados</option>
                          <option value="BY">Belarus</option>
                          <option value="PW">Belau</option>
                          <option value="BE">Belgien</option>
                          <option value="BZ">Belize</option>
                          <option value="BJ">Benin</option>
                          <option value="BM">Bermuda</option>
                          <option value="BT">Bhutan</option>
                          <option value="BO">Bolivien</option>
                          <option value="BQ">
                            Bonaire, Saint Eustatius und Saba
                          </option>
                          <option value="BA">Bosnien und Herzegowina</option>
                          <option value="BW">Botswana</option>
                          <option value="BV">Bouvetinsel</option>
                          <option value="BR">Brasilien</option>
                          <option value="IO">
                            Britisches Territorium im Indischen Ozean
                          </option>
                          <option value="VG">Britische Jungferninseln</option>
                          <option value="BN">Brunei</option>
                          <option value="BG">Bulgarien</option>
                          <option value="BF">Burkina Faso</option>
                          <option value="BI">Burundi</option>
                          <option value="KH">Kambodscha</option>
                          <option value="CM">Kamerun</option>
                          <option value="CA">Kanada</option>
                          <option value="CV">Kap Verde</option>
                          <option value="KY">Kaimaninseln</option>
                          <option value="CF">
                            Zentralafrikanische Republik
                          </option>
                          <option value="TD">Tschad</option>
                          <option value="CL">Chile</option>
                          <option value="CN">China</option>
                          <option value="CX">Weihnachtsinsel</option>
                          <option value="CC">
                            Kokosinseln (Keeling Islands)
                          </option>
                          <option value="CO">Kolumbien</option>
                          <option value="KM">Komoren</option>
                          <option value="CG">Kongo (Brazzaville)</option>
                          <option value="CD">Kongo (Kinshasa)</option>
                          <option value="CK">Cookinseln</option>
                          <option value="CR">Costa Rica</option>
                          <option value="HR">Kroatien</option>
                          <option value="CU">Kuba</option>
                          <option value="CW">Curaçao</option>
                          <option value="CY">Zypern</option>
                          <option value="CZ">Tschechische Republik</option>
                          <option value="DK">Dänemark</option>
                          <option value="DJ">Dschibuti</option>
                          <option value="DM">Dominica</option>
                          <option value="DO">Dominikanische Republik</option>
                          <option value="EC">Ecuador</option>
                          <option value="EG">Ägypten</option>
                          <option value="SV">El Salvador</option>
                          <option value="GQ">Äquatorialguinea</option>
                          <option value="ER">Eritrea</option>
                          <option value="EE">Estland</option>
                          <option value="ET">Äthiopien</option>
                          <option value="FK">Falklandinseln</option>
                          <option value="FO">Färöer-Inseln</option>
                          <option value="FJ">Fidschi</option>
                          <option value="FI">Finnland</option>
                          <option value="FR">Frankreich</option>
                          <option value="GF">Französisch-Guayana</option>
                          <option value="PF">Französisch-Polynesien</option>
                          <option value="TF">
                            Französische Süd- und Antarktisgebiete
                          </option>
                          <option value="GA">Gabun</option>
                          <option value="GM">Gambia</option>
                          <option value="GE">Georgien</option>
                          <option value="DE">Deutschland</option>
                          <option value="GH">Ghana</option>
                          <option value="GI">Gibraltar</option>
                          <option value="GR">Griechenland</option>
                          <option value="GL">Grönland</option>
                          <option value="GD">Grenada</option>
                          <option value="GP">Guadeloupe</option>
                          <option value="GT">Guatemala</option>
                          <option value="GG">Guernsey</option>
                          <option value="GN">Guinea</option>
                          <option value="GW">Guinea-Bissau</option>
                          <option value="GY">Guyana</option>
                          <option value="HT">Haiti</option>
                          <option value="HM">
                            Heard-Insel und McDonald-Inseln
                          </option>
                          <option value="HN">Honduras</option>
                          <option value="HK">Hongkong</option>
                          <option value="HU">Ungarn</option>
                          <option value="IS">Island</option>
                          <option value="IN">Indien</option>
                          <option value="ID">Indonesien</option>
                          <option value="IR">Iran</option>
                          <option value="IQ">Irak</option>
                          <option value="IM">Insel Man</option>
                          <option value="IL">Israel</option>
                          <option value="IT">Italien</option>
                          <option value="CI">Elfenbeinküste</option>
                          <option value="JM">Jamaika</option>
                          <option value="JP">Japan</option>
                          <option value="JE">Jersey</option>
                          <option value="JO">Jordanien</option>
                          <option value="KZ">Kasachstan</option>
                          <option value="KE">Kenia</option>
                          <option value="KI">Kiribati</option>
                          <option value="KW">Kuwait</option>
                          <option value="KG">Kirgisistan</option>
                          <option value="LA">Laos</option>
                          <option value="LV">Lettland</option>
                          <option value="LB">Libanon</option>
                          <option value="LS">Lesotho</option>
                          <option value="LR">Liberia</option>
                          <option value="LY">Libyen</option>
                          <option value="LI">Liechtenstein</option>
                          <option value="LT">Litauen</option>
                          <option value="LU">Luxemburg</option>
                          <option value="MO">Macao S.A.R., China</option>
                          <option value="MK">Nordmazedonien</option>
                          <option value="MG">Madagaskar</option>
                          <option value="MW">Malawi</option>
                          <option value="MY">Malaysia</option>
                          <option value="MV">Malediven</option>
                          <option value="ML">Mali</option>
                          <option value="MT">Malta</option>
                          <option value="MH">Marshallinseln</option>
                          <option value="MQ">Martinique</option>
                          <option value="MR">Mauretanien</option>
                          <option value="MU">Mauritius</option>
                          <option value="YT">Mayotte</option>
                          <option value="MX">Mexiko</option>
                          <option value="FM">Mikronesien</option>
                          <option value="MD">Moldawien</option>
                          <option value="MC">Monaco</option>
                          <option value="MN">Mongolei</option>
                          <option value="ME">Montenegro</option>
                          <option value="MS">Montserrat</option>
                          <option value="MA">Marokko</option>
                          <option value="MZ">Mosambik</option>
                          <option value="MM">Myanmar</option>
                          <option value="NA">Namibia</option>
                          <option value="NR">Nauru</option>
                          <option value="NP">Nepal</option>
                          <option value="NL">Niederlande</option>
                          <option value="AN">Niederländische Antillen</option>
                          <option value="NC">Neukaledonien</option>
                          <option value="NZ">Neuseeland</option>
                          <option value="NI">Nicaragua</option>
                          <option value="NE">Niger</option>
                          <option value="NG">Nigeria</option>
                          <option value="NU">Niue</option>
                          <option value="NF">Norfolkinsel</option>
                          <option value="KP">Nordkorea</option>
                          <option value="NO">Norwegen</option>
                          <option value="OM">Oman</option>
                          <option value="PK">Pakistan</option>
                          <option value="PW">Palau</option>
                          <option value="PS">Palästinensische Gebiete</option>
                          <option value="PA">Panama</option>
                          <option value="PG">Papua-Neuguinea</option>
                          <option value="PY">Paraguay</option>
                          <option value="PE">Peru</option>
                          <option value="PH">Philippinen</option>
                          <option value="PN">Pitcairninseln</option>
                          <option value="PL">Polen</option>
                          <option value="PT">Portugal</option>
                          <option value="PR">Puerto Rico</option>
                          <option value="QA">Katar</option>
                          <option value="RE">Réunion</option>
                          <option value="RO">Rumänien</option>
                          <option value="RU">Russland</option>
                          <option value="RW">Ruanda</option>
                          <option value="BL">Saint-Barthélemy</option>
                          <option value="SH">
                            Saint Helena, Ascension und Tristan da Cunha
                          </option>
                          <option value="KN">Saint Kitts und Nevis</option>
                          <option value="LC">Saint Lucia</option>
                          <option value="MF">Saint-Martin (französisch)</option>
                          <option value="PM">Saint-Pierre und Miquelon</option>
                          <option value="VC">
                            Saint Vincent und die Grenadinen
                          </option>
                          <option value="WS">Samoa</option>
                          <option value="SM">San Marino</option>
                          <option value="SA">Saudi-Arabien</option>
                          <option value="SN">Senegal</option>
                          <option value="RS">Serbien</option>
                          <option value="SC">Seychellen</option>
                          <option value="SL">Sierra Leone</option>
                          <option value="SG">Singapur</option>
                          <option value="SX">
                            Sint Maarten (niederländischer Teil)
                          </option>
                          <option value="SK">Slowakei</option>
                          <option value="SI">Slowenien</option>
                          <option value="SB">Salomonen</option>
                          <option value="SO">Somalia</option>
                          <option value="ZA">Südafrika</option>
                          <option value="GS">
                            Südgeorgien und die Südlichen Sandwichinseln
                          </option>
                          <option value="SS">Südsudan</option>
                          <option value="ES">Spanien</option>
                          <option value="LK">Sri Lanka</option>
                          <option value="SD">Sudan</option>
                          <option value="SR">Suriname</option>
                          <option value="SJ">Svalbard und Jan Mayen</option>
                          <option value="SE">Schweden</option>
                          <option value="CH">Schweiz</option>
                          <option value="SY">Syrien</option>
                          <option value="TW">Taiwan</option>
                          <option value="TJ">Tadschikistan</option>
                          <option value="TZ">Tansania</option>
                          <option value="TH">Thailand</option>
                          <option value="TL">Timor-Leste</option>
                          <option value="TG">Togo</option>
                          <option value="TK">Tokelau</option>
                          <option value="TO">Tonga</option>
                          <option value="TT">Trinidad und Tobago</option>
                          <option value="TN">Tunesien</option>
                          <option value="TR">Türkei</option>
                          <option value="TM">Turkmenistan</option>
                          <option value="TC">Turks- und Caicosinseln</option>
                          <option value="TV">Tuvalu</option>
                          <option value="UG">Uganda</option>
                          <option value="UA">Ukraine</option>
                          <option value="AE">
                            Vereinigte Arabische Emirate
                          </option>
                          <option value="GB">Vereinigtes Königreich</option>
                          <option value="US">Vereinigte Staaten</option>
                          <option value="UM">
                            Vereinigte Staaten (außergwöhnliche Gebiete)
                          </option>
                          <option value="UY">Uruguay</option>
                          <option value="UZ">Usbekistan</option>
                          <option value="VU">Vanuatu</option>
                          <option value="VA">Vatikanstadt</option>
                          <option value="VE">Venezuela</option>
                          <option value="VN">Vietnam</option>
                          <option value="WF">Wallis und Futuna</option>
                          <option value="EH">Westsahara</option>
                          <option value="YE">Jemen</option>
                          <option value="ZM">Sambia</option>
                          <option value="ZW">Simbabwe</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-lg-6 mb-3">
                      <input
                        required="required"
                        placeholder="Bundesland / Land"
                        className="form-control"
                        name="name"
                        type="text"
                      />
                    </div>
                    <div className="form-group col-lg-6 mb-3">
                      <input
                        required="required"
                        placeholder="Postleitzahl / PLZ"
                        className="form-control"
                        name="name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-lg-12 mb-3">
                      <button
                        className="btn btn-fill-line"
                        type="submit"
                        onClick={(e) => e.preventDefault()}
                      >
                        Gesamt aktualisieren
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="col-md-6">
                <div className="border p-3 p-md-4">
                  <div className="heading_s1 mb-3">
                    <h6>Warenkorb Übersicht</h6>{' '}
                    {/* "Cart Totals" traduit en "Warenkorb Übersicht" */}
                  </div>
                  <div className="table-responsive">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="cart_total_label">
                            Zwischensumme des Warenkorbs
                          </td>{' '}
                          {/* "Sous-total panier" traduit en "Zwischensumme des Warenkorbs" */}
                          <td className="cart_total_amount">
                            €{totalPrice.toFixed(2)}
                          </td>
                        </tr>
                        <tr>
                          <td className="cart_total_label">Lieferung</td>{' '}
                          {/* "Livraison" traduit en "Lieferung" */}
                          <td className="cart_total_amount">
                            Kostenlose Lieferung{' '}
                            {/* "Livraison gratuite" traduit en "Kostenlose Lieferung" */}
                          </td>
                        </tr>
                        <tr>
                          <td className="cart_total_label">Gesamt</td>{' '}
                          {/* "Total" traduit en "Gesamt" */}
                          <td className="cart_total_amount">
                            <strong>€{totalPrice.toFixed(2)}</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <a
                    href={cartItems.length === 0 ? '#!' : '/checkout'}
                    className={`btn btn-fill-out ${
                      cartItems.length === 0 ? 'disabled' : ''
                    }`}
                    style={
                      cartItems.length === 0
                        ? { pointerEvents: 'none', opacity: 0.5 }
                        : {}
                    } // Désactive le bouton visuellement
                  >
                    Zur Kasse gehen{' '}
                    {/* "Procéder au paiement" traduit en "Zur Kasse gehen" */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- END SECTION SHOP --> */}

        {/* <!-- END MAIN CONTENT --> */}
      </div>

      <NewLetters />
    </>
  )
}
