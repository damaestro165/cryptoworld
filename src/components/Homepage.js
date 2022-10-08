import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import News from "./News";
import Cryptocurrencies from "./Cryptocurrencies";

import { useGetCryptosQuery } from "../services/cryptoApi";

const { Title } = Typography;

function Homepage() {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data;

  if (isFetching) return "loading ....";

  return (
    <div className="">
      <Title level={2} className="big-text">
        Global Crypto Stats
      </Title>
      <Row className="stats-container">
        <Col className="stats-items">
          <p className="stats-title"> Total Cryptocurrencies</p>
          <p>{globalStats.data.stats.total}</p>
        </Col>
        <Col className="stats-items">
          <p className="stats-title">Total Exchanges</p>
          <p>{millify(globalStats.data.stats.totalExchanges)}</p>
        </Col>
        <Col className="stats-items">
          <p className="stats-title">Total Market Cap</p>
          <p>{millify(globalStats.data.stats.totalMarketCap)}</p>
        </Col>
        <Col className="stats-items">
          <p className="stats-title">Total 24h Volume</p>
          <p>{millify(globalStats.data.stats.total24hVolume)}</p>
        </Col>
        <Col className="stats-items">
          <p className="stats-title">Total Market</p>
          <p>{millify(globalStats.data.stats.totalMarkets)}</p>
        </Col>
      </Row>
      <div className="section">
        <p className="section-title">Top 10 Cryptocurrencies in the world</p>
        <p>
          <Link to="/cryptocurrencies" className="section-title">
            Show More
          </Link>
        </p>
      </div>
      <Cryptocurrencies simplified />
      <div className="section">
        <p className="section-title"> Latest Crypto News</p>
        <p>
          <Link to="/news" className="section-title">
            Show More
          </Link>
        </p>
      </div>
      <News simplified />
    </div>
  );
}

export default Homepage;
