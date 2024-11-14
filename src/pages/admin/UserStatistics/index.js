import React, { useState, useEffect } from 'react';
import Layout from "../../../components/admin/Layout";
import styles from './index.module.css';
import classNames from "classnames/bind";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const cx = classNames.bind(styles);
const UserStatistics = () => {
  const token = localStorage.getItem("authToken");
  const [userStatistics, setUserStatistics] = useState([]);
  const [searchId, setSearchId] = useState('');

  useEffect(() => {
    if (!token) {
      toast.error("Token is missing");
      return;
    }

    axios
      .get("http://localhost:8081/api/v1/admin/user", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => setUserStatistics(response.data))
      .catch((error) => toast.error("Failed to fetch users"));
  }, [token]);
  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/api/v1/admin/users/${searchId}`);
      setUserStatistics([response.data]);
    } catch (error) {
      console.error('Error searching users:', error);
    }
  }; 
  return (
    <Layout>

      <div className={cx("box-form-user")}>
        <ToastContainer />
        <p className={cx("title-form-user")}>Thống kê người dùng</p>
          <div>
            <input
              type="text"
              placeholder="Search by ID"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        <div className={cx("box-table-user")}>
      
          <div className={cx("table-user")}>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tên</th>
                  <th>Ngày sinh</th>
                  <th>Email</th>
                  <th>Số điện thoại</th>
                  <th>Địa chỉ</th>
                </tr>
              </thead>
              <tbody>
                {userStatistics.map((userStatistic) => (
                  <tr key={userStatistic.id}>
                    <td>{userStatistic.id}</td>
                    <td>{userStatistic.fullName}</td>
                    <td>{userStatistic.dob}</td>
                    <td>{userStatistic.email}</td>
                    <td>{userStatistic.phone}</td>
                    <td>{userStatistic.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
    
  );
};

export default UserStatistics;
