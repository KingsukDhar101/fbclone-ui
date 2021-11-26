import React from "react";

const SidebarUserMeta = ({ Fullname, ProfileURL, Avatar }) => {
  return (
    <div className="UserMeta">
      <a href={ProfileURL}>
        <div>
          <img src={Avatar} alt={Fullname} />
        </div>
        <div>{Fullname}</div>
      </a>
    </div>
  );
};

export default SidebarUserMeta;
