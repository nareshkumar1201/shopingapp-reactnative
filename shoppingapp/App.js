import { StyleSheet } from "react-native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import ProductsReducers from "./store/reducers/ProductsReducers";
import ShopNavigator from "./navigation/ShopNavigator";
const rootReducers = combineReducers({ products: ProductsReducers });
// const store = createStore(rootReducers);
export default function App() {
  return (
    <Provider store={createStore(rootReducers)}>
      <ShopNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
