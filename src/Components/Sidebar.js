import React, { Fragment } from "react";
import SidebarUserMeta from "./SidebarUserMeta";
const Sidebar = ({ UserMeta, ContentList }) => {
  return (
    <div className="Sidebar col-2">
      <SidebarUserMeta {...UserMeta}/>
      {Object.keys(ContentList).map((section) => (
        <Fragment key={section}>
          {section !== "Default" && <h3>{section}</h3>}
          <ul className="Sidebar-Links">
            {ContentList[section].map((link) => (
              <li key={link.icon}>
                <a
                  href={link.Link}
                  className={link.ID === "News" ? "active" : null}
                >
                  <img src={link.Icon} alt="icon" />
                  {link.Text}
                </a>
              </li>
            ))}
          </ul>
        </Fragment>
      ))}
    </div>
  );
};

export default Sidebar;
