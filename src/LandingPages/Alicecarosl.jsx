import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaPeopleRoof } from "react-icons/fa6";
import { BsFillBagCheckFill } from "react-icons/bs";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BiCheckbox } from "react-icons/bi";
import "./Alice.css";
import { Link } from "react-router-dom";

function Alicecarosl() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const cardBackgroundColor = isHovered ? "#FFD700" : "#FFB233";
  return (
    <>
      <div class="container-fluid ">
        <div className="row">
          <div className="col-md-3">
            <div
              className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
              style={{ width: "350px", height: "1500px", marginTop: "auto" }}
            >
              <a
                href="/"
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <svg className="bi pe-none me-2" width={40} height={32}>
                  <use xlinkHref="#bootstrap" />
                </svg>
                <span className="fs-4">Sidebar</span>
              </a>
              <hr />
              <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                  <a href="#" className="nav-link active" aria-current="page">
                    <svg className="bi pe-none me-2" width={16} height={16}>
                      <use xlinkHref="#home" />
                    </svg>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link text-white">
                    <svg className="bi pe-none me-2" width={16} height={16}>
                      <use xlinkHref="#speedometer2" />
                    </svg>
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link text-white">
                    <svg className="bi pe-none me-2" width={16} height={16}>
                      <use xlinkHref="#table" />
                    </svg>
                    Orders
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link text-white">
                    <svg className="bi pe-none me-2" width={16} height={16}>
                      <use xlinkHref="#grid" />
                    </svg>
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link text-white">
                    <svg className="bi pe-none me-2" width={16} height={16}>
                      <use xlinkHref="#people-circle" />
                    </svg>
                    Customers
                  </a>
                </li>
              </ul>
              <hr />
              <div className="dropdown">
                <a
                  href="#"
                  className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://github.com/mdo.png"
                    alt
                    width={32}
                    height={32}
                    className="rounded-circle me-2"
                  />
                  <strong>mdo</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                  <li>
                    <a className="dropdown-item" href="#">
                      New project...
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row   justify-content-around p-2">
              <div
                className={`col-md-2 border-5 card ${
                  isHovered ? "hover-effect" : ""
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div class="card-body">
                  <h5 class="card-title">
                    <BsFillPeopleFill />
                  </h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">
                    Total Users
                  </h6>
                  <p class="card-text">15,845</p>
                </div>
              </div>
              <div
                className={`col-md-2 border-5 card ${
                  isHovered ? "hover-effect" : ""
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div class="card-body">
                  <h5 class="card-title">
                    <FaPeopleRoof />
                  </h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">
                    New Customers
                  </h6>
                  <p class="card-text">15,845</p>
                </div>
              </div>
              <div
                className={`col-md-2 border-5 card ${
                  isHovered ? "hover-effect" : ""
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div class="card-body">
                  <h5 class="card-title">
                    <BsFillBagCheckFill />
                  </h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">
                    Total Order
                  </h6>
                  <p class="card-text">15,845</p>
                </div>
              </div>{" "}
              <div
                className={`col-md-2 border-5 card ${
                  isHovered ? "hover-effect" : ""
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div class="card-body">
                  <h5 class="card-title">
                    <FaMoneyBillTrendUp />
                  </h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">
                    Total Earning
                  </h6>
                  <p class="card-text">15,845</p>
                </div>
              </div>
            </div>

            <div
              className="row  col-md-12"
              style={{
                backgroundColor: "#f5f5f5",
                padding: "20px",
                borderRadius: "12px",
              }}
            >
              <div className="container">
                <div
                  id="demo"
                  className="carousel slider"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#demo"
                      data-bs-slide-to={0}
                      className="active"
                    />
                    <button
                      type="button"
                      data-bs-target="#demo"
                      data-bs-slide-to={1}
                    />
                    <button
                      type="button"
                      data-bs-target="#demo"
                      data-bs-slide-to={2}
                    />
                  </div>

                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQusQJOlxZh884fLd-80rc-hBAcFZG_Ks0D8Q&usqp=CAU"
                        alt="Los Angeles"
                        className="d-block"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgdx6NCvWLxwzhTy67vS0tC5dzmIo859GKLg&usqp=CAU"
                        alt="Chicago"
                        className="d-block"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFqYTVgwPK1SA4XfnH7jPS6BrIk1wLhXzzkQ&usqp=CAU"
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
            </div>
            <div className="row   justify-content-around p-2">
              <div className="col-md-5 ">
                <ul class="list-group">
                  <li class="list-group-item text-start">
                    <h4>My Activities</h4>
                  </li>
                  <li class="list-group-item text-start">
                    <h3>
                      <AiOutlineUnorderedList />
                      <span class="fs-6">Correct Discount Amount</span>
                    </h3>
                  </li>
                  <li class="list-group-item text-start">
                    <h3>
                      <AiOutlineUnorderedList />
                      <span class="fs-6">
                        Handling the Order Shippping Provided
                      </span>
                    </h3>
                  </li>
                  <li class="list-group-item text-start">
                    <h3>
                      <AiOutlineUnorderedList />
                      <span class="fs-6">Payment issue Check</span>
                    </h3>
                  </li>
                  <li class="list-group-item ">
                    <h3 class="text-start">
                      <AiOutlineUnorderedList />
                      <span class="fs-6">Prepare product presentation</span>
                    </h3>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 ">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col" class="fs-4">
                        <BiCheckbox />
                      </th>
                      <th scope="col" class="fs-5">
                        Name
                      </th>
                      <th scope="col" class="fs-5">
                        Product Name
                      </th>
                      <th scope="col" class="fs-5">
                        Type
                      </th>
                      <th scope="col" class="fs-5">
                        Priority
                      </th>
                      <th scope="col" class="fs-5">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row"></th>
                      <td class="fs-6">
                        <BiCheckbox />1
                      </td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row"></th>
                      <td class="fs-6">
                        <BiCheckbox />2
                      </td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>@fat</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row"></th>
                      <td class="fs-6">
                        <BiCheckbox />3
                      </td>
                      <td>@twitter</td>
                      <td>@twitter</td>
                      <td>@twitter</td>
                      <td>@twitter</td>
                    </tr>
                    <tr>
                      <th scope="row"></th>
                      <td class="fs-6">
                        <BiCheckbox />4
                      </td>
                      <td>@twitter</td>
                      <td>@twitter</td>
                      <td>@twitter</td>
                      <td>@twitter</td>
                    </tr>
                    <tr>
                      <th scope="row"></th>
                      <td class="fs-6">
                        <BiCheckbox />5
                      </td>
                      <td>@twitter</td>
                      <td>@twitter</td>
                      <td>@twitter</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="ms-5">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <Link to="/login">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link to="/login"> <a className="page-link" href="#">
                      2
                    </a></Link>
                   
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Alicecarosl;
