import React from "react";
import Disp from "./Disp";

function Card({...props}) {
    return (
    <div className="card">
      {/* Profile Image & Name */}
      <div className="name-section">
        <img
          src={props.image}
          alt={`${props.firstName} ${props.lastName}`}
          className="image"
        />
        <h2 className="name">
          {props.firstName} {props.lastName}
        </h2>
        <p className="role">
          {props.role.toUpperCase()} {`(${props.gender})`}
        </p>
      </div>

      {/* Contact Info */}
      <div className="email-section">
        <p><span id="email-hold">Email:</span> {props.email}</p>
        <p><span id="email-hold">Phone:</span> {props.phone}</p>
      </div>

      {/* Address */}
      <div className="address-section">
        <p id="email-hold">Address:</p>
        <p>
          {props.address.address}, {props.address.city}, {props.address.state}, {props.address.country}
        </p>
      </div>

      {/* Company & Education */}
      <div className="address-section">
        <p><Disp data={"Company:"}/> {props.company.title} at {props.company.name}</p>
        <p><Disp data={"University:"}/> {props.university}</p>
      </div>

      {/* Crypto Info */}
      <div className="address-section">
        <p className="col">Crypto:</p>
        <p><Disp data={"Wallet:"}/> {props.crypto.wallet}</p>
        <p><Disp data={"Coin:"}/> {props.crypto.coin} ({props.crypto.network})</p>
      </div>
    </div>
  );
}

export default Card;