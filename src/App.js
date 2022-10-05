import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import Homepage from "./components/Homepage";
import Exchanges from "./components/Exchanges";
import Cryptocurrencies from "./components/Cryptocurrencies";
import Cryptodetails from "./components/Cryptodetails";
import News from "./components/News";
import Navbar from ".//components/Navbar";

const App = () => {
  return (
    <div>
      <div className="flex flex-row">
        <div className="w-2/5">
          <Navbar />
        </div>
        <div className="m-5">
          <Layout>
            <div>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/exchanges" element={<Exchanges />} />
                <Route
                  path="/cryptocurrencies"
                  element={<Cryptocurrencies />}
                />
                <Route path="/cryptodetails" element={<Cryptodetails />} />
                <Route path="/news" element={<News />} />
              </Routes>
            </div>
          </Layout>
        </div>
      </div>

      <footer className="">
        <Typography.Title level={5}>
          Crypto World <br />
          All rights Reserved
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </footer>
    </div>
  );
};

export default App;
