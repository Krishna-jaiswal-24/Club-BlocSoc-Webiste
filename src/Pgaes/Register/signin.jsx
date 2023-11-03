import React from "react";

const Signin = () => {
  return (
    <div className="container">
      <div className="row align-item-center justify-content-center text-white mt-5">
        <div className="col-lg-4 col-md-6 col-sm-8 col-10">
          <main class="form-signin w-100 m-auto">
            <form>
              <h1 class="h3 mb-3 fw-normal">
                Please sign for further Updates!
              </h1>
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
              <p class="mt-3 text-body-primary text-center">
                already have a Account? <a className="text-info">Login</a>
              </p>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Signin;
