import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Button,
  StyleSheet,
} from "react-native";

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params; // Assuming navigation param contains product details

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.availability}>
          Availability: {product.available ? "In Stock" : "Out of Stock"}
        </Text>
        {/* Additional details like shipping information */}
      </View>
      {/* Add to cart button */}
      <View style={styles.addToCartContainer}>
        <Button
          title="Add to Cart"
          onPress={() => console.log("Added to cart:", product)}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 20,
    resizeMode: "cover",
  },
  detailsContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: "green",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  availability: {
    fontSize: 16,
    marginBottom: 10,
  },
  addToCartContainer: {
    width: "100%",
    marginBottom: 20,
  },
});

export default ProductDetailScreen;
