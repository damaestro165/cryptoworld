import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

import { useGetCryptosQuery } from "../services/cryptoApi";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const {
    data: cryptoList,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptoList.data.coins);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredData = cryptoList.data.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptoList, searchTerm]);

  let cryptoContent;

  if (isLoading) {
    cryptoContent = <div>Loading.....</div>;
  } else if (isSuccess) {
    cryptoContent = (
      <div>
        {!simplified && (
          <div>
            <Input
              placeholder="Search Cryptocurrency"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        )}

        <Row gutter={[32, 32]}>
          {cryptos.map((crypto) => (
            <Col xs={24} sm={12} lg={6} key={crypto.uuid}>
              <Link to={`/crypto/${crypto.uuid}`}>
                <Card
                  title={`${crypto.rank}. ${crypto.name}`}
                  extra={
                    <img
                      src={crypto.iconUrl}
                      style={{ maxWidth: "100px", maxHeight: "100px" }}
                    />
                  }
                >
                  <p>Price: {millify(crypto.price)} </p>
                  <p>Market Cap: {millify(crypto.marketCap)} </p>
                  <p>Daily Change: {millify(crypto.change)}% </p>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    );
  } else if (isError) {
    cryptoContent = <div>{error}</div>;
  }

  return <div>{cryptoContent}</div>;
};

export default Cryptocurrencies;
