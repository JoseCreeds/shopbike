// import { useState, useEffect } from 'react'
import NewLetters from '@/components/NewLetters'
import MapComponent from '@/components/MapComponent'
import Loader from '@/utils/loader'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendMessage } from '@/store/slices/orderSlice'
import { toast } from 'react-toastify'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const dispatch = useDispatch()
  const { loading, message, error } = useSelector((state) => state.order)

  if (message) toast.success(message)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(sendMessage(formData)).then((result) => {
      if (result.type === 'order/sendMessage/fulfilled') {
        toast.success('Nachricht erfolgreich gesendet!')
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        })
      } else {
        toast.error(error)
      }
    })
  }

  return (
    <>
      <Loader />

      <div className="breadcrumb_section bg_gray page-title-mini">
        <div className="container">
          {/* <!-- STRART CONTAINER --> */}
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="page-title">
                <h1>Kontakt</h1>
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
                <li className="breadcrumb-item active">Kontakt</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- START MAIN CONTENT --> */}
      <div className="main_content">
        <h3 style={{ textAlign: 'center', marginTop: '25px' }}>
          Haben Sie eine Frage zu unseren Fahrrädern oder interessieren Sie sich
          für ein Konigs-Fahrrad?
        </h3>
        <h3
          style={{
            textAlign: 'center',
            marginTop: '15px',
            marginBottom: '-10px',
          }}
        >
          Oder haben Sie Vorschläge, Lob oder Kritik? Dann schreiben Sie uns!
        </h3>

        <div className="section pb_70">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-md-6">
                <div className="contact_wrap contact_style3">
                  <div className="contact_icon">
                    <i className="linearicons-map2"></i>
                  </div>
                  <div className="contact_text">
                    <span>Adresse</span>
                    <p>{import.meta.env.VITE_SHOP_LOCALISATION}</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="contact_wrap contact_style3">
                  <div className="contact_icon">
                    <i className="linearicons-envelope-open"></i>
                  </div>
                  <div className="contact_text">
                    <span>Email-Adresse</span>
                    <a href="mailto:info@sitename.com">
                      {import.meta.env.VITE_SHOP_EMAIL}
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="contact_wrap contact_style3">
                  <div className="contact_icon">
                    <i className="linearicons-tablet2"></i>
                  </div>
                  <div className="contact_text">
                    <span>Telefon</span>
                    <p>{import.meta.env.VITE_SHOP_PHONE}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section pt-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="heading_s1">
                  <h2>Schicken Sie uns Ihr Feedback</h2>
                </div>
                <p className="leads">
                  Oder senden Sie uns einfach eine Nachricht über unser
                  Kontaktformular: Wir antworten in der Regel innerhalb von 24
                  Stunden. Nach Feiertagen und während hoher Nachfrage kann es
                  einige Tage dauern, bis eine Antwort eintrifft.
                </p>
                <div className="field_form">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="form-group col-md-6 mb-3">
                        <input
                          required
                          placeholder="Vorname und Nachname *"
                          id="first-name"
                          className="form-control"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group col-md-6 mb-3">
                        <input
                          required
                          placeholder="E-Mail *"
                          id="email"
                          className="form-control"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group col-md-6 mb-3">
                        <input
                          required
                          placeholder="Telefon *"
                          id="phone"
                          className="form-control"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group col-md-6 mb-3">
                        <input
                          placeholder="Betreff"
                          id="subject"
                          className="form-control"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group col-md-12 mb-3">
                        <textarea
                          required
                          placeholder="Nachricht *"
                          id="description"
                          className="form-control"
                          name="message"
                          rows="4"
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                      <div className="col-md-12 mb-3">
                        <button
                          type="submit"
                          title="Senden Sie Ihre Nachricht!"
                          className="btn btn-fill-out"
                          id="submitButton"
                          name="submit"
                          value="Submit"
                          disabled={loading}
                        >
                          {loading ? 'Wird gesendet...' : 'Nachricht senden'}
                        </button>
                      </div>
                      <div className="col-md-12 mb-3">
                        <div
                          id="alert-msg"
                          className="alert-msg text-center"
                        ></div>
                      </div>
                      {/* {message && (
                <div className="col-md-12 mb-3">
                  <div className="alert-msg text-center">{message}</div>
                </div>
              )}
              {error && (
                <div className="col-md-12 mb-3">
                  <div className="alert-msg text-center text-danger">
                    {error}
                  </div>
                </div>
              )} */}
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-lg-6 pt-2 pt-lg-0 mt-4 mt-lg-0">
                {/* <div
          id="map"
          className="contact_map2"
          data-zoom="12"
          data-latitude="40.680"
          data-longitude="-73.945"
          data-icon="assets/images/marker.png"
        ></div> */}
                <MapComponent latitude={40.68} longitude={-73.945} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <NewLetters />
    </>
  )
}
