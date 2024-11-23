import React, { useState, useEffect } from "react";
import Layout from "../../../components/account/Layout";
import styles from "./index.module.css";
import classNames from "classnames/bind";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const cx = classNames.bind(styles);

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const role = localStorage.getItem("role");

    if (token && role) {
      if (role === "ROLE_ADMIN") {
        navigate("/admin");
      } else if (role === "ROLE_CUSTOMER") {
        navigate("/customer");
      } else if (role === "ROLE_DELIVER") {
        navigate("/staff");
      }
    }
  }, [navigate]);

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

      if (token && role) {
        toast.success("Đăng nhập thành công!", { autoClose: 500 });
        if (role === "ROLE_ADMIN") {
          navigate("/admin");
        } else {
          navigate("/customer");
        }
      }
    } catch (error) {
      toast.error("Đăng nhập thất bại!");
    }
  };

  return (
    <Layout>
      <div className={cx("container-login-account")}>
        <ToastContainer />
        <div className={cx("header")}>
          <h3>Login</h3>
          <p>
            Don’t have an account?{" "}
            <Link to="/sign-up" className={cx("link")}>
              Create an account
            </Link>
          </p>
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
          <button type="submit" className={cx("login-button")}>
            Login
          </button>
        </form>

        <div className={cx("forgot-password")}>
          <Link to="/forgot-password" className={cx("link")}>
            Forgot password?
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
