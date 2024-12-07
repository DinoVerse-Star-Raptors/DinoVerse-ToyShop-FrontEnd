import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Loader } from "lucide-react"; // Importing from lucide-react

function Orders() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      fetchOrders();
    }
  }, [user, navigate]);

  const fetchOrders = async () => {
    try {
      // Simulating API failure
      throw new Error("API Failure");

      // const response = await fetch(`/api/orders?userId=${user.id}`);
      // const data = await response.json();
      // setOrders(data.orders);
      // setIsLoading(false);
    } catch (error) {
      console.error("Error fetching orders:", error);
      // Using mock data in case of API failure
      const mockOrders = [
        {
          _id: "12345",
          date: Date.now(),
          status: "Delivered",
          amount: 120.0,
          items: [
            { name: "Item 1", price: 40, quantity: 1 },
            { name: "Item 2", price: 80, quantity: 1 },
          ],
        },
        {
          _id: "12346",
          date: Date.now(),
          status: "Shipped",
          amount: 75.0,
          items: [{ name: "Item 3", price: 75, quantity: 1 }],
        },
      ];
      setOrders(mockOrders);
      setIsLoading(false);
    }
  };

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
          {orders.length > 0 ? (
            orders.map((order, index) => (
              <div
                key={index}
                className="mb-4 rounded-lg bg-gray-50 p-4 shadow"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-700">
                      Order #{order._id}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Placed on: {new Date(order.date).toLocaleDateString()}
                    </p>
                    <p className="text-sm text-gray-500">
                      Status: {order.status}
                    </p>
                  </div>
                  <p className="text-lg text-gray-700">${order.amount}</p>
                </div>
                <div className="mt-4">
                  <h4 className="text-md font-medium text-gray-700">Items:</h4>
                  <ul className="list-inside list-disc">
                    {order.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600">
                        {item.name} - ${item.price} x {item.quantity}
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
