import React, { useEffect } from "react";
import Layout from "../../../components/admin/Layout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminPage() {
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (!token) {
      toast.error("Token is missing");
      return;
    }
  }, [token]);

  return <Layout></Layout>;
}

export default AdminPage;
