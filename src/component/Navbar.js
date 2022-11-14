import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div
        class="navbar navbar-expand-lg navbar-light bg-transparent"
        style={{ margin: "8px" }}
      >
        <div class="container">
          <a class="navbar-brand me-2" href="https://mdbgo.com/">
            <img
              src="https://cdn.shopify.com/s/files/1/1365/9261/files/Overlay-Logo-Image-Web-_Width-in-pixels-di-shopifynya-set-di-50px_41ce6155-94b8-411f-b888-0aed4751d293.png?v=1663217107"
              alt="MDB Logo"
              loading="lazy"
              style={{ marginTop: "-1px;", height: "80px", width: "80px" }}
            />
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul class="navbar-nav">
              <Link to="/" class="nav-link  text-white" role="button">
                HOME
              </Link>
              <li class="nav-item dropdown">
                <Link
                  to="/shop"
                  class="nav-link dropdown-toggle text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SHOP
                </Link>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li>
                    <Link to="/tshirt" class="dropdown-item" href="#">
                      T-Shirt
                    </Link>
                  </li>
                  <li>
                    <Link to="/shirt" class="dropdown-item" href="#">
                      Shirt
                    </Link>
                  </li>
                  <li>
                    <Link to="/sweater" class="dropdown-item" href="#">
                      Sweater
                    </Link>
                  </li>
                  <li>
                    <Link to="/poloshirt" class="dropdown-item" href="#">
                      Polo Shirt
                    </Link>
                  </li>
                  <li>
                    <Link to="/jacket" class="dropdown-item" href="#">
                      Jacket
                    </Link>
                  </li>
                  <li>
                    <Link to="/pants" class="dropdown-item" href="#">
                      Pants
                    </Link>
                  </li>
                  <li>
                    <Link to="/accesories" class="dropdown-item" href="#">
                      Accessories
                    </Link>
                  </li>
                </ul>
              </li>
              <Link
                to="/thesexpistolsedition"
                class="nav-link  text-white"
                role="button"
              >
                THE SEX PISTOLS EDITION
              </Link>
              <Link to="/about" class="nav-link  text-white" role="button">
                MAGAZINE
              </Link>
            </ul>
          </div>
          <a
            class="nav-link text-white"
            role="button"
            style={{ justifyContent: "space-between", padding: "11px" }}
          >
            <i class="fa-regular fa-user"></i>
          </a>
          <a
            class="nav-link text-white"
            role="button"
            style={{ justifyContent: "space-between", padding: "11px" }}
          >
            <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
          </a>
          <a
            class="nav-link text-white"
            role="button"
            style={{ justifyContent: "space-between", padding: "11px" }}
          >
            <i class="fa-solid fa-cart-shopping"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
