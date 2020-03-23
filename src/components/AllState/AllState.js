import React from "react";

const AllState = ({ state, confirmed, foreign, cured, death }) => {
  return (
    <div className="card 1">
      <div className="card_title title-white">
        <p>State : {state}</p>
      </div>
      <div className="info">Confirmed: {confirmed}</div>
      <div className="info">Foreign: {foreign}</div>
      <div className="info">Cured/Discharded: {cured}</div>
      <div className="info">Deaths: {death}</div>
    </div>
  );
};

export default AllState;
