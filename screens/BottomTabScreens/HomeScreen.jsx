import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "flex-end", paddingHorizontal: 20 }}>
        <Image source={require("../../assets/pim.png")} />
      </View>
      <Text
        style={{
          fontSize: 22,
          fontWeight: "regular",
          color: "#FFBABA",
          textAlign: "center",
        }}
      >
        Votre solde
      </Text>
      <Text
        style={{
          fontSize: 26,
          fontWeight: "bold",
          color: "#FFBABA",
          textAlign: "center",
        }}
      >
        119 500 XOF
      </Text>

      {/* THE WHITE SECTION OF THE HOMEPAGE */}
      <View style={{ backgroundColor: "white", height: "100%", borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
        <Text
          style={{
            fontSize: 26,
            fontWeight: "bold",
            color: "#FFBABA",
            textAlign: "center",
          }}
        >
          119 500 XOF
        </Text>
        <View></View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    // paddingHorizontal: 20,
    backgroundColor: "#F12B2B",
    height: "100%",
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
});
