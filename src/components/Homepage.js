import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import News from "./News";
import Cryptocurrencies from "./Cryptocurrencies";

import { useGetCryptosQuery } from "../services/cryptoApi";

const { Title } = Typography;

function Homepage() {
  const { data, isFetching } = useGetCryptosQuery();
  const globalStats = data;

  if (isFetching) return "loading ....";

  return (
    <div>
      <Title level={2}> Global Crypto Stats</Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrencies"
            value={globalStats.data.stats.total}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.data.stats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.data.stats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats.data.stats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market"
            value={millify(globalStats.data.stats.totalMarkets)}
          />
        </Col>
      </Row>
      <div>
        <Title level={2}>Top 10 Cryptocurrencies in the world</Title>
        <Title level={3}>
          <Link to="/cryptocurrencies"> Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div>
        <Title level={2}> Latest Crypto News</Title>
        <Title level={3}>
          <Link to="/news" simplified>
            Show More
          </Link>
        </Title>
      </div>
      <News />
    </div>
  );
}

export default Homepage;
