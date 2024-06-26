import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const BillingInfoScreen = ({ navigation }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePayment = () => {
    // Validate input fields (add validation logic as needed)
    if (!cardNumber || !expiryDate || !cvv) {
      alert("Please fill out all fields");
      return;
    }

    // Implement payment gateway integration (simulate here)
    alert("Processing payment...");

    // Proceed to order summary screen (order confirmation)
    navigation.navigate("OrderSummary");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Card Number:</Text>
      <TextInput
        style={styles.input}
        value={cardNumber}
        onChangeText={setCardNumber}
        placeholder="Enter your card number"
        keyboardType="numeric"
      />
      <Text style={styles.label}>Expiry Date:</Text>
      <TextInput
        style={styles.input}
        value={expiryDate}
        onChangeText={setExpiryDate}
        placeholder="MM/YYYY"
        keyboardType="numeric"
      />
      <Text style={styles.label}>CVV:</Text>
      <TextInput
        style={styles.input}
        value={cvv}
        onChangeText={setCvv}
        placeholder="Enter CVV"
        keyboardType="numeric"
        secureTextEntry
      />
      <Button title="Pay Now" onPress={handlePayment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default BillingInfoScreen;
