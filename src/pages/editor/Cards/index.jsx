import { motion } from "framer-motion";
import { useRef } from "react";
import { Divider } from "antd";
import "./cards.css";
import "../../../app/globals.css";
const Cards = () => {
  const parentRef = useRef();
  return (
    <>
      <div className="flex flex-row justify-around">
        <h3 className="text-2xl font-bold">Birds</h3>
        <h3 className="text-2xl font-bold">Animals</h3>
      </div>
      <Divider />
      <div className="h-[80vh] w-[100%] flex justify-center items-center">
        <div>
          <motion.div
            ref={parentRef}
            style={{ margin: "5px" }}
            drag
            whileDrag={{ scale: 1.1 }}
            className="box-1 h-[250px] w-[250px]"
          ></motion.div>
          <motion.div
            style={{ margin: "5px" }}
            drag
            whileDrag={{ scale: 1.1 }}
            className="box-2 h-[250px] w-[250px]"
            // dragSnapToOrigin="true"
          ></motion.div>
        </div>
        <div>
          <motion.div
            style={{ margin: "5px" }}
            drag
            whileDrag={{ scale: 1.1 }}
            className="box-4 h-[250px] w-[250px]"
          ></motion.div>
          <motion.div
            style={{ margin: "5px" }}
            drag
            whileDrag={{ scale: 1.1 }}
            className="box-3 h-[250px] w-[250px]"
          ></motion.div>
        </div>
      </div>
    </>
  );
};

export default Cards;
