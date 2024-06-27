import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AdminDashboardScreen = () => {
  // Placeholder data for demonstration
  const totalSales = 5000;
  const totalOrders = 200;
  const pendingOrders = 10;
  const usersCount = 150;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Dashboard</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Total Sales</Text>
        <Text style={styles.cardValue}>${totalSales}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Total Orders</Text>
        <Text style={styles.cardValue}>{totalOrders}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Pending Orders</Text>
        <Text style={styles.cardValue}>{pendingOrders}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Total Users</Text>
        <Text style={styles.cardValue}>{usersCount}</Text>
      </View>
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
  card: {
    backgroundColor: "#f0f0f0",
    padding: 20,
    borderRadius: 8,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardValue: {
    fontSize: 24,
  },
});

export default AdminDashboardScreen;
