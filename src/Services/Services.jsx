import React from "react";
import "./Services.css";
import ServiceCard from "./ServiceCard";
import UsesIcon from "../assets/usesIcon.png";
import CarfulIcon from "../assets/cautionIcon.png";
import HowtoIcon from "../assets/howtoIcon.png";
import SideeffectIcon from "../assets/sideeffectIcon.png";

const Services = () => {
  return (
    <>
      <section className="services container" id="services">
        <div className="pt-5">
          <h1 className="brandcolor">Our Services</h1>
          <p className="py-3">
            Welcome to PillAdvisor, where knowledge meets health. We're
            dedicated to providing clear and reliable information on
            medications, empowering you to make informed decisions about your
            well-being. Whether you're a healthcare professional or an
            individual seeking clarity, trust PillAdvisor to guide you towards
            better health outcomes. Join us in our mission to simplify medicine
            information and enhance health literacy for all.
          </p>
        </div>

        <div className="d-flex flex-lg-row flex-column justify-content-between">
          <ServiceCard
            title="USES"
            li1="Explore the intended use and benefits of each medication."
            li2="Understand how it treats specific conditions or symptoms."
            icon={UsesIcon}
          />

          <ServiceCard
            title="WHEN TO BE EXTRA CAREFUL"
            li1="Learn about precautions and warnings associated with the medication."
            li2="Discover situations where special care or monitoring is necessary."
            icon={CarfulIcon}
          />

          <ServiceCard
            title="HOW TO TAKE IT"
            li1="Learn the correct dosage and how often to take the medication."
            li2="Understand whether you should take it with food, water, or at specific times."
            icon={HowtoIcon}
          />

          <ServiceCard
            title="POSSIBLE SIDE EFFECTS"
            li1="Be aware of common side effects, such as dizziness or nausea."
            li2="Know when to consult your doctor if side effects persist or worsen."
            icon={SideeffectIcon}
          />
        </div>
      </section>
    </>
  );
};

export default Services;
