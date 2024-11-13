import { useState } from "react";
<<<<<<< HEAD
import { useOrder } from "../../../../contexts/OrderProvider";
import { useNavigate } from "react-router-dom";
=======
>>>>>>> 5be9ed44f2de768df6c7536a370076b0deccd176
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./index.module.css";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import {
  faArrowRightFromBracket,
  faCartShopping,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons/faUser";

const Logo = () => (
  <svg
    width="123"
    height="40"
    viewBox="0 0 123 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_1146_522)">
      <path
        d="M16.1473 32.4C25.0652 32.4 32.2946 25.147 32.2946 16.2C32.2946 7.25299 25.0652 0 16.1473 0C7.22938 0 0 7.25299 0 16.2C0 25.147 7.22938 32.4 16.1473 32.4Z"
        fill="#00194F"
      />
      <path
        d="M3.78763 40C5.87948 40 7.57526 38.2987 7.57526 36.2C7.57526 34.1013 5.87948 32.4 3.78763 32.4C1.69578 32.4 0 34.1013 0 36.2C0 38.2987 1.69578 40 3.78763 40Z"
        fill="#B81010"
      />
      <path
        d="M29.9024 33.8001C31.2236 33.8001 32.2946 32.7255 32.2946 31.4001C32.2946 30.0746 31.2236 29.0001 29.9024 29.0001C28.5812 29.0001 27.5102 30.0746 27.5102 31.4001C27.5102 32.7255 28.5812 33.8001 29.9024 33.8001Z"
        fill="#B81010"
      />
      <path
        d="M32.2946 16.1001C32.1949 14.8001 31.1981 13.8001 29.9024 13.8001C28.6066 13.8001 27.6098 14.8001 27.5102 16.1001V16.2001C27.5102 21.7001 23.0248 26.2001 17.5427 26.2001C12.0606 26.2001 7.57526 21.7001 7.57526 16.2001C7.57526 16.1001 7.57526 16.0001 7.57526 15.9001C7.47559 13.9001 5.78112 12.4001 3.78763 12.4001C1.79414 12.4001 0.199349 13.9001 0 15.9001C0 16.0001 0 16.0001 0 16.1001V16.2001V16.3001C0.0996745 25.2001 7.27624 32.4001 16.1473 32.4001C25.0183 32.4001 32.2946 25.2001 32.2946 16.2001C32.2946 16.1001 32.2946 16.1001 32.2946 16.1001Z"
        fill="#B81010"
      />
      <path
        d="M65.4862 16.2C65.4862 21.7 61.0008 26.2 55.5187 26.2C50.0366 26.2 45.5513 21.7 45.5513 16.2C45.5513 14.9 46.6477 13.8 47.9435 13.8C49.2392 13.8 50.3356 14.9 50.3356 16.2C50.3356 19.6 53.1265 22.4 56.5155 22.4C59.9044 22.4 62.6953 19.6 62.6953 16.2C62.6953 15.4 63.2933 14.8 64.0907 14.8C64.8881 14.8 65.4862 15.4 65.4862 16.2Z"
        fill="#B81010"
      />
      <path
        d="M62.795 9.89995C62.795 10.2 62.6953 10.6 62.4959 10.8L62.2966 11L61.2002 12.1L57.2132 16.1C56.7148 16.6 56.0171 16.6999 55.419 16.2999C55.419 16.2999 55.419 16.2999 55.3194 16.2999C55.2197 16.2999 55.2197 16.2 55.12 16.2C55.12 16.2 55.12 16.2 55.0203 16.1C55.0203 16.1 55.0203 16.0999 55.0203 16C54.9207 15.9 54.9207 15.7999 54.821 15.7C54.821 15.7 54.821 15.7 54.821 15.6C54.821 15.6 54.821 15.5999 54.821 15.5C54.821 15.5 54.821 15.4999 54.821 15.4V15.3C54.7213 14.9 54.9207 14.4 55.2197 14.1L58.9076 10.4C58.2099 10.1 57.4125 9.99995 56.6151 9.99995C53.2262 9.99995 50.4353 12.8 50.4353 16.2C50.4353 14.9 49.3389 13.8 48.0431 13.8C46.7474 13.8 45.6509 14.9 45.6509 16.2C45.6509 10.7 50.1363 6.19995 55.6184 6.19995C57.7116 6.19995 59.705 6.89995 61.2998 7.99995C61.6985 8.29995 61.9976 8.49995 62.2966 8.79995C62.5956 9.09995 62.795 9.49995 62.795 9.89995Z"
        fill="#00194F"
      />
      <path
        d="M78.3442 23.3H72.264L79.3409 16.2C79.939 15.6 79.939 14.7 79.3409 14.2C79.0419 13.9 78.7429 13.8 78.3442 13.8H68.8751C68.0777 13.8 67.4796 14.4 67.4796 15.2C67.4796 16 68.0777 16.6 68.8751 16.6H74.9552L67.8783 23.7C67.5793 24 67.4796 24.3 67.4796 24.7C67.4796 25.5 68.0777 26.1 68.8751 26.1H78.3442C79.1416 26.1 79.7396 25.5 79.7396 24.7C79.7396 24 79.1416 23.3 78.3442 23.3Z"
        fill="#00194F"
      />
      <path
        d="M87.8133 13.8C86.6172 13.8 85.4211 14.2 84.524 14.8V7.59995C84.524 6.79995 83.926 6.19995 83.1286 6.19995C82.3312 6.19995 81.7331 6.79995 81.7331 7.59995V24.7C81.7331 25.5 82.3312 26.1 83.1286 26.1C83.7266 26.1 84.3247 25.7 84.524 25.1C85.5208 25.7 86.6172 26.1 87.9129 26.1C91.3019 26.1 94.0928 23.3 94.0928 19.9C94.0928 16.5 91.2022 13.8 87.8133 13.8ZM87.8133 23.3C86.0191 23.3 84.524 21.8 84.524 20C84.524 18.2 86.0191 16.7 87.8133 16.7C89.6074 16.7 91.1025 18.2 91.1025 20C91.1025 21.8 89.7071 23.3 87.8133 23.3Z"
        fill="#00194F"
      />
      <path
        d="M108.247 15.2V20C108.247 23.4 105.456 26.2 102.067 26.2C98.6778 26.2 95.8869 23.4 95.8869 20V15.2C95.8869 14.5 96.3853 13.9 97.083 13.8H97.4817C98.1794 13.9 98.6778 14.5 98.6778 15.2V20C98.6778 21.8 100.173 23.3 101.967 23.3C103.761 23.3 105.256 21.8 105.256 20V15.2C105.256 14.4 105.854 13.8 106.652 13.8C107.648 13.8 108.247 14.5 108.247 15.2Z"
        fill="#00194F"
      />
      <path
        d="M121.105 13.8C120.307 13.8 119.709 14.4 119.709 15.2V16.1V20C119.709 21.8 118.214 23.3 116.42 23.3C114.626 23.3 113.131 21.8 113.131 20V15.2C113.131 14.5 112.632 13.9 111.935 13.8H111.536C110.838 13.9 110.34 14.5 110.34 15.2V20C110.34 23.4 113.131 26.2 116.52 26.2C117.716 26.2 118.912 25.8 119.809 25.2V27.6C119.809 29.4 118.314 30.9 116.52 30.9C115.024 30.9 113.828 29.9 113.33 28.6C113.131 28 112.632 27.6 111.935 27.6C110.938 27.6 110.24 28.5 110.539 29.4C111.336 31.9 113.629 33.8 116.42 33.8C119.809 33.8 122.6 31 122.6 27.6V20V16.2V15.3C122.5 14.5 121.802 13.8 121.105 13.8Z"
        fill="#00194F"
      />
    </g>
    <defs>
      <clipPath id="clip0_1146_522">
        <rect width="122.5" height="40" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

<<<<<<< HEAD
function Header({ fullName }) {
  const name = fullName || "";
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
=======
const cx = classNames.bind(styles);

function Header() {
  const [showPopup, setShowPopup] = useState(false);
  const name = "admin";
>>>>>>> 5be9ed44f2de768df6c7536a370076b0deccd176

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleLogout = () => {
<<<<<<< HEAD
    const confirmLogout = window.confirm(
      "Bạn có chắc chắn muốn đăng xuất không?"
    );

    if (confirmLogout) {
      localStorage.removeItem("authToken");
      localStorage.removeItem("role");
      navigate("/login");
    }
=======
    console.log("User logged out");
    setShowPopup(false);
>>>>>>> 5be9ed44f2de768df6c7536a370076b0deccd176
  };

  const { orderCount } = useOrder();

  return (
    <header>
      <div className={cx("container-header")}>
        <div className={cx("logo-header")}>
          <Link to={`/customer`}>
            <Logo />
          </Link>
        </div>
        <div className={cx("box-content-account")}>
          <div className={cx("account-user")}>
            <button
              className={cx("item-menu-header")}
              data-tooltip-id="tooltip-account"
              onClick={togglePopup}
            >
              <FontAwesomeIcon size="lg" icon={faUserCircle} />
              {name}
              <FontAwesomeIcon size="xs" icon={faChevronDown} />
            </button>
            {showPopup && (
              <div className={cx("popup-menu")}>
                <div className={cx("popup-welcome-user")}>
                  <FontAwesomeIcon size="2x" icon={faUserCircle} />
                  Hello, {name}
                </div>
                <Link className={cx("popup-menu-item")} to={`/customer/infor`}>
                  <div className={cx("icon-item-popup")}>
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                  Infor
                </Link>

                <Link
                  style={{ paddingBottom: "10px" }}
                  className={cx("popup-menu-item")}
                  to={`/customer/my-order`}
                >
                  <div className={cx("icon-item-popup")}>
                    <FontAwesomeIcon icon={faCartShopping} />
                  </div>
                  My Order
                </Link>
                <button
                  onClick={handleLogout}
                  className={cx("logout-button", "popup-menu-item")}
                >
                  <FontAwesomeIcon icon={faArrowRightFromBracket} />
                  Log Out
                </button>
              </div>
            )}
          </div>
          <Link className={cx("icon-cart-shopping")} to={`/customer/my-order`}>
            {orderCount > 0 && (
              <span className={cx("order-count")}>{orderCount}</span>
            )}
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
