import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";

const ProductManagementScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from backend (simulate data for demo)
    const dummyProducts = [
      { id: "1", name: "Product 1", price: 50 },
      { id: "2", name: "Product 2", price: 30 },
    ];
    setProducts(dummyProducts);
  }, []);

  const handleDeleteProduct = (productId) => {
    // Implement product deletion logic (simulate here)
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Management</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text>{item.name}</Text>
            <Text>${item.price}</Text>
            <Button
              title="Delete"
              onPress={() => handleDeleteProduct(item.id)}
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
  productItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 10,
  },
});

export default ProductManagementScreen;
