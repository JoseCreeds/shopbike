import NewLetters from '@/components/NewLetters'
import Loader from '@/utils/loader'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { registerUser, logout } from '@/store/slices/authSlice'
import { toast } from 'react-toastify'

export default function Account() {
  const dispatch = useDispatch()
  const { loading, error } = useSelector((state) => state.auth)
  const user = useSelector((state) => state.auth.user)

  const [userData, setUserData] = useState({
    email: user.email,
    password: '',
    username: user.username,
  })

  const handleLogout = () => {
    dispatch(logout())
    window.location.href = '/'
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(registerUser(userData)).then((result) => {
      if (result.type === 'auth/register/fulfilled') {
        toast.success('Information modifiée avec succès !')
      } else {
        toast.error(error)
      }
    })
  }

  return (
    <>
      <Loader />

      {/* <!-- START SECTION BREADCRUMB --> */}
      <div className="breadcrumb_section bg_gray page-title-mini">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="page-title">
                <h1>Mein Konto</h1>
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
                <li className="breadcrumb-item active">Konto</li>
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
              <div className="col-lg-3 col-md-4">
                <div className="dashboard_menu">
                  <ul className="nav nav-tabs flex-column" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="dashboard-tab"
                        data-bs-toggle="tab"
                        href="#dashboard"
                        role="tab"
                        aria-controls="dashboard"
                        aria-selected="false"
                      >
                        <i className="ti-layout-grid2"></i>Dashboard
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="orders-tab"
                        data-bs-toggle="tab"
                        href="#orders"
                        role="tab"
                        aria-controls="orders"
                        aria-selected="false"
                      >
                        <i className="ti-shopping-cart-full"></i>Bestellungen
                      </a>
                    </li>
                    {/* <li className="nav-item">
        <a
          className="nav-link"
          id="address-tab"
          data-bs-toggle="tab"
          href="#address"
          role="tab"
          aria-controls="address"
          aria-selected="true"
        >
          <i className="ti-location-pin"></i>Meine Adresse
        </a>
      </li> */}
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="account-detail-tab"
                        data-bs-toggle="tab"
                        href="#account-detail"
                        role="tab"
                        aria-controls="account-detail"
                        aria-selected="true"
                        style={{ textTransform: 'none' }}
                      >
                        <i className="ti-id-badge"></i>
                        Kontodetails
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#!" onClick={handleLogout}>
                        <i className="ti-lock"></i>Abmelden
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-9 col-md-8">
                <div className="tab-content dashboard_content">
                  <div
                    className="tab-pane fade active show"
                    id="dashboard"
                    role="tabpanel"
                    aria-labelledby="dashboard-tab"
                  >
                    <div className="card">
                      <div className="card-header">
                        <h3>Dashboard</h3>
                      </div>
                      <div className="card-body">
                        <p>
                          Von Ihrem Dashboard aus können Sie ganz einfach Ihre
                          <a href="javascript:void(0);">
                            letzten Bestellungen anzeigen
                          </a>
                          {/* , verwalten Sie Ihre{' '}
            <a href="javascript:void(0);">
              Lieferadressen
            </a>{' '} */}
                          sowie
                          <a href="javascript:void(0);">
                            Ihr Passwort und Ihre Kontodaten ändern.
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="orders"
                    role="tabpanel"
                    aria-labelledby="orders-tab"
                  >
                    <div className="card">
                      <div className="card-header">
                        <h3 style={{ textTransform: 'none' }}>
                          Meine Bestellungen
                        </h3>
                      </div>
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Bestellung</th>
                                <th>Datum</th>
                                <th>Status</th>
                                <th>Gesamt</th>
                                <th>Aktionen</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td
                                  colSpan="5"
                                  style={{
                                    verticalAlign: 'middle',
                                    lineHeight: '1.5',
                                    height: '80px',
                                    padding: '20px',
                                  }}
                                  className="text-center"
                                >
                                  Keine Bestellungen verfügbar
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="address"
                    role="tabpanel"
                    aria-labelledby="address-tab"
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="card mb-3 mb-lg-0">
                          <div className="card-header">
                            <h3>Rechnungsadresse</h3>
                          </div>
                          <div className="card-body">
                            <address>
                              Haus #15
                              <br />
                              Straße #1
                              <br />
                              Block #C <br /> Angali <br /> Vedora
                              <br />
                              1212
                            </address>
                            <p>New York</p>
                            <a href="#!" className="btn btn-fill-out">
                              Bearbeiten
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="card">
                          <div className="card-header">
                            <h3>Lieferadresse</h3>
                          </div>
                          <div className="card-body">
                            <address>
                              Haus #15
                              <br />
                              Straße #1
                              <br />
                              Block #C <br />
                              Angali <br /> Vedora
                              <br />
                              1212
                            </address>
                            <p>New York</p>
                            <a href="#!" className="btn btn-fill-out">
                              Bearbeiten
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="account-detail"
                    role="tabpanel"
                    aria-labelledby="account-detail-tab"
                  >
                    <div className="card">
                      <div className="card-header">
                        <h3 style={{ textTransform: 'none' }}>Kontodetails</h3>
                      </div>
                      <div className="card-body">
                        <form onSubmit={handleSubmit} name="enq">
                          <div className="row">
                            <div className="form-group col-md-6 mb-3">
                              <label>
                                Name <span className="required">*</span>
                              </label>
                              <input
                                required
                                className="form-control"
                                name="username"
                                type="text"
                                value={userData.username}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="form-group col-md-6 mb-3">
                              <label>
                                E-Mail-Adresse{' '}
                                <span className="required">*</span>
                              </label>
                              <input
                                required
                                className="form-control"
                                name="email"
                                type="email"
                                value={userData.email}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="form-group col-md-6 mb-3">
                              <label>
                                Aktuelles Passwort{' '}
                                <span className="required">*</span>
                              </label>
                              <input
                                required
                                className="form-control"
                                name="password"
                                type="password"
                                value={userData.password}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="form-group col-md-6 mb-3">
                              <label>
                                Neues Passwort{' '}
                                <span className="required">*</span>
                              </label>
                              <input
                                required
                                className="form-control"
                                name="npassword"
                                type="password"
                              />
                            </div>
                            <div className="form-group col-md-6 mb-3">
                              <label>
                                Passwort bestätigen{' '}
                                <span className="required">*</span>
                              </label>
                              <input
                                required
                                className="form-control"
                                name="cpassword"
                                type="password"
                              />
                            </div>
                            <div className="col-md-12">
                              <button
                                type="submit"
                                className="btn btn-fill-out"
                                name="submit"
                                value="Submit"
                                disabled
                              >
                                {loading ? 'Speichern...' : 'Speichern'}
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NewLetters />
    </>
  )
}
