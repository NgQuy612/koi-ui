import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  // Hàm để cập nhật thông tin user từ bên ngoài
  const updateUser = (newData) => {
    setUser((prevUser) => ({ ...prevUser, ...newData }));
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          console.error("Token is missing");
          return;
        }
        const response = await axios.get('http://localhost:8081/api/v1/user/info', {
          headers: {
            accept: '*/*',
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          const data = response.data;
          setUser({ fullName: data.fullName });
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  return useContext(UserContext);
}

export { UserProvider, useUser };
