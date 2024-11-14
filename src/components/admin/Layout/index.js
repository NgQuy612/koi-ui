import React from "react";
import Header from "../Header"
import Sidebar from "../Sidebar"
import styles from "./index.module.css";
import classNames from "classnames/bind";


const cx = classNames.bind(styles);

function Layout({children, fullName}) {
  return (
    <div className={cx("infor")}>
      <Header name={fullName} />
      <div className={cx("container-infor-customer")}>
        <Sidebar name={fullName} />
        {children}
      </div>
    </div>
  );
}

export default Layout;