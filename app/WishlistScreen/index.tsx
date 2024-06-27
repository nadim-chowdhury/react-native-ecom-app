import React, { useState } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";

const WishlistScreen = () => {
  const [wishlist, setWishlist] = useState([
    { id: "1", name: "Product 1", price: 50 },
    { id: "2", name: "Product 2", price: 30 },
  ]);

  const handleRemoveFromWishlist = (itemId) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== itemId);
    setWishlist(updatedWishlist);
  };

  return (
    <View style={styles.container}>
      {wishlist.length === 0 ? (
        <Text style={styles.emptyText}>Your wishlist is empty.</Text>
      ) : (
        <FlatList
          data={wishlist}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.productContainer}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>${item.price}</Text>
              <Button
                title="Remove"
                onPress={() => handleRemoveFromWishlist(item.id)}
              />
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  emptyText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 50,
  },
  productContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 14,
  },
});

export default WishlistScreen;
