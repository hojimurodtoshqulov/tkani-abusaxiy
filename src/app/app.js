import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react";
import ProductCard from "./components/productCard/ProductCard";
import Home from "./pages/home/home";
import { Layout } from "./components/Layout/layout";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Layout>
    </div>

  )
}

export default App;
