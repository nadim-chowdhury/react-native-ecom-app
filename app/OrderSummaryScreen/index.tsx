import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const OrderSummaryScreen = ({ navigation }) => {
  const handleFinishOrder = () => {
    // Simulated order completion
    alert("Order placed successfully!");

    // Navigate to order history or home screen
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Summary</Text>
      {/* Display order details here */}
      <View style={styles.summaryContainer}>
        <Text>Order Total: $150</Text>
        <Text>Shipping Address: John Doe, 123 Main St, New York, NY 10001</Text>
        {/* Additional order details */}
      </View>
      <Button title="Finish Order" onPress={handleFinishOrder} />
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
  summaryContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
  },
});

export default OrderSummaryScreen;
