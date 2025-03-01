import React from "react";
import "./Home.css";
import Medimg from "../assets/landingImg.png";

const Home = () => {
  const handleScrollToSearch = () => {
    const searchSection = document.getElementById("search");
    if (searchSection) {
      searchSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container-fluid largebox d-flex" id="home">
      <div className="row w-100">
        <div className="col-12 col-md-8 d-flex flex-column justify-content-center align-items-center align-items-md-start text-center text-md-left box1">
          <div className="col-10 mx-auto">
            <h1 className="t">
              <span className="title">Pill</span>advisor
            </h1>
            <p className="para pt-2 pb-2">
              Explore detailed information on medications effortlessly.
              PillAdvisor provides reliable insights into drug usage, side
              effects, and interactions. Whether you're a healthcare professional
              or an individual seeking clarity, trust PillAdvisor for accurate and
              accessible medicine information. Start exploring today for informed
              health decisions.
            </p>
            <div className="b d-flex justify-content-lg-start ">
              <button
                className="knowbtn text-uppercase rounded-4 text-light p-2 mt-3"
                onClick={handleScrollToSearch} // Scroll to search
              >
                Know your medicine
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 d-flex align-items-center justify-content-center ps-5">
          <img src={Medimg} alt="Medicine" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Home;
