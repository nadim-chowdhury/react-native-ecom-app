import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";

const OrderManagementScreen = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from backend (simulate data for demo)
    const dummyOrders = [
      { id: "1", date: "2023-06-01", total: 100, status: "Delivered" },
      { id: "2", date: "2023-05-25", total: 150, status: "Processing" },
    ];
    setOrders(dummyOrders);
  }, []);

  const handleUpdateOrderStatus = (orderId, newStatus) => {
    // Implement order status update logic (simulate here)
    const updatedOrders = orders.map((order) => {
      if (order.id === orderId) {
        return { ...order, status: newStatus };
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Management</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.orderItem}>
            <Text>Order ID: {item.id}</Text>
            <Text>Date: {item.date}</Text>
            <Text>Total: ${item.total}</Text>
            <Text>Status: {item.status}</Text>
            <Button
              title="Update Status"
              onPress={() => handleUpdateOrderStatus(item.id, "Shipped")}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  orderItem: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
});

export default OrderManagementScreen;
