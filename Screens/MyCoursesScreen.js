import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "../Component/Card";

const MyCoursesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>My Courses Screen</Text>
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

export default MyCoursesScreen;
