import NewLetters from '@/components/NewLetters'
import Loader from '@/utils/loader'

export default function Signup() {
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
                <h1>Register</h1>
              </div>
            </div>
            <div className="col-md-6">
              <ol className="breadcrumb justify-content-md-end">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Pages</a>
                </li>
                <li className="breadcrumb-item active">Register</li>
              </ol>
            </div>
          </div>
        </div>
        {/* <!-- END CONTAINER--> */}
      </div>
      {/* <!-- END SECTION BREADCRUMB --> */}

      {/* <!-- START MAIN CONTENT --> */}
      <div className="main_content">
        {/* <!-- START LOGIN SECTION --> */}
        <div className="login_register_wrap section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-md-10">
                <div className="login_wrap">
                  <div className="padding_eight_all bg-white">
                    <div className="#">
                      <h3>Créer un compte</h3>
                    </div>
                    <form method="post">
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          required=""
                          className="form-control"
                          name="name"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          required=""
                          className="form-control"
                          name="email"
                          placeholder="Votre email"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          className="form-control"
                          required=""
                          type="password"
                          name="password"
                          placeholder="Mot de passe"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          className="form-control"
                          required=""
                          type="password"
                          name="password"
                          placeholder="Confirmer mot de passe"
                        />
                      </div>
                      <div className="login_footer form-group mb-3">
                        <div className="chek-form">
                          {/* <!-- END LOGIN SECTION --> */}
                          <div className="custome-checkbox">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="checkbox"
                              id="exampleCheckbox2"
                              value=""
                            />
                            <label className="form-check-label">
                              <span>
                                J&apos;accepte ls termes et conditions.
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group mb-3">
                        <button
                          type="submit"
                          className="btn btn-fill-out btn-block"
                          name="register"
                        >
                          S&apos;inscrire
                        </button>
                      </div>
                    </form>
                    {/* <div className="different_login">
                      <span> or</span>
                    </div>
                    <ul className="btn-login list_none text-center">
                      <li>
                        <a href="#" className="btn btn-facebook">
                          <i className="ion-social-facebook"></i>Facebook
                        </a>
                      </li>
                      <li>
                        <a href="#" className="btn btn-google">
                          <i className="ion-social-googleplus"></i>Google
                        </a>
                      </li>
                    </ul> */}
                    <div className="form-note text-center">
                      Vous avez déjà un compte ?{' '}
                      <a href="login">Se connecter</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- END LOGIN SECTION --> */}
      </div>
      {/* <!-- END MAIN CONTENT --> */}

      <NewLetters />
    </>
  )
}
