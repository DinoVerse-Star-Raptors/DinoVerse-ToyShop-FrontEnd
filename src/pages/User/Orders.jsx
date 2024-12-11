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
          // response.data.orders.map((order) => {
          //   order.items.map((item) => {
          //     item["status"] = order.status;
          //     item["payment"] = order.payment;
          //     item["paymentMethod"] = order.paymentMethod;
          //     item["date"] = order.date;
          //     allOrdersItem.push(item);
          //   });
          //   // console.log(response);
          //   // console.log(allOrdersItem.reverse());
          // });
          setorderData(response.data.orders.reverse());
          
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
    <div className="items-top flex min-h-screen justify-center bg-gray-50 pt-8">
      <div className="w-full max-w-4xl rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-800">
            Order History
          </h1>
        </div>

        <div className="space-y-4">
          {orderData.length > 0 ? (
            orderData.map((order, index) => (
              <div
                key={index}
                className="mb-4 rounded-lg bg-gray-50 p-4 shadow"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-700">
                      Order #{order._id}
                    </h3>
                    <div className="flex gap-2">
                      {order.items.map((item, idx) => (
                        <img
                        className="w-16 sm:w-20"
                        src={item?.product?.imageUrl}
                        alt=""/>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500">
                      Placed on: {new Date(order.date).toDateString()}
                    </p>
                    <p className="text-sm text-gray-500">
                      Status: {order.status}
                    </p>
                    <p className="text-sm text-gray-500">
                      Payment Method: {order.paymentMethod}
                  </p>
                  </div>
                  <p className="text-lg text-gray-700">฿{order.amount}</p>
                </div>

                <div className="mt-4">
                  <h4 className="text-md font-medium text-gray-700">Items:</h4>
                  <ul className="list-inside list-disc">
                    {order.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600">
                        {item.product.name} - ฿{item.product.price} x {item.quantity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No orders found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Orders;
