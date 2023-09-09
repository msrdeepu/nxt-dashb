import { Card, Col, Row, Avatar } from "antd";
const { Meta } = Card;
import { useState } from "react";

function CardLayout(item) {
  return (
    <Card
      style={{
        width: 300,
      }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
    >
      <Meta title={item.title} description={item.description} />
    </Card>
  );
}

const Products = () => {
  const [productslist, setProducts] = useState(null);
  const onGetData = () => {
    fetch("https://dummyjson.com/products")
      .then((r) => r.json())
      .then((result) => {
        let products = result.products;
        setProducts(products);
        // console.log(productslist);
        console.log(productslist.title);
      });
  };
  return (
    <>
      {" "}
      <button onClick={onGetData}>click</button>
      <Row gutter={[8, 4]}>
        {/* <Col xs={24} md={6}>
          {productslist.map((item) => {
            return (
              <Card
                key={item.id}
                style={{
                  width: 300,
                }}
                cover={
                  <img
                    alt="example"
                    src="https://i.stack.imgur.com/ajkWh.png"
                  />
                }
              >
                <Meta title={item.title} description={item.description} />
              </Card>
            );
          })}
        </Col> */}
      </Row>
    </>
  );
};

export default Products;
