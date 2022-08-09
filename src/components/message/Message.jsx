import "./message.css";

import React, { useContext, useEffect, useState } from "react";
import { format } from "timeago.js";
import { AuthContext } from "./../../context/AuthContext";
import { publicRequest } from "./../../utils/requestMethods";
const Message = ({ message, own }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const [img, setImg] = useState("");

  useEffect(() => {
    const getImage = async () => {
      const res = await publicRequest.get("/users/?userId=" + message.sender);
      setImg(res.data.profilePicture);
    };
    getImage();
  }, [message]);

  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img src={PF + img} alt="" className="messageImg" />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)} </div>
    </div>
  );
};

export default Message;
