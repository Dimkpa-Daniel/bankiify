import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "./screens/OnboardingScreen";
import AuthenticationScreen from "./screens/AuthenticationScreen";
import VerificationScreen from "./screens/VerificationScreen";
import HomeScreen from "./screens/BottomTabScreens/HomeScreen";
import BottomTabScreen from "./screens/BottomTabScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="authentication"
          component={AuthenticationScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
        name="verification"
        component={VerificationScreen}
        options={{headerShown: false}}
        />

        <Stack.Screen
          name="bottomTab"
          component={BottomTabScreen}
          options={{headerShown: false}}
          />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
