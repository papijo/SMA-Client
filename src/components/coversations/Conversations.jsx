import { useEffect, useState } from "react";
import "./conversations.css";
import { publicRequest } from "./../../utils/requestMethods";

const Conversations = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await publicRequest("/users?userId=" + friendId);
        setUser(res?.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [conversation, currentUser]);

  return (
    <div className="conversation">
      <img
        src={
          user?.profilePicture
            ? PF + user?.profilePicture
            : PF + "/person/noAvatar.png"
        }
        alt=""
        className="conversationImg"
      />
      <span className="conversationName">{user?.name}</span>
    </div>
  );
};

export default Conversations;
