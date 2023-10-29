import React from "react";
import { Footer } from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Logo from "../../assests/Bloc.png"
const Team = () => {
  return (
    <div>
      <Navbar />
      <div class="container my-5">
        <div class="p-5 text-center bg-body-dark rounded-3 text-white">
          <div><img src={Logo} height={50}/></div>
          <h1 class="text-body-white pt-5">Aim</h1>
          <p class="col-lg-8 mx-auto fs-5 text-white">
            Our club at IIIT Dharwad, is to foster a thriving community of
            students passionate about blockchain technology, promoting
            education, research, industry connections and social impact in the
            field.
          </p>
          <h1 class="text-body-white">Vision</h1>
          <p class="col-lg-8 mx-auto fs-5 text-white">
            To become a leading hub for blockchain innovation, knowledge
            sharing, and collaboration at IIIT Dharwad, empowering students to
            drive technological advancements, explore novel applications, and
            make a positive impact on society through blockchain technology.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Team;
