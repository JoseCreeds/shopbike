import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '@/store/slices/authSlice'
import { toast } from 'react-toastify'

import NewLetters from '@/components/NewLetters'
import Loader from '@/utils/loader'

export default function Signup() {
  const dispatch = useDispatch()
  const { loading, error } = useSelector((state) => state.auth)

  const [userData, setUserData] = useState({
    email: '',
    password: '',
    username: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(registerUser(userData)).then((result) => {
      if (result.type === 'auth/register/fulfilled') {
        toast.success('Erfolgreiche Registrierung')
        setUserData({
          email: '',
          password: '',
          username: '',
        })
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
                <h1>Registrieren</h1>
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
                <li className="breadcrumb-item active">Registrieren</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- END SECTION BREADCRUMB --> */}

      <div className="main_content">
        <div className="login_register_wrap section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-md-10">
                <div className="login_wrap">
                  <div className="padding_eight_all bg-white">
                    <div className="#">
                      <h3>Ein Konto erstellen</h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          name="username"
                          value={userData.username}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Ihr Name"
                          required
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          name="email"
                          value={userData.email}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Ihre E-Mail"
                          required
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          value={userData.password}
                          onChange={handleChange}
                          placeholder="Passwort"
                          required
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          className="form-control"
                          required=""
                          type="password"
                          name="password"
                          placeholder="Passwort bestätigen"
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
                                Ich akzeptiere die Geschäftsbedingungen.
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
                          disabled={loading}
                        >
                          {loading ? 'Wird geladen...' : 'Registrieren'}
                        </button>
                      </div>
                    </form>

                    <div className="form-note text-center">
                      Haben Sie bereits ein Konto? <a href="login">Anmelden</a>
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
