import { Col, Row, Card, Button } from "antd";
import Lottie from "lottie-react";

import "../../app/globals.css";
import animationOne from "../../../public/assets/animone.json";
import animationTwo from "../../../public/assets/animtwo.json";
import animationThree from "../../../public/assets/animthree.json";
import animationFour from "../../../public/assets/animfour.json";
import animationFive from "../../../public/assets/animfive.json";
import animationSix from "../../../public/assets/mobile-eight.json";
import animationSeven from "../../../public/assets/mobile-seven.json";
import animationEight from "../../../public/assets/uiuxdesign.json";

import "./service.css";

const Services = () => {
  return (
    <>
      <h1 className="text-4xl text-orange-500 underline">Current Services</h1>
      <Row gutter={[8, 4]}>
        {/* seventh one */}
        <Col xs={24} md={12}>
          <div className="flex flex-col justify-center h-[100%]">
            <h1 className="text-4xl p-2">Blockchain Technology</h1>
            <p className="p-2 description">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Accusamus dolorem asperiores
              corrupti quis doloribus. Quidem porro, possimus a doloremque
              tenetur veritatis tempora, delectus blanditiis voluptas modi
              dignissimos molestiae voluptates? Tempora!Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Accusamus dolorem asperiores
              corrupti quis doloribus. Quidem porro, possimus a doloremque
              tenetur veritatis tempora, delectus blanditiis voluptas modi
              dignissimos molestiae voluptates? Tempora!Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Accusamus dolorem asperiores
              corrupti quis doloribus. Quidem porro, possimus a doloremque
              tenetur veritatis tempora, delectus blanditiis voluptas modi
              dignissimos molestiae voluptates? Tempora! Accusamus dolorem
              asperiores corrupti quis doloribus. Quidem porro, possimus a
              doloremque tenetur veritatis tempora, delectus blanditiis voluptas
              modi dignissimos molestiae voluptates? Tempora!
            </p>
            <div className="flex gap-2 justify-start p-2">
              <Button>Learn More</Button>
              <Button danger type="primary">
                Book a Free Demo
              </Button>
            </div>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div className="flex flex-col justify-center items-center">
            <Lottie
              style={{
                height: 750,
                width: "auto",
                resizeMode: "contain",
              }}
              animationData={animationEight}
            />
          </div>
        </Col>

        {/* second one */}
        <Col xs={24} md={12}>
          <div className="flex flex-col justify-center items-center">
            <Lottie
              style={{
                height: 750,
                width: "auto",
                resizeMode: "contain",
              }}
              animationData={animationTwo}
            />
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div className="flex flex-col justify-center items-right h-[100%]">
            <h1 className="text-4xl p-2">Dashboard Building</h1>
            <p className="p-2 description">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Accusamus dolorem asperiores
              corrupti quis doloribus. Quidem porro, possimus a doloremque
              tenetur veritatis tempora, delectus blanditiis voluptas modi
              dignissimos molestiae voluptates? Tempora!Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Accusamus dolorem asperiores
              corrupti quis doloribus. Quidem porro, possimus a doloremque
              tenetur veritatis tempora, delectus blanditiis voluptas modi
              dignissimos molestiae voluptates? Tempora!Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Accusamus dolorem asperiores
              corrupti quis doloribus. Quidem porro, possimus a doloremque
              tenetur veritatis tempora, delectus blanditiis voluptas modi
              dignissimos molestiae voluptates.
            </p>
            <div className="flex gap-2 justify-start p-2">
              <Button>Learn More</Button>
              <Button danger type="primary">
                Book a Free Demo
              </Button>
            </div>
          </div>
        </Col>

        {/* third one */}
        <Col xs={24} md={12}>
          <div className="flex flex-col justify-center h-[100%]">
            <h1 className="text-4xl p-2">Layout Designing</h1>
            <p className="p-2 description">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Accusamus dolorem asperiores
              corrupti quis doloribus. Quidem porro, possimus a doloremque
              tenetur veritatis tempora, delectus blanditiis voluptas modi
              dignissimos molestiae voluptates? Tempora!Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Accusamus dolorem asperiores
              corrupti quis doloribus. Quidem porro, possimus a doloremque
              tenetur veritatis tempora, delectus blanditiis voluptas modi
              dignissimos molestiae voluptates? Tempora!Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Accusamus dolorem asperiores
              corrupti quis doloribus. Quidem porro, possimus a doloremque
              tenetur veritatis tempora, delectus blanditiis voluptas modi
              dignissimos molestiae voluptates? Tempora! Accusamus dolorem
              asperiores corrupti quis doloribus. Quidem porro, possimus a
              doloremque tenetur veritatis tempora, delectus blanditiis voluptas
              modi dignissimos molestiae voluptates? Tempora!
            </p>
            <div className="flex gap-2 justify-start p-2">
              <Button>Learn More</Button>
              <Button danger type="primary">
                Book a Free Demo
              </Button>
            </div>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div className="flex flex-col justify-center items-center">
            <Lottie
              style={{
                height: 750,
                width: "auto",
                resizeMode: "contain",
              }}
              animationData={animationFour}
            />
          </div>
        </Col>

        {/* fourth one */}
        <Col xs={24} md={12}>
          <div className="flex flex-col justify-center items-center">
            <Lottie
              style={{
                height: 750,
                width: "auto",
                resizeMode: "contain",
              }}
              animationData={animationFive}
            />
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div className="flex flex-col justify-center items-right h-[100%]">
            <h1 className="text-4xl p-2">Data Analysis</h1>
            <p className="p-2 description">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Accusamus dolorem asperiores
              corrupti quis doloribus. Quidem porro, possimus a doloremque
              tenetur veritatis tempora, delectus blanditiis voluptas modi
              dignissimos molestiae voluptates? Tempora!Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Accusamus dolorem asperiores
              corrupti quis doloribus. Quidem porro, possimus a doloremque
              tenetur veritatis tempora, delectus blanditiis voluptas modi
              dignissimos molestiae voluptates? Tempora!Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Accusamus dolorem asperiores
              corrupti quis doloribus. Quidem porro, possimus a doloremque
              tenetur veritatis tempora, delectus blanditiis voluptas modi
              dignissimos molestiae voluptates? Tempora! Accusamus dolorem
              asperiores corrupti quis doloribus. Tempora! Accusamus dolorem
              asperiores corrupti quis doloribus.
            </p>
            <div className="flex gap-2 justify-start p-2">
              <Button>Learn More</Button>
              <Button danger type="primary">
                Book a Free Demo
              </Button>
            </div>
          </div>
        </Col>

        {/* fifth one */}
        <Col xs={24} md={12}>
          <div className="flex flex-col justify-center h-[100%]">
            <h1 className="text-4xl p-2">Turn Your Idea Into Business</h1>
            <p className="p-2 description">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Accusamus dolorem asperiores
              corrupti quis doloribus. Quidem porro, possimus a doloremque
              tenetur veritatis tempora, delectus blanditiis voluptas modi
              dignissimos molestiae voluptates? Tempora!Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Accusamus dolorem asperiores
              corrupti quis doloribus. Quidem porro, possimus a doloremque
              tenetur veritatis tempora, delectus blanditiis voluptas modi
              dignissimos molestiae voluptates? Tempora!Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Accusamus dolorem asperiores
              corrupti quis doloribus. Quidem porro, possimus a doloremque
              tenetur veritatis tempora, delectus blanditiis voluptas modi
              dignissimos molestiae voluptates? Tempora! Accusamus dolorem
              asperiores corrupti quis doloribus. Quidem porro, possimus a
              doloremque tenetur veritatis tempora, delectus blanditiis voluptas
              modi dignissimos molestiae voluptates? Tempora!Tempora! Accusamus
              dolorem asperiores corrupti quis doloribus. Quidem porro, possimus
              a doloremque tenetur veritatis tempora, delectus blanditiis
              voluptas modi dignissimos molestiae voluptates? Tempora!
            </p>
            <div className="flex gap-2 justify-start p-2">
              <Button>Learn More</Button>
              <Button danger type="primary">
                Book a Free Demo
              </Button>
            </div>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div className="flex flex-col justify-center items-center">
            <Lottie
              style={{
                height: 750,
                width: "auto",
                resizeMode: "contain",
              }}
              animationData={animationSix}
            />
          </div>
        </Col>

        {/* sisxth one */}
        <Col xs={24} md={12}>
          <div className="flex flex-col justify-center items-center">
            <Lottie
              style={{
                height: 750,
                width: "auto",
                resizeMode: "contain",
              }}
              animationData={animationSeven}
            />
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div className="flex flex-col justify-center items-right h-[100%]">
            <h1 className="text-4xl p-2">Cool Animations</h1>
            <p className="p-2 description">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Accusamus dolorem asperiores
              corrupti quis doloribus. Quidem porro, possimus a doloremque
              tenetur veritatis tempora, delectus blanditiis voluptas modi
              dignissimos molestiae voluptates? Tempora!Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Accusamus dolorem asperiores
              corrupti quis doloribus. Quidem porro, possimus a doloremque
              tenetur veritatis tempora, delectus blanditiis voluptas modi
              dignissimos molestiae voluptates? Tempora!Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Accusamus dolorem asperiores
              corrupti quis doloribus. Quidem porro, possimus a doloremque
              tenetur veritatis tempora, delectus blanditiis voluptas modi
              dignissimos molestiae voluptates? Tempora! Accusamus dolorem
              asperiores corrupti quis doloribus.
            </p>
            <div className="flex gap-2 justify-start p-2">
              <Button>Learn More</Button>
              <Button danger type="primary">
                Book a Free Demo
              </Button>
            </div>
          </div>
        </Col>

        {/* last */}
        <Col xs={24} md={12}>
          <div className="flex flex-col justify-center h-[100%]">
            <h1 className="text-4xl p-2">UI/UX Designing</h1>
            <p className="p-2 description">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Accusamus dolorem asperiores
              corrupti quis doloribus. Quidem porro, possimus a doloremque
              tenetur veritatis tempora, delectus blanditiis voluptas modi
              dignissimos molestiae voluptates? Tempora!Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Accusamus dolorem asperiores
              corrupti quis doloribus. Quidem porro, possimus a doloremque
              tenetur veritatis tempora, delectus blanditiis voluptas modi
              dignissimos molestiae voluptates? Tempora!Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Accusamus dolorem asperiores
              corrupti quis doloribus. Quidem porro, possimus a doloremque
              tenetur veritatis tempora, delectus blanditiis voluptas modi
              dignissimos molestiae voluptates? Tempora! Accusamus dolorem
              asperiores corrupti quis doloribus.
            </p>
            <div className="flex gap-2 justify-start p-2">
              <Button>Learn More</Button>
              <Button danger type="primary">
                Book a Free Demo
              </Button>
            </div>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div className="flex flex-col justify-center items-center">
            <Lottie
              style={{
                height: 750,
                width: "auto",
                resizeMode: "contain",
              }}
              animationData={animationThree}
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Services;
