import React from "react";
import { useSelector } from "react-redux";
import "./menulink.css";

export default function MenuLink({text, icon}) {
  const name = useSelector((state) => state.user.name);

  return (
    <div className="menulink">
      {icon}
      <span className="menuLinkText">{text}</span>
      {text === "Logout" && `(${name})`}
    </div>
  );
}
