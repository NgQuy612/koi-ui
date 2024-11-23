import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faGear,
  faLock,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

import { faUserCircle } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);

function Sidebar({fullName}) {
  const name = fullName || '';
  return (
    <div className={cx("sidebar")}>
      <div className={cx("box-item-sidebar")}>
        <div className={cx("box-profile-customer")}>
          <div>
            <FontAwesomeIcon size="3x" icon={faUserCircle} />
          </div>
          <div>
            <h2 className={cx("name-customer")}>{name}</h2>
            <Link
              className={cx("edit-profile-link")}
              to={`/deliver/infor`}
            >
              <FontAwesomeIcon icon={faPen} /> Edit profile
            </Link>
          </div>
        </div>
      </div>

      <div className={cx("box-item-sidebar", "services")}>
        <p className={cx("title-default")}>Services</p>
        <ul className={cx("list-service")}>
          <li className={cx("item-service")}>
            <Link className={cx("link-item-service")} to={`/deliver/my-order`}>
              <div className={cx("icon-item-service")}>
                <FontAwesomeIcon icon={faCartShopping} />
              </div>
              My Orders
            </Link>
          </li>
          <li className={cx("item-service")}>
            <Link
              className={cx("link-item-service")}
              to={`/deliver/change-password`}
            >
              <div className={cx("icon-item-service")}>
                <FontAwesomeIcon icon={faLock} />
              </div>
              Account
            </Link>
          </li>
          <li className={cx("item-service")}>
            <Link
              className={cx("link-item-service")}
              to={`/deliver/infor`}
            >
              <div className={cx("icon-item-service")}>
                <FontAwesomeIcon icon={faGear} />
              </div>
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;