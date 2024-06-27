import React, { useState } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([
    { id: "1", name: "Product 1", price: 50, quantity: 2 },
    { id: "2", name: "Product 2", price: 30, quantity: 1 },
  ]);

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const handleAdjustQuantity = (itemId, newQuantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>${item.price}</Text>
            <View style={styles.quantityContainer}>
              <Button
                title="-"
                onPress={() => handleAdjustQuantity(item.id, item.quantity - 1)}
              />
              <Text style={styles.quantity}>{item.quantity}</Text>
              <Button
                title="+"
                onPress={() => handleAdjustQuantity(item.id, item.quantity + 1)}
              />
              <Button
                title="Remove"
                onPress={() => handleRemoveItem(item.id)}
              />
            </View>
          </View>
        )}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total:</Text>
        <Text style={styles.totalPrice}>${getTotalPrice()}</Text>
      </View>
      <View style={styles.checkoutContainer}>
        <Button
          title="Proceed to Checkout"
          onPress={() => console.log("Proceed to checkout")}
        />
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
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 16,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
    borderTopWidth: 1,
    paddingTop: 10,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
  },
  totalPrice: {
    fontSize: 18,
    color: "green",
  },
  checkoutContainer: {
    width: "100%",
    marginTop: 20,
  },
});

export default CartScreen;
