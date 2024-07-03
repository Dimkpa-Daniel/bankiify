import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useAtom } from "jotai";
import { dataAtom } from "../../atoms/blogAtom";

const Location = () => {
  const [data] = useAtom(dataAtom);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          paddingHorizontal: 20,
        }}
      >
        <Image
          source={{ uri: data[0]?.picture?.large }}
          style={{ width: 50, height: 50, borderRadius: 50 }}
        />
      </View>

      <View
        style={{
          backgroundColor: "white",
          height: "100%",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingHorizontal: 16,
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold", marginVertical: 12 }}>
          Users Location
        </Text>
        <ScrollView style={{ marginBottom: 70 }}>
          {data.map((user, index) => (
            <View
              key={index}
              style={{
                padding: 20,
                borderRadius: 27,
                backgroundColor: "#E6EEFB",
                marginBottom: 12,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "blue" }}>
                Name: {user.name.first} {user.name.last}{" "}
              </Text>
              <Text style={{ fontSize: 20, fontWeight: "normal" }}>
                <Text style={{ fontWeight: "bold" }}>Country:</Text>{" "}
                {user.location.country}{" "}
              </Text>
              <Text style={{ fontSize: 20, fontWeight: "normal" }}>
                <Text style={{ fontWeight: "bold" }}>State:</Text>{" "}
                {user.location.state}{" "}
              </Text>
              <Text style={{ fontSize: 20, fontWeight: "normal" }}>
                <Text style={{ fontWeight: "bold" }}>City:</Text>{" "}
                {user.location.city}{" "}
              </Text>
              <Text style={{ fontSize: 20, fontWeight: "normal" }}>
                <Text style={{ fontWeight: "bold" }}>Longitude:</Text>{" "}
                {user.location.coordinates.longitude}{" "}
              </Text>
              <Text style={{ fontSize: 20, fontWeight: "normal" }}>
                <Text style={{ fontWeight: "bold" }}>Latitude:</Text>{" "}
                {user.location.coordinates.latitude}{" "}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    backgroundColor: "#F12B2B",
    height: "100%",
  },
});
