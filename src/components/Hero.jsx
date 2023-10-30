import React from "react";
import "./hero.css";
import HeroImg from "../assests/BlocSoc-Transparent.png";
const Hero = () => {
  return (
    <div>
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center ">
          <div class="col-12 col-sm-12 col-lg-6">
            <img
              src={HeroImg}
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <h1 class="display-1 fw-bold text-white lh-1 mb-3">
              Your Step to the <span className="text-info">Future</span>.
            </h1>
            <p class="text-white">
              Unlocking the powers of Blockchain. Blockchain club of IIIT
              Dharwad Create your Decentralised app today!
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-info btn-lg px-4 me-md-2">
                UpComing Events
              </button>
              <button type="button" class="btn btn-outline-info btn-lg px-4">
                Explore BlocSoc
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container custom-bg-2 p-4">
        <div className="row justify-content-center">

          <div className="col-lg-1 col-6 text-right">
            <div className="h1 text-white">200+</div>
          </div>
          <div className="col-lg-2 col-6 text-white text-left">Decentralised IDs Registered.</div>

          <div className="col-lg-1 col-6">
            <div className="h1 text-white">20+</div>
          </div>
          <div className="col-lg-2 col-6 text-white text-left">
            Blockchain<br></br>
            Projects.
          </div>

          <div className="col-lg-1 col-6 text-right">
            <div className="h1 text-white">30+</div>
          </div>
          <div className="col-lg-2 col-6 text-white">Web-3 & Blockchain Blogs.</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
