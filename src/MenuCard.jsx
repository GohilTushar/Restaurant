import React from "react";

const MenuCard = ({ mD }) => {
  //   console.log(menuData);

  return (
    <>
      <section className="main-card--cointainer">
        {mD.map((curElem) => {
          const { id, name, category, image, description } = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle">{id}</span>
                    <span className="card-author"> {category}</span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                  </div>
                  <img src={image} alt="images" className="card-media" />
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;