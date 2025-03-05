import NewLetters from '@/components/NewLetters'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import Loader from '@/utils/loader'
import { clearCart } from '@/store/slices/cartSlice'

export default function Checkout() {
  const dispatch = useDispatch()
  const [isAccountOpen, setIsAccountOpen] = useState(false)
  const [isOtherOpen, setIsOtherOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isCouponOpen, setIsCouponOpen] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [couponCode, setCouponCode] = useState('')
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

  const [formData, setFormData] = useState({
    normal: {
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

    // Validation des champs requis dans formData.normal
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
      localStorage.setItem('data', JSON.stringify(formData))
      dispatch(clearCart())
      window.location.href = 'order-completed'
    } else {
      console.log('Form has errors, cannot submit.')
    }
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
                <h1>Checkout</h1>
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
                <li className="breadcrumb-item active">Checkout</li>
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
              <div className="col-lg-6">
                <div className="toggle_info">
                  <span>
                    <i className="fas fa-user"></i>Avez-vous déjà un compte
                    client ?{' '}
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
                      Cliquez ici pour vous connecter.
                    </a>
                  </span>
                </div>
                {isLoginOpen && (
                  <div
                  // className="panel-collapse collapse login_form"
                  // id="loginform"
                  >
                    <div className="panel-body">
                      <p>
                        Si vous avez déjà acheté chez nous, veuillez saisir vos
                        coordonnées dans les champs ci-dessous. Si vous êtes un
                        nouveau client, veuillez vous rendre dans la section
                        informations de paiement et d&apos;expédition.
                      </p>
                      <form>
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            required
                            className="form-control"
                            placeholder="Nom d'utilisateur ou adresse email  *"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="form-group mb-3">
                          <input
                            className="form-control"
                            required
                            type="password"
                            placeholder="Mot de passe *"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
                                <span>Souviens-toi de moi</span>
                              </label>
                            </div>
                          </div>
                          <a href="#!">Mot de passe oublié ?</a>
                        </div>
                        <div className="form-group mb-3">
                          <button
                            type="submit"
                            className="btn btn-fill-out btn-block"
                            name="login"
                          >
                            Se connecter
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
                    <i className="fas fa-tag"></i>Avez-vous un bon d&apos;achat
                    ?{' '}
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
                      Cliquez ici pour entrer votre code promo.
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
                        Si vous avez un code promo, veuillez l&apos;appliquer
                        ci-dessous.
                      </p>
                      <div className="coupon field_form input-group">
                        <input
                          type="text"
                          name="code"
                          className="form-control"
                          placeholder="Code promo.."
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-fill-out btn-sm"
                            type="submit"
                          >
                            Appliquer coupon
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
                    détails de la facture
                  </h4>
                </div>
                <form method="post">
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      required
                      className="form-control"
                      name="fname"
                      placeholder="Prénom *"
                      value={formData.normal.fname}
                      onChange={(e) => handleChange(e, 'normal')}
                    />

                    {errors.fname && (
                      <p
                        style={{ marginBottom: '-7px' }}
                        className="error text-danger"
                      >
                        Ce champ est requis
                      </p>
                    )}
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      required
                      className="form-control"
                      name="lname"
                      placeholder="Nom *"
                      value={formData.normal.lname}
                      onChange={(e) => handleChange(e, 'normal')}
                    />

                    {errors.lname && (
                      <p
                        style={{ marginBottom: '-7px' }}
                        className="error text-danger"
                      >
                        Ce champ est requis
                      </p>
                    )}
                  </div>
                  <div className="form-group mb-3">
                    <input
                      className="form-control"
                      type="text"
                      name="cname"
                      placeholder="Nom de l'entreprise  (facultatif)"
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
                        <option value="">Pays / Région *</option>
                        <option value="AX">Aland Islands</option>
                        <option value="AF">Afghanistan</option>
                        <option value="AL">Albania</option>
                        <option value="DZ">Algeria</option>
                        <option value="AD">Andorra</option>
                        <option value="AO">Angola</option>
                        <option value="AI">Anguilla</option>
                        <option value="AQ">Antarctica</option>
                        <option value="AG">Antigua and Barbuda</option>
                        <option value="AR">Argentina</option>
                        <option value="AM">Armenia</option>
                        <option value="AW">Aruba</option>
                        <option value="AU">Australia</option>
                        <option value="AT">Austria</option>
                        <option value="AZ">Azerbaijan</option>
                        <option value="BS">Bahamas</option>
                        <option value="BH">Bahrain</option>
                        <option value="BD">Bangladesh</option>
                        <option value="BB">Barbados</option>
                        <option value="BY">Belarus</option>
                        <option value="PW">Belau</option>
                        <option value="BE">Belgium</option>
                        <option value="BZ">Belize</option>
                        <option value="BJ">Benin</option>
                        <option value="BM">Bermuda</option>
                        <option value="BT">Bhutan</option>
                        <option value="BO">Bolivia</option>
                        <option value="BQ">
                          Bonaire, Saint Eustatius and Saba
                        </option>
                        <option value="BA">Bosnia and Herzegovina</option>
                        <option value="BW">Botswana</option>
                        <option value="BV">Bouvet Island</option>
                        <option value="BR">Brazil</option>
                        <option value="IO">
                          British Indian Ocean Territory
                        </option>
                        <option value="VG">British Virgin Islands</option>
                        <option value="BN">Brunei</option>
                        <option value="BG">Bulgaria</option>
                        <option value="BF">Burkina Faso</option>
                        <option value="BI">Burundi</option>
                        <option value="KH">Cambodia</option>
                        <option value="CM">Cameroon</option>
                        <option value="CA">Canada</option>
                        <option value="CV">Cape Verde</option>
                        <option value="KY">Cayman Islands</option>
                        <option value="CF">Central African Republic</option>
                        <option value="TD">Chad</option>
                        <option value="CL">Chile</option>
                        <option value="CN">China</option>
                        <option value="CX">Christmas Island</option>
                        <option value="CC">Cocos (Keeling) Islands</option>
                        <option value="CO">Colombia</option>
                        <option value="KM">Comoros</option>
                        <option value="CG">Congo (Brazzaville)</option>
                        <option value="CD">Congo (Kinshasa)</option>
                        <option value="CK">Cook Islands</option>
                        <option value="CR">Costa Rica</option>
                        <option value="HR">Croatia</option>
                        <option value="CU">Cuba</option>
                        <option value="CW">CuraÇao</option>
                        <option value="CY">Cyprus</option>
                        <option value="CZ">Czech Republic</option>
                        <option value="DK">Denmark</option>
                        <option value="DJ">Djibouti</option>
                        <option value="DM">Dominica</option>
                        <option value="DO">Dominican Republic</option>
                        <option value="EC">Ecuador</option>
                        <option value="EG">Egypt</option>
                        <option value="SV">El Salvador</option>
                        <option value="GQ">Equatorial Guinea</option>
                        <option value="ER">Eritrea</option>
                        <option value="EE">Estonia</option>
                        <option value="ET">Ethiopia</option>
                        <option value="FK">Falkland Islands</option>
                        <option value="FO">Faroe Islands</option>
                        <option value="FJ">Fiji</option>
                        <option value="FI">Finland</option>
                        <option value="FR">France</option>
                        <option value="GF">French Guiana</option>
                        <option value="PF">French Polynesia</option>
                        <option value="TF">French Southern Territories</option>
                        <option value="GA">Gabon</option>
                        <option value="GM">Gambia</option>
                        <option value="GE">Georgia</option>
                        <option value="DE">Germany</option>
                        <option value="GH">Ghana</option>
                        <option value="GI">Gibraltar</option>
                        <option value="GR">Greece</option>
                        <option value="GL">Greenland</option>
                        <option value="GD">Grenada</option>
                        <option value="GP">Guadeloupe</option>
                        <option value="GT">Guatemala</option>
                        <option value="GG">Guernsey</option>
                        <option value="GN">Guinea</option>
                        <option value="GW">Guinea-Bissau</option>
                        <option value="GY">Guyana</option>
                        <option value="HT">Haiti</option>
                        <option value="HM">
                          Heard Island and McDonald Islands
                        </option>
                        <option value="HN">Honduras</option>
                        <option value="HK">Hong Kong</option>
                        <option value="HU">Hungary</option>
                        <option value="IS">Iceland</option>
                        <option value="IN">India</option>
                        <option value="ID">Indonesia</option>
                        <option value="IR">Iran</option>
                        <option value="IQ">Iraq</option>
                        <option value="IM">Isle of Man</option>
                        <option value="IL">Israel</option>
                        <option value="IT">Italy</option>
                        <option value="CI">Ivory Coast</option>
                        <option value="JM">Jamaica</option>
                        <option value="JP">Japan</option>
                        <option value="JE">Jersey</option>
                        <option value="JO">Jordan</option>
                        <option value="KZ">Kazakhstan</option>
                        <option value="KE">Kenya</option>
                        <option value="KI">Kiribati</option>
                        <option value="KW">Kuwait</option>
                        <option value="KG">Kyrgyzstan</option>
                        <option value="LA">Laos</option>
                        <option value="LV">Latvia</option>
                        <option value="LB">Lebanon</option>
                        <option value="LS">Lesotho</option>
                        <option value="LR">Liberia</option>
                        <option value="LY">Libya</option>
                        <option value="LI">Liechtenstein</option>
                        <option value="LT">Lithuania</option>
                        <option value="LU">Luxembourg</option>
                        <option value="MO">Macao S.A.R., China</option>
                        <option value="MK">Macedonia</option>
                        <option value="MG">Madagascar</option>
                        <option value="MW">Malawi</option>
                        <option value="MY">Malaysia</option>
                        <option value="MV">Maldives</option>
                        <option value="ML">Mali</option>
                        <option value="MT">Malta</option>
                        <option value="MH">Marshall Islands</option>
                        <option value="MQ">Martinique</option>
                        <option value="MR">Mauritania</option>
                        <option value="MU">Mauritius</option>
                        <option value="YT">Mayotte</option>
                        <option value="MX">Mexico</option>
                        <option value="FM">Micronesia</option>
                        <option value="MD">Moldova</option>
                        <option value="MC">Monaco</option>
                        <option value="MN">Mongolia</option>
                        <option value="ME">Montenegro</option>
                        <option value="MS">Montserrat</option>
                        <option value="MA">Morocco</option>
                        <option value="MZ">Mozambique</option>
                        <option value="MM">Myanmar</option>
                        <option value="NA">Namibia</option>
                        <option value="NR">Nauru</option>
                        <option value="NP">Nepal</option>
                        <option value="NL">Netherlands</option>
                        <option value="AN">Netherlands Antilles</option>
                        <option value="NC">New Caledonia</option>
                        <option value="NZ">New Zealand</option>
                        <option value="NI">Nicaragua</option>
                        <option value="NE">Niger</option>
                        <option value="NG">Nigeria</option>
                        <option value="NU">Niue</option>
                        <option value="NF">Norfolk Island</option>
                        <option value="KP">North Korea</option>
                        <option value="NO">Norway</option>
                        <option value="OM">Oman</option>
                        <option value="PK">Pakistan</option>
                        <option value="PS">Palestinian Territory</option>
                        <option value="PA">Panama</option>
                        <option value="PG">Papua New Guinea</option>
                        <option value="PY">Paraguay</option>
                        <option value="PE">Peru</option>
                        <option value="PH">Philippines</option>
                        <option value="PN">Pitcairn</option>
                        <option value="PL">Poland</option>
                        <option value="PT">Portugal</option>
                        <option value="QA">Qatar</option>
                        <option value="IE">Republic of Ireland</option>
                        <option value="RE">Reunion</option>
                        <option value="RO">Romania</option>
                        <option value="RU">Russia</option>
                        <option value="RW">Rwanda</option>
                        <option value="ST">São Tomé and Príncipe</option>
                        <option value="BL">Saint Barthélemy</option>
                        <option value="SH">Saint Helena</option>
                        <option value="KN">Saint Kitts and Nevis</option>
                        <option value="LC">Saint Lucia</option>
                        <option value="SX">Saint Martin (Dutch part)</option>
                        <option value="MF">Saint Martin (French part)</option>
                        <option value="PM">Saint Pierre and Miquelon</option>
                        <option value="VC">
                          Saint Vincent and the Grenadines
                        </option>
                        <option value="SM">San Marino</option>
                        <option value="SA">Saudi Arabia</option>
                        <option value="SN">Senegal</option>
                        <option value="RS">Serbia</option>
                        <option value="SC">Seychelles</option>
                        <option value="SL">Sierra Leone</option>
                        <option value="SG">Singapore</option>
                        <option value="SK">Slovakia</option>
                        <option value="SI">Slovenia</option>
                        <option value="SB">Solomon Islands</option>
                        <option value="SO">Somalia</option>
                        <option value="ZA">South Africa</option>
                        <option value="GS">
                          South Georgia/Sandwich Islands
                        </option>
                        <option value="KR">South Korea</option>
                        <option value="SS">South Sudan</option>
                        <option value="ES">Spain</option>
                        <option value="LK">Sri Lanka</option>
                        <option value="SD">Sudan</option>
                        <option value="SR">Suriname</option>
                        <option value="SJ">Svalbard and Jan Mayen</option>
                        <option value="SZ">Swaziland</option>
                        <option value="SE">Sweden</option>
                        <option value="CH">Switzerland</option>
                        <option value="SY">Syria</option>
                        <option value="TW">Taiwan</option>
                        <option value="TJ">Tajikistan</option>
                        <option value="TZ">Tanzania</option>
                        <option value="TH">Thailand</option>
                        <option value="TL">Timor-Leste</option>
                        <option value="TG">Togo</option>
                        <option value="TK">Tokelau</option>
                        <option value="TO">Tonga</option>
                        <option value="TT">Trinidad and Tobago</option>
                        <option value="TN">Tunisia</option>
                        <option value="TR">Turkey</option>
                        <option value="TM">Turkmenistan</option>
                        <option value="TC">Turks and Caicos Islands</option>
                        <option value="TV">Tuvalu</option>
                        <option value="UG">Uganda</option>
                        <option value="UA">Ukraine</option>
                        <option value="AE">United Arab Emirates</option>
                        <option value="GB">United Kingdom (UK)</option>
                        <option value="US">USA (US)</option>
                        <option value="UY">Uruguay</option>
                        <option value="UZ">Uzbekistan</option>
                        <option value="VU">Vanuatu</option>
                        <option value="VA">Vatican</option>
                        <option value="VE">Venezuela</option>
                        <option value="VN">Vietnam</option>
                        <option value="WF">Wallis and Futuna</option>
                        <option value="EH">Western Sahara</option>
                        <option value="WS">Western Samoa</option>
                        <option value="YE">Yemen</option>
                        <option value="ZM">Zambia</option>
                        <option value="ZW">Zimbabwe</option>
                      </select>

                      {errors.country && (
                        <p
                          style={{ marginBottom: '-7px' }}
                          className="error text-danger"
                        >
                          Ce champ est requis
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
                        Ce champ est requis
                      </p>
                    )}
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="billing_address2"
                      placeholder="Adresse ligne 2 (optionnel)"
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
                      placeholder="Lieu / Ville * "
                      value={formData.normal.city}
                      onChange={(e) => handleChange(e, 'normal')}
                    />

                    {errors.city && (
                      <p
                        style={{ marginBottom: '-7px' }}
                        className="error text-danger"
                      >
                        Ce champ est requis
                      </p>
                    )}
                  </div>
                  <div className="form-group mb-3">
                    <input
                      className="form-control"
                      required
                      type="text"
                      name="zipcode"
                      placeholder="Code postal / ZIP *"
                      value={formData.normal.zipcode}
                      onChange={(e) => handleChange(e, 'normal')}
                    />

                    {errors.zipcode && (
                      <p
                        style={{ marginBottom: '-7px' }}
                        className="error text-danger"
                      >
                        Ce champ est requis
                      </p>
                    )}
                  </div>
                  <div className="form-group mb-3">
                    <input
                      className="form-control"
                      required
                      type="text"
                      name="phone"
                      placeholder="Téléphone *"
                      value={formData.normal.phone}
                      onChange={(e) => handleChange(e, 'normal')}
                    />

                    {errors.phone && (
                      <p
                        style={{ marginBottom: '-7px' }}
                        className="error text-danger"
                      >
                        Ce champ est requis
                      </p>
                    )}
                  </div>
                  <div className="form-group mb-3">
                    <input
                      className="form-control"
                      required
                      type="text"
                      name="email"
                      placeholder="Adresse email *"
                      value={formData.normal.email}
                      onChange={(e) => handleChange(e, 'normal')}
                    />

                    {errors.email && (
                      <p
                        style={{ marginBottom: '-7px' }}
                        className="error text-danger"
                      >
                        Ce champ est requis
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
                          <span>Ouvrir un compte client ?</span>
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
                        placeholder="Mot de passe"
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
                              Envoyer la livraison à une autre adresse ?
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
                            placeholder="Prénom *"
                            onChange={(e) => handleChange(e, 'other')}
                          />
                        </div>
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            required
                            className="form-control"
                            name="lname"
                            placeholder="Nom de famille *"
                            onChange={(e) => handleChange(e, 'other')}
                          />
                        </div>
                        <div className="form-group mb-3">
                          <input
                            className="form-control"
                            required
                            type="text"
                            name="cname"
                            placeholder="Nom de l'entreprise  (facultatif)"
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
                              <option value="">Pays / Région *</option>
                              <option value="AX">Aland Islands</option>
                              <option value="AF">Afghanistan</option>
                              <option value="AL">Albania</option>
                              <option value="DZ">Algeria</option>
                              <option value="AD">Andorra</option>
                              <option value="AO">Angola</option>
                              <option value="AI">Anguilla</option>
                              <option value="AQ">Antarctica</option>
                              <option value="AG">Antigua and Barbuda</option>
                              <option value="AR">Argentina</option>
                              <option value="AM">Armenia</option>
                              <option value="AW">Aruba</option>
                              <option value="AU">Australia</option>
                              <option value="AT">Austria</option>
                              <option value="AZ">Azerbaijan</option>
                              <option value="BS">Bahamas</option>
                              <option value="BH">Bahrain</option>
                              <option value="BD">Bangladesh</option>
                              <option value="BB">Barbados</option>
                              <option value="BY">Belarus</option>
                              <option value="PW">Belau</option>
                              <option value="BE">Belgium</option>
                              <option value="BZ">Belize</option>
                              <option value="BJ">Benin</option>
                              <option value="BM">Bermuda</option>
                              <option value="BT">Bhutan</option>
                              <option value="BO">Bolivia</option>
                              <option value="BQ">
                                Bonaire, Saint Eustatius and Saba
                              </option>
                              <option value="BA">Bosnia and Herzegovina</option>
                              <option value="BW">Botswana</option>
                              <option value="BV">Bouvet Island</option>
                              <option value="BR">Brazil</option>
                              <option value="IO">
                                British Indian Ocean Territory
                              </option>
                              <option value="VG">British Virgin Islands</option>
                              <option value="BN">Brunei</option>
                              <option value="BG">Bulgaria</option>
                              <option value="BF">Burkina Faso</option>
                              <option value="BI">Burundi</option>
                              <option value="KH">Cambodia</option>
                              <option value="CM">Cameroon</option>
                              <option value="CA">Canada</option>
                              <option value="CV">Cape Verde</option>
                              <option value="KY">Cayman Islands</option>
                              <option value="CF">
                                Central African Republic
                              </option>
                              <option value="TD">Chad</option>
                              <option value="CL">Chile</option>
                              <option value="CN">China</option>
                              <option value="CX">Christmas Island</option>
                              <option value="CC">
                                Cocos (Keeling) Islands
                              </option>
                              <option value="CO">Colombia</option>
                              <option value="KM">Comoros</option>
                              <option value="CG">Congo (Brazzaville)</option>
                              <option value="CD">Congo (Kinshasa)</option>
                              <option value="CK">Cook Islands</option>
                              <option value="CR">Costa Rica</option>
                              <option value="HR">Croatia</option>
                              <option value="CU">Cuba</option>
                              <option value="CW">CuraÇao</option>
                              <option value="CY">Cyprus</option>
                              <option value="CZ">Czech Republic</option>
                              <option value="DK">Denmark</option>
                              <option value="DJ">Djibouti</option>
                              <option value="DM">Dominica</option>
                              <option value="DO">Dominican Republic</option>
                              <option value="EC">Ecuador</option>
                              <option value="EG">Egypt</option>
                              <option value="SV">El Salvador</option>
                              <option value="GQ">Equatorial Guinea</option>
                              <option value="ER">Eritrea</option>
                              <option value="EE">Estonia</option>
                              <option value="ET">Ethiopia</option>
                              <option value="FK">Falkland Islands</option>
                              <option value="FO">Faroe Islands</option>
                              <option value="FJ">Fiji</option>
                              <option value="FI">Finland</option>
                              <option value="FR">France</option>
                              <option value="GF">French Guiana</option>
                              <option value="PF">French Polynesia</option>
                              <option value="TF">
                                French Southern Territories
                              </option>
                              <option value="GA">Gabon</option>
                              <option value="GM">Gambia</option>
                              <option value="GE">Georgia</option>
                              <option value="DE">Germany</option>
                              <option value="GH">Ghana</option>
                              <option value="GI">Gibraltar</option>
                              <option value="GR">Greece</option>
                              <option value="GL">Greenland</option>
                              <option value="GD">Grenada</option>
                              <option value="GP">Guadeloupe</option>
                              <option value="GT">Guatemala</option>
                              <option value="GG">Guernsey</option>
                              <option value="GN">Guinea</option>
                              <option value="GW">Guinea-Bissau</option>
                              <option value="GY">Guyana</option>
                              <option value="HT">Haiti</option>
                              <option value="HM">
                                Heard Island and McDonald Islands
                              </option>
                              <option value="HN">Honduras</option>
                              <option value="HK">Hong Kong</option>
                              <option value="HU">Hungary</option>
                              <option value="IS">Iceland</option>
                              <option value="IN">India</option>
                              <option value="ID">Indonesia</option>
                              <option value="IR">Iran</option>
                              <option value="IQ">Iraq</option>
                              <option value="IM">Isle of Man</option>
                              <option value="IL">Israel</option>
                              <option value="IT">Italy</option>
                              <option value="CI">Ivory Coast</option>
                              <option value="JM">Jamaica</option>
                              <option value="JP">Japan</option>
                              <option value="JE">Jersey</option>
                              <option value="JO">Jordan</option>
                              <option value="KZ">Kazakhstan</option>
                              <option value="KE">Kenya</option>
                              <option value="KI">Kiribati</option>
                              <option value="KW">Kuwait</option>
                              <option value="KG">Kyrgyzstan</option>
                              <option value="LA">Laos</option>
                              <option value="LV">Latvia</option>
                              <option value="LB">Lebanon</option>
                              <option value="LS">Lesotho</option>
                              <option value="LR">Liberia</option>
                              <option value="LY">Libya</option>
                              <option value="LI">Liechtenstein</option>
                              <option value="LT">Lithuania</option>
                              <option value="LU">Luxembourg</option>
                              <option value="MO">Macao S.A.R., China</option>
                              <option value="MK">Macedonia</option>
                              <option value="MG">Madagascar</option>
                              <option value="MW">Malawi</option>
                              <option value="MY">Malaysia</option>
                              <option value="MV">Maldives</option>
                              <option value="ML">Mali</option>
                              <option value="MT">Malta</option>
                              <option value="MH">Marshall Islands</option>
                              <option value="MQ">Martinique</option>
                              <option value="MR">Mauritania</option>
                              <option value="MU">Mauritius</option>
                              <option value="YT">Mayotte</option>
                              <option value="MX">Mexico</option>
                              <option value="FM">Micronesia</option>
                              <option value="MD">Moldova</option>
                              <option value="MC">Monaco</option>
                              <option value="MN">Mongolia</option>
                              <option value="ME">Montenegro</option>
                              <option value="MS">Montserrat</option>
                              <option value="MA">Morocco</option>
                              <option value="MZ">Mozambique</option>
                              <option value="MM">Myanmar</option>
                              <option value="NA">Namibia</option>
                              <option value="NR">Nauru</option>
                              <option value="NP">Nepal</option>
                              <option value="NL">Netherlands</option>
                              <option value="AN">Netherlands Antilles</option>
                              <option value="NC">New Caledonia</option>
                              <option value="NZ">New Zealand</option>
                              <option value="NI">Nicaragua</option>
                              <option value="NE">Niger</option>
                              <option value="NG">Nigeria</option>
                              <option value="NU">Niue</option>
                              <option value="NF">Norfolk Island</option>
                              <option value="KP">North Korea</option>
                              <option value="NO">Norway</option>
                              <option value="OM">Oman</option>
                              <option value="PK">Pakistan</option>
                              <option value="PS">Palestinian Territory</option>
                              <option value="PA">Panama</option>
                              <option value="PG">Papua New Guinea</option>
                              <option value="PY">Paraguay</option>
                              <option value="PE">Peru</option>
                              <option value="PH">Philippines</option>
                              <option value="PN">Pitcairn</option>
                              <option value="PL">Poland</option>
                              <option value="PT">Portugal</option>
                              <option value="QA">Qatar</option>
                              <option value="IE">Republic of Ireland</option>
                              <option value="RE">Reunion</option>
                              <option value="RO">Romania</option>
                              <option value="RU">Russia</option>
                              <option value="RW">Rwanda</option>
                              <option value="ST">São Tomé and Príncipe</option>
                              <option value="BL">Saint Barthélemy</option>
                              <option value="SH">Saint Helena</option>
                              <option value="KN">Saint Kitts and Nevis</option>
                              <option value="LC">Saint Lucia</option>
                              <option value="SX">
                                Saint Martin (Dutch part)
                              </option>
                              <option value="MF">
                                Saint Martin (French part)
                              </option>
                              <option value="PM">
                                Saint Pierre and Miquelon
                              </option>
                              <option value="VC">
                                Saint Vincent and the Grenadines
                              </option>
                              <option value="SM">San Marino</option>
                              <option value="SA">Saudi Arabia</option>
                              <option value="SN">Senegal</option>
                              <option value="RS">Serbia</option>
                              <option value="SC">Seychelles</option>
                              <option value="SL">Sierra Leone</option>
                              <option value="SG">Singapore</option>
                              <option value="SK">Slovakia</option>
                              <option value="SI">Slovenia</option>
                              <option value="SB">Solomon Islands</option>
                              <option value="SO">Somalia</option>
                              <option value="ZA">South Africa</option>
                              <option value="GS">
                                South Georgia/Sandwich Islands
                              </option>
                              <option value="KR">South Korea</option>
                              <option value="SS">South Sudan</option>
                              <option value="ES">Spain</option>
                              <option value="LK">Sri Lanka</option>
                              <option value="SD">Sudan</option>
                              <option value="SR">Suriname</option>
                              <option value="SJ">Svalbard and Jan Mayen</option>
                              <option value="SZ">Swaziland</option>
                              <option value="SE">Sweden</option>
                              <option value="CH">Switzerland</option>
                              <option value="SY">Syria</option>
                              <option value="TW">Taiwan</option>
                              <option value="TJ">Tajikistan</option>
                              <option value="TZ">Tanzania</option>
                              <option value="TH">Thailand</option>
                              <option value="TL">Timor-Leste</option>
                              <option value="TG">Togo</option>
                              <option value="TK">Tokelau</option>
                              <option value="TO">Tonga</option>
                              <option value="TT">Trinidad and Tobago</option>
                              <option value="TN">Tunisia</option>
                              <option value="TR">Turkey</option>
                              <option value="TM">Turkmenistan</option>
                              <option value="TC">
                                Turks and Caicos Islands
                              </option>
                              <option value="TV">Tuvalu</option>
                              <option value="UG">Uganda</option>
                              <option value="UA">Ukraine</option>
                              <option value="AE">United Arab Emirates</option>
                              <option value="GB">United Kingdom (UK)</option>
                              <option value="US">USA (US)</option>
                              <option value="UY">Uruguay</option>
                              <option value="UZ">Uzbekistan</option>
                              <option value="VU">Vanuatu</option>
                              <option value="VA">Vatican</option>
                              <option value="VE">Venezuela</option>
                              <option value="VN">Vietnam</option>
                              <option value="WF">Wallis and Futuna</option>
                              <option value="EH">Western Sahara</option>
                              <option value="WS">Western Samoa</option>

                              <option value="YE">Yemen</option>
                              <option value="ZM">Zambia</option>
                              <option value="ZW">Zimbabwe</option>
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
                            placeholder="Adresse ligne2 (optionnel)"
                            onChange={(e) => handleChange(e, 'other')}
                          />
                        </div>
                        <div className="form-group mb-3">
                          <input
                            className="form-control"
                            required
                            type="text"
                            name="city"
                            placeholder="City / Town *"
                            onChange={(e) => handleChange(e, 'other')}
                          />
                        </div>
                        <div className="form-group mb-3">
                          <input
                            className="form-control"
                            required
                            type="text"
                            name="state"
                            placeholder="Lieu / Ville * "
                            onChange={(e) => handleChange(e, 'other')}
                          />
                        </div>
                        <div className="form-group mb-3">
                          <input
                            className="form-control"
                            required
                            type="text"
                            name="zipcode"
                            placeholder="Code postal / ZIP *"
                            onChange={(e) => handleChange(e, 'other')}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="#">
                    <h4>Notes sur la commande (facultatif)</h4>
                  </div>
                  <div className="form-group mb-0">
                    <textarea
                      rows="5"
                      className="form-control"
                      placeholder="Ramarque sur votre commande"
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="order_review">
                    <div className="#">
                      <h4>Sélectionnez le mode de paiement</h4>
                    </div>
                    <div className="#">
                      {/* <p>Virement bancaire direct</p> */}
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
                            Transfert bancaire direct
                          </label>
                        </div>
                      </div>
                      <p style={{ marginTop: '15px' }}>
                        Virement directement sur notre compte bancaire. Veuillez
                        utiliser le numéro de commande comme motif de paiement.
                        Votre commande ne sera expédiée qu&apos;une fois
                        l&apos;argent reçu sur notre compte.
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

                {/* <div className="form-group mb-3">
                  <div
                    className="chek-form"
                    onClick={() => setIsCguCheck(!isCguCheck)}
                  >
                    <div className="custome-checkbox">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="checkbox"
                        id="createaccount"
                        checked={isCguCheck}
                        onChange={() => setIsCguCheck(!isCguCheck)}
                        
                      />

                      <label className="form-check-label label_info">
                        <span style={{ fontSize: '10px' }}>
                          En passant votre commande, vous acceptez nos
                          conditions générales et notre politique
                          d&apos;annulation .
                        </span>
                      </label>
                    </div>
                  </div>
                </div> */}

                <div className="row">
                  <div className="order_review">
                    <div className="#">
                      <h4>Vos commandes</h4>
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
                    {/* <div className="payment_method">
                      <div className="heading_s1">
                        <h4>Payement</h4>
                      </div>
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
                            Transfert Bancaire Direct
                          </label>
                          <p data-method="option3" className="payment-text">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered
                            alteration.{' '}
                          </p>
                        </div>
                        <div className="custome-radio">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="payment_option"
                            id="exampleRadios4"
                            value="option4"
                          />
                          <label className="form-check-label">
                            Check Payment
                          </label>
                          <p data-method="option4" className="payment-text">
                            Please send your cheque to Store Name, Store Street,
                            Store Town, Store State / County, Store Postcode.
                          </p>
                        </div>
                        <div className="custome-radio">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="payment_option"
                            id="exampleRadios5"
                            value="option5"
                          />
                          <label className="form-check-label">Paypal</label>
                          <p data-method="option5" className="payment-text">
                            Pay via PayPal; you can pay with your credit card if
                            you don&apos;t have a PayPal account.
                          </p>
                        </div>
                      </div>
                    </div> */}
                    <a
                      href="order-completed"
                      className="btn btn-fill-out btn-block"
                      onClick={handleSubmit}
                    >
                      Acheter maintenant
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
