import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Oneevent from "./singleevent";
import Signin from "../Register/signin";

const Events = () => {
  return (
    <div>
      <Navbar />
      <Oneevent />
      <Footer />
    </div>
  );
};

export default Events;
