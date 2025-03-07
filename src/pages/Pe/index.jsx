import NewLetters from '@/components/NewLetters'

export default function Pe() {
  return (
    <>
      {/* <!-- START SECTION BREADCRUMB --> */}
      <div className="breadcrumb_section bg_gray page-title-mini">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="page-title">
                <h1 style={{ textTransform: 'none' }}>Versandrichtlinie</h1>
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
                    Wir bemühen uns, alle Bestellungen so schnell wie möglich zu
                    bearbeiten und zu versenden, um ein optimales Kundenerlebnis
                    zu gewährleisten. Diese Richtlinie beschreibt unsere
                    Versandpraktiken, einschließlich der Versandzeiten, Gebühren
                    und verfügbaren Lieferoptionen.
                  </p>

                  <br />
                  <h6>Versandzeiten</h6>
                  <p>
                    Wir verpflichten uns, alle Bestellungen innerhalb von 0 bis
                    3 Werktagen nach Erhalt Ihrer Bestellung und Bestätigung
                    Ihrer Zahlung zu versenden.
                  </p>
                  <ul>
                    <li>
                      <strong>Bestellungen vor 12:00 Uhr (Ortszeit):</strong>{' '}
                      Bestellungen werden in der Regel noch am selben Tag
                      bearbeitet und versendet.
                    </li>
                    <li>
                      <strong>Bestellungen nach 12:00 Uhr (Ortszeit):</strong>{' '}
                      Bestellungen werden am nächsten Werktag bearbeitet.
                    </li>
                    <li>
                      <strong>Wochenenden und Feiertage:</strong> Bestellungen,
                      die am Wochenende oder an Feiertagen aufgegeben werden,
                      werden am nächsten Werktag bearbeitet.
                    </li>
                  </ul>

                  <br />
                  <h6>Liefermethoden</h6>
                  <p>
                    Wir bieten verschiedene Lieferoptionen, abhängig von Ihrem
                    Standort. Die verfügbaren Optionen werden beim Bezahlvorgang
                    angezeigt.
                  </p>

                  <ul>
                    <li>
                      <strong>Standardlieferung:</strong> Lieferung innerhalb
                      von 2 bis 3 Werktagen.
                    </li>
                    <li>
                      <strong>Expresslieferung:</strong> Lieferung innerhalb von
                      1 bis 2 Werktagen (verfügbar für bestimmte Regionen).
                    </li>
                    <li>
                      <strong>Kostenlose Lieferung:</strong> Für bestimmte
                      Bestellungen oder bei einem Mindestbestellwert kann die
                      Lieferung kostenlos sein. Diese Option wird während des
                      Bestellvorgangs angeboten.
                    </li>
                  </ul>

                  <br />
                  <h6>Versandkosten</h6>
                  <p>
                    Die Versandkosten variieren je nach gewählter Liefermethode,
                    Zielort und Gewicht der Bestellung. Die genauen Kosten
                    werden während des Bezahlvorgangs angezeigt.
                  </p>

                  <ul>
                    <li>
                      <strong>Standardlieferung:</strong> [Standardtarif]
                    </li>
                    <li>
                      <strong>Expresslieferung:</strong> [Express-Tarif]
                    </li>
                    <li>
                      <strong>Kostenlose Lieferung:</strong> Verfügbar für
                      Bestellungen über [Mindestbetrag] (unter bestimmten
                      Bedingungen).
                    </li>
                  </ul>

                  <br />
                  <h6>Bestellverfolgung</h6>
                  <p>
                    Sobald Ihre Bestellung versendet wurde, erhalten Sie eine
                    E-Mail mit einer Bestellbestätigung und einer
                    Sendungsverfolgungsnummer, mit der Sie den Status der
                    Lieferung verfolgen können. Sie können den Status Ihrer
                    Bestellung auch im Abschnitt „Meine Bestellungen“ in Ihrem
                    Konto auf unserer Website einsehen.
                  </p>

                  <br />
                  <h6>Versandverzögerungen</h6>
                  <p>
                    Obwohl wir uns bemühen, die Versandzeiten einzuhalten,
                    können Verzögerungen aufgrund externer Faktoren wie extremen
                    Wetterbedingungen, Streiks oder logistischen Problemen
                    auftreten. Sollte es zu einer Verzögerung kommen, werden wir
                    Sie so schnell wie möglich darüber informieren und alles
                    tun, um das Problem zu lösen.
                  </p>

                  <br />
                  <h6>Lieferadresse</h6>
                  <p>
                    Bitte stellen Sie sicher, dass die bei der Bestellung
                    angegebene Lieferadresse korrekt und vollständig ist. Wir
                    sind nicht verantwortlich für Verzögerungen oder verlorene
                    Pakete aufgrund unvollständiger oder falscher Informationen,
                    die bei der Bestellung angegeben wurden.
                  </p>

                  <br />
                  <h6>Probleme mit dem Versand</h6>
                  <p>
                    Wenn Sie Bedenken bezüglich des Versands Ihrer Bestellung
                    haben, wie z. B. Verzögerungen oder fehlende Artikel,
                    kontaktieren Sie uns bitte so schnell wie möglich unter{' '}
                    {import.meta.env.VITE_SHOP_EMAIL}. Wir werden unser Bestes
                    tun, um das Problem schnell zu lösen.
                  </p>

                  <br />
                  <h6>Änderungen der Lieferadresse</h6>
                  <p>
                    Wenn Sie die Lieferadresse nach der Bestellung ändern
                    müssen, kontaktieren Sie uns bitte so schnell wie möglich.
                    Wir werden unser Bestes tun, um die Änderung vorzunehmen,
                    bevor Ihre Bestellung versendet wird.
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
