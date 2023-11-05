import React from "react";
import "../Teams Page/team.css";
import Register from "../Register/register";

const Oneevent = () => {
  return (
    <div className="container">
      <div className="row justify-content-center m-2">
        <div className="col-lg-10 col-md-10 col-sm-11 col-11 custom-bg p-3 rounded mt-3 text-white">
          <h4>
            <span className="text-info">Web-3 Workshop</span>
          </h4>
          <p className="fs-6">
            With the rise of blockchain technology, the world is moving towards
            a decentralized future. The Web3 ecosystem is a crucial aspect of
            this decentralized future. We want to help you understand the
            workings of Web3 and Solidity so that you can be a part of this
            transformative technology.
          </p>
          <a
            className="btn btn-sm btn-primary"
            href="Register"
            role="button"
          >
            <h6 className="mb-0">Register here</h6>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Oneevent;
