import React from "react";
import Header from "./header";
import Footer from "./footer";
import WithHook from "./hoc";
import { ToastContainer } from "react-toastify";

class Checkout extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <div className="container">
            <ToastContainer />
            <div className="row my-5">
              <div className="col-lg-8 offset-2">
                <div className="card shadow">
                  <div className="card-header text-bg-success">
                    <h3 className="text-white">Checkout</h3>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="row g-3">
                        <div className="col-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Full name"
                            aria-label="Full name"
                            required
                            id="fullname"
                          />
                        </div>

                        <div className="col-12">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Mobile"
                            aria-label="Mobile"
                            required
                            id="mobile"
                          />
                        </div>

                        <div className="col-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Address Line 1"
                            required
                            id="address1"
                          />
                        </div>

                        <div className="col-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Address Line 2"
                            required
                            id="address2"
                          />
                        </div>

                        <div className="col-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="City"
                            required
                            id="city"
                          />
                        </div>

                        <div className="col-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Pin Code"
                            required
                            id="pincode"
                          />
                        </div>

                        <div className="col-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Remarks"
                            required
                            id="remarks"
                          />
                        </div>

                        <div className="col-12">
                          <span className="fw-bold">Select payment type</span>
                        </div>

                        <div className="col-12">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="radioDefault"
                              id="formRadioDefault"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="formRadioDefault"
                            >
                              Cash on Delivery
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="radioDefault"
                              id="formRadioChecked"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="formRadioChecked"
                            >
                              Online money transfer
                            </label>
                          </div>
                        </div>

                        <div className="col-12 text-end">
                          <button
                            type="button"
                            className="btn btn-outline-primary"
                            data-bs-dismiss="modal"
                          >
                            Cancel
                          </button>
                          <button className="btn btn-primary" type="submit">
                            Place Order
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default WithHook(Checkout);
