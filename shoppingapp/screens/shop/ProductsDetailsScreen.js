import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
} from "react-native";

const ProductDetailsScreen = (props) => {
  console.log(
    "****************",
    props.navigation.getParam("selected_p_toShow")
  );
  const { p_Description, p_Title } =
    props.navigation.getParam("selected_p_toShow");
  return (
    <ScrollView>
      <View>
        <Text style={styles.text}>{p_Description}</Text>
      </View>
    </ScrollView>
  );
};

ProductDetailsScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("p_Title"),
  };
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default ProductDetailsScreen;
