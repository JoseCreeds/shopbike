import NewLetters from '@/components/NewLetters'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { loginUser } from '@/store/slices/authSlice'
import { clearCart } from '@/store/slices/cartSlice'
import { newOrder } from '@/store/slices/orderSlice'

import { toast } from 'react-toastify'
import Loader from '@/utils/loader'

export default function Checkout() {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token)

  const [isAccountOpen, setIsAccountOpen] = useState(false)
  const [isOtherOpen, setIsOtherOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isCouponOpen, setIsCouponOpen] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [couponCode, setCouponCode] = useState('')

  const { loading, error } = useSelector((state) => state.auth)
  const { loadingOrder, errorOrder } = useSelector((state) => state.order)

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })

  //const [isCguCheck, setIsCguCheck] = useState(false)
  // Récupérer les éléments du panier depuis le Redux store
  const cartItems = useSelector((state) => state.cart.cartItems)

  // Calculer le sous-total (sum des articles dans le panier)
  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  // Le total sera égal au sous-total dans cet exemple, mais tu peux y ajouter d'autres frais comme la livraison
  const total = subTotal

  const fliteredProducts = cartItems.map(({ libelle, price, quantity }) => ({
    libelle,
    price,
    quantity,
  }))

  const generateOrderNumber = () => {
    const randomNumber = Math.floor(100 + Math.random() * 900)
    return `BA${randomNumber}`
  }
  const orderNumber = generateOrderNumber()

  const [formData, setFormData] = useState({
    normal: {
      numCommande: orderNumber,
      fname: '',
      lname: '',
      cname: '',
      country: '',
      billing_address: '',
      billing_address2: '',
      city: '',
      zipcode: '',
      phone: '',
      email: '',
    },
    password: '',
    other: null,
  })

  const [errors, setErrors] = useState({
    fname: false,
    lname: false,
    cname: false,
    country: false,
    billing_address: false,
    billing_address2: false,
    city: false,
    zipcode: false,
    phone: false,
    email: false,
  })

  const handleChange = (e, section) => {
    const { name, value, type, options, selectedIndex } = e.target

    // Si c'est un <select>, on récupère le texte de l'option sélectionnée
    const newValue = type === 'select-one' ? options[selectedIndex].text : value

    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [name]: newValue,
      },
    }))

    // Enlever l'erreur quand le champ est rempli
    if (value) {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validierung der erforderlichen Felder in formData.normal
    const newErrors = { ...errors }
    let isValid = true

    Object.keys(formData.normal).forEach((key) => {
      if (!formData.normal[key]) {
        newErrors[key] = true
        isValid = false
      } else {
        newErrors[key] = false
      }
    })

    setErrors(newErrors)

    if (isValid) {
      const orderData = {
        numCommande: formData.normal.numCommande,
        cart: fliteredProducts,
        total: total,
        lname: formData.normal.lname,
        fname: formData.normal.fname,
        email: formData.normal.email,
        adresse: `${formData.normal.billing_address}, ${formData.normal.zipcode} ${formData.normal.city}, ${formData.normal.country}`,
        phone: formData.normal.phone,
      }
      localStorage.setItem('data', JSON.stringify(formData))

      dispatch(newOrder(orderData)).then((result) => {
        if (result.type === 'order/newOrder/fulfilled') {
          setFormData({})
          window.location.href = '/order-completed'
        } else {
          toast.error(error)
        }
      })

      dispatch(clearCart())
      window.location.href = 'order-completed'
    } else {
      //console.log('Formular hat Fehler, kann nicht abgeschickt werden.')
      toast.error('Bitte füllen Sie alle Felder aus!')
    }
  }

  const handleCouponSubmit = (e) => {
    e.preventDefault()

    if (couponCode.trim()) {
      toast.error('Ungültiger Gutschein!')
      setCouponCode('')
    } else {
      toast.error('Bitte geben Sie einen gültigen Gutscheincode ein.')
    }
  }

  // Login part
  const handleChangeLogin = (e) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  const handleSubmitLogin = (e) => {
    e.preventDefault()
    dispatch(loginUser(userData)).then((result) => {
      if (result.type === 'auth/login/fulfilled') {
        toast.success('Erfolgreich eingeloggt')
        setUserData({
          email: '',
          password: '',
        })
        setIsLoginOpen(false)
      } else {
        toast.error(error)
      }
    })
  }

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
                <h1>Kasse</h1>
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
                <li className="breadcrumb-item active">Kasse</li>
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
            <div className="row">
              <div className="col-lg-6">
                <div className="toggle_info">
                  <span>
                    <i className="fas fa-user"></i>
                    {!token ? (
                      <span>
                        Haben Sie bereits ein Kundenkonto?{' '}
                        <a
                          href="#loginform"
                          data-bs-toggle="collapse"
                          className={isLoginOpen ? '' : 'collapsed'}
                          aria-expanded="false"
                          onClick={(e) => {
                            e.preventDefault()
                            setIsLoginOpen(!isLoginOpen)
                          }}
                        >
                          Klicken Sie hier, um sich anzumelden.
                        </a>
                      </span>
                    ) : (
                      <span>Sie sind angemeldet!</span>
                    )}
                  </span>
                </div>
                {isLoginOpen && (
                  <div
                  // className="panel-collapse collapse login_form"
                  // id="loginform"
                  >
                    <div className="panel-body">
                      <p>
                        Wenn Sie bereits bei uns gekauft haben, geben Sie bitte
                        Ihre Daten in den untenstehenden Feldern ein. Wenn Sie
                        ein neuer Kunde sind, gehen Sie bitte zum Abschnitt mit
                        den Zahlungs- und Versandinformationen.
                      </p>
                      <form onSubmit={handleSubmitLogin}>
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            name="email"
                            value={userData.email}
                            onChange={handleChangeLogin}
                            className="form-control"
                            placeholder="Benutzername oder E-Mail-Adresse *"
                            required
                          />
                        </div>
                        <div className="form-group mb-3">
                          <input
                            type="password"
                            name="password"
                            value={userData.password}
                            onChange={handleChangeLogin}
                            className="form-control"
                            placeholder="Passwort *"
                            required
                          />
                        </div>
                        <div className="login_footer form-group mb-3">
                          <div className="chek-form">
                            <div className="custome-checkbox">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="checkbox"
                                id="remember"
                                checked={rememberMe}
                                onChange={(e) =>
                                  setRememberMe(e.target.checked)
                                }
                              />
                              <label className="form-check-label">
                                <span>Erinnere dich an mich</span>
                              </label>
                            </div>
                          </div>
                          <a href="#!">Passwort vergessen?</a>
                        </div>
                        <div className="form-group mb-3">
                          <button
                            type="submit"
                            className="btn btn-fill-out btn-block"
                            name="login"
                            disabled={loading}
                          >
                            {loading ? 'Lädt...' : 'Einloggen'}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
              <div className="col-lg-6">
                <div className="toggle_info">
                  <span>
                    <i className="fas fa-tag"></i>Haben Sie einen Gutschein?{' '}
                    <a
                      href="#!"
                      data-bs-toggle="collapse"
                      className={isCouponOpen ? '' : 'collapsed'}
                      aria-expanded="false"
                      onClick={(e) => {
                        e.preventDefault()
                        setIsCouponOpen(!isCouponOpen)
                      }}
                    >
                      Klicken Sie hier, um Ihren Gutscheincode einzugeben.
                    </a>
                  </span>
                </div>
                {isCouponOpen && (
                  <div
                  // className="panel-collapse collapse coupon_form"
                  // id="coupon"
                  >
                    <div className="panel-body">
                      <p>
                        Wenn Sie einen Gutscheincode haben, wenden Sie ihn bitte
                        unten an.
                      </p>
                      <div className="coupon field_form input-group">
                        <input
                          type="text"
                          name="code"
                          className="form-control"
                          placeholder="Gutscheincode.."
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
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
                  </div>
                )}
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="medium_divider"></div>
                <div className="divider center_icon">
                  <i className="linearicons-credit-card"></i>
                </div>
                <div className="medium_divider"></div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="heading_s1">
                  <h4 style={{ textTransform: 'uppercase' }}>
                    Rechnungsdetails
                  </h4>
                </div>
                <form method="post">
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      required
                      className="form-control"
                      name="fname"
                      placeholder="Vorname *"
                      value={formData.normal.fname}
                      onChange={(e) => handleChange(e, 'normal')}
                    />

                    {errors.fname && (
                      <p
                        style={{ marginBottom: '-7px' }}
                        className="error text-danger"
                      >
                        Dieses Feld ist erforderlich
                      </p>
                    )}
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      required
                      className="form-control"
                      name="lname"
                      placeholder="Nachname *"
                      value={formData.normal.lname}
                      onChange={(e) => handleChange(e, 'normal')}
                    />

                    {errors.lname && (
                      <p
                        style={{ marginBottom: '-7px' }}
                        className="error text-danger"
                      >
                        Dieses Feld ist erforderlich
                      </p>
                    )}
                  </div>
                  <div className="form-group mb-3">
                    <input
                      className="form-control"
                      type="text"
                      name="cname"
                      placeholder="Firmenname (optional)"
                      onChange={(e) => handleChange(e, 'normal')}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <div className="custom_select">
                      <select
                        className="form-control"
                        name="country"
                        value={formData.normal.country}
                        onChange={(e) => handleChange(e, 'normal')}
                      >
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
                        <option value="CF">Zentralafrikanische Republik</option>
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
                        <option value="AE">Vereinigte Arabische Emirate</option>
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

                      {errors.country && (
                        <p
                          style={{ marginBottom: '-7px' }}
                          className="error text-danger"
                        >
                          Dieses Feld ist erforderlich
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="billing_address"
                      required
                      placeholder="Adresse *"
                      value={formData.normal.billing_address}
                      onChange={(e) => handleChange(e, 'normal')}
                    />

                    {errors.billing_address && (
                      <p
                        style={{ marginBottom: '-7px' }}
                        className="error text-danger"
                      >
                        Dieses Feld ist erforderlich
                      </p>
                    )}
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="billing_address2"
                      placeholder="Adresse Zeile 2 (optional)"
                      value={formData.normal.billing_address2}
                      onChange={(e) => handleChange(e, 'normal')}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      className="form-control"
                      required
                      type="text"
                      name="city"
                      placeholder="Ort / Stadt * "
                      value={formData.normal.city}
                      onChange={(e) => handleChange(e, 'normal')}
                    />

                    {errors.city && (
                      <p
                        style={{ marginBottom: '-7px' }}
                        className="error text-danger"
                      >
                        Dieses Feld ist erforderlich
                      </p>
                    )}
                  </div>
                  <div className="form-group mb-3">
                    <input
                      className="form-control"
                      required
                      type="text"
                      name="zipcode"
                      placeholder="Postleitzahl / ZIP *"
                      value={formData.normal.zipcode}
                      onChange={(e) => handleChange(e, 'normal')}
                    />

                    {errors.zipcode && (
                      <p
                        style={{ marginBottom: '-7px' }}
                        className="error text-danger"
                      >
                        Dieses Feld ist erforderlich
                      </p>
                    )}
                  </div>
                  <div className="form-group mb-3">
                    <input
                      className="form-control"
                      required
                      type="text"
                      name="phone"
                      placeholder="Telefon *"
                      value={formData.normal.phone}
                      onChange={(e) => handleChange(e, 'normal')}
                    />

                    {errors.phone && (
                      <p
                        style={{ marginBottom: '-7px' }}
                        className="error text-danger"
                      >
                        Dieses Feld ist erforderlich
                      </p>
                    )}
                  </div>
                  <div className="form-group mb-3">
                    <input
                      className="form-control"
                      required
                      type="text"
                      name="email"
                      placeholder="E-Mail-Adresse *"
                      value={formData.normal.email}
                      onChange={(e) => handleChange(e, 'normal')}
                    />

                    {errors.email && (
                      <p
                        style={{ marginBottom: '-7px' }}
                        className="error text-danger"
                      >
                        Dieses Feld ist erforderlich
                      </p>
                    )}
                  </div>
                  <div className="form-group mb-3">
                    <div
                      className="chek-form"
                      onClick={() => setIsAccountOpen(!isAccountOpen)}
                    >
                      <div className="custome-checkbox">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="createaccount"
                          checked={isAccountOpen}
                          onChange={() => setIsAccountOpen(!isAccountOpen)}
                        />
                        <label className="form-check-label label_info">
                          <span>Ein Kundenkonto erstellen?</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  {isAccountOpen && (
                    <div className="form-group create-account mb-3">
                      <input
                        className="form-control"
                        required
                        type="password"
                        placeholder="Passwort"
                        name="password"
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            password: e.target.value,
                          }))
                        }
                      />
                    </div>
                  )}
                  <div className="ship_detail">
                    <div className="form-group mb-3">
                      <div
                        className="chek-form"
                        onClick={() => setIsOtherOpen(!isOtherOpen)}
                      >
                        <div className="custome-checkbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="differentaddress"
                            checked={isOtherOpen}
                            onChange={() => setIsOtherOpen(!isOtherOpen)}
                          />
                          <label className="form-check-label label_info">
                            <span>
                              Lieferung an eine andere Adresse senden?
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    {isOtherOpen && (
                      <div className="different_address">
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            required
                            className="form-control"
                            name="fname"
                            placeholder="Vorname *"
                            onChange={(e) => handleChange(e, 'other')}
                          />
                        </div>
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            required
                            className="form-control"
                            name="lname"
                            placeholder="Nachname *"
                            onChange={(e) => handleChange(e, 'other')}
                          />
                        </div>
                        <div className="form-group mb-3">
                          <input
                            className="form-control"
                            required
                            type="text"
                            name="cname"
                            placeholder="Firmenname (optional)"
                            onChange={(e) => handleChange(e, 'other')}
                          />
                        </div>
                        <div className="form-group mb-3">
                          <div className="custom_select">
                            <select
                              name="country"
                              className="form-control"
                              onChange={(e) => handleChange(e, 'other')}
                            >
                              <option value="">
                                Wählen Sie eine Option...
                              </option>
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
                              <option value="BA">
                                Bosnien und Herzegowina
                              </option>
                              <option value="BW">Botswana</option>
                              <option value="BV">Bouvetinsel</option>
                              <option value="BR">Brasilien</option>
                              <option value="IO">
                                Britisches Territorium im Indischen Ozean
                              </option>
                              <option value="VG">
                                Britische Jungferninseln
                              </option>
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
                              <option value="DO">
                                Dominikanische Republik
                              </option>
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
                              <option value="AN">
                                Niederländische Antillen
                              </option>
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
                              <option value="PS">
                                Palästinensische Gebiete
                              </option>
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
                              <option value="MF">
                                Saint-Martin (französisch)
                              </option>
                              <option value="PM">
                                Saint-Pierre und Miquelon
                              </option>
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
                              <option value="TC">
                                Turks- und Caicosinseln
                              </option>
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
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            name="billing_address"
                            required=""
                            placeholder="Adresse *"
                            onChange={(e) => handleChange(e, 'other')}
                          />
                        </div>
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            name="billing_address2"
                            required=""
                            placeholder="Adresse Zeile2 (optional)"
                            onChange={(e) => handleChange(e, 'other')}
                          />
                        </div>
                        <div className="form-group mb-3">
                          <input
                            className="form-control"
                            required
                            type="text"
                            name="city"
                            placeholder="Stadt / Ort *"
                            onChange={(e) => handleChange(e, 'other')}
                          />
                        </div>
                        <div className="form-group mb-3">
                          <input
                            className="form-control"
                            required
                            type="text"
                            name="state"
                            placeholder="Ort / Stadt * "
                            onChange={(e) => handleChange(e, 'other')}
                          />
                        </div>
                        <div className="form-group mb-3">
                          <input
                            className="form-control"
                            required
                            type="text"
                            name="zipcode"
                            placeholder="Postleitzahl / ZIP *"
                            onChange={(e) => handleChange(e, 'other')}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="#">
                    <h4>Bestellhinweise (optional)</h4>
                  </div>
                  <div className="form-group mb-0">
                    <textarea
                      rows="5"
                      className="form-control"
                      placeholder="Bemerkung zu Ihrer Bestellung"
                    ></textarea>
                  </div>
                </form>
              </div>

              <div className="col-md-6">
                <div className="row">
                  <div className="order_review">
                    <div className="#">
                      <h4>Wählen Sie die Zahlungsmethode</h4>
                    </div>
                    <div className="#">
                      {/* <p>Direkte Banküberweisung</p> */}
                      <div className="payment_option">
                        <div className="custome-radio">
                          <input
                            className="form-check-input"
                            required=""
                            type="radio"
                            name="payment_option"
                            id="exampleRadios3"
                            value="option3"
                            checked=""
                          />
                          <label className="form-check-label">
                            Direkte Banküberweisung
                          </label>
                        </div>
                      </div>
                      <p style={{ marginTop: '15px' }}>
                        Überweisung direkt auf unser Bankkonto. Bitte verwenden
                        Sie die Bestellnummer als Verwendungszweck. Ihre
                        Bestellung wird erst versendet, wenn das Geld auf
                        unserem Konto eingegangen ist.
                      </p>
                    </div>

                    <div></div>
                  </div>
                </div>
                <div
                  style={{
                    border: '1px solid transparent',
                    margin: '15px auto',
                  }}
                ></div>

                <div className="row">
                  <div className="order_review">
                    <div className="#">
                      <h4>Ihre Bestellungen</h4>
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

                    {errorOrder && (
                      <div className="col-md-12 mb-3">
                        <div className="alert-msg text-center text-danger">
                          {errorOrder}
                        </div>
                      </div>
                    )}
                    <a
                      href="#!"
                      className="btn btn-fill-out btn-block"
                      onClick={handleSubmit}
                      disabled={loadingOrder}
                    >
                      {loadingOrder ? 'Läuft' : 'Jetzt kaufen'}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- END SECTION SHOP --> */}

        <NewLetters />
      </div>
      {/* <!-- END MAIN CONTENT --> */}
    </>
  )
}
