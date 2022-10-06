import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptosNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Content } from "antd/lib/layout/layout";

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const [newsCategory, setnewsCategory] = useState("Cryptocurrency");
  const {
    data: cryptoNews,
    isLoading,
    isSuccess,
    isError,
  } = useGetCryptosNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });

  const { data } = useGetCryptosQuery(100);

  let content;

  if (isLoading) {
    content = <div>Loading .......</div>;
  } else if (isSuccess) {
    content = (
      <div>
        {!simplified && (
          <Col span={24}>
            <Select
              showSearch
              placeholder="Select a Crypto"
              optionFilterProp="children"
              onChange={(value) => setnewsCategory(value)}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 3
              }
            >
              <Option value="Cryptocurrency">Cryptocurrency</Option>
              {data.data.coins.map((coin) => (
                <Option value={coin.name}>{coin.name}</Option>
              ))}
            </Select>
          </Col>
        )}
        <Row gutter={[24, 24]}>
          {cryptoNews.value.map((news, i) => (
            <Col xs={24} sm={12} lg={8} key={i}>
              <Card hoverable>
                <div>
                  <Title level={4}>{news.name}</Title>

                  <p>
                    {news.description > 100
                      ? `${news.description.substring(0, 100)}...`
                      : news.description}
                  </p>
                </div>
                <Avatar src={news.provider[0].imagel} />
                <Text>
                  {moment(news.dataPublished)
                    .startOf("ss")
                    .fromNow()}
                </Text>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  } else if (isError) {
    content = <div>Error</div>;
  }

  return <div>{content}</div>;
};

export default News;
