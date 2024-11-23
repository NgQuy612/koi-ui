import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../../../components/client/Deliver/Layout";
import styles from "./index.module.css";
import classNames from "classnames/bind";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);

function MyOrderDeliver() {
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (!token) {
      toast.error("Token is missing");
      return;
    }

    axios
      .get("http://localhost:8081/api/v1/order/deliver/me", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => setOrders(response.data))
      .catch((error) => toast.error("Failed to fetch orders"));
  }, [token]);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchTerm) {
      // Nếu không có searchTerm, lấy tất cả đơn hàng
      try {
        const response = await axios.get(
          "http://localhost:8081/api/v1/order/me",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setOrders(response.data);
      } catch (error) {
        toast.error("Failed to fetch orders");
      }
    } else {
      // Nếu có searchTerm, tìm kiếm theo Order ID
      try {
        const response = await axios.get(
          `http://localhost:8081/api/v1/order/${searchTerm}`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        if (response.status === 200) {
          setOrders([response.data]);
        } else {
          toast.error("Order not found");
        }
      } catch (error) {
        toast.error("Error fetching order");
      }
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "PENDING":
        return cx("tag-status-order", "status-pending");
      case "PREPARING":
        return cx("tag-status-order", "status-preparing");
      case "WAITING":
        return cx("tag-status-order", "status-waiting");
      case "ONPROCESS":
        return cx("tag-status-order", "status-onprocess");
      case "COMPLETED":
        return cx("tag-status-order", "status-completed");
      case "CANCELLED":
        return cx("tag-status-order", "status-cancelled");
      default:
        return "";
    }
  };

  const getMethodClass = (method) => {
    switch (method) {
      case "SEA":
        return cx("tag-method-order", "method-sea");
      case "AIR":
        return cx("tag-method-order", "method-air");
      case "LAND":
        return cx("tag-method-order", "method-land");
      default:
        return "";
    }
  };

  const handleDeleteOrder = async (id) => {
    const isConfirmed = window.confirm(
      `Are you sure you want to Remove this Order?`
    );

    if (!isConfirmed) {
      return;
    }

    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        toast.error("Token is missing");
        return;
      }

      console.log(id);

      const response = await axios.post(
        `http://localhost:8081/api/v1/order/deliver/me/remove/${id}`, {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success(`Order ${id} deleted successfully`);
      }
    } catch (error) {
      toast.error(`Failed to delete Order`);
    }
  };

  return (
    <Layout>
      <div className={cx("box-form-customer")}>
        <ToastContainer />
        <p className={cx("title-form-customer")}>My Order</p>
        <div className={cx("box-table-order")}>
          {/* Thanh tìm kiếm Order ID */}
          <div className={cx("search-order")}>
            <form onSubmit={handleSearch} className={cx("form-search-order")}>
              <input
                type="text"
                placeholder="Search Order ID"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit">Search</button>
            </form>
          </div>
          <div className={cx("table-order")}>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Status</th>
                  <th>Price</th>
                  <th>Method</th>
                  <th>Quantity</th>
                  <th>Weight</th>
                  <th>Origin</th>
                  <th>Destination</th>
                  <th>Note</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>
                      <Link
                        className={cx("btn-view-detail")}
                        to={`/deliver/detail-order/${order.id}`}
                      >
                        {order.id}
                      </Link>
                    </td>
                    <td>
                      <p className={getStatusClass(order.status)}>
                        {order.status}
                      </p>
                    </td>
                    <td>
                      <p className={cx("price-order")}>
                        {formatPrice(order.price)}
                      </p>
                    </td>
                    <td>
                      <p className={getMethodClass(order.method)}>
                        {order.method}
                      </p>
                    </td>
                    <td>{order.quantity}</td>
                    <td>{order.weight}</td>
                    <td>{order.origin}</td>
                    <td>{order.destination}</td>
                    <td>{order.note}</td>
                    <td>
                      {
                        <button
                          className={cx("btn-delete-order")}
                          onClick={() => handleDeleteOrder(order.id)}
                        >
                          <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default MyOrderDeliver;
