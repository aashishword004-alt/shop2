import React from "react";
import Footer from "./footer";
import WithHook from "./hoc";
import { ToastContainer } from "react-toastify";

class Login extends React.Component {
  render() {
    return (
      <>
        <div className="border-bottom shadow-sm">
          <nav className="navbar navbar-light py-2">
            <div className="container justify-content-center justify-content-lg-between">
              <ToastContainer />
              <a className="navbar-brand" href="../index.html">
                <img
                  src="theme/assets/images/logo/freshcart-logo.png"
                  alt
                  className="d-inline-block align-text-top"
                />
              </a>
              <span className="navbar-text">
                Already have an account?
                <a href="signin.html">Sign in</a>
              </span>
            </div>
          </nav>
        </div>

        <main>
          <section className="my-lg-14 my-8 vh-100">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
                  <img
                    src="theme/assets/images/svg-graphics/signin-g.svg"
                    alt
                    className="img-fluid"
                  />
                </div>

                <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
                  <div className="mb-lg-9 mb-5">
                    <h1 className="mb-1 h2 fw-bold">Sign in to myshop</h1>
                  </div>

                  <form className="needs-validation">
                    <div className="row g-3">
                      <div className="col-12">
                        <label
                          htmlFor="email"
                          className="form-label visually-hidden"
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Email"
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter email.
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="password-field position-relative">
                          <label
                            htmlFor="password"
                            className="form-label visually-hidden"
                          >
                            Password
                          </label>
                          <div className="password-field position-relative">
                            <input
                              type="password"
                              className="form-control fakePassword"
                              id="password"
                              placeholder="Password"
                              required
                            />
                            <span>
                              <i className="bi bi-eye-slash passwordToggler" />
                            </span>
                            <div className="invalid-feedback">
                              Please enter password.
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex justify-content-between">
                        <div>
                          Forgot password?{" "}
                          <a href="user-forgot-password.html">Reset It</a>
                        </div>
                      </div>

                      <div className="col-12 d-grid">
                        <button type="submit" className="btn btn-primary">
                          Sign In
                        </button>
                      </div>

                      <div>
                        Don’t have an account?{" "}
                        <a href="user-register.html">Sign Up</a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </>
    );
  }
}

export default WithHook(Login);
