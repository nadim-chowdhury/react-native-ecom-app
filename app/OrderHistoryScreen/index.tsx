import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const OrderHistoryScreen = () => {
  const orders = [
    { id: "1", date: "2023-06-01", total: 100, status: "Delivered" },
    { id: "2", date: "2023-05-25", total: 150, status: "Processing" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order History</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.orderContainer}>
            <Text>Order ID: {item.id}</Text>
            <Text>Date: {item.date}</Text>
            <Text>Total: ${item.total}</Text>
            <Text>Status: {item.status}</Text>
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
  orderContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
});

export default OrderHistoryScreen;
