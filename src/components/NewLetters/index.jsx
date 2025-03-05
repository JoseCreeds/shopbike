function NewLetters() {
  return (
    <div className="section bg_default small_pt small_pb">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="newsletter_text text_white">
              <h3>Abonnez-vous à notre newsletter maintenant</h3>
              <p>
                Inscrivez-vous à notre newsletter pour être sûr de ne rien
                manquer !
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="newsletter_form2">
              <form>
                <input
                  type="text"
                  required=""
                  className="form-control rounded-0"
                  placeholder="Enter Adresse Email"
                />
                <button
                  type="submit"
                  className="btn btn-dark rounded-0"
                  name="submit"
                  value="Submit"
                >
                  S&apos;abonner
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
