import React from "react";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import Navbar2 from "../navbar2/navbar2";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Breadcrumb />
      {children}
      <Footer />
    </div>
  );
};

export { Layout };
