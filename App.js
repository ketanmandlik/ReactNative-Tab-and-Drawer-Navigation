import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./Screens/HomeScreen";
import { DrawerContent } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./Navigator/DrawerNavigator";
import TabNavigator from "./Navigator/TabNavigator";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
