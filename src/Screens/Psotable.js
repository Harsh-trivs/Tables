import React from "react";
import PsoRow from "../components/PsoRow";

export default function PsoTable() {
  const data = [
    { co: "CO502.1", po: [3, 8, 7, 3, 4, 1, 1, 0, 3, 4, 2, 1], pso: [1, 0, 1] },
    { co: "CO502.2", po: [2, 4, 4, 4, 3, 1, 0, 0, 3, 4, 1, 1], pso: [1, 1, 1] },
    { co: "CO502.3", po: [3, 9, 2, 5, 3, 1, 0, 0, 3, 3, 1, 2], pso: [1, 0, 1] },
    { co: "CO502.4", po: [3, 4, 4, 2, 3, 0, 0, 1, 2, 3, 2, 2], pso: [1, 1, 1] },
    { co: "CO502.5", po: [3, 7, 4, 2, 2, 1, 0, 1, 2, 2, 2, 2], pso: [0, 1, 1] },
    { co: "CO502.6", po: [2, 4, 3, 4, 2, 1, 0, 1, 2, 2, 1, 2], pso: [0, 1, 1] },
  ];
  return (
    <>
      <div className="container-fluid vh-100 vw-100 custom-table overflow-auto">
        <div className="container-fluid bg-dark text-white cusTable">
          <div className="row bg-dark text-white no-wrap fs-4 d-flex justify-content-center font-weight-bold">
            TOTAL COUNT OF PERFORMANCE INDICATOR FOR CO – PO/ PSO MAPPING
          </div>
          <div className="row">
            <div className="col-1 fs-5 font-weight-bold">Course Outcome</div>
            <div className="col-9">
              <div className="row program-outcomes  d-flex justify-content-center fs-5 font-weight-bold ">
                Program Outcomes (PO)
              </div>
              <div className="row">
                <div className="col">PO1</div>
                <div className="col">PO2</div>
                <div className="col">PO3</div>
                <div className="col">PO4</div>
                <div className="col">PO5</div>
                <div className="col">PO6</div>
                <div className="col">PO7</div>
                <div className="col">PO8</div>
                <div className="col">PO9</div>
                <div className="col">P10</div>
                <div className="col">P11</div>
                <div className="col">P12</div>
              </div>
            </div>
            <div className="col-2">
              <div className="row program-specific-outcome  d-flex justify-content-center fs-5 font-weight-bold">
                Program Specific outcome(PSO)
              </div>
              <div className="row">
                <div className="col">PO1</div>
                <div className="col">PO1</div>
                <div className="col">PO1</div>
              </div>
            </div>
          </div>

          {/* entries */}
          {data.map((item, index) => (
            <>
              <PsoRow co={item.co} pso={item.pso} po={item.po} />
            </>
          ))}
        </div>
      </div>
    </>
  );
}
