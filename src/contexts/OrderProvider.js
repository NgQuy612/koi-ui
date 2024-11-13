import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [orderCount, setOrderCount] = useState(0);

  // Hàm lấy số lượng đơn hàng từ API khi khởi chạy ứng dụng
  const fetchOrderCount = async () => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      toast.error("Token is missing");
      return;
    }

    try {
      const response = await axios.get("http://localhost:8081/api/v1/order/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOrderCount(response.data.length); // Cập nhật số lượng đơn hàng từ API
    } catch (error) {
      toast.error("Failed to fetch orders");
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrderCount();
  }, []);

  // Hàm tăng `orderCount` thêm 1 khi có đơn mới
  const incrementOrderCount = () => {
    setOrderCount((prevCount) => prevCount + 1);
  };

  return (
    <OrderContext.Provider value={{ orderCount, incrementOrderCount, fetchOrderCount }}>
      {children}
    </OrderContext.Provider>
  );
}

// Custom hook để dễ sử dụng `OrderContext`
export function useOrder() {
  return useContext(OrderContext);
}
