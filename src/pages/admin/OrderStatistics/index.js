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
  const [orderStatistics, setOrderStatistics] = useState([]);
  const [searchId, setSearchId] = useState("");

  useEffect(() => {
    if (!token) {
      toast.error("Token is missing");
      return;
    }

    axios
      .get("http://localhost:8081/api/v1/order", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => setOrderStatistics(response.data))
      .catch((error) => toast.error("Failed to fetch orders"));
  }, [token]);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchId) {
      try {
        const response = await axios.get(
          "http://localhost:8081/api/v1/order",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setOrderStatistics(response.data);
      } catch (error) {
        toast.error("Failed to fetch orders");
      }
    } else {
      try {
        const response = await axios.get(
          `http://localhost:8081/api/v1/order/${searchId}`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        if (response.status === 200) {
          setOrderStatistics([response.data]);
        } else {
          toast.error("Order not found");
        }
      } catch (error) {
        toast.error("Error fetching order");
      }
    }
  };

  return (
    <Layout>

      <div className={cx("box-form-user")}>
        <ToastContainer />
        <p className={cx("title-form-user")}>Thống kê đơn hàng</p>
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
                  <th>Quantity</th>
                  <th>Weight</th>
                  <th>Origin</th>
                  <th>Destination</th>
                  <th>Method</th>
                  <th>Note</th>
                </tr>
              </thead>
              <tbody>
                {orderStatistics.map((orderStatistic) => (
                  <tr key={orderStatistic.id}>
                    <td>{orderStatistic.quantity}</td>
                    <td>{orderStatistic.weight}</td>
                    <td>{orderStatistic.origin}</td>
                    <td>{orderStatistic.destination}</td>
                    <td>{orderStatistic.method}</td>
                    <td>{orderStatistic.note}</td>
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
