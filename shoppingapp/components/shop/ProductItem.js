import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import Colors from "../../constants/Colors";
const ProductItem = (props) => {
  const { p_Title, p_Price, p_ImageUrl, onViewProductDetails, onAddToCart } =
    props.product_item;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: p_ImageUrl }} style={styles.image} />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{p_Title}</Text>
        <Text style={styles.price}> ₹ {p_Price.toFixed(2)}</Text>
      </View>
      <View style={styles.action}>
        <Button
          color={Colors.primary}
          title="View Details"
          onPress={onViewProductDetails}
        />
        <Button color={Colors.primary} title="To Cart" onPress={onAddToCart} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 10,
    padding: 10,
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  details: {
    height: "20%",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    color: Colors.day_light,
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    height: "20%",
  },
});
export default ProductItem;
