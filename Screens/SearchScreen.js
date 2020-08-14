import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Search Screen</Text>
    </SafeAreaView>
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

export default SearchScreen;
