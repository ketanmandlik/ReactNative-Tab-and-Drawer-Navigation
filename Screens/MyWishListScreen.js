import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MyWishListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>My Wish List Screen!</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MyWishListScreen;
