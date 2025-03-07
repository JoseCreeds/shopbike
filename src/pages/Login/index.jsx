import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '@/store/slices/authSlice'
import { toast } from 'react-toastify'

import NewLetters from '@/components/NewLetters'
import Loader from '@/utils/loader'

export default function Login() {
  const dispatch = useDispatch()
  const { loading, error } = useSelector((state) => state.auth)

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(loginUser(userData)).then((result) => {
      if (result.type === 'auth/login/fulfilled') {
        //toast.success('Connexion réussie')
        window.location.href = '/'
      } else {
        toast.error(error)
      }
    })
  }

  return (
    <>
      <Loader />

      <div className="breadcrumb_section bg_gray page-title-mini">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="page-title">
                <h1>Login</h1>
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
                <li className="breadcrumb-item active">Login</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- START MAIN CONTENT --> */}
      <div className="main_content">
        <div className="login_register_wrap section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-md-10">
                <div className="login_wrap">
                  <div className="padding_eight_all bg-white">
                    <div className="heading_s1">
                      <h3>Login</h3>
                    </div>
                    <form onSubmit={handleSubmit}>
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
                          name="password"
                          value={userData.password}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Passwort"
                          required
                        />
                      </div>
                      <div className="login_footer form-group mb-3">
                        <div className="chek-form">
                          <div className="custome-checkbox">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="checkbox"
                              id="exampleCheckbox1"
                              value=""
                            />
                            <label className="form-check-label">
                              <span>Erinnere dich an mich</span>
                            </label>
                          </div>
                        </div>
                        <a href="#!">Passwort vergessen?</a>
                      </div>
                      <div className="form-group mb-3">
                        <button
                          type="submit"
                          className="btn btn-fill-out btn-block"
                          name="login"
                          disabled={loading}
                        >
                          {loading ? 'Lädt...' : 'Einloggen'}
                        </button>
                      </div>
                    </form>

                    <div className="form-note text-center">
                      Sie haben kein Konto? <a href="signup">Registrieren</a>
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
