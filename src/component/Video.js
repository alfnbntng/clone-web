import React from "react";

function Video() {
  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide m-5"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://scontent.fsrg6-1.fna.fbcdn.net/v/t39.30808-6/315143437_816454119627515_3828624659286067285_n.jpg?stp=dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFtaU1bCpR3fv468Fv3eVFNQlpHjv-4Qn5CWkeO_7hCfvKfdxTgFq6dPSECH-B9qCFUR4Jj-isImln_YJfPpyeS&_nc_ohc=zqEAE10BPj0AX8YGaOu&_nc_ht=scontent.fsrg6-1.fna&oh=00_AfDADrnE0I2UGENQZBciJO9VSSNRxLoB8mWlnL7Z7LsFOg&oe=6372216B"
              class="d-block w-100"
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
