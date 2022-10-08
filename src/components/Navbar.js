import React from "react";
import "./navbar.css";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineMoneyCollect,
  AiOutlineBulb,
  AiOutlineFund,
} from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">
        <Typography.Title level={2}>
          <Link to="/" className="logo-text">
            Crypto World
          </Link>
        </Typography.Title>
      </div>
      <Menu className="nav-menu">
        <Menu.Item icon={<AiOutlineHome />} className="nav-menu-items">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<AiOutlineFund />} className="nav-menu-items">
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>

        <Menu.Item icon={<AiOutlineBulb />} className="nav-menu-items">
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
