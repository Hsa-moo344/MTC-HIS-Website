import React from "react";
import HealthCss from "../css/department.module.css";

const Navigation = () => {
  return (
    <ul className={HealthCss.ContainerContact}>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/Health">Health Services</a>
      </li>
      <li>
        <a href="/HIS">Health Information System</a>
      </li>
      <li>
        <a href="/Contact">Contact Us</a>
      </li>
      <li style={{ float: "right" }}>
        <a href="/Login">Login</a>
      </li>
    </ul>
  );
};
export default Navigation;
