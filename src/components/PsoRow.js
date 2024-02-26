import React from "react";

function PsoRow({ co, po, pso }) {
  return (
    <>
      {console.log(po)}
      <div className="row">
        <div className="col-1">{co}</div>
        <div className="col-9">
          <div className="row">
            {po.map((item, index) => (
              <div className="col" key={index}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="col-2">
          <div className="row">
            {pso.map((item, index) => (
              <div className="col" key={index}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PsoRow;
