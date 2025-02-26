import React from "react";
import "./ServiceCard.css";


const ServiceCard = (props) => {
  return (
    <div className="card s p-3 mt-3">
      <img src={props.icon} alt="service icon" width={100} className="mx-auto"/>
      <h4 className="brandcolor">{props.title}</h4>
      <ul className="list">
        <li>{props.li1}</li>
        <li className="pt-2">{props.li2}</li>
      </ul>
    </div>
  );
};

export default ServiceCard;
