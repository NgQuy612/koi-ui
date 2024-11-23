import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; // Import axios
import Layout from "../../../../components/client/Deliver/Layout";
import styles from "./index.module.css";
import classNames from "classnames/bind";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const cx = classNames.bind(styles);

function DetailOrderAdmin() {
  const { id } = useParams();
  const [formData, setFormData] = useState({});
  const [newStatus, setNewStatus] = useState("");

  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (!token) {
      toast.error("Token is missing");
      return;
    }

    // Fetch order data
    axios
      .get(`http://localhost:8081/api/v1/order/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setFormData(response.data);
        setNewStatus(response.data.status); // Initialize newStatus
      })
      .catch((error) => toast.error("Failed to fetch order"));
  }, [id, token]);

  const handleStatusChange = (e) => {
    const selectedStatus = e.target.value;
    setNewStatus(selectedStatus);
    // Call API to update status
    axios
      .patch(
        `http://localhost:8081/api/v1/order/change-status/${id}?status=${selectedStatus}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => toast.success("Order status updated successfully"))
      .catch(() => toast.error("Failed to update status"));
  };

  // Function to determine the class based on the status
  const getStatusClass = (status) => {
    switch (status) {
      case "PENDING":
        return cx("select-status", "status-pending");
      case "PREPARING":
        return cx("select-status", "status-preparing");
      case "WAITING":
        return cx("select-status", "status-waiting");
      case "ONPROCESS":
        return cx("select-status", "status-onprocess");
      case "COMPLETED":
        return cx("select-status", "status-completed");
      case "CANCELLED":
        return cx("select-status", "status-cancelled");
      default:
        return cx("select-status");
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

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  return (
    <Layout>
      <div className={cx("box-form-customer")}>
        <ToastContainer />
        <p className={cx("title-form-customer")}>Detail Order #{id}</p>
        <p className={cx("price-order")}>{formatPrice(formData.price)}</p>
        <div className={cx("box-form-order")}>
          <form className={cx("form-order")}>
            <div className={cx("box-widt-48")}>
              <div className={cx("box-input-form-order", "box-widt-48")}>
                <label>Status</label>
                <select
                  value={newStatus}
                  onChange={handleStatusChange}
                  className={getStatusClass(newStatus)} // Apply the dynamic class based on status
                >
                  <option value="PENDING">PENDING</option>
                  <option value="PREPARING">PREPARING</option>
                  <option value="WAITING">WAITING</option>
                  <option value="ONPROCESS">ONPROCESS</option>
                  <option value="COMPLETED">COMPLETED</option>
                  <option value="CANCELLED">CANCELLED</option>
                </select>
              </div>
              <div className={cx("box-input-form-order", "box-widt-48")}>
                <label>Method</label>
                <div className={getMethodClass(formData.method)}>
                  {formData.method}
                </div>
              </div>
            </div>

            <div className={cx("box-widt-48")}>
              <div className={cx("box-input-form-order")}>
                <label>Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  className={cx("input-form-order")}
                  disabled
                />
              </div>
              <div className={cx("box-input-form-order")}>
                <label>Weight</label>
                <input
                  type="number"
                  step="0.1"
                  name="weight"
                  value={formData.weight}
                  className={cx("input-form-order")}
                  disabled
                />
              </div>
            </div>

            <div className={cx("container-input-address")}>
              <p className={cx("title-container-address")}>Origin</p>
              <div>{formData.origin}</div>
            </div>

            <div className={cx("container-input-address")}>
              <p className={cx("title-container-address")}>Destination</p>
              <div>{formData.destination}</div>
            </div>

            <div className={cx("box-widt-48")}>
              <div className={cx("box-input-form-order", "box-input-note")}>
                <label>Note</label>
                <textarea
                  name="note"
                  value={formData.note}
                  className={cx("input-form-order", "note-area")}
                  disabled
                />
              </div>
            </div>

            <div className={cx("box-feedback-order", "box-widt-48")}>
              <div className={cx("box-input-form-order", "note-area-feedback")}>
                <label>Feedback</label>
                <textarea
                  name="feedbackMessage"
                  value={formData.feedbackMessage}
                  className={cx("input-form-order")}
                />
              </div>
              <div className={cx("box-input-form-order")}>
                <label>Rating</label>
                <select
                  name="rating"
                  value={formData.rating}
                  className={cx("input-form-order")}
                >
                  {[0, 1, 2, 3, 4, 5].map((rating) => (
                    <option selected={formData.rating == rating} key={rating} value={rating}>
                      {rating} Star{rating > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default DetailOrderAdmin;
