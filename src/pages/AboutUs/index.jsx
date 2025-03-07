import About from '@/assets/images/about.webp'
import About1 from '@/assets/images/about1.jpg'
import About2 from '@/assets/images/about2.jpg'
import NewLetters from '@/components/NewLetters'
import Loader from '@/utils/loader'

export default function AboutUs() {
  return (
    <>
      <Loader />
      {/* <!-- START SECTION BREADCRUMB --> */}
      <div
        className="breadcrumb_section bg_gray page-title-mini"
        // style={{ backgroundImage: `url(${About1})` }}
      >
        <div className="container">
          {/* <!-- STRART CONTAINER --> */}
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="page-title">
                <h1>Über uns</h1>
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
                <li className="breadcrumb-item active">Über uns</li>
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
            <img
              src={About}
              alt="about"
              style={{ height: '60vh', width: 'inherit' }}
            />

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <h5 style={{ textTransform: 'uppercase' }}>Über uns</h5>

              <p>
                <strong>{import.meta.env.VITE_SHOP_NAME}</strong> ist ein
                spezialisierter Fahrradhändler, der Ihnen{' '}
                <strong>
                  maßgeschneiderte Beratung, freundlichen Service und Wartung
                </strong>{' '}
                bietet und{' '}
                <strong>
                  Ihre Fahrräder in seiner eigenen Fahrradwerkstatt pflegt
                </strong>{' '}
                .
              </p>
              <p>
                Dies sind die Grundpfeiler unseres Unternehmens. Eine{' '}
                <strong>große Auswahl an Markenfahrrädern</strong> ist in
                unserem Fahrradgeschäft verfügbar.
              </p>
              <p>
                Zweiräder bringen Freude und Unterhaltung und tragen
                gleichzeitig zu einer gesunden körperlichen Aktivität bei. Unser
                Ziel ist es, Ihnen unsere Begeisterung für das Radfahren und die
                Bewegung zu vermitteln. Daher bieten wir eine umfassende und
                professionelle Beratung an, integrieren unser{' '}
                <strong>Wissen über die neuesten Trends</strong> im Bereich
                Fahrräder und Zubehör in die Beratung und erläutern die Vor- und
                Nachteile bestimmter Modelle. So begleiten wir Sie bei der
                Auswahl des passenden Fahrzeugs.
              </p>

              <p>
                Unser Geschäft und unsere Werkstatt beschäftigen ausschließlich
                Fachleute, die Ihnen einen <strong>kompetenten Service</strong>{' '}
                bieten können. Spezialisierte Mechaniker bringen Ihr Fahrrad
                wieder auf die Straße, führen Reparaturen durch und unterstützen
                Sie bei eventuellen Problemen. Unsere Beratung endet nicht nach
                dem Kauf – wir helfen Ihnen auch danach jederzeit gerne weiter.
              </p>
            </div>

            <div style={{ marginTop: '100px', textTransform: 'uppercase' }}>
              <h4>UNSER SERVICE FÜR SIE</h4>
              <h4>KOMPETENTE BERATUNG</h4>
            </div>

            <div
              style={{ borderTop: '1px solid black', margin: '40px 26%' }}
            ></div>

            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="about_img scene mb-4 mb-lg-0">
                  <img src={About1} alt="about_img" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="heading_s1">
                  <h3>
                    Dank professioneller Beratung finden Sie das passende
                    Fahrrad
                  </h3>
                </div>
                <p style={{ fontSize: '14px' }}>
                  Wir bieten unseren Kunden eine Auswahl an erstklassigen Marken
                  und Modellen, kombiniert mit der fundierten Beratung unseres
                  speziell geschulten Personals. Dies gibt Ihnen alle wichtigen
                  Informationen über die Feinheiten des dynamischen
                  E-Bike-Marktes, die Sie für eine wirklich fundierte
                  Kaufentscheidung benötigen.
                </p>
              </div>
            </div>

            <div
              style={{ borderTop: '1px solid black', margin: '40px auto' }}
            ></div>

            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="heading_s1">
                  <h3>Zertifizierter Service in der Qualitätswerkstatt</h3>
                </div>
                <p style={{ fontSize: '14px' }}>
                  Ebenso wie sich die Fahrradtechnologie in den letzten Jahren
                  rasant weiterentwickelt hat, sind auch die Anforderungen an
                  die Werkstatt gestiegen. Als stolze Inhaber des Zertifikats
                  „Qualitätswerkstatt“ arbeiten wir nach höchsten Standards und
                  bieten unseren Kunden maximale Sicherheit und
                  außergewöhnlichen Service in allen Werkstattleistungen.
                </p>
                <p style={{ fontSize: '14px' }}>
                  Um den hohen Anforderungen und Wünschen gerecht zu werden,
                  haben wir uns strengen Richtlinien unterworfen, die regelmäßig
                  vom TÜV Nord überprüft werden. Neben unangekündigten Prüfungen
                  umfasst dies die kontinuierliche Weiterbildung unserer
                  Mitarbeiter und den Austausch innerhalb des größten
                  europäischen Netzwerks von 960 unabhängigen Fahrradhändlern.
                  So gewährleisten wir stets aktuelles Wissen über die neuesten
                  Entwicklungen in der Fahrradtechnologie sowie eine
                  kontinuierliche Optimierung der Werkstattprozesse.
                </p>
              </div>
              <div className="col-lg-6">
                <div className="about_img scene mb-4 mb-lg-0">
                  <img src={About2} alt="about_img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- END MAIN CONTENT --> */}

      <NewLetters />
    </>
  )
}
