import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="container">
        <div id="demo" className="carousel slider" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to={0}
              className="active"
            />
            <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
            <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://royalmarriagebureau.com/static/media/slider9.e3fcbf8862fbd29893e1.jpg"
                alt="Los Angeles"
                className="d-block"
                style={{ width: "100%" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://royalmarriagebureau.com/static/media/slider4.86898599839b839d76f0.jpg"
                alt="Chicago"
                className="d-block"
                style={{ width: "100%" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://royalmarriagebureau.com/static/media/slider11.da2842592be43e71da35.jpg"
                alt="New York"
                className="d-block"
                style={{ width: "100%" }}
              />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" />
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
