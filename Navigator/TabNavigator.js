import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import MyCoursesScreen from "../Screens/MyCoursesScreen";
import MyWishListScreen from "../Screens/MyWishListScreen";
import SearchScreen from "../Screens/SearchScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import DrawerNavigator from "./DrawerNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: "#212F3D",
        activeBackgroundColor: "#F2F3F4",
        inactiveBackgroundColor: "#F2F3F4",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="My Courses"
        component={MyCoursesScreen}
        options={{
          tabBarLabel: "My Courses",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="play-circle"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="My Wishlist"
        component={MyWishListScreen}
        options={{
          tabBarLabel: "My Wishlist",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="heart-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-circle"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
