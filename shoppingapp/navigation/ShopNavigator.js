// import { createStackNavigator } from "react-navigation-stack";
// import { createAppContainer } from "react-navigation";
// import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
// import Colors from "../constants/Colors";
// import { Platform } from "react-native";
// const ShopNavigator = createStackNavigator(
//   {
//     ProductsOverview: ProductsOverviewScreen,
//   },
//   {
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: Platform.OS === "android" ? Colors.primary : "",
//       },
//       headerTintColor:
//         Platform.OS === "android" ? Colors.day : Colors.primaryColor,
//     },
//   }
// );

// export default createAppContainer(ShopNavigator);

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import Colors from "../constants/Colors";
import { Platform } from "react-native";
import ProductDetailsScreen from "../screens/shop/ProductsDetailsScreen";
const ShopNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetails: ProductDetailsScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTintColor:
        Platform.OS === "android" ? Colors.day : Colors.primaryColor,
    },
  }
);

export default createAppContainer(ShopNavigator);
