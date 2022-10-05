import React, { useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

import { useGetCryptosQuery } from "../services/cryptoApi";

const Cryptocurrencies = () => {
  const { data: cryptoList, isFetching } = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState(cryptoList.data.coins);
  console.log(cryptos);
  return (
    <div>
      <Row gutters={[32, 32]}>
        {cryptos.map((crypto) => (
          <Col xs={24} sm={12} lg={6} key={crypto.id}>
            <Link to={`/crypto/${crypto.id}`}>
              <Card title={`${crypto.rank}. ${crypto.name}`}></Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Cryptocurrencies;
