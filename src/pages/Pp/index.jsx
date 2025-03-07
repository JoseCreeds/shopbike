import NewLetters from '@/components/NewLetters'

export default function Pp() {
  return (
    <>
      {/* <!-- START SECTION BREADCRUMB --> */}
      <div className="breadcrumb_section bg_gray page-title-mini">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="page-title">
                <h1 style={{ textTransform: 'none' }}>Zahlungsrichtlinie</h1>
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
                    Wir bieten unseren Kunden eine sichere Zahlungsmethode per
                    Banküberweisung an. Diese Richtlinie beschreibt die
                    Verfahren und Anweisungen im Zusammenhang mit der Bezahlung
                    Ihrer Bestellungen auf unserer Website.
                  </p>

                  <br />
                  <h6>Zahlungsmethode: Banküberweisung</h6>
                  <p>
                    Nachdem Sie Ihre Bestellung auf unserer Website bestätigt
                    haben, erhalten Sie die erforderlichen Informationen, um die
                    Zahlung per Banküberweisung vorzunehmen. Diese
                    Zahlungsmethode ist nur für bestätigte Bestellungen
                    verfügbar.
                  </p>
                  <h6>Zahlungsdetails:</h6>
                  <ul>
                    <li>
                      <strong>Bestellnummer:</strong> Sie müssen Ihre
                      Bestellnummer als Zahlungsgrund angeben.
                    </li>
                    <li>
                      <strong>Zahlungsadresse:</strong> Die
                      Zahlungsinformationen (Bankname, Kontonummer, IBAN usw.)
                      werden auf der Bestellbestätigungsseite angezeigt und an
                      die E-Mail-Adresse gesendet, die Sie bei der Bestellung
                      angegeben haben.
                    </li>
                  </ul>

                  <br />
                  <h6>Zahlungsanweisungen</h6>
                  <ul>
                    <li>
                      Zahlungsgrund: Bei der Durchführung der Banküberweisung
                      müssen Sie unbedingt genau die Bestellnummer als
                      Zahlungsgrund angeben. Dies ermöglicht es uns, Ihre
                      Zahlung mit Ihrer Bestellung zu verknüpfen.
                    </li>
                    <li>
                      Zusätzlicher Tipp: Wir empfehlen Ihnen, einen
                      Zahlungsnachweis (Kontoauszug, Screenshot usw.)
                      aufzubewahren und diesen an unseren Kundenservice per
                      E-Mail an {import.meta.env.VITE_SHOP_EMAIL} zu senden.
                      Dies ermöglicht es uns, den Zahlungseingang schnell zu
                      bestätigen und mit der Bearbeitung Ihrer Bestellung
                      fortzufahren.
                    </li>
                  </ul>

                  <br />
                  <h6>Bearbeitungszeit</h6>
                  <p>
                    Die Bearbeitung Ihrer Bestellung beginnt, sobald wir die
                    vollständige Zahlung erhalten haben. Wir bitten Sie, die
                    Überweisung automatisch vorzunehmen, nachdem Sie Ihre
                    Bestellung bestätigt haben. Wenn wir die Zahlung nicht
                    erhalten, wird Ihre Bestellung automatisch storniert.
                  </p>

                  <br />
                  <h6>Zahlungsbestätigung</h6>
                  <p>
                    Sobald wir Ihre Zahlung erhalten haben, senden wir Ihnen
                    eine Bestätigungs-E-Mail, um Sie darüber zu informieren,
                    dass Ihre Bestellung bearbeitet wird und bald versendet
                    wird. Die Versandzeit richtet sich nach den Bedingungen
                    unserer Versandrichtlinie.
                  </p>

                  <br />
                  <h6>Rücksendungen und Rückerstattungen</h6>
                  <p>
                    Bei einer Stornierung der Bestellung oder einer
                    Rückerstattungsanfrage wird das Rückerstattungsverfahren
                    bearbeitet, sobald die Bestellung bestätigt und versendet
                    wurde und die Rücksendungsanfrage eingegangen ist, gemäß
                    unserer <strong>Rückerstattungsrichtlinie.</strong>
                  </p>

                  <br />
                  <h6>Sicherheit der Zahlungen</h6>
                  <p>
                    Wir verwenden fortschrittliche Sicherheitsprotokolle, um
                    sicherzustellen, dass Ihre Bank- und persönlichen Daten
                    vertraulich und sicher behandelt werden.
                  </p>

                  <br />
                  <h6>Probleme bei der Zahlung</h6>
                  <p>
                    Wenn Sie auf ein Problem bei Ihrer Banküberweisung stoßen
                    oder Fragen zu Ihrer Zahlung haben, kontaktieren Sie uns
                    bitte sofort unter {import.meta.env.VITE_SHOP_EMAIL}. Wir
                    werden unser Bestes tun, um das Problem schnell zu lösen.
                  </p>

                  <span>Letzte Aktualisierung: 05/01/2024</span>
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
