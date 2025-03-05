import NewLetters from '@/components/NewLetters'

export default function Account() {
  return (
    <>
      {/* <!-- START SECTION BREADCRUMB --> */}
      <div className="breadcrumb_section bg_gray page-title-mini">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="page-title">
                <h1>My Account</h1>
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
                <li className="breadcrumb-item active">My Account</li>
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
                        <i className="ti-shopping-cart-full"></i>Orders
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="address-tab"
                        data-bs-toggle="tab"
                        href="#address"
                        role="tab"
                        aria-controls="address"
                        aria-selected="true"
                      >
                        <i className="ti-location-pin"></i>My Address
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="account-detail-tab"
                        data-bs-toggle="tab"
                        href="#account-detail"
                        role="tab"
                        aria-controls="account-detail"
                        aria-selected="true"
                      >
                        <i className="ti-id-badge"></i>Account details
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="login.html">
                        <i className="ti-lock"></i>Logout
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
                          From your account dashboard. you can easily check
                          &amp; view your{' '}
                          <a
                            href="javascript:void(0);"
                            // onclick="$('#orders-tab').trigger('click')"
                          >
                            recent orders
                          </a>
                          , manage your{' '}
                          <a
                            href="javascript:void(0);"
                            // onclick="$('#address-tab').trigger('click')"
                          >
                            shipping and billing addresses
                          </a>{' '}
                          and{' '}
                          <a
                            href="javascript:void(0);"
                            // onclick="$('#account-detail-tab').trigger('click')"
                          >
                            edit your password and account details.
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
                        <h3>Orders</h3>
                      </div>
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Order</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Total</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>#1234</td>
                                <td>March 15, 2020</td>
                                <td>Processing</td>
                                <td>$78.00 for 1 item</td>
                                <td>
                                  <a
                                    href="#"
                                    className="btn btn-fill-out btn-sm"
                                  >
                                    View
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>#2366</td>
                                <td>June 20, 2020</td>
                                <td>Completed</td>
                                <td>$81.00 for 1 item</td>
                                <td>
                                  <a
                                    href="#"
                                    className="btn btn-fill-out btn-sm"
                                  >
                                    View
                                  </a>
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
                            <h3>Billing Address</h3>
                          </div>
                          <div className="card-body">
                            <address>
                              House #15
                              <br />
                              Road #1
                              <br />
                              Block #C <br /> Angali <br /> Vedora
                              <br />
                              1212
                            </address>
                            <p>New York</p>
                            <a href="#" className="btn btn-fill-out">
                              Edit
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="card">
                          <div className="card-header">
                            <h3>Shipping Address</h3>
                          </div>
                          <div className="card-body">
                            <address>
                              House #15
                              <br />
                              Road #1
                              <br />
                              Block #C <br />
                              Angali <br /> Vedora
                              <br />
                              1212
                            </address>
                            <p>New York</p>
                            <a href="#" className="btn btn-fill-out">
                              Edit
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
                        <h3>Account Details</h3>
                      </div>
                      <div className="card-body">
                        <p>
                          Already have an account?{' '}
                          <a href="#">Log in instead!</a>
                        </p>
                        <form method="post" name="enq">
                          <div className="row">
                            <div className="form-group col-md-6 mb-3">
                              <label>
                                First Name <span className="required">*</span>
                              </label>
                              <input
                                required=""
                                className="form-control"
                                name="name"
                                type="text"
                              />
                            </div>
                            <div className="form-group col-md-6 mb-3">
                              <label>
                                Last Name <span className="required">*</span>
                              </label>
                              <input
                                required=""
                                className="form-control"
                                name="phone"
                              />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                              <label>
                                Display Name <span className="required">*</span>
                              </label>
                              <input
                                required=""
                                className="form-control"
                                name="dname"
                                type="text"
                              />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                              <label>
                                Email Address{' '}
                                <span className="required">*</span>
                              </label>
                              <input
                                required=""
                                className="form-control"
                                name="email"
                                type="email"
                              />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                              <label>
                                Current Password{' '}
                                <span className="required">*</span>
                              </label>
                              <input
                                required=""
                                className="form-control"
                                name="password"
                                type="password"
                              />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                              <label>
                                New Password <span className="required">*</span>
                              </label>
                              <input
                                required=""
                                className="form-control"
                                name="npassword"
                                type="password"
                              />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                              <label>
                                Confirm Password{' '}
                                <span className="required">*</span>
                              </label>
                              <input
                                required=""
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
                              >
                                Save
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
