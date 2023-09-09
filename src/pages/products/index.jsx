import React from "react";
//antd
import { Button } from "antd";

import "../../app/globals.css";
import Lottie from "lottie-react";
import animationOne from "../../../public/assets/animone.json";
import animationTwo from "../../../public/assets/animtwo.json";
import animationThree from "../../../public/assets/animthree.json";
import animationFour from "../../../public/assets/animfour.json";
import animationFive from "../../../public/assets/animfive.json";

const Products = () => {
  return (
    <>
      <div className="h-[60vh] flex xs:flex-column md:flex-row items-center justify-center text-orange">
        <div className="space-y-4 w-[60%]">
          <h1 className="text-2xl font-bold">
            Create amazing Applications with React js <br />
            Expore This Amazing Dashboard
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            repellendus, ipsa quam cumque odit ex obcaecati commodi dolor optio
            iure illo, nam nesciunt? Est provident, temporibus non esse quae
            consequuntur? Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Error repellendus.Error repellendus.Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Error repellendus.Error
            repellendus.Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Error repellendus.Error repellendus.Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Error repellendus.
          </p>
          <div className="flex gap-2 justify-start">
            <Button>Learn More</Button>
            <Button danger type="primary">
              Library
            </Button>
          </div>
        </div>
        <Lottie animationData={animationThree} />
      </div>
      <div className="h-[60vh] flex xs:flex-column md:flex-row items-center justify-center text-orange">
        <div className="space-y-4 w-[40%] order-2 text-right">
          <h1 className="text-2xl font-bold">
            Create amazing Applications with React js <br />
            Expore This Amazing Dashboard
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            repellendus, ipsa quam cumque odit ex obcaecati commodi dolor optio
            iure illo, nam nesciunt? Est provident, temporibus non esse quae
            consequuntur? Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Error repellendus.
          </p>
          <div className="flex gap-2 justify-end">
            <Button>Learn More</Button>
            <Button danger type="primary">
              Library
            </Button>
          </div>
        </div>
        <Lottie animationData={animationTwo} />
      </div>

      <div className="h-[60vh] flex xs:flex-column md:flex-row items-center justify-center text-orange">
        <div className="space-y-4 w-[90%]">
          <h1 className="text-2xl font-bold">
            Create amazing Applications with React js <br />
            Expore This Amazing Dashboard
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            repellendus, ipsa quam cumque odit ex obcaecati commodi dolor optio
            iure illo, nam nesciunt? Est provident, temporibus non esse quae
            consequuntur? Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Error repellendus.Error repellendus.Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Error repellendus.Error
            repellendus.Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Error repellendus.Error repellendus.Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Error repellendus.
          </p>
          <div className="flex gap-2 justify-start">
            <Button>Learn More</Button>
            <Button danger type="primary">
              Library
            </Button>
          </div>
        </div>
        <Lottie animationData={animationFour} />
      </div>

      <div className="h-[60vh] flex xs:flex-column md:flex-row items-center justify-center text-orange">
        <div className="space-y-4 w-[55%] order-2 text-right">
          <h1 className="text-2xl font-bold">
            Create amazing Applications with React js <br />
            Expore This Amazing Dashboard
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            repellendus, ipsa quam cumque odit ex obcaecati commodi dolor optio
            iure illo, nam nesciunt? Est provident, temporibus non esse quae
            consequuntur? Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Error repellendus. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Error repellendus.
          </p>
          <div className="flex gap-2 justify-end">
            <Button>Learn More</Button>
            <Button danger type="primary">
              Library
            </Button>
          </div>
        </div>
        <Lottie animationData={animationFive} />
      </div>

      <div className="h-[60vh] flex xs:flex-column md:flex-row items-center justify-center text-orange">
        <div className="space-y-4 w-[90%] flex flex-col justify-center text-left">
          <h1 className="text-2xl font-bold">
            Create amazing Applications with React js <br />
            Expore This Amazing Dashboard
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            repellendus, ipsa quam cumque odit ex obcaecati commodi dolor optio
            iure illo, nam nesciunt? Est provident, temporibus non esse quae
            consequuntur? Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Error repellendus.Error repellendus.Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Error repellendus.Error
            repellendus.Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Error repellendus.Error repellendus.Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Error repellendus. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Error
            repellendus.Error repellendus.Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
          </p>
          <div className="flex gap-2 justify-start">
            <Button>Learn More</Button>
            <Button danger type="primary">
              Library
            </Button>
          </div>
        </div>
        <Lottie animationData={animationOne} />
      </div>
    </>
  );
};

export default Products;
