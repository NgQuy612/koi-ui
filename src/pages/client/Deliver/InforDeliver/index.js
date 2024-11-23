import React, { useState, useEffect } from "react";
import Layout from "../../../../components/client/Deliver/Layout";
import styles from "./index.module.css";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import { useUser } from "../../../../contexts/UserProvider";
import axios from "axios";

const cx = classNames.bind(styles);

function InforDeliver() {
  const { user, updateUser } = useUser();
  const [formData, setFormData] = useState({
    fullName: user?.fullName || "",
    dob: user?.dob || "",
    phone: user?.phone || "",
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          console.error("Token is missing");
          return;
        }

        const response = await axios.get("http://localhost:8081/api/v1/user/info", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const { fullName, dob, phone } = response.data;

        // Format dob as dd-mm-yyyy
        const formattedDob = dob ? new Date(dob).toLocaleDateString('en-GB') : '';

        setFormData({
          fullName,
          dob: formattedDob,
          phone,
        });
      } catch (error) {
        console.error("Error fetching user info:", error);
        toast.error("Lỗi khi lấy thông tin");
      }
    };

    fetchUserInfo();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        console.error("Token is missing");
        return;
      }

      // Format dob before sending it in the request
      const dobParts = formData.dob.split('-');
      const formattedDob = `${dobParts[2]}-${dobParts[1]}-${dobParts[0]}`;

      const updatedFormData = {
        ...formData,
        dob: formattedDob,
      };

      console.log(updatedFormData);

      const response = await axios.post(
        "http://localhost:8081/api/v1/user/update-info",
        updatedFormData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success("Cập nhật thông tin thành công");
        updateUser({ fullName: updatedFormData.fullName });
      } else {
        toast.error("Lỗi khi cập nhật thông tin");
      }
    } catch (error) {
      toast.error("Lỗi khi cập nhật thông tin");
      console.error("Error updating user info:", error);
    }
  };

  return (
    <Layout fullName={formData.fullName}>
      <ToastContainer />
      <div className={cx("box-form-customer")}>
        <p className={cx("title-form-customer")}>Edit Info</p>
        <div className={cx("box-handle-form-customer")}>
          <FontAwesomeIcon size="7x" icon={faUserAlt} style={{ color: "#ccc", padding: "30px" }} />
          <form onSubmit={handleSubmit} className={cx("form-customer")}>
            <div className={cx("input-form-customer")}>
              <label>Full Name:</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className={cx("input-form-customer")}>
              <label>Date of Birth:</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>
            <div className={cx("input-form-customer")}>
              <label>Phone:</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
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

export default InforDeliver;
