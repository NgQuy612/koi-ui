import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; // Đảm bảo đã import axios
import Layout from "../../../../components/client/Customer/Layout";
import styles from "./index.module.css";
import classNames from "classnames/bind";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const cx = classNames.bind(styles);

function DetailOrder() {
  const { id } = useParams();
  const [formData, setFormData] = useState({});
  const [formSendMessage, setFormSendMessage] = useState({
    rating: 0,
    feedbackMessage: "",
  });

  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (!token) {
      toast.error("Token is missing");
      return;
    }

    axios
      .get(`http://localhost:8081/api/v1/order/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setFormData(response.data);
        setFormSendMessage({
          // Set initial values for feedback if available
          rating: response.data.rating || 0,
          feedbackMessage: response.data.feedbackMessage || "",
        });
      })
      .catch((error) => toast.error("Failed to fetch order"));
  }, [id, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:8081/api/v1/order/${id}/feedback`,
        {
          rating: formSendMessage.rating,
          feedbackMessage: formSendMessage.feedbackMessage,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      if (response.status === 200) {
        toast.success("Send Feedback Success");
      } else {
        toast.error("Send Feedback Error");
      }
    } catch (error) {
      toast.error("Error sending feedback");
    }
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
          <form onSubmit={handleSubmit} className={cx("form-order")}>
            <div className={cx("box-widt-48")}>
              <div className={cx("box-input-form-order", "box-widt-48")}>
                <label>Status</label>
                <div className={getStatusClass(formData.status)}>
                  {formData.status}
                </div>
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
                  className={cx("input-form-order")}
                  disabled
                />
              </div>
            </div>

            <div className={cx("box-feedback-order", "box-widt-48")}>
              <div className={cx("box-input-form-order", "note-area-feedback")}>
                <label>Feedback</label>
                <textarea
                  name="feedbackMessage"
                  value={formSendMessage.feedbackMessage}
                  onChange={(e) =>
                    setFormSendMessage({
                      ...formSendMessage,
                      feedbackMessage: e.target.value,
                    })
                  }
                  className={cx("input-form-order")}
                />
              </div>
              <div className={cx("box-input-form-order")}>
                <label>Rating</label>
                <select
                  name="rating"
                  value={formSendMessage.rating}
                  onChange={(e) =>
                    setFormSendMessage({
                      ...formSendMessage,
                      rating: e.target.value,
                    })
                  }
                  className={cx("input-form-order")}
                >
                  {[0, 1, 2, 3, 4, 5].map((rating) => (
                    <option key={rating} value={rating}>
                      {rating} Star{rating > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={cx("box-btn-order")}>
              <button type="submit">Send Feedback</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default DetailOrder;
