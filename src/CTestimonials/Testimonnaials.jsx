import React from "react";
import "./Testimonial.css";

const Testimonnaials = () => {
  return (
    <section className="testimonials container ">
      <div className="uppersection text-center">
        <h1 className="brandcolor pt-5">Client Testimonials</h1>
        <p className="text-center">This is what users say about our service</p>
        <div className="tsection w-75 mx-auto mt-5 p-4 rounded-2">
          <p>
            Boost your product and service's credibility by adding testimonials
            from your clients. People love recommendations so feedback from
            others who've tried it is invaluable.
          </p>
          <p className="brandcolor text-center">
            <b>- Carly Ferris, Strews Inc -</b>
          </p>
        </div>
      </div>

      <div className="lowersection text-center">
      <h1 className="brandcolor">Search Count</h1>
      <h2 className="brandcolor">001</h2>
      <p className="text-center">See how often medications are searched, trusted by our users.</p>
      </div>
    </section>
  );
};

export default Testimonnaials;
