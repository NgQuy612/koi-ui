import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import styles from "./index.module.css";
import classNames from "classnames/bind";
import { useUser } from '../../../../contexts/UserProvider';

const cx = classNames.bind(styles);

function Layout({ children }) {
  const { user } = useUser(); 
  const fullName = user?.fullName || '';

  return (
    <div className={cx("infor")}>
      <Header fullName={fullName} />
      <div className={cx("container-infor-customer")}>
        <Sidebar fullName={fullName} />
        {children}
      </div>
    </div>
  );
}

export default Layout;
