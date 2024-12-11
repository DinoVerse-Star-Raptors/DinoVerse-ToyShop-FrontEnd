import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Loader } from "lucide-react"; // Importing from lucide-react
import axiosInstance from "../../services/axiosInstance";

function Orders() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  // const [orders, setOrders] = useState([]);
  const [orderData, setorderData] = useState([]);


  const currency = "฿";
  // const loadOrderData = async () => {
  //   try {
  //       setIsLoading(true);
  //       const response = await axiosInstance.post("/api/order/myOrder",{userId: user.userId});
        

  //     if (response.data.success) {
  //       let allOrdersItem = [];
  //       response.data.orders.map((order) => {
  //         order.items.map((item) => {
  //           item["status"] = order.status;
  //           item["payment"] = order.payment;
  //           item["paymentMethod"] = order.paymentMethod;
  //           item["date"] = order.date;
  //           allOrdersItem.push(item);
  //         });
  //         console.log(response);
  //         // console.log(allOrdersItem);
  //       });
  //       setorderData(allOrdersItem.reverse());
        
  //     }
  //     setIsLoading(false)
  //   } catch (error)  {
  //     setIsLoading(false)
  //     console.log(error);
  //   }
  // };


  useEffect(() => {
    const loadOrder = async () => {
      try {
          setIsLoading(true);
          const response = await axiosInstance.post("/api/order/myOrder",{userId: user.userId});
          console.log(response.data)
  
        if (response.data.success) {
          let allOrdersItem = [];
          response.data.orders.map((order) => {
            order.items.map((item) => {
              item["status"] = order.status;
              item["payment"] = order.payment;
              item["paymentMethod"] = order.paymentMethod;
              item["date"] = order.date;
              allOrdersItem.push(item);
            });
            // console.log(response);
            // console.log(allOrdersItem.reverse());
          });
          setorderData(allOrdersItem.reverse());
          
        }
        setIsLoading(false)
      } catch (error)  {
        setIsLoading(false)
        console.log(error);
      }
    };

    if (!user) {
      navigate("/login");
    } else {
      loadOrder();
    }
  }, [user, navigate]);

  

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <Loader size={50} color={"#123abc"} className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        My Order
      </div>
    
      <div>
      {orderData.length > 0 && orderData.map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img className="w-16 sm:w-20" src={item?.product?.imageUrl} alt="" />
              <div>
                <p className="sm:text-base font-medium">{item?.product?.name}</p>
                <div className="flex items-center gap-3 mt-1 text-base text-gray-700">
                  <p>
                    {currency}
                    {item?.product?.price}
                  </p>
                  <p>Quantity: {item?.quantity}</p>
                  
                </div>
                <p className="mt-1">
                  Date:{" "}
                  <span className=" text-gray-400">
                    {new Date(item.date).toDateString()}
                  </span>
                </p>
                <p className="mt-1">
                  Payment:{" "}
                  <span className=" text-gray-400">{item.paymentMethod}</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">{item.status}</p>
              </div>
              {/* <button
                onClick={loadOrderData}
                className="border px-4 py-2 text-sm font-medium rounded-sm"
              >
                Track Order
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
