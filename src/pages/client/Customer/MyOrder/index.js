import React, { useState } from "react";
import Layout from "../../../../components/client/Customer/Layout";
import styles from "./index.module.css";
import classNames from "classnames/bind";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const cx = classNames.bind(styles);

// Dữ liệu giả (fake API)
const fakeOrders = [
  {
    id: 1,
    quantity: 1,
    weight: 1,
    origin: {
      country: "Vietnam",
      city: "Hanoi",
      district: "Hoan Kiem",
      name: "Origin Name 1",
    },
    destination: {
      country: "USA",
      city: "New York",
      district: "Manhattan",
      name: "Destination Name 1",
    },
    method: "AIR",
    note: "Handle with care",
  },
  {
    id: 2,
    quantity: 2,
    weight: 2.5,
    origin: {
      country: "Vietnam",
      city: "HCM",
      district: "District 1",
      name: "Origin Name 2",
    },
    destination: {
      country: "Canada",
      city: "Toronto",
      district: "Old Toronto",
      name: "Destination Name 2",
    },
    method: "SEA",
    note: "Fragile",
  },
  {
    id: 3,
    quantity: 2,
    weight: 2.5,
    origin: {
      country: "Vietnam",
      city: "HCM",
      district: "District 1",
      name: "Origin Name 2",
    },
    destination: {
      country: "Canada",
      city: "Toronto",
      district: "Old Toronto",
      name: "Destination Name 2",
    },
    method: "SEA",
    note: "Fragile",
  },
  {
    id: 4,
    quantity: 2,
    weight: 2.5,
    origin: {
      country: "Vietnam",
      city: "HCM",
      district: "District 1",
      name: "Origin Name 2",
    },
    destination: {
      country: "Canada",
      city: "Toronto",
      district: "Old Toronto",
      name: "Destination Name 2",
    },
    method: "SEA",
    note: "Fragile",
  },
  {
    id: 5,
    quantity: 2,
    weight: 2.5,
    origin: {
      country: "Vietnam",
      city: "HCM",
      district: "District 1",
      name: "Origin Name 2",
    },
    destination: {
      country: "Canada",
      city: "Toronto",
      district: "Old Toronto",
      name: "Destination Name 2",
    },
    method: "SEA",
    note: "Fragile",
  },
];

function MyOrder() {
  const [orders, setOrders] = useState(fakeOrders);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm) {
      toast.error("Please enter an Order ID");
      return;
    }
    try {
      const response = await fetch(
        `http://localhost:8081/api/v1/order/${searchTerm}`
      );
      if (response.ok) {
        const data = await response.json();
        setOrders([data]); // Cập nhật lại bảng với kết quả tìm kiếm
      } else {
        toast.error("Order not found");
      }
    } catch (error) {
      toast.error("Error fetching order");
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
                  <th>Order ID</th>
                  <th>Quantity</th>
                  <th>Weight</th>
                  <th>Origin</th>
                  <th>Destination</th>
                  <th>Method</th>
                  <th>Note</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.quantity}</td>
                    <td>{order.weight}</td>
                    <td>
                      {order.origin.name}, {order.origin.district},{" "}
                      {order.origin.city}
                    </td>
                    <td>
                      {order.destination.name}, {order.destination.district},{" "}
                      {order.destination.city}
                    </td>
                    <td>{order.method}</td>
                    <td>{order.note}</td>
                    <td>
                      <Link
                        className={cx("btn-view-detail")}
                        to={`/customer/${order.id}`}
                      >
                        View Detail
                      </Link>
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

export default MyOrder;
