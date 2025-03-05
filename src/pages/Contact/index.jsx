// import { useState, useEffect } from 'react'
import NewLetters from '@/components/NewLetters'
import MapComponent from '@/components/MapComponent'
import Loader from '@/utils/loader'

export default function Contact() {
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
                <h1>Contact</h1>
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
                <li className="breadcrumb-item active">Contact</li>
              </ol>
            </div>
          </div>
        </div>
        {/* <!-- END CONTAINER--> */}
      </div>
      {/* <!-- END SECTION BREADCRUMB --> */}

      {/* <!-- START MAIN CONTENT --> */}
      <div className="main_content">
        <h3 style={{ textAlign: 'center', marginTop: '25px' }}>
          Vous avez une question sur nos vélos ou êtes intéressé par un vélo
          Konigs ?
        </h3>
        <h3
          style={{
            textAlign: 'center',
            marginTop: '15px',
            marginBottom: '-10px',
          }}
        >
          Ou avez-vous des suggestions, des éloges ou des critiques ? Alors
          écrivez-nous !
        </h3>
        {/* <!-- START SECTION CONTACT --> */}
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
                    <p>123 Street, Old Trafford, London, UK</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="contact_wrap contact_style3">
                  <div className="contact_icon">
                    <i className="linearicons-envelope-open"></i>
                  </div>
                  <div className="contact_text">
                    <span>Adresse Email</span>
                    <a href="mailto:info@sitename.com">info@yourmail.com </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="contact_wrap contact_style3">
                  <div className="contact_icon">
                    <i className="linearicons-tablet2"></i>
                  </div>
                  <div className="contact_text">
                    <span>Téléphone</span>
                    <p>+ 457 789 789 65</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- END SECTION CONTACT --> */}

        {/* <!-- START SECTION CONTACT --> */}
        <div className="section pt-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="heading_s1">
                  <h2>Envoyez vos commentaires</h2>
                </div>
                <p className="leads">
                  Ou envoyez-nous simplement un message via notre formulaire de
                  contact : nous répondons généralement dans les 24 heures.
                  Après les jours fériés et pendant les périodes de forte
                  demande, il peut s&apos;écouler quelques jours avant
                  qu&apos;une réponse soit reçue.
                </p>
                <div className="field_form">
                  <form method="post" name="enq">
                    <div className="row">
                      <div className="form-group col-md-6 mb-3">
                        <input
                          required
                          placeholder="Nom et Prénom *"
                          id="first-name"
                          className="form-control"
                          name="name"
                          type="text"
                        />
                      </div>
                      <div className="form-group col-md-6 mb-3">
                        <input
                          required
                          placeholder="Email *"
                          id="email"
                          className="form-control"
                          name="email"
                          type="email"
                        />
                      </div>
                      <div className="form-group col-md-6 mb-3">
                        <input
                          required
                          placeholder="Téléphone. *"
                          id="phone"
                          className="form-control"
                          name="phone"
                        />
                      </div>
                      <div className="form-group col-md-6 mb-3">
                        <input
                          placeholder="Sujet"
                          id="subject"
                          className="form-control"
                          name="subject"
                        />
                      </div>
                      <div className="form-group col-md-12 mb-3">
                        <textarea
                          required
                          placeholder="Message *"
                          id="description"
                          className="form-control"
                          name="message"
                          rows="4"
                        ></textarea>
                      </div>
                      <div className="col-md-12 mb-3">
                        <button
                          type="submit"
                          title="Submit Your Message!"
                          className="btn btn-fill-out"
                          id="submitButton"
                          name="submit"
                          value="Submit"
                        >
                          Envoyer Message
                        </button>
                      </div>
                      <div className="col-md-12 mb-3">
                        <div
                          id="alert-msg"
                          className="alert-msg text-center"
                        ></div>
                      </div>
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
        {/* <!-- END SECTION CONTACT --> */}
      </div>

      <NewLetters />
    </>
  )
}
