
import React from 'react'

const HeaderUserMeta = ({Fullname, Avatar, ProfileURL}) => {
  return (
    <div className="UserMeta">
      <a href={ProfileURL}>
        <img src={Avatar} alt={Fullname} />
        {Fullname}
      </a>
      <span className="nav-links">
        <a href="/">Home</a>
        <a href="/">Create</a>
      </span>
    </div>
  );
}

export default HeaderUserMeta
