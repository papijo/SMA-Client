import "./profile.css";

import React, { useEffect, useState } from "react";
import Topbar from "./../../components/topbar/Topbar";
import Sidebar from "./../../components/sidebar/Sidebar";
import Rightbar from "./../../components/rightbar/Rightbar";
import Feed from "./../../components/feed/Feed";
import { publicRequest } from "./../../utils/requestMethods";
import { useParams } from "react-router-dom";

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const params = useParams();
  const username = params.username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await publicRequest.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={
                  user.CoverPicture
                    ? user.CoverPicture
                    : PF + "/person/noCover.png"
                }
                alt=""
                className="profileCoverImg"
              />
              <img
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "/person/noAvatar.png"
                }
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.name} </h4>
              <span className="profileInfoDesc"> {user.desc} </span>
            </div>
          </div>

          {/* Profile Feed */}
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
