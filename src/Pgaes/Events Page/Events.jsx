import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeroImg from "../../assests/BlocSoc-Transparent.png";

const Events = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row align-item-center justify-content-center text-white">
          <div className="col-lg-4 col-md-6 col-sm-8 col-10">
            <main class="form-signin w-100 m-auto">
              <form>
                <img
                  class="mb-2"
                  src={HeroImg}
                  alt=""
                  width="auto"
                  height="100"
                />
                <h1 class="h3 mb-3 fw-normal">Please sign for further Updates!</h1>

                <div class="form-floating text-black mb-2">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating text-black">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>

                <div class="form-check text-start my-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="remember-me"
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Remember me
                  </label>
                </div>
                <button class="btn btn-primary w-100 py-2" type="submit">
                  Sign in
                </button>
                <p class="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
              </form>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
