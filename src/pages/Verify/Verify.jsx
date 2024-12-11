import React from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "../../services/axiosInstance";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const [searchParams] = useSearchParams();

  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const navigate = useNavigate();
  const verifyPayment = async () => {
    try {
      const response = await axiosInstance.post("/api/order/verifyStripe", {
        success,
        orderId,
      });

      if (response.data.success) {
        navigate("/user/orders");
      } else {
        navigate("/cart");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    verifyPayment();
  });

  return <div></div>;
};

export default Verify;
