import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBoxOpen
} from "@fortawesome/free-solid-svg-icons";

import { faUserCircle } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);

function Sidebar() {
  const name = 'Admin';
  return (
    <div className={cx("sidebar")}>
      <div className={cx("box-item-sidebar")}>
        <div className={cx("box-profile-customer")}>
          <div>
            <FontAwesomeIcon size="3x" icon={faUserCircle} />
          </div>
          <div>
            <h2 className={cx("name-customer")}>{name}</h2>
          </div>
        </div>
      </div>

      <div className={cx("box-item-sidebar", "services")}>
        <p className={cx("title-default")}>Services</p>
        <ul className={cx("list-service")}>
          <li className={cx("item-service")}>
            <Link className={cx("link-item-service")} to={`/admin/user-statistics`}>
              <div className={cx("icon-item-service")}>
                <FontAwesomeIcon icon={faUser} />
              </div>
              User Statistics
            </Link>
          </li>
          <li className={cx("item-service")}>
            <Link className={cx("link-item-service")} to={`/admin/order-statistics`}>
              <div className={cx("icon-item-service")}>
                <FontAwesomeIcon icon={faBoxOpen} />
              </div>
              Order Statistic
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;