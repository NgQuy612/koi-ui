import React, { useState } from "react";
import Layout from "../../../components/account/Layout";
import styles from "./index.module.css";
import classNames from "classnames/bind";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import axios from "axios"; // Nhớ cài đặt axios
import "react-toastify/dist/ReactToastify.css";

const cx = classNames.bind(styles);

function SignUp() {
<<<<<<< HEAD
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   const role = localStorage.getItem("role");

  //   if (token && role) {
  //     if (role === "ROLE_ADMIN") {
  //       navigate("/admin");
  //     } else if (role === "ROLE_CUSTOMER") {
  //       navigate("/customer");
  //     } 
  //   }
  // }, [navigate]);
=======
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
>>>>>>> 5be9ed44f2de768df6c7536a370076b0deccd176

  const handleRegister = async (e) => {
    e.preventDefault();

    // Kiểm tra xem mật khẩu và xác nhận mật khẩu có khớp không
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!"); // Thông báo lỗi
      return;
    }

    // Thực hiện gửi dữ liệu đến API
    try {
      const response = await axios.post("http://localhost:8081/api/v1/auth/sign-up", {
        email,
        password,
      });
      // Xử lý phản hồi thành công
      toast.success("Registration successful!");
    } catch (error) {
      // Xử lý lỗi
      toast.error("Registration failed!");
    }
  };

  return (
    <Layout>
      <div className={cx("container-login-account")}>
        <ToastContainer />
        <div className={cx("header")}>
          <h3>Register</h3>
          <p>
            Already have an account?{" "}
            <Link to="/login" className={cx("link")}>
              Login
            </Link>
          </p>
        </div>

        <form onSubmit={handleRegister} className={cx("login-form")}>
          <div className={cx("form-group")}>
            <label htmlFor="email">
              Email<span className={cx("text-is-red")}> *</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Your email"
              className={cx("input")}
            />
          </div>
          <div className={cx("form-group")}>
            <label htmlFor="password">
              Password<span className={cx("text-is-red")}> *</span>
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Your password"
              className={cx("input")}
            />
          </div>
          <div className={cx("form-group")}>
            <label htmlFor="confirm-password">
              Confirm Password<span className={cx("text-is-red")}> *</span>
            </label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm your password"
              className={cx("input")}
            />
          </div>
          <button type="submit" className={cx("confirm-button")}>
            Confirm
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default SignUp;
