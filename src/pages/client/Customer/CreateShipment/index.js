import React, { useState } from "react";
import Layout from "../../../../components/client/Customer/Layout";
import styles from "./index.module.css";
import classNames from "classnames/bind";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const cx = classNames.bind(styles);

function CreateShipment() {
  const [formData, setFormData] = useState({
    quantity: 0,
    weight: 0,
    origin: {
      country: "",
      city: "",
      district: "",
      name: "",
    },
    destination: {
      country: "",
      city: "",
      district: "",
      name: "",
    },
    method: "",
    note: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("origin") || name.includes("destination")) {
      const [key, subkey] = name.split(".");
      setFormData((prevData) => ({
        ...prevData,
        [key]: {
          ...prevData[key],
          [subkey]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8081/api/v1/order/price-table",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("Shipment created successfully!");
      } else {
        toast.error("Failed to create shipment");
      }
    } catch (error) {
      toast.error("Error:", error);
    }
  };

  return (
    <Layout>
      <div className={cx("box-form-customer")}>
        <ToastContainer />
        <p className={cx("title-form-customer")}>Create Shipment</p>
        <div className={cx("box-form-order")}>
          <form onSubmit={handleSubmit} className={cx("form-order")}>
            {/* box-handle-parameter */}
            <div className={cx("box-handle-parameter")}>
              <div className={cx("box-input-form-order")}>
                <label>Method</label>
                <select
                  name="method"
                  value={formData.method}
                  onChange={handleChange}
                  className={cx("input-form-order")}
                >
                  <option value="AIR">AIR</option>
                  <option value="SEA">SEA</option>
                  <option value="LAND">LAND</option>
                </select>
              </div>
              <div className={cx("box-input-form-order")}>
                <label>Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className={cx("input-form-order")}
                />
              </div>
              <div className={cx("box-input-form-order")}>
                <label>Weight</label>
                <input
                  type="number"
                  step="0.1"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  className={cx("input-form-order")}
                />
              </div>
            </div>

            {/* box address origin */}
            <div className={cx("container-input-address")}>
              <p className={cx("title-container-address")}>Origin</p>
              <div className={cx("box-select-address")}>
                <div className={cx("box-input-form-order")}>
                  <label>Country</label>
                  <select
                    name="origin.country"
                    value={formData.origin.country}
                    onChange={handleChange}
                    className={cx("input-form-order")}
                  >
                    <option value="Vietnam">Vietnam</option>
                    <option value="Canada">Canada</option>
                    <option value="USA">USA</option>
                  </select>
                </div>
                <div className={cx("box-input-form-order")}>
                  <label>City</label>
                  <select
                    name="origin.city"
                    value={formData.origin.city}
                    onChange={handleChange}
                    className={cx("input-form-order")}
                  >
                    <option value="HCM">HCM</option>
                    <option value="Hanoi">Hanoi</option>
                    <option value="DaNang">Da Nang</option>
                  </select>
                </div>
                <div className={cx("box-input-form-order")}>
                  <label>District</label>
                  <select
                    name="origin.district"
                    value={formData.origin.district}
                    onChange={handleChange}
                    className={cx("input-form-order")}
                  >
                    <option value="HCM">Q1</option>
                    <option value="Hanoi">Q2</option>
                    <option value="DaNang">Q3</option>
                  </select>
                </div>
              </div>
              <div className={cx("box-input-form-order")}>
                <label>Address</label>
                <input
                  type="text"
                  name="origin.name"
                  value={formData.origin.name}
                  onChange={handleChange}
                  className={cx("input-form-order")}
                />
              </div>
            </div>

            {/* box address Destination */}
            <div className={cx("container-input-address")}>
              <p className={cx("title-container-address")}>Destination</p>
              <div className={cx("box-select-address")}>
                <div className={cx("box-input-form-order")}>
                  <label>Country</label>
                  <select
                    name="destination.country"
                    value={formData.destination.country}
                    onChange={handleChange}
                    className={cx("input-form-order")}
                  >
                    <option value="Vietnam">Vietnam</option>
                    <option value="Canada">Canada</option>
                    <option value="USA">USA</option>
                  </select>
                </div>
                <div className={cx("box-input-form-order")}>
                  <label>City</label>
                  <select
                    name="destination.city"
                    value={formData.destination.city}
                    onChange={handleChange}
                    className={cx("input-form-order")}
                  >
                    <option value="HCM">HCM</option>
                    <option value="Hanoi">Hanoi</option>
                    <option value="DaNang">Da Nang</option>
                  </select>
                </div>
                <div className={cx("box-input-form-order")}>
                  <label>District</label>
                  <select
                    name="destination.district"
                    value={formData.destination.district}
                    onChange={handleChange}
                    className={cx("input-form-order")}
                  >
                    <option value="HCM">Q1</option>
                    <option value="Hanoi">Q2</option>
                    <option value="DaNang">Q3</option>
                  </select>
                </div>
              </div>
              <div className={cx("box-input-form-order")}>
                <label>Address</label>
                <input
                  type="text"
                  name="destination.name"
                  value={formData.destination.name}
                  onChange={handleChange}
                  className={cx("input-form-order")}
                />
              </div>
            </div>
            <div className={cx("box-input-form-order")}>
              <label>Note</label>
              <textarea
                name="note"
                value={formData.note}
                onChange={handleChange}
                className={cx("input-form-order")}
                rows="4"
                cols="50"
              />
            </div>
            <div className={cx("box-btn-order")}>
              <button type="submit">Create Shipment</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default CreateShipment;
