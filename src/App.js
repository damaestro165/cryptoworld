import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import Homepage from "./components/Homepage";

import Cryptocurrencies from "./components/Cryptocurrencies";
import Cryptodetails from "./components/Cryptodetails";
import News from "./components/News";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <Navbar />
        </div>
        <div className="">
          <Layout className="layout">
            <div>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route
                  path="/cryptocurrencies"
                  element={<Cryptocurrencies />}
                />
                <Route path="/crypto/:coinId" element={<Cryptodetails />} />
                <Route path="/news" element={<News />} />
              </Routes>
            </div>
          </Layout>
        </div>
      </div>

      <footer className="footer">
        <Typography.Title level={5}>
          Crypto World <br />
          All rights Reserved
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
        </Space>
      </footer>
    </div>
  );
};

export default App;
