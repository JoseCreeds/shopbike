import { useState } from 'react'
import { toast } from 'react-toastify'

function NewLetters() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (email.trim()) {
      toast.success('Abonnement erfolgreich!')
      setEmail('')
    } else {
      toast.error('Bitte geben Sie eine gültige E-Mail-Adresse ein.')
    }
  }

  return (
    <div className="section bg_default small_pt small_pb">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="newsletter_text text_white">
              <h3>Abonnieren Sie jetzt unseren Newsletter</h3>
              <p>
                Melden Sie sich für unseren Newsletter an, um nichts zu
                verpassen!
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="newsletter_form2">
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-control rounded-0"
                  placeholder="Geben Sie Ihre E-Mail-Adresse ein"
                />
                <button
                  type="submit"
                  className="btn btn-dark rounded-0"
                  name="submit"
                  value="Submit"
                >
                  Abonnieren
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewLetters
