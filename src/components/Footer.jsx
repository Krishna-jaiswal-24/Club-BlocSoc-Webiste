import React from "react";
import HeroImg from "../assests/BlocSoc-Transparent.png";

const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-7 col-sm-8 col-10">
            <div className="custom-bg p-3 rounded mt-3 text-white">
              <h5>Never Miss an Update</h5>
              <p className="fs-6">
                Connect us on our discord
              </p>
              <a
                className="btn btn-sm btn-primary"
                href="https://discord.gg/MrGNHctx"
                role="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-discord"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                </svg>{" "}
                Discord
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top text-white justify-content-center">
          <div className="col mb-3">
            <a
              href="/"
              className="d-flex align-items-center mt-0 link-body-emphasis text-decoration-none"
            >
              <img src={HeroImg} height={150} />
            </a>
            <p className="text-white text-sm-left">© Made with love BlocSoc</p>
          </div>

          <div className="col mb-3"></div>

          <div className="col mb-3 text-white">
            <h5>About US</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Aim
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Vision
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Team
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Recruitment
                </a>
              </li>
            </ul>
          </div>

          <div className="col mb-3 text-white">
            <h5>Resources</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  E - books
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Youtube Courses
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Documentations
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Blogs
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;