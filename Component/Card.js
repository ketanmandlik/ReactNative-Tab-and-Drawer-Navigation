import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Card = (props) => {
  return (
    <View style={styles.cardClass}>
      <View style={styles.container}>
        <Text style={styles.title}>Cart</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardClass: {
    flex: 1,
    margin: "2px 0",
    borderRadius: 10,
    backgroundColor: "#fff",
    width: "80%",
    padding: "10px",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    elevation: 2,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    color: "red",
  },
});

export default Card;
