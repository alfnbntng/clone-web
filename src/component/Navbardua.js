import React from "react";
import { Link } from "react-router-dom";

function Navbardua() {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-light bg-white fixed-top"
        style={{ margin: "0", marginBottom: "30px" }}
      >
        <div class="container">
          <a
            class="navbar-brand me-2"
            style={{ color: "black" }}
            href="https://mdbgo.com/"
          >
            <img
              src="https://pbs.twimg.com/profile_images/594720057688625152/pxzB_GLv_400x400.jpg"
              alt="MDB Logo"
              loading="lazy"
              style={{
                color: "black",
                marginTop: "-1px;",
                height: "80px",
                width: "80px",
              }}
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
              <Link to="/" class="nav-link  text-dark" role="button">
                HOME
              </Link>
              <li class="nav-item dropdown">
                <Link
                  to="/shop"
                  class="nav-link dropdown-toggle text-dark"
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
                class="nav-link  text-dark"
                role="button"
              >
                THE SEX PISTOLS EDITION
              </Link>
              <Link to="/about" class="nav-link  text-dark" role="button">
                MAGAZINE
              </Link>
            </ul>
          </div>
          <a
            class="nav-link text-dark"
            role="button"
            style={{ justifyContent: "space-between", padding: "11px" }}
          >
            <i class="fa-regular fa-user"></i>
          </a>
          <a
            class="nav-link text-dark"
            role="button"
            style={{ justifyContent: "space-between", padding: "11px" }}
          >
            <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
          </a>
          <a
            class="nav-link text-dark"
            role="button"
            style={{ justifyContent: "space-between", padding: "11px" }}
          >
            <i class="fa-solid fa-cart-shopping"></i>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbardua;
