import React from "react";
import { View, Button, Share, StyleSheet } from "react-native";

const ProductDetailScreen = ({ product }) => {
  const handleShare = async () => {
    try {
      await Share.share({
        message: `Check out this product: ${product.name} - ${product.description}`,
      });
    } catch (error) {
      alert("Error sharing product");
    }
  };

  return (
    <View style={styles.container}>
      {/* Your product details */}
      <Button title="Share Product" onPress={handleShare} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});

export default ProductDetailScreen;
