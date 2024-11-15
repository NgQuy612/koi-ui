import React, { useState } from "react";
import Layout from "../../../components/account/Layout";
import styles from "./index.module.css";
import classNames from "classnames/bind";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const cx = classNames.bind(styles);

function SignUp() {
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

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8081/api/v1/auth/sign-up", formData);
      const { token } = response.data;
      localStorage.setItem("token", token);

      toast.success("Đăng ký thành công!");
      
      setTimeout(() => {
        navigate("/login"); 
      }, 500);
      
    } catch (error) {
      toast.error("Đăng ký thất bại! Vui lòng thử lại.");
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
            <label htmlFor="fullName">
              Full Name<span className={cx("text-is-red")}> *</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Your full name"
              className={cx("input")}
            />
          </div>
          <div className={cx("form-group")}>
            <label htmlFor="email">
              Email<span className={cx("text-is-red")}> *</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Your password"
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
