import NewLetters from '@/components/NewLetters'

export default function Pr() {
  return (
    <>
      {/* <!-- START SECTION BREADCRUMB --> */}
      <div className="breadcrumb_section bg_gray page-title-mini">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="page-title">
                <h1 style={{ textTransform: 'none' }}>
                  Rückerstattungsrichtlinie
                </h1>
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
                <li className="breadcrumb-item active">Richtlinie</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- END SECTION BREADCRUMB --> */}

      <div className="main_content">
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="term_conditions">
                  <p>
                    Wir setzen uns dafür ein, unseren Kunden ein angenehmes
                    Einkaufserlebnis zu bieten. Sollte aus irgendeinem Grund
                    Ihre Zufriedenheit mit Ihrem Kauf nicht erfüllt sein, bieten
                    wir eine klare und faire Rückerstattungsrichtlinie an. Diese
                    Richtlinie beschreibt die Bedingungen und das Verfahren zur
                    Beantragung einer Rückerstattung.
                  </p>

                  <br />
                  <h6> Rückerstattungsbedingungen</h6>
                  <p>
                    Sie können eine Rückerstattung beantragen, wenn Ihr Kauf die
                    folgenden Kriterien erfüllt:
                  </p>
                  <ul>
                    <li>
                      <strong>Defekter oder beschädigter Artikel:</strong> Wenn
                      der Artikel, den Sie erhalten haben, defekt, beschädigt
                      oder nicht der Beschreibung auf unserer Website
                      entspricht.
                    </li>
                    <li>
                      <strong>Bestellfehler:</strong> Wenn Sie einen falschen
                      Artikel erhalten haben.
                    </li>
                    <li>
                      <strong>Rücksendung innerhalb der Frist:</strong> Wir
                      akzeptieren Rückerstattungsanfragen innerhalb von 14 Tagen
                      nach Erhalt des Artikels.
                    </li>
                  </ul>

                  <br />
                  <h6>Prozess der Rückerstattungsanfrage</h6>
                  <p>
                    Wenn Sie für eine Rückerstattung berechtigt sind, befolgen
                    Sie bitte die folgenden Schritte:
                  </p>

                  <ol>
                    <li>
                      <strong>Kontaktieren Sie unseren Kundenservice:</strong>{' '}
                      Senden Sie uns eine E-Mail an{' '}
                      {import.meta.env.VITE_SHOP_EMAIL} mit Ihrer Bestellnummer,
                      den Details des betroffenen Artikels und einem Foto, wenn
                      der Artikel beschädigt oder defekt ist.
                    </li>
                    <li>
                      <strong>Überprüfung der Anfrage:</strong> Wir werden Ihre
                      Anfrage bearbeiten und Ihnen innerhalb von 2 bis 5
                      Werktagen eine Antwort mit den Anweisungen zur Rücksendung
                      des Artikels geben, falls erforderlich.
                    </li>
                    <li>
                      <strong>Artikel zurücksenden:</strong> Wenn der Artikel
                      zurückgesendet werden muss, senden Sie ihn bitte an die
                      folgende Adresse: {import.meta.env.VITE_SHOP_LOCALISATION}
                    </li>
                    <p>
                      Bitte verwenden Sie einen Nachverfolgungsdienst für die
                      Rücksendung des Artikels, um einen Nachweis über die
                      Lieferung zu haben.
                    </p>
                    <li>
                      <strong>Erhalten Sie Ihre Rückerstattung:</strong> Nachdem
                      der Artikel zurückgesendet und geprüft wurde, erfolgt Ihre
                      Rückerstattung innerhalb von 7 bis 10 Werktagen. Die
                      Rückerstattung wird auf die ursprünglich verwendete
                      Zahlungsmethode vorgenommen.
                    </li>
                  </ol>

                  <br />
                  <h6>Rücksendekosten</h6>
                  <p>
                    Die Rücksendekosten gehen zu Ihren Lasten, es sei denn, der
                    Artikel ist defekt oder wir haben ein falsches Produkt
                    geliefert. Wenn das Produkt nicht korrekt oder defekt ist,
                    übernehmen wir die Rücksendekosten.
                  </p>

                  <br />
                  <h6>Rücksendungen im Geschäft</h6>
                  <p>
                    Wenn Sie einen Kauf in einem unserer physischen Geschäfte
                    getätigt haben, können Sie den Artikel im selben Geschäft
                    zurückgeben, unter den Bedingungen der Rücksendung im
                    Geschäft. Bitte konsultieren Sie unsere Rückgabebedingungen
                    im Geschäft auf unserer Website oder kontaktieren Sie unser
                    Team für weitere Details.
                  </p>

                  <br />
                  <h6>Verarbeitungszeit für Rücksendungen</h6>
                  <p>
                    Sobald wir Ihre Rücksendung erhalten haben, kann die
                    Bearbeitung Ihrer Anfrage und die Rückerstattung bis zu 7
                    Werktage in Anspruch nehmen. Wir senden Ihnen eine
                    Bestätigungs-E-Mail, sobald die Rückerstattung vorgenommen
                    wurde.
                  </p>

                  <br />
                  <h6>Weitere Fragen</h6>
                  <p>
                    Wenn Sie Fragen zu unserer Rückerstattungsrichtlinie haben
                    oder weitere Unterstützung benötigen, können Sie uns unter
                    folgender Adresse kontaktieren:{' '}
                    {import.meta.env.VITE_SHOP_EMAIL}.
                  </p>

                  <span>Letzte Aktualisierung: 05.01.2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <NewLetters />
      </div>
    </>
  )
}
