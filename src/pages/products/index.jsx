import { Card, Col, Row, Avatar, Button } from "antd";
const { Meta } = Card;

const ProductData = [
  {
    id: "1",
    title: "iPhone 9",
    img: "https://i.dummyjson.com/data/products/1/1.jpg",
    description: "An apple mobile which is nothing like apple",
  },
  {
    id: "2",
    title: "iPhone X",
    img: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
  },
  {
    id: "3",
    title: "Samsung Universe 9",
    img: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
  },
  {
    id: "4",
    title: "OPPOF19",
    img: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    description: "OPPO F19 is officially announced on April 2021.",
  },
  {
    id: "5",
    title: "Huawei P30",
    img: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
    description:
      "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
  },
  {
    id: "3",
    title: "Samsung Universe 9",
    img: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
  },
  {
    id: "4",
    title: "OPPOF19",
    img: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    description: "OPPO F19 is officially announced on April 2021.",
  },
  {
    id: "5",
    title: "Huawei P30",
    img: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
    description:
      "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
  },
  {
    id: "3",
    title: "Samsung Universe 9",
    img: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
  },
  {
    id: "4",
    title: "OPPOF19",
    img: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    description: "OPPO F19 is officially announced on April 2021.",
  },
  {
    id: "5",
    title: "Huawei P30",
    img: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
    description:
      "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
  },
  {
    id: "3",
    title: "Samsung Universe 9",
    img: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
  },
  {
    id: "4",
    title: "OPPOF19",
    img: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    description: "OPPO F19 is officially announced on April 2021.",
  },
  {
    id: "5",
    title: "Huawei P30",
    img: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
    description:
      "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
  },
  {
    id: "3",
    title: "Samsung Universe 9",
    img: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
  },
  {
    id: "4",
    title: "OPPOF19",
    img: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    description: "OPPO F19 is officially announced on April 2021.",
  },
];

function CardLayout(item) {
  return (
    <div>
      <Card
        style={{
          width: 300,
          margin: "10px",
        }}
        cover={<img alt={item.title} src={item.img} />}
      >
        <Meta title={item.title} description={item.description} />
        <Button style={{ marginTop: "8px" }} type="primary" danger>
          Order the Stock
        </Button>
      </Card>
    </div>
  );
}

const Products = () => {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          color: "orange",
          fontSize: "28px",
          padding: "5px",
        }}
      >
        <h1 className="text-4xl text-red-400 text-center">Products</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {ProductData.map(CardLayout)}{" "}
      </div>
    </>
  );
};

export default Products;
