import React from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import ProductDetailsScreen from "./ProductsDetailsScreen";
const ProductsOverviewScreen = (props) => {
  // console.log("&&&&&&&&&&&&&&&", props);
  const { products_list } = props;
  return (
    <FlatList
      data={products_list}
      keyExtractor={(item) => item.p_Id}
      renderItem={(products) => (
        <ProductItem
          product_item={products.item}
          onViewProductDetails={() => {
            props.navigation.navigate("ProductDetails", {
              selected_p_toShow: products.item,
              p_Title: products.item.p_Title,
            });
          }}
          onAddToCart={() => {}}
        />
      )}
    />
  );
};

ProductsOverviewScreen.navigationOptions = {
  headerTitle: "All Products",
};

const mapStateToProps = (state) => {
  // console.log("1111111111111111", state.products.available_Products);
  return {
    products_list: state.products.available_Products,
  };
};
export default connect(mapStateToProps, {})(ProductsOverviewScreen);
