import { Component } from "react";
import Footer from "./footer";
import WithHook from "./hoc";

class Register extends Component {

  render() {
    return (
      <div>
        <div className="border-bottom shadow-sm">
          <nav className="navbar navbar-light py-2">
            <div className="container justify-content-center justify-content-lg-between">
              <a className="navbar-brand" href="../index.html">
                <img
                  src="theme/assets/images/logo/freshcart-logo.svg"
                  alt="FreshCart Logo"
                  className="d-inline-block align-text-top"
                />
              </a>
              <span className="navbar-text">
                Already have an account?
                <a href="user-login.html"> Log in</a>
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
                    src="theme/assets/images/svg-graphics/signup-g.svg"
                    alt="Sign Up"
                    className="img-fluid"
                  />
                </div>

                <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
                  <div className="mb-lg-9 mb-5">
                    <h1 className="mb-1 h2 fw-bold">Sign Up</h1>
                    <p>Welcome to FreshCart! Enter your email to get started.</p>
                  </div>

                  <form className="needs-validation">
                    <div className="row g-3">

                      <div className="col-12">
                        <label htmlFor="email" className="form-label visually-hidden">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Email"
                          required
                        />
                        <div className="invalid-feedback">Please enter email.</div>
                      </div>

                      <div className="col-12">
                        <div className="password-field position-relative">
                          <label htmlFor="password" className="form-label visually-hidden">
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control fakePassword"
                            id="password"
                            placeholder="Password"
                            required
                          />
                          <span><i className="bi bi-eye-slash passwordToggler" /></span>
                          <div className="invalid-feedback">Please enter password.</div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="password-field position-relative">
                          <label htmlFor="confirmPassword" className="form-label visually-hidden">
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            className="form-control fakePassword"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            required
                          />
                          <span><i className="bi bi-eye-slash passwordToggler" /></span>
                          <div className="invalid-feedback">Please confirm password.</div>
                        </div>
                      </div>

                      <div className="col-12">
                        <label htmlFor="mobile" className="form-label visually-hidden">
                          Mobile
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          id="mobile"
                          placeholder="Mobile"
                          required
                        />
                        <div className="invalid-feedback">Please enter mobile.</div>
                      </div>

                      <div className="col-12 d-grid">
                        <button type="submit" className="btn btn-primary">
                          Register
                        </button>
                      </div>

                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    );
  }
}

export default WithHook(Register);
