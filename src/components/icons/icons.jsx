import React from "react";
import "./icons.css";
import {
  SiLandrover,
  SiTiktok,
  
} from "react-icons/si";
import { FaAppStore , FaVnv } from 'react-icons/fa';
import { RiLinkedinFill } from "react-icons/ri";

const Icons = () => {
  return (
    <div className=" justify-content-around icon">
      <h2>
        <SiLandrover />
      </h2>
      <h2>
        <FaVnv />
      </h2>
      <h2>
        <FaAppStore />
      </h2>
      <h2>
        <RiLinkedinFill />
      </h2>
      <h2>
        <SiTiktok />
      </h2>
    </div>
  );
};
export default Icons;
