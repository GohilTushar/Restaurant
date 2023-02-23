import React from "react";

const Navbar = ({ FI, ML }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {ML.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => FI(curElem)}>
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;