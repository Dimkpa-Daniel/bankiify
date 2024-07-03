import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from "react-native";
import React, {useEffect} from "react";
import { useNavigation } from "@react-navigation/native";
import Swiper from "react-native-swiper";
import SLide from "../../component/SLide";
import { useAtom } from "jotai";
import { dataAtom, errorAtom, loadingAtom } from "../../atoms/blogAtom";
const HomeScreen = () => {
  const navigation = useNavigation();


  const [data, setData] = useAtom(dataAtom);
  const [error, setError] = useAtom(errorAtom);
  const [loading, setLoading] = useAtom(loadingAtom);

  const fetchData = async ()=>{
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://randomuser.me/api/?results=100');
      if(!response.ok){
        throw new Error("Network response was not ok!")
      }
      const data = await response.json();
      console.log('DATA', data.results)
      setData(data.results);
    } catch (error) {
      setError(error.message)
      console.log('Error', error)
    }finally{
      setLoading(false);
    }
  }


  useEffect(()=>{
    fetchData();
  }, [])

  // if (loading){
  //   return <ActivityIndicator size="large" color="#0000ff" />
  // }

  if (error){
    return <Text>Error: {error}</Text>
  }


  return (
    <View style={styles.container}>
      {loading ? <ActivityIndicator size="large" color="#0000ff" /> : (
        <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          paddingHorizontal: 20,
        }}
      >
        <Image source={{uri: data[0]?.picture?.large}} style={{width: 50, height: 50, borderRadius: 50}} />
      </View>
      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          color: "black",
          textAlign: "center",
        }}
      >
       {data[0]?.name?.first}   {data[0]?.name?.last}
      </Text>
      <Text
        style={{
          fontSize: 26,
          fontWeight: "bold",
          color: "#FFBABA",
          textAlign: "center",
        }}
      >
        {data[0]?.location?.country}
      </Text>

      {/* THE WHITE SECTION OF THE HOMEPAGE */}
      <View
        style={{
          backgroundColor: "white",
          height: "100%",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingHorizontal: 16,
          marginTop: 10
        }}
      >
        <ScrollView style={{marginBottom: 120}} showsVerticalScrollIndicator={false} >
        {/* THE CAROUSEL SECTION */}
        <Text
          style={{
            fontSize: 26,
            fontWeight: "bold",
            color: "#484747",
            marginTop: 10,
            // textAlign: "center",
          }}
        >
          Carousel
        </Text>
        <Swiper 
      
        style={{height: 250, marginTop: 10}}
        paginationStyle={{
          position: "absolute",
          top: 160,
          paddingHorizontal: 24,
          height: "50%",
        }}
        dotStyle={{
          width: 8,
          height: 8,
          backgroundColor: "#EA4747",
          borderRadius: 9,
        }}
        activeDotStyle={{
          width: 42,
          height: 8,
          borderRadius: 9,
          backgroundColor: "#EA4747",
        }}
       autoplay
        >

          {data.slice(0, 5).map((user, index)=>(
           
             <SLide user={user} />
       
          ))}
          
        </Swiper>
        {/* CAROUSEL SECTION ENDS HERE */}
        <View>
          <Text
            style={{
              fontSize: 26,
              fontWeight: "bold",
              color: "#484747",
              marginTop: 10,
            }}
          >
            Others
          </Text>
          <View style={{ backgroundColor: "#E6EEFB", borderRadius: 13, marginTop: 10, padding: 14 }}>
            {/* Table Header */}
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 2, borderBottomColor: 'gray', marginBottom: 5, paddingBottom: 5}}>
            <Text style={{ color: "#EA4747", fontSize: 20, fontWeight: 'bold' }}>Image</Text>
            <Text style={{ color: "#EA4747", fontSize: 20, fontWeight: 'bold' }}>Age</Text>
            <Text style={{ color: "#EA4747", fontSize: 20, fontWeight: 'bold' }}>Cell</Text>
            </View>
            {/* User details(image, cell and age) */}
            {data.slice(0, 6).map((data, index)=>(
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingBottom:5, borderBottomWidth: 1, borderBottomColor: 'gray'}}>
              <Image
                source={{uri: data?.picture?.large}}
                style={{ width: 40, height: 40, borderRadius: 10 }}
              />
              <Text style={{ color: "black", fontSize: 16, fontWeight: '800', textAlign: 'center' }}>{data.dob.age}</Text>
              <Text style={{ color: "black", fontSize: 16, fontWeight: '800' }}>{data.cell}</Text>
            </View>
          ))}
          </View>
        </View>
        </ScrollView>
      </View>
      </>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    backgroundColor: "#F12B2B",
    height: "100%",
  },
});
