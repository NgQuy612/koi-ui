import React, { useState, useEffect } from "react";
import Layout from "../../../components/admin/Layout";
import styles from "./index.module.css";
import classNames from "classnames/bind";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);

const AddressMng = () => {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [newAddress, setNewAddress] = useState({
    name: "",
    addressClass: "", // "DISTRICT", "CITY", "COUNTRY"
    parentId: "",
    longitude: "",
    latitude: "",
  });

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          toast.error("Token is missing");
          return;
        }

        const countriesResponse = await axios.get(
          "http://localhost:8081/api/v1/address-items/class?addressClass=COUNTRY",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCountries(countriesResponse.data);

        const citiesResponse = await axios.get(
          "http://localhost:8081/api/v1/address-items/class?addressClass=CITY",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCities(citiesResponse.data);

        const districtsResponse = await axios.get(
          "http://localhost:8081/api/v1/address-items/class?addressClass=DISTRICT",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setDistricts(districtsResponse.data);
      } catch (error) {
        toast.error("Failed to fetch data");
      }
    };

    fetchAllData();
  }, []);

  const handleDelete = async (id, type) => {
    const isConfirmed = window.confirm(`Are you sure you want to delete this ${type.toLowerCase()}?`);

    if (!isConfirmed) {
      return;
    }

    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        toast.error("Token is missing");
        return;
      }

      const response = await axios.delete(
        `http://localhost:8081/api/v1/address-items/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success(`${type} deleted successfully`);

        if (type === "COUNTRY") {
          setCountries(countries.filter((item) => item.id !== id));
        } else if (type === "CITY") {
          setCities(cities.filter((item) => item.id !== id));
        } else if (type === "DISTRICT") {
          setDistricts(districts.filter((item) => item.id !== id));
        }
      }
    } catch (error) {
      toast.error(`Failed to delete ${type}`);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAddress({
      ...newAddress,
      [name]: value,
    });
  };

  const handleCountryChange = async (e) => {
    const countryId = e.target.value;
    setSelectedCountry(countryId);
    setSelectedCity(""); // Reset city when country changes

    if (countryId) {
      const token = localStorage.getItem("authToken");
      const citiesResponse = await axios.get(
        `http://localhost:8081/api/v1/address-items/class?addressClass=CITY&parentId=${countryId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCities(citiesResponse.data);
    }
  };

  const handleCityChange = async (e) => {
    const cityId = e.target.value;
    setSelectedCity(cityId);

    // Fetch districts for the selected city
    if (cityId) {
      const token = localStorage.getItem("authToken");
      const districtsResponse = await axios.get(
        `http://localhost:8081/api/v1/address-items/class?addressClass=DISTRICT&parentId=${cityId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setDistricts(districtsResponse.data);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newAddress.name) {
      toast.error("Please provide a name for the address");
      return;
    }

    const { addressClass, name, longitude, latitude } = newAddress;
    let parentId = "";

    // Logic for setting parentId
    if (addressClass === "CITY" && selectedCountry) {
      parentId = selectedCountry;
    } else if (addressClass === "DISTRICT" && selectedCity) {
      parentId = selectedCity;
    }

    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.post(
        "http://localhost:8081/api/v1/address-items",
        { name, addressClass, parentId, longitude, latitude },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success("Address added successfully");
        setNewAddress({
          name: "",
          addressClass: "",
          parentId: "",
          longitude: "",
          latitude: "",
        });
        setSelectedCountry("");
        setSelectedCity("");
      }
    } catch (error) {
      toast.error("Failed to add address");
    }
  };

  return (
    <Layout>
      <div className={cx("box-form-user")}>
        <ToastContainer />
        <p className={cx("title-form-user")}>Address Management</p>

        <div className={cx("container-form-address")}>
          <p className={cx("title-table")}>New Item Address</p>
          <form className={cx("form-address")} onSubmit={handleSubmit}>
            {/* Select Address Type */}
            <div>
              <select
                name="addressClass"
                id="addressClass"
                className={cx("input-form-address")}
                value={newAddress.addressClass}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Type</option>
                <option value="COUNTRY">Country</option>
                <option value="CITY">City</option>
                <option value="DISTRICT">District</option>
              </select>
            </div>

            {/* Country select (only for CITY and DISTRICT) */}
            <div
              style={{
                display:
                  newAddress.addressClass === "CITY" ||
                  newAddress.addressClass === "DISTRICT"
                    ? "block"
                    : "none",
              }}
            >
              <select
                name="country"
                id="country"
                className={cx("input-form-address")}
                value={selectedCountry}
                onChange={handleCountryChange}
                // style = {newAddress.addressClass === ""}
                disabled={newAddress.addressClass === ""}
                required={
                  newAddress.addressClass === "CITY" ||
                  newAddress.addressClass === "DISTRICT"
                }
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>

            {/* City select (only for DISTRICT) */}
            <div
              style={{
                display:
                  newAddress.addressClass === "DISTRICT" ? "block" : "none",
              }}
            >
              <select
                name="city"
                id="city"
                className={cx("input-form-address")}
                value={selectedCity}
                onChange={handleCityChange}
                disabled={newAddress.addressClass !== "DISTRICT"}
                required={newAddress.addressClass === "DISTRICT"}
              >
                <option value="">Select City</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Longitude and Latitude input (only for CITY) */}
            {newAddress.addressClass === "CITY" && (
              <>
                <div>
                  <input
                    type="text"
                    id="longitude"
                    name="longitude"
                    className={cx("input-form-address")}
                    value={newAddress.longitude}
                    onChange={handleInputChange}
                    placeholder="Longitude"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="latitude"
                    name="latitude"
                    className={cx("input-form-address")}
                    value={newAddress.latitude}
                    onChange={handleInputChange}
                    placeholder="Latitude"
                    required
                  />
                </div>
              </>
            )}

            {/* Name input */}
            <div>
              <input
                type="text"
                id="name"
                name="name"
                className={cx("input-form-address")}
                value={newAddress.name}
                onChange={handleInputChange}
                placeholder="Name Address"
                required
              />
            </div>

            <div className={cx("btn-submit-address")}>
              <button type="submit">Save</button>
            </div>
          </form>
        </div>

        {/* Country Table */}
        <div className={cx("box-list-table")}>
          <div className={cx("box-table-item")}>
            <p className={cx("title-table")}>Countries</p>
            <div className={cx("table-item-address")}>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {countries.map((country) => (
                    <tr key={country.id}>
                      <td>{country.id}</td>
                      <td>{country.name}</td>
                      <td>
                        <button
                          className={cx("btn-close-address")}
                          onClick={() => handleDelete(country.id, "COUNTRY")}
                        >
                          <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cities Table */}
          <div className={cx("box-table-item")}>
            <p className={cx("title-table")}>Cities</p>
            <div className={cx("table-item-address")}>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cities.map((city) => (
                    <tr key={city.id}>
                      <td>{city.id}</td>
                      <td>{city.name}</td>
                      <td>
                        <button
                          className={cx("btn-close-address")}
                          onClick={() => handleDelete(city.id, "CITY")}
                        >
                          <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Districts Table */}
          <div className={cx("box-table-item")}>
            <p className={cx("title-table")}>Districts</p>
            <div className={cx("table-item-address")}>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {districts.map((district) => (
                    <tr key={district.id}>
                      <td>{district.id}</td>
                      <td>{district.name}</td>
                      <td>
                        <button
                          className={cx("btn-close-address")}
                          onClick={() => handleDelete(district.id, "DISTRICT")}
                        >
                          <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddressMng;
