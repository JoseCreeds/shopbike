import NewLetters from '@/components/NewLetters'

export default function NotFound() {
  return (
    <>
      {/* <!-- START SECTION BREADCRUMB --> */}
      <div className="breadcrumb_section bg_gray page-title-mini">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="page-title">
                <h1>Seite nicht gefunden</h1>
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
                <li className="breadcrumb-item active">404</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- END SECTION BREADCRUMB --> */}

      <div className="main_content">
        <div className="section">
          <div className="error_wrap">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 col-md-10 order-lg-first">
                  <div className="text-center">
                    <div className="error_txt">404</div>
                    <h5 className="mb-2 mb-sm-3">
                      Hoppla! Seite nicht gefunden!
                    </h5>
                    <p>
                      Die Seite, die Sie suchen, wurde verschoben, gelöscht,
                      umbenannt oder existiert möglicherweise nicht.
                    </p>
                    <div className="search_form pb-3 pb-md-4">
                      <form method="post">
                        <input
                          name="text"
                          id="text"
                          type="text"
                          placeholder="Suchen"
                          className="form-control"
                        />
                        <button type="submit" className="btn icon_search">
                          <i className="ion-ios-search-strong"></i>
                        </button>
                      </form>
                    </div>
                    <a href="/" className="btn btn-fill-out">
                      Zurück zur Startseite
                    </a>
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
