import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
// import { FcPackage } from "react-icons/fc";
import { TfiPackage } from "react-icons/tfi";

import { assets } from "../../assets/assets.js";
import "./Orders.css";

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const resp = await axios.get(url + "/api/order/list");
    if (resp.data.success) {
      setOrders(resp.data.data);
      console.log(resp.data.data);
    } else {
      toast.error("Error");
    }
  };

  const statusHandler = async (e, orderId) => {
    const resp = await axios.post(url + "/api/order/status", {
      orderId,
      status: e.target.value,
    });

    if (resp.data.success) {
      await fetchAllOrders();
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="order add">
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order-item">
            {/* <img src={assets.parcel_icon} alt="" /> */}
            {/* <FcPackage style={{ fontSize: "50px", marginTop: "-6px" }} /> */}
            <TfiPackage style={{ fontSize: "50px" }} />
            <div>
              <p className="order-item-food">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
              </p>
              <p className="order-item-name">
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <div className="order-item-address">
                <p>{order.address.street + ","}</p>
                <p>
                  {order.address.city +
                    ", " +
                    order.address.state +
                    ", " +
                    order.address.country +
                    ", " +
                    order.address.zipcode}
                </p>
              </div>
              <p className="order-item-phone">{order.address.phone}</p>
            </div>
            <p>Items : {order.items.length}</p>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "15px",
              }}
              className="order-amount"
            >
              ${order.amount}/=
            </p>
            <select
              onChange={(e) => statusHandler(e, order._id)}
              value={order.status}
            >
              <option disabled>Select Status</option>
              <option value="Food Processing">Food Processing</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
