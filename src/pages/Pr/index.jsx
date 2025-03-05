import NewLetters from '@/components/NewLetters'

export default function Pr() {
  return (
    <>
      {/* <!-- START SECTION BREADCRUMB --> */}
      <div className="breadcrumb_section bg_gray page-title-mini">
        <div className="container">
          {/* <!-- STRART CONTAINER --> */}
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="page-title">
                <h1 style={{ textTransform: 'none' }}>
                  Politique de Remboursement
                </h1>
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
                <li className="breadcrumb-item active">Politique</li>
              </ol>
            </div>
          </div>
        </div>
        {/* <!-- END CONTAINER--> */}
      </div>
      {/* <!-- END SECTION BREADCRUMB --> */}

      {/* <!-- START MAIN CONTENT --> */}
      <div className="main_content">
        {/* <!-- STAT SECTION FAQ -->  */}
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="term_conditions">
                  <p>
                    Nous nous engageons à offrir à nos clients une expérience
                    d&apos;achat agréable. Si pour une raison quelconque vous
                    n&apos;êtes pas satisfait de votre achat, nous vous offrons
                    une politique de remboursement claire et équitable. Cette
                    politique décrit les conditions et la procédure pour
                    demander un remboursement.
                  </p>

                  <br />
                  <h6> Conditions de remboursement</h6>
                  <p>
                    Vous pouvez demander un remboursement si votre achat répond
                    aux critères suivants :
                  </p>
                  <ul>
                    <li>
                      <strong>Article défectueux ou endommagé :</strong> Si
                      l&apos;article que vous avez reçu est défectueux,
                      endommagé ou ne correspond pas à la description fournie
                      sur notre site.
                    </li>
                    <li>
                      <strong>Erreurs de commande :</strong> Si vous avez reçu
                      un article incorrect.
                    </li>
                    <li>
                      <strong>Retours dans les délais :</strong> Nous acceptons
                      les demandes de remboursement dans un délai de 14 jours
                      suivant la réception de l&apos;article.
                    </li>
                  </ul>

                  <br />
                  <h6>Processus de demande de remboursement</h6>
                  <p>
                    Si vous êtes éligible pour un remboursement, veuillez suivre
                    les étapes suivantes :
                  </p>

                  <ol>
                    <li>
                      <strong>Contactez notre service client :</strong>{' '}
                      Envoyez-nous un e-mail à [VotreEmail@exemple.com] avec
                      votre numéro de commande, les détails de l&apos;article
                      concerné et une photo si l&apos;article est endommagé ou
                      défectueux.
                    </li>
                    <li>
                      <strong>Examinez la demande :</strong> Nous traiterons
                      votre demande et vous répondrons dans les 2 à 5 jours
                      ouvrables avec les instructions pour le retour de
                      l&apos;article, si nécessaire.
                    </li>
                    <li>
                      <strong>Retournez l&apos;article :</strong> Si
                      l&apos;article doit être retourné, veuillez l&apos;envoyer
                      à l&apos;adresse suivante : [Adresse du service de
                      retours]
                    </li>
                    <p>
                      Veuillez utiliser un service de livraison suivi pour le
                      retour de l&apos;article afin d&apos;assurer une preuve de
                      livraison.
                    </p>
                    <li>
                      <strong>Recevez votre remboursement :</strong> Une fois
                      l&apos;article retourné et inspecté, nous procéderons à
                      votre remboursement dans un délai de 7 à 10 jours
                      ouvrables. Le remboursement sera effectué sur le mode de
                      paiement initial utilisé lors de l&apos;achat.
                    </li>
                  </ol>

                  <br />
                  <h6>Frais de retour</h6>
                  <p>
                    Les frais de retour sont à votre charge, sauf si
                    l&apos;article est défectueux ou si nous avons envoyé un
                    produit incorrect. Si le produit est non conforme ou
                    défectueux, nous prendrons en charge les frais de retour.
                  </p>

                  <br />
                  <h6>Retours en magasin</h6>
                  <p>
                    Si vous avez effectué un achat dans l&apos;un de nos
                    magasins physiques, vous pouvez retourner l&apos;article
                    dans le même magasin, sous réserve des conditions de retour
                    en magasin. Veuillez consulter notre politique de retour en
                    magasin sur notre site ou contacter notre équipe pour plus
                    de détails.
                  </p>

                  <br />
                  <h6>Délai de traitement des retours</h6>
                  <p>
                    Une fois que nous avons reçu votre retour, il peut prendre
                    jusqu&apos;à 7 jours ouvrables pour traiter votre demande et
                    effectuer le remboursement. Nous vous enverrons un e-mail de
                    confirmation une fois le remboursement effectué.
                  </p>

                  <br />
                  <h6>Questions supplémentaires</h6>
                  <p>
                    Si vous avez des questions concernant notre politique de
                    remboursement ou si vous avez besoin d&apos;assistance
                    supplémentaire, n&apos;hésitez pas à nous contacter à
                    l&apos;adresse suivante : [VotreEmail@exemple.com].
                  </p>

                  <span>Dernière mise à jour : 05/01/2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- END SECTION FAQ -->  */}

        <NewLetters />
      </div>
      {/* <!-- END MAIN CONTENT --> */}
    </>
  )
}
