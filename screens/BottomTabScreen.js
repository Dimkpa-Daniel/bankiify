import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import HomeScreen from "./BottomTabScreens/HomeScreen";
import { StyleSheet, Text } from "react-native";
import Services from "./BottomTabScreens/Services";
import Transactions from "./BottomTabScreens/Transactions";
import Profile from "./BottomTabScreens/Profile";

const Tab = createBottomTabNavigator();

const BottomTabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabel: ({ focused }) => (
          <Text style={{ color: focused ? "red" : "gray" }}>{route.name}</Text>
        ),
        tabBarStyle:{
            borderTopWidth: 0.5,
            borderTopColor: 'gray'
        }
      })}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="account-balance"
              size={24}
              color={focused ? "red" : "gray"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="services"
        component={Services}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="settings"
              size={24}
              color={focused ? "red" : "gray"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="transaction"
        component={Transactions}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={24}
              color={focused ? "red" : "gray"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="person"
              size={24}
              color={focused ? "red" : "gray"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabScreen;

const styles = StyleSheet.create({});
