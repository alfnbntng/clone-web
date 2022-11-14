import React from "react";

function Caresoul() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
        style={{ height: "720px", width: "1280" }}
      >
        <div class="carousel-inner">
          \
          <div class="carousel-item">
            <img
              src="https://cf.shopee.co.id/file/2306106324002638339fb088074b5398"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item active">
            <img
              src="https://cf.shopee.co.id/file/9c6ac3ee4638b9f32af7204559fdac3a
               "
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item ">
            <img
              src="https://cf.shopee.co.id/file/6e01379e6ae4e59ecfb237733e8a87f2"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item ">
            <img
              src="https://cf.shopee.co.id/file/a27fd3702206a68452c5eed18485c091"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Caresoul;
