import { StyleSheet, Text, View, TextInput, Platform } from "react-native";
import React, { useState } from "react";
import CustomButton from "../component/CustomButton";
import { useNavigation } from "@react-navigation/native";

const VerificationScreen = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const naviagtion = useNavigation();

  const handleNavigation = () => {
    naviagtion.navigate("bottomTab");
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: "bold", color: "#F12B2B" }}>
        Verification
      </Text>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "light",
          color: "black",
          textAlign: "center",
          marginTop: 30,
        }}
      >
        Veuillez saisir le code que vous avez reçu par sms !
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginTop: 80,
        }}
      >
        {otp.map((value, index) => (
          <TextInput
            key={index}
            value={value}
            keyboardType="numeric"
            maxLength={1}
            style={styles.textInputStyle}
          />
        ))}
      </View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "light",
          color: "black",
          textAlign: "center",
          marginTop: 30,
        }}
      >
        Vous ne l’avez pas reçu ?
      </Text>

      <Text
        style={{
          fontSize: 18,
          fontWeight: "light",
          color: "#F12B2B",
          textAlign: "center",
          marginTop: 20,
          textDecorationLine: "underline",
        }}
      >
        Renvoyer le code !
      </Text>

      <CustomButton
        text={"Verify"}
        textStyle={styles.buttonTextStyle}
        buttonStyle={styles.buttonStyle}
        onPress={handleNavigation}
      />
    </View>
  );
};

export default VerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  textInputStyle: {
    height: 35,
    width: 35,
    borderWidth: 2,
    borderColor: "#FFAFAF",
    borderRadius: 4,
    backgroundColor: "#FEC2C2",
    textAlign: "center",
  },
  buttonTextStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF2F2",
  },
  buttonStyle: {
    backgroundColor: "#F12B2B",
    borderRadius: 8,
    marginTop: Platform.OS === "android" ? 50 : 70,
  },
});
