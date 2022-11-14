import React from "react";
import Navbar from "../component/Navbar";
import Caresoul from "../component/Caresoul";
import Product from "../component/Product";
import Video from "../component/Video";
import Footer from "../component/Footer";
import Navbardua from "../component/Navbardua";

function Home() {
  return (
    <div>
      <Navbar />
      <Caresoul />
      <Navbardua />
      <Product />
      <br />
      <br />
      <Video />
      <br />
      <Footer />
    </div>
  );
}

export default Home;
