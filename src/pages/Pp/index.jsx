import NewLetters from '@/components/NewLetters'

export default function Pp() {
  return (
    <>
      {/* <!-- START SECTION BREADCRUMB --> */}
      <div className="breadcrumb_section bg_gray page-title-mini">
        <div className="container">
          {/* <!-- STRART CONTAINER --> */}
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="page-title">
                <h1 style={{ textTransform: 'none' }}>Politique de Paiement</h1>
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
                    Nous offrons à nos clients un moyen de paiement sécurisé par
                    virement bancaire. Cette politique décrit les procédures et
                    instructions relatives au paiement de vos commandes sur
                    notre site.
                  </p>

                  <br />
                  <h6>Mode de paiement : Virement bancaire</h6>
                  <p>
                    Après avoir validé votre commande sur notre site, vous
                    recevrez les informations nécessaires pour effectuer le
                    paiement par virement bancaire. Ce mode de paiement est
                    disponible uniquement pour les commandes validées.
                  </p>
                  <h6>Détails du paiement :</h6>
                  <ul>
                    <li>
                      <strong>Numéro de commande :</strong> Vous devrez utiliser
                      le numéro de votre commande comme motif de paiement.
                    </li>
                    <li>
                      <strong>Adresse de paiement :</strong> Les informations de
                      paiement (nom de la banque, numéro de compte, IBAN, etc.)
                      seront affichées sur la page de confirmation de commande
                      et envoyées à l&apos;adresse e-mail que vous avez
                      renseignée lors de l&apos;achat.
                    </li>
                  </ul>

                  <br />
                  <h6>Instructions de paiement</h6>
                  <ul>
                    <li>
                      Motif du virement : Lors de l&apos;exécution du virement
                      bancaire, il est impératif d&apos;indiquer exactement le
                      numéro de votre commande comme motif de paiement. Cela
                      nous permet d&apos;associer votre paiement à votre
                      commande.
                    </li>
                    <li>
                      Conseil supplémentaire : Nous vous recommandons de
                      conserver une preuve de paiement (relevé bancaire, capture
                      d&apos;écran, etc.) et de l&apos;envoyer à notre service
                      client par e-mail à [VotreEmail@exemple.com]. Cela nous
                      permet de confirmer rapidement la réception de votre
                      paiement et d&apos;activer le traitement de votre
                      commande.
                    </li>
                  </ul>

                  <br />
                  <h6>Délai de traitement</h6>
                  <p>
                    Le traitement de votre commande commencera dès que nous
                    aurons reçu le paiement complet. Nous vous demandons de bien
                    vouloir effectuer automatiquement le virement après avoir
                    validé votre commande. Si nous ne recevons pas le paiement,
                    votre commande sera automatiquement annulée.
                  </p>

                  <br />
                  <h6>Confirmation du paiement</h6>
                  <p>
                    Une fois que nous aurons reçu votre paiement, nous vous
                    enverrons un e-mail de confirmation pour vous informer que
                    votre commande est en cours de traitement et sera bientôt
                    expédiée. Le délai d&apos;expédition dépendra des conditions
                    de notre politique d&apos;expédition.
                  </p>

                  <br />
                  <h6>Retours et remboursements</h6>
                  <p>
                    En cas d&apos;annulation de commande ou de demande de
                    remboursement, la procédure de remboursement sera traitée
                    une fois que la commande aura été validée, expédiée et que
                    la demande de retour aura été reçue, conformément à notre
                    <strong>Politique de Remboursement.</strong>
                  </p>

                  <br />
                  <h6>Sécurisation des paiements</h6>
                  <p>
                    Nous utilisons des protocoles de sécurité de pointe pour
                    garantir que vos informations bancaires et personnelles sont
                    traitées de manière confidentielle et sécurisée.
                  </p>

                  <br />
                  <h6>Problèmes liés au paiement</h6>
                  <p>
                    Si vous rencontrez un problème lors de votre virement
                    bancaire ou si vous avez des questions concernant votre
                    paiement, veuillez nous contacter immédiatement à
                    [VotreEmail@exemple.com]. Nous ferons tout notre possible
                    pour résoudre le problème rapidement.
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
