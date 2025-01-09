'use client'
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";

const Navbar2Bootsrapp = () => {
  // .dropdown-menu {
  //   width: 600px;
  //   display: flex;
  //   flex-wrap: wrap;
  // }
  // .dropdown-menu div {
  //   flex: 1 1 33.3333%; /* 1/3 width */
  // }
  // .dropdown-menu a {
  //   white-space: normal; /* Allow text to wrap */
  // }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              CRICKET
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              LIVE
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              SPORTS
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white btn btn-danger rounded"
              href="#"
            >
              BONUSES
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              LIVE CASINO
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              CASINO
            </a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="#">
              MEGAGAMES
            </a>
          </li> */}
          {/* MEGAGAMES Dropdown */}
          <Dropdown className="nav-item">
            <Dropdown.Toggle
              className="nav-link bg-transparent border-0"
              id="dropdown-megagames"
            >
              MEGAGAMES
            </Dropdown.Toggle>
            <Dropdown.Menu className="p-3"  style={{ width:'600px', display:'flex', flexWrap: 'wrap', display: 'none' }}>
              <div className="row">
                <div style="flex: 1 1 33.3333%;" className="col">
                  <p className="dropdown-item">Crash</p>
                  <p className="dropdown-item">Crystal</p>
                  <p className="dropdown-item">Western Slot</p>
                  <p className="dropdown-item">21</p>
                  <p className="dropdown-item">Under and Over 7</p>
                </div>
                <div style="flex: 1 1 33.3333%;" className="col">
                  <p className="dropdown-item">Solitaire</p>
                  <p className="dropdown-item">Vampire Curse</p>
                  <p className="dropdown-item">Scratch Card</p>
                  <p className="dropdown-item">Las Vegas</p>
                  <p className="dropdown-item">Mayan Tomb</p>
                </div>
                <div style="flex: 1 1 33.3333%;" className="col">
                  <p className="dropdown-item">Burning Hot</p>
                  <p className="dropdown-item">Apple Of Fortune</p>
                  <p className="dropdown-item">Midgard Zombies</p>
                  <p className="dropdown-item">Spin and Win</p>
                  <p className="dropdown-item">Gems Odyssey</p>
                </div>
              </div>
            </Dropdown.Menu>
          </Dropdown>
          <li className="nav-item">
            <a className="nav-link" href="#">
              ESPORTS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              MORE
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Crash
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar2Bootsrapp;
