import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import HomeScreen from "./BottomTabScreens/HomeScreen";
import { StyleSheet, Text } from "react-native";
import UsersBio from "./BottomTabScreens/UsersBio";
import Location from "./BottomTabScreens/Location";
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
        name="Home"
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
        name="Users"
        component={UsersBio}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="contacts"
              size={24}
              color={focused ? "red" : "gray"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Location"
        component={Location}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="pin-drop"
              size={24}
              color={focused ? "red" : "gray"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
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
