import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import { Col, Row, Typography, Select } from "antd";
import millify from "millify";
import {
  useGetCrpytoDetailsQuery,
  useGetCrpytoHistoryQuery,
} from "../services/cryptoApi";
const { Title, Text } = Typography;

const Cryptodetails = () => {
  const [timePeriod, setTimePeriod] = useState("7d");
  const { coinId } = useParams();
  const {
    data: cryptoDetails,
    isLoading,
    isSuccess,
  } = useGetCrpytoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCrpytoHistoryQuery({
    coinId,
    timePeriod,
  });

  let coinData;
  if (isSuccess) {
    coinData = cryptoDetails.data.coin;
  }

  return (
    <div>
      {isSuccess && (
        <Col>
          <Col>
            <Title level={2}>
              {coinData.name} {coinData.symbol} Price
            </Title>
            <p>
              {coinData.name} live price in US dollars. View value statitics,
              market cap and supply
            </p>
            <p>{millify(coinData.price)}</p>
          </Col>

          <Col>
            <Row>
              <Title level={3} className="coin-details-heading">
                What is {coinData.name}?
              </Title>
              {HTMLReactParser(coinData.description)}
            </Row>
            <Col className="coin-links">
              <Title level={3} className="coin-details-heading">
                {coinData.name} Links
              </Title>
              {coinData.links.map((link) => (
                <Row className="coin-link" key={link.name}>
                  <Title level={5} className="link-name">
                    {link.type}
                  </Title>
                  <a href={link.url} target="_blank" rel="noreferrer">
                    {link.name}
                  </a>
                </Row>
              ))}
            </Col>
          </Col>
        </Col>
      )}
    </div>
  );
};

export default Cryptodetails;
