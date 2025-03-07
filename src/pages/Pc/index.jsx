import NewLetters from '@/components/NewLetters'

export default function Pc() {
  return (
    <>
      {/* <!-- START SECTION BREADCRUMB --> */}
      <div className="breadcrumb_section bg_gray page-title-mini">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="page-title">
                <h1 style={{ textTransform: 'none' }}>Datenschutzrichtlinie</h1>
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
                <li className="breadcrumb-item active">Datenschutz</li>
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
              <div className="col-12">
                <div className="term_conditions">
                  <h6>Unsere Allgemeinen Geschäftsbedingungen</h6>
                  <p>
                    Willkommen auf unserer Online-Verkaufswebsite. Wir
                    verpflichten uns, Ihre Privatsphäre zu schützen und Ihre
                    Datenschutzrechte zu wahren. Diese Datenschutzrichtlinie
                    beschreibt, wie wir Ihre persönlichen Informationen sammeln,
                    verwenden, teilen und schützen, wenn Sie unsere Website
                    nutzen.
                  </p>
                  <p>
                    Durch die Nutzung unserer Website stimmen Sie der Sammlung
                    und Nutzung Ihrer Informationen gemäß dieser Richtlinie zu.
                  </p>
                  <br />
                  <h6>Gesammelte Informationen</h6>
                  <p>
                    Wir sammeln persönliche Informationen, wenn Sie einen Kauf
                    tätigen, sich auf unserer Website anmelden, unseren
                    Newsletter abonnieren oder auf andere Weise mit unserem
                    Service interagieren.
                  </p>
                  <p>
                    Die Arten von Informationen, die wir sammeln, umfassen unter
                    anderem:
                  </p>
                  <ol>
                    <li>
                      <strong>
                        Persönlich identifizierbare Informationen:
                      </strong>{' '}
                      Name, E-Mail-Adresse, Postadresse, Telefonnummer,
                      Zahlungsinformationen.
                    </li>
                    <li>
                      <strong>Bestellinformationen:</strong> Gekaufte Produkte,
                      Bestellbetrag, Datum und Uhrzeit der Bestellung.
                    </li>
                    <li>
                      <strong>Technische Informationen:</strong> IP-Adresse,
                      Browsertyp, Betriebssystem, besuchte Seiten und andere
                      Informationen zu Ihrer Interaktion mit unserer Website.
                    </li>
                  </ol>

                  <br />
                  <h6>Wie wir Ihre Informationen verwenden</h6>
                  <p>Wir verwenden Ihre persönlichen Informationen für:</p>

                  <ul>
                    <li>Die Bearbeitung und den Versand Ihrer Bestellungen.</li>
                    <li>
                      Ihnen Informationen zu Ihrer Bestellung zu senden
                      (Bestätigung, Verfolgung).
                    </li>
                    <li>
                      Sie zu kontaktieren, um Sonderangebote, Aktionen und
                      Updates zu unserer Website zu senden (sofern Sie dem
                      Erhalt von Marketingkommunikationen zugestimmt haben).
                    </li>
                    <li>
                      Die Benutzererfahrung auf unserer Website zu verbessern.
                    </li>
                    <li>
                      Die Sicherheit unserer Website und Ihrer Informationen zu
                      gewährleisten.
                    </li>
                  </ul>

                  <br />
                  <h6>Wie wir Ihre Informationen schützen</h6>
                  <p>
                    Wir ergreifen geeignete technische und organisatorische
                    Sicherheitsmaßnahmen, um Ihre persönlichen Informationen vor
                    unbefugtem Zugriff, Offenlegung, Änderung oder Zerstörung zu
                    schützen. Dies umfasst die Verwendung von
                    Sicherheitsprotokollen für die Zahlungsabwicklung (z. B.
                    SSL-Verschlüsselung für Transaktionen).
                  </p>

                  <br />
                  <h6>Informationsweitergabe</h6>
                  <p>
                    Wir verkaufen oder vermieten Ihre persönlichen Informationen
                    nicht an Dritte. Wir können jedoch Informationen mit
                    folgenden Stellen teilen:
                  </p>
                  <ul>
                    <li>
                      <strong>Unsere Dienstleister:</strong> Diese bearbeiten
                      Zahlungen, sorgen für die Lieferung von Produkten oder
                      helfen uns bei der Verwaltung unserer Website.
                    </li>
                    <li>
                      <strong>Rechtliche Behörden:</strong> Wenn wir gesetzlich
                      dazu verpflichtet sind, dies zu tun, um Gesetze,
                      Vorschriften oder gerichtliche Verfahren zu erfüllen.
                    </li>
                  </ul>

                  <br />
                  <h6>Ihre Datenschutzrechte</h6>
                  <p>Gemäß den geltenden Gesetzen haben Sie das Recht,:</p>
                  <ul>
                    <li>
                      Auf Ihre persönlichen Informationen zuzugreifen, die wir
                      besitzen.
                    </li>
                    <li>
                      Ihre persönlichen Informationen zu korrigieren oder zu
                      aktualisieren.
                    </li>
                    <li>
                      Die Löschung Ihrer persönlichen Informationen zu
                      verlangen, unter bestimmten Bedingungen.
                    </li>
                    <li>
                      Der Nutzung Ihrer Informationen für Marketingkommunikation
                      zu widersprechen.
                    </li>
                  </ul>
                  <p>
                    Um diese Rechte auszuüben, können Sie uns unter der Adresse
                    {import.meta.env.VITE_SHOP_EMAIL} kontaktieren.
                  </p>

                  <br />
                  <h6>Cookies und ähnliche Technologien</h6>
                  <p>
                    Wir verwenden <strong>Cookies</strong> und andere ähnliche
                    Technologien, um Ihre Erfahrung auf unserer Website zu
                    verbessern. Cookies sind kleine Dateien, die wir auf Ihrem
                    Gerät ablegen, um:
                  </p>
                  <li>Ihre Präferenzen zu speichern.</li>
                  <li>Die Nutzung der Website zu analysieren.</li>
                  <li>Eine personalisierte Erfahrung zu bieten.</li>

                  <p>
                    Sie können Cookies in den Einstellungen Ihres Browsers
                    verwalten oder deaktivieren, aber dies kann einige
                    Funktionen unserer Website beeinträchtigen.
                  </p>

                  <br />
                  <h6>Links zu Dritten</h6>
                  <p>
                    Unsere Website kann Links zu anderen Websites enthalten. Wir
                    sind nicht verantwortlich für die Datenschutzpraktiken
                    dieser Dritten. Wir empfehlen, deren Datenschutzrichtlinie
                    zu lesen, bevor Sie persönliche Informationen weitergeben.
                  </p>

                  <br />
                  <h6>Änderungen der Datenschutzrichtlinie</h6>
                  <p>
                    Wir behalten uns das Recht vor, diese Datenschutzrichtlinie
                    jederzeit zu aktualisieren. Alle Änderungen werden auf
                    dieser Seite veröffentlicht und das Datum der letzten
                    Aktualisierung wird oben auf der Seite angegeben.
                  </p>

                  <br />
                  <h6>Kontaktieren Sie uns</h6>
                  <p>
                    Wenn Sie Fragen oder Bedenken zu dieser
                    Datenschutzrichtlinie oder der Art und Weise, wie wir Ihre
                    persönlichen Informationen behandeln, haben, kontaktieren
                    Sie uns bitte unter:
                  </p>

                  <p>
                    <strong>Email:</strong> {import.meta.env.VITE_SHOP_EMAIL}
                  </p>
                  <p>
                    <strong>Adresse:</strong> {import.meta.env.VITE_SHOP_EMAIL}
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
