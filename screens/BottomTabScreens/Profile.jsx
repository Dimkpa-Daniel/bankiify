import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { useAtom } from 'jotai';
import { dataAtom } from '../../atoms/blogAtom';

const Profile = () => {
  const [profile]  = useAtom(dataAtom);
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
          source={{ uri: profile[0]?.picture?.large }}
          style={{ width: 50, height: 50, borderRadius: 50 }}
        />
      </View>

      {/* User profile details */}
      <View
        style={{
          backgroundColor: "white",
          height: "100%",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingHorizontal: 16,
          marginTop: 10,
          paddingTop:20,
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold", marginVertical: 12 }}>
          User profile
        </Text>

        <ScrollView style={{ marginBottom: 70 }}>
        {/* Name */}
            <View
            style={{
              padding: 10,
              borderRadius: 20,
              backgroundColor: "#E6EEFB",
              marginBottom: 30,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold",  }}>
                Name: {profile[0]?.name?.first} {profile[0]?.name?.last}{" "}
              </Text>

            </View>

        {/* Email */}
            <View
            style={{
              padding: 10,
              borderRadius: 20,
              backgroundColor: "#E6EEFB",
              marginBottom: 30,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold",  }}>
                Email: {profile[0]?.email} 
              </Text>

            </View>
        {/* Phone number */}
            <View
            style={{
              padding: 10,
              borderRadius: 20,
              backgroundColor: "#E6EEFB",
              marginBottom: 30,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold",  }}>
                Phone number: {profile[0]?.phone} 
              </Text>

            </View>
        {/* DOB */}
            <View
            style={{
              padding: 10,
              borderRadius: 20,
              backgroundColor: "#E6EEFB",
              marginBottom: 30,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold",  }}>
                DOB: {profile[0]?.dob.date} 
              </Text>

            </View>
        {/* AGE */}
            <View
            style={{
              padding: 10,
              borderRadius: 20,
              backgroundColor: "#E6EEFB",
              marginBottom: 30,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold",  }}>
                Age: {profile[0]?.dob.age} 
              </Text>

            </View>
        {/* USERNAME */}
            <View
            style={{
              padding: 10,
              borderRadius: 20,
              backgroundColor: "#E6EEFB",
              marginBottom: 30,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold",  }}>
                Username: {profile[0]?.login?.username} 
              </Text>

            </View>
        {/* COUNTRY */}
            <View
            style={{
              padding: 10,
              borderRadius: 20,
              backgroundColor: "#E6EEFB",
              marginBottom: 30,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold",  }}>
                Country: {profile[0]?.location?.country} 
              </Text>

            </View>
        {/* STATE*/}
            <View
            style={{
              padding: 10,
              borderRadius: 20,
              backgroundColor: "#E6EEFB",
              marginBottom: 30,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold",  }}>
                State: {profile[0]?.location?.state} 
              </Text>

            </View>
        {/* CITY*/}
            <View
            style={{
              padding: 10,
              borderRadius: 20,
              backgroundColor: "#E6EEFB",
              marginBottom: 30,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold",  }}>
                City: {profile[0]?.location?.city} 
              </Text>

            </View>
     
            </ScrollView>
        </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    backgroundColor: "#F12B2B",
    height: "100%",
  },
});
