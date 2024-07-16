import { MdBedroomParent } from "react-icons/md";
import { useState, useEffect } from "react";
import { MdHouseSiding } from "react-icons/md";
import { MdBathroom } from "react-icons/md";
import { IoArchiveOutline } from "react-icons/io5";
import { GrAttachment } from "react-icons/gr";
import { FaHandHoldingHeart } from "react-icons/fa";

import "./Body.css";
const Body = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
      setData(data);
    }
    getData();
  });

  return (
    <div className="main container">
      <h1>New York Homes For Sale</h1>
      <p className="rent">
        Home/ Rent <MdBedroomParent />
        <div className="display">
          <p>Showing 1 - 20 of the newest</p>
          <p>Sorted by location</p>
        </div>
        <div className="card1">
          {data.map((item) => (
            <div className="cardmain" key={Math.random}>
              <img src={item.avatar_url} alt="" />
              <h5>Location : {item.login}</h5>
              <p>Rate : $4000 * {item.id}</p>
              <div className="flex">
                <p>
                  {" "}
                  <MdHouseSiding /> 10rooms
                </p>
                <p>
                  {" "}
                  <MdBathroom /> 4 bath
                </p>
              </div>
              <div className="likes">
                <p>For Rent</p>
                <div className="icons">
                  <p>
                    <IoArchiveOutline />
                  </p>
                  <p>
                    <GrAttachment />
                  </p>
                  <p>
                    <FaHandHoldingHeart />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </p>
    </div>
  );
};

export default Body;
