import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React from "react";
import CustomButton from "../component/CustomButton";
import { useNavigation } from "@react-navigation/native";

const AuthenticationScreen = () => {
const naviagtion = useNavigation();

const handleNavigation = () =>{
    naviagtion.navigate('verification')
}

  return (
    <View style={styles.container}>
      <Image source={require("../assets/auth-img.png")} />
      <Text style={styles.authTextTitle}>Identifiez vous pour continuer</Text>
      <Text style={styles.authText}>Enter your email address</Text>
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        placeholderTextColor={"black"}
        style={styles.textInput}
      />
      <CustomButton 
      text={'Submit'}
      textStyle={styles.buttonTextStyle}
      buttonStyle={styles.buttonStyle}
      onPress={handleNavigation}
      />
    </View>
  );
};

export default AuthenticationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  authTextTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F12B2B",
    marginTop: 40,
  },
  authText: {
    fontSize: 18,
    fontWeight: "medium",
    color: "black",
    marginTop: 10,
  },
  textInput:{
    borderWidth: 2,
    borderColor: "#CCCCCC",
    width: "100%",
    paddingVertical: 14,
    borderRadius: 5,
    paddingHorizontal: 6,
    marginTop: 10
  },
  buttonTextStyle:{
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF2F2",
  },
  buttonStyle:{
    backgroundColor: "#F12B2B",
    borderRadius: 8,
    marginTop: 30
  }

});
