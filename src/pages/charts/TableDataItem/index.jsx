import React from "react";
import { Space, Table, Card, Tag, Button } from "antd";
const columns = [
  {
    title: "Id",
    dataIndex: "key",
    key: "id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Product",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Price/Unit",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Sold Units",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Top Countries",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Button danger>Edit</Button>
        <Button type="primary" danger>
          Delete
        </Button>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "Petrolium",
    age: "$118.75",
    address: "80,000.00",
    tags: ["USA", "Arab Emirates"],
  },
  {
    key: "2",
    name: "LPG",
    age: "$98.72",
    address: "90,000.00",
    tags: ["India"],
  },
  {
    key: "3",
    name: "CNG",
    age: "$108.32",
    address: "82,000.00",
    tags: ["Japan", "Sanfransisco"],
  },
  {
    key: "4",
    name: "Barley",
    age: "$128.32",
    address: "72,000.00",
    tags: ["Japan", "Germany"],
  },
  {
    key: "5",
    name: "Wheat",
    age: "$188.32",
    address: "82,000.00",
    tags: ["Iran", "Moraco"],
  },
  {
    key: "6",
    name: "Paddy",
    age: "$138.32",
    address: "62,000.00",
    tags: ["South Africa"],
  },
];
const App = () => (
  <Card title="International Products Sales" hoverable>
    <Table columns={columns} dataSource={data} />
  </Card>
);
export default App;
