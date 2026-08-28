import React from "react";
import Header from "./header";
import Footer from "./footer";
import WithHook from "./hoc";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

class Cart extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <section className="mb-lg-14 mb-8 mt-8">
            <div className="container">
              <ToastContainer />

              <div className="row">
                <div className="col-12">
                  <div className="card py-1 border-0 mb-8">
                    <div>
                      <h1 className="fw-bold">Shop Cart</h1>
                      <p className="mb-0">Shopping in 382480</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-8 col-md-7">
                  <div className="py-3">
                    <div className="alert alert-danger p-2" role="alert">
                      You’ve got FREE delivery. Start{" "}
                      <Link to="/checkout" className="alert-link">
                        checkout now!
                      </Link>
                    </div>

                    <ul className="list-group list-group-flush">
                      {/* Example item */}
                      <li className="list-group-item py-3 ps-0 border-top">
                        <div className="row align-items-center">
                          <div className="col-6 col-md-6 col-lg-7">
                            <div className="d-flex">
                              <img
                                src="theme/assets/images/product-placeholder.png"
                                alt="Ecommerce"
                                className="icon-shape icon-xxl"
                              />
                              <div className="ms-3">
                                <a href="shop-single.html" className="text-inherit">
                                  <h6 className="mb-0">Product Name</h6>
                                </a>
                                <div className="mt-2 small lh-1">
                                  <span className="text-muted">Remove</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                            <span className="fw-bold">₹0.00</span>
                          </div>
                        </div>
                      </li>
                    </ul>

                    <div className="d-flex justify-content-between mt-4">
                      <a href="#!" className="btn btn-primary">
                        Continue Shopping
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-4 col-md-5">
                  <div className="mb-5 card mt-6">
                    <div className="card-body p-6">
                      <h2 className="h5 mb-4">Summary</h2>

                      <div className="card mb-2">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="me-auto">
                              <div>Item</div>
                            </div>
                            <span>₹0.00</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="me-auto">
                              <div>Service Fee</div>
                            </div>
                            <span>₹0.00</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="me-auto">
                              <div className="fw-bold">Subtotal</div>
                            </div>
                            <span className="fw-bold">₹0.00</span>
                          </li>
                        </ul>
                      </div>

                      <div className="d-grid mb-1 mt-4">
                        <Link
                          to="/checkout"
                          className="btn btn-primary btn-lg d-flex justify-content-between align-items-center"
                        >
                          Go to Checkout
                          <span className="fw-bold">₹0.00</span>
                        </Link>
                      </div>
                    </div>
                  </div>
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

export default WithHook(Cart);
