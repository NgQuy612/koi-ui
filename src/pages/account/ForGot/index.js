import React, { useState } from "react";
import Layout from "../../../components/account/Layout";
import styles from "./index.module.css";
import classNames from "classnames/bind";
import { ToastContainer, toast } from "react-toastify";
import {  useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const cx = classNames.bind(styles);

function ForGot() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8081/api/v1/auth/sign-in",
        {
          email,
          password,
        }
      );

      const { token, role } = response.data;
      localStorage.setItem("authToken", token);
      localStorage.setItem("role", role);

      toast.success("Đăng nhập thành công!");

      if (role === "ROLE_ADMIN") {
        navigate("/admin");
      } else  {
        navigate("/customer");
      }
    } catch (error) {
      toast.error("Đăng nhập thất bại! Vui lòng kiểm tra lại thông tin.");
    }
  };

  return (
    <Layout>
      <div className={cx("container-login-account")}>
        <ToastContainer />
        <div className={cx("header")}>
          <h3>Forgot password</h3>
          <p>To recover your password, please enter your registered email.</p>
        </div>

        <form onSubmit={handleLogin} className={cx("login-form")}>
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
          <button type="submit" className={cx("confirm-button")}>
            Confirm
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default ForGot;
