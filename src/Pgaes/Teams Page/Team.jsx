import React from "react";
import Footer from '../../components/Footer'
import Navbar from "../../components/Navbar";
import Logo from "../../assests/Bloc.png";
import "./team.css";

const Team = () => {
  return (
    <div>
      <Navbar />
      <div class="container my-5">
        <div class="p-5 text-center bg-body-dark rounded-3 text-white">
          <div>
            <img src={Logo} height={50} />
          </div>
          <h1 class="display-4 text-body-white font-weight-bolder pt-5">
            <b>Aim</b>
          </h1>
          <p class="col-lg-8 mx-auto fs-5 text-white">
            Our club at <span className="text-info">IIIT Dharwad</span>, is to
            foster a thriving <span className="text-info">community</span> of
            students passionate about blockchain technology, promoting{" "}
            <span className="text-info">education</span>,{" "}
            <span className="text-info">research</span>,{" "}
            <span className="text-info">industry connections</span> and{" "}
            <span className="text-info">social impact</span> in the field.
          </p>
          <h1 class="display-4 text-body-white font-weight-bolder">
            <b>Vision</b>
          </h1>
          <p class="col-lg-8 mx-auto fs-5 text-white">
            To become a leading hub for{" "}
            <span className="text-info">blockchain innovation</span>, knowledge
            sharing, and collaboration at IIIT Dharwad,{" "}
            <span className="text-info">empowering students</span> to drive
            technological <span className="text-info">advancements</span>,
            explore novel applications, and make a{" "}
            <span className="text-info">positive impact</span> on society
            through blockchain technology.
          </p>
          <h1 class="display-4 text-body-white font-weight-bolder">
            <b>Team</b>
          </h1>
        </div>
      </div>

      <div class="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-7 col-sm-8 col-10">
            <div class="custom-bg p-3 rounded mt-3 text-white">
              <h5>Never Miss an Update</h5>
              <p class="fs-6">
                Connect us on our discord
              </p>
              <a
                class="btn btn-sm btn-primary"
                href="/docs/5.3/components/navbar/"
                role="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-discord"
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
      <Footer />
    </div>
  );
};

export default Team;
