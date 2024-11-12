import React, { useState, useEffect } from "react";
import Layout from "../../../../components/client/Customer/Layout";
import styles from "./index.module.css";
import classNames from "classnames/bind";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const cx = classNames.bind(styles);

function CreateShipment() {
  const defaultData = {
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
  };
  const [formData, setFormData] = useState(defaultData);

  //Origin
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);

  //Destination
  const [citiesDestination, setCitiesDestination] = useState([]);
  const [districtsDestination, setDistrictsDestination] = useState([]);

  //Method
  const [methods, setMethods] = useState([]);

  //const [shippingMethods, setShippingMethods] = useState([]);
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (!token) {
      toast.error("Token is missing");
      return;
    }

    axios
      .get(
        "http://localhost:8081/api/v1/address-items/class?addressClass=COUNTRY",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => setCountries(response.data))
      .catch((error) => toast.error("Failed to fetch countries"));
  }, [token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    const parsedValue = (name === "quantity" || name === "weight") ? Number(value) : value;
  
    if (name.includes("origin") || name.includes("destination")) {
      const [key, subkey] = name.split(".");
      setFormData((prevData) => ({
        ...prevData,
        [key]: {
          ...prevData[key],
          [subkey]: parsedValue,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: parsedValue,
      }));
    }
  };
  

  const handleCountryChange = (e, isOrigin) => {
    const selectedCountry = e.target.value;
    const countryItem = countries.find(
      (country) => country.name === selectedCountry
    ); // Tìm quốc gia trong danh sách countries
    const countryId = countryItem ? countryItem.id : null; // Kiểm tra và lấy id của quốc gia

    if (!countryId) {
      toast.error("Country not found");
      return;
    }

    const key = isOrigin ? "origin" : "destination";

    setFormData((prevData) => ({
      ...prevData,
      [key]: {
        ...prevData[key],
        country: selectedCountry,
      },
    }));

    // Call API để lấy danh sách thành phố (cities) dựa trên id của quốc gia
    axios
      .get(
        `http://localhost:8081/api/v1/address-items/class?addressClass=CITY&parentId=${countryId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        if (isOrigin) {
          setCities(response.data);
        } else {
          setCitiesDestination(response.data);
        }
      })
      .catch((error) => toast.error("Failed to fetch cities"));
  };

  const handleCityChange = (e, isOrigin) => {
    const selectedCity = e.target.value;
    const cityItem = cities.find((city) => city.name === selectedCity); // Đổi tên thành cityItem để tránh trùng với tên biến
    const cityId = cityItem ? cityItem.id : null; // Đảm bảo không bị lỗi nếu không tìm thấy thành phố

    if (!cityId) {
      toast.error("City not found");
      return;
    }

    const key = isOrigin ? "origin" : "destination";

    setFormData((prevData) => ({
      ...prevData,
      [key]: { ...prevData[key], city: selectedCity },
    }));

    axios
      .get(
        `http://localhost:8081/api/v1/address-items/class?addressClass=DISTRICT&parentId=${cityId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        if (isOrigin) {
          setDistricts(response.data);
        } else {
          setDistrictsDestination(response.data);
        }
      })
      .catch((error) => toast.error("Failed to fetch districts"));
  };

  const handleMethodChange = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const price = selectedOption.dataset.price;
    const method = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      method,
    }));
    setEstimatedPrice(price ? price : 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const isFormComplete = [
      formData.quantity,
      formData.weight,
      formData.method,
      ...Object.values(formData.origin),
      ...Object.values(formData.destination),
    ].every((val) => val);
  
    if (!isFormComplete) {
      toast.error("Please complete all required fields.");
      return;
    }
  
    console.log(JSON.stringify(formData));
  
    try {
      const response = await axios.post(
        "http://localhost:8081/api/v1/order",
        {
          ...formData
        },
        {
          headers: {
            accept: "*/*",
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
  
      if (response.status === 200) {
        toast.success("Shipment created successfully!");
        setFormData(defaultData);
        setEstimatedPrice(0);
        setMethods([]);
        setIsDisabledMethod(false);
      } else {
        toast.error("Failed to create shipment");
      }
    } catch (error) {
      toast.error("Error occurred while creating shipment");
    }
  };
  
  const isOriginComplete = Object.values(formData.origin).every((val) => val);
  const isDestinationComplete = Object.values(formData.destination).every(
    (val) => val
  );
  const [isDisabledMethod, setIsDisabledMethod] = useState(false);

  if (isOriginComplete && isDestinationComplete && !isDisabledMethod) {
    setIsDisabledMethod(true);

    axios
      .post(
        "http://localhost:8081/api/v1/order/price-table",
        {
           origin: formData.origin,
           destination: formData.destination
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        setMethods(response.data);
      })
      .catch((error) => console.log("Failed to fetch estimated price"));
  }

  return (
    <Layout>
      <div className={cx("box-form-customer")}>
        <ToastContainer />
        <p className={cx("title-form-customer")}>Create Shipment</p>
        <div className={cx("box-form-order")}>
          <form onSubmit={handleSubmit} className={cx("form-order")}>
            <div className={cx("box-handle-parameter")}>
              <div className={cx("box-input-form-order")}>
                <label>Method</label>
                <select
                  name="method"
                  value={formData.method}
                  onChange={handleMethodChange}
                  className={cx("input-form-order")}
                  disabled={!isDisabledMethod}
                >
                  <option value="">Select Method</option>
                  {methods.map((method) => (
                    <option data-price={method.price} value={method.method}>{method.method}</option>
                  ))}
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

            {/* Origin Address */}
            <div className={cx("container-input-address")}>
              <p className={cx("title-container-address")}>Origin</p>
              <div className={cx("box-select-address")}>
                <div className={cx("box-input-form-order")}>
                  <label>Country</label>
                  <select
                    name="origin.country"
                    value={formData.origin.country}
                    onChange={(e) => handleCountryChange(e, true)}
                    className={cx("input-form-order")}
                  >
                    <option value="">Select Country</option>
                    {countries.map((country) => (
                      <option key={country.id} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={cx("box-input-form-order")}>
                  <label>City</label>
                  <select
                    name="origin.city"
                    value={formData.origin.city}
                    onChange={(e) => handleCityChange(e, true)}
                    className={cx("input-form-order")}
                    disabled={!formData.origin.country}
                  >
                    <option value="">Select City</option>
                    {cities.map((city) => (
                      <option key={city.id} value={city.name}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={cx("box-input-form-order")}>
                  <label>District</label>
                  <select
                    name="origin.district"
                    value={formData.origin.district}
                    onChange={handleChange}
                    className={cx("input-form-order")}
                    disabled={!formData.origin.city}
                  >
                    <option value="">Select District</option>
                    {districts.map((district) => (
                      <option key={district.id} value={district.name}>
                        {district.name}
                      </option>
                    ))}
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
                  placeholder="Enter address"
                />
              </div>
            </div>

            {/* Destination Address */}
            <div className={cx("container-input-address")}>
              <p className={cx("title-container-address")}>Destination</p>
              <div className={cx("box-select-address")}>
                <div className={cx("box-input-form-order")}>
                  <label>Country</label>
                  <select
                    name="destination.country"
                    value={formData.destination.country}
                    onChange={(e) => handleCountryChange(e, false)}
                    className={cx("input-form-order")}
                  >
                    <option value="">Select Country</option>
                    {countries.map((country) => (
                      <option key={country.id} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={cx("box-input-form-order")}>
                  <label>City</label>
                  <select
                    name="destination.city"
                    value={formData.destination.city}
                    onChange={(e) => handleCityChange(e, false)}
                    className={cx("input-form-order")}
                    disabled={!formData.destination.country}
                  >
                    <option value="">Select City</option>
                    {citiesDestination.map((city) => (
                      <option key={city.id} value={city.name}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={cx("box-input-form-order")}>
                  <label>District</label>
                  <select
                    name="destination.district"
                    value={formData.destination.district}
                    onChange={handleChange}
                    className={cx("input-form-order")}
                    disabled={!formData.destination.city}
                  >
                    <option value="">Select District</option>
                    {districtsDestination.map((district) => (
                      <option key={district.id} value={district.name}>
                        {district.name}
                      </option>
                    ))}
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
                  placeholder="Enter address"
                />
              </div>
            </div>

            <div className={cx("box-input-form-order", "box-input-note")}>
              <label>Note</label>
              <textarea
                name="note"
                value={formData.note}
                onChange={handleChange}
                className={cx("input-form-order")}
                placeholder="Add note"
              />
            </div>

            <div className={cx("box-submit-form-order")}>
              <p className={cx("title-price")}>
                Estimated Price: {estimatedPrice} vnđ
              </p>
              <button type="submit" className={cx("btn-submit-order")}>
                Create Shipment
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default CreateShipment;
