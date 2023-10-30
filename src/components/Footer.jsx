import React from "react";
import HeroImg from "../assests/BlocSoc-Transparent.png";

export const Footer = () => {
  return (
    <div>
      <div class="container">
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top text-white justify-content-center">
          <div class="col mb-3">
            <a
              href="/"
              class="d-flex align-items-center mt-0 link-body-emphasis text-decoration-none"
            >
              <img src={HeroImg} height={150} />
            </a>
            <p class="text-white">©blocsociiitdwd</p>
          </div>

          <div class="col mb-3"></div>

          <div class="col mb-3 text-white">
            <h5>About US</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-white">
                  Aim
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-white">
                  Vision
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-white">
                  Team
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-white">
                  Recruitment
                </a>
              </li>
            </ul>
          </div>

          <div class="col mb-3 text-white">
            <h5>Resources</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-white">
                  E - books
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-white">
                  Youtube Courses
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-white">
                  Documentations
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-white">
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
