import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ ...props }) {
  // const navigate = useNavigate();

  // const handleClick = () => {
    // navigate(`/person/${props.id}`);
  // };

  return (
    <div
      onClick={props.onClick}
      className="w-72 p-6 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg text-white cursor-pointer transition-transform hover:scale-105 hover:bg-white/20 border border-white/20"
    >
      {/* Profile Image & Name */}
      <div className="flex flex-col items-center text-center">
        <img
          src={props.image}
          alt={`${props.firstName} ${props.lastName}`}
          className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-white/50"
        />
        <h2 className="text-xl font-semibold">
          {props.firstName} {props.lastName}
        </h2>
        <p className="text-sm opacity-80">
          {props.role?.toUpperCase()} {`(${props.gender})`}
        </p>
      </div>
    </div>
  );
}

export default Card;
