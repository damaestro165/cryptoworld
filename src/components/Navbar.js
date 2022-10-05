import React from "react";
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
    <div className="">
      <div className="">
        <Avatar />
        <Typography.Title level={2} className="logo">
          <Link to="/">Crypto World</Link>
        </Typography.Title>
      </div>
      <Menu>
        <Menu.Item icon={<AiOutlineHome />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<AiOutlineFund />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<AiOutlineMoneyCollect />}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<AiOutlineBulb />}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
