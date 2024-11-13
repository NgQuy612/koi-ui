import React, { useState } from "react";
import Layout from "../../../../components/client/Customer/Layout";
import styles from "./index.module.css";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cx = classNames.bind(styles);

function ChangePassword() {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.oldPassword || !formData.newPassword || !formData.confirmPassword) {
      toast.error('Vui lòng điền đầy đủ thông tin.');
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      toast.error('Mật khẩu mới và xác nhận mật khẩu không khớp.');
      return;
    }

    // try {
    //   const token = localStorage.getItem('authToken');
    //   if (!token) {
    //     toast.error('Token is missing');
    //     return;
    //   }

    //   const response = await fetch('http://localhost:8081/api/v1/user/update-password', {
    //     method: 'PATCH',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': 'Bearer ' + token
    //     },
    //     body: JSON.stringify(formData)
    //   });

    //   if (response.ok) {
    //     toast.success('Cập nhật thông tin thành công');
    //   } else {
    //     toast.error('Lỗi khi cập nhật thông tin');
    //   }
    // } catch (error) {
    //   toast.error('Error: ' + error);
    // }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <Layout>
      <div className={cx("box-form-customer")}>
        <p className={cx("title-form-customer")}>Change Password</p>
        <div className={cx("box-handle-form-customer")}>
          <FontAwesomeIcon size="7x" icon={faLock} style={{ color: "#ccc", padding: "30px" }} />
          <form onSubmit={handleSubmit} className={cx("form-customer")}>
            <div className={cx("input-form-customer")}>
              <label>Old Password</label>
              <input
                type="password"
                name="oldPassword"
                value={formData.oldPassword}
                onChange={handleInputChange}
              />
            </div>
            <div className={cx("input-form-customer")}>
              <label>New Password</label>
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleInputChange}
              />
            </div>
            <div className={cx("input-form-customer")}>
              <label>Confirm New Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            </div>
            <div className={cx("box-btn-customer")}>
              <button type="submit">Save</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default ChangePassword;
