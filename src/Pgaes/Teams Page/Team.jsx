import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Logo from "../../assests/Bloc.png";
import "./team.css";
import Profiles from "./Profiles";
import teamData from "./teamData";

const Team = () => {
  return (
    <div>
      <Navbar />
      <div class="container my-5">
        <div class="p-5 text-center bg-body-dark rounded-3 text-white">
          <div>
            <img src={Logo} height={50} />
          </div>
          <h1
            id="aim"
            class="display-4 text-body-white font-weight-bolder pt-5"
          >
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
          <h1 id="vision" class="display-4 text-body-white font-weight-bolder">
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
          <h1 class="display-4 text-body-white p-4 font-weight-bolder">
            <b>Team</b>
          </h1>
        </div>
      </div>
      <div className="container d-flex flex-wrap p-6 justify-content-center">
        {teamData.map((member) => (
          <Profiles
            key={member.index}
            imageSrc={member.imageSrc}
            title={member.title}
            name={member.name}
            twitter={member.twitter}
            instagram={member.instagram}
            linkedin={member.linkedin}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Team;
