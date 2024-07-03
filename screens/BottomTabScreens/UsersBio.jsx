import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, Button, ScrollView, Image } from 'react-native';
import React, {useState, useEffect} from 'react';
import { dataAtom, errorAtom, loadingAtom } from '../../atoms/blogAtom';
import { useAtom } from 'jotai';


const UsersBio = () => {
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
      <Text style={{fontSize: 30, fontWeight: 'bold', marginVertical: 12}}>Users Bio</Text>
      {/* DISPLAY FETCHED DATA */}
      <ScrollView style={{marginBottom: 120}}>
   
        <> 
          {Array.isArray(data) && data.map((user, index)=>(
       <View key={index} style={{borderBottomWidth: 1, borderBottomColor: 'gray', paddingBottom: 10, marginTop: 5}}>
<Image source={{uri: user.picture.large}} style={{width: 50, height: 50, borderRadius: 50}} />
       <Text style={{fontSize: 20, fontWeight: 'bold', color: 'blue'}}>Name: {user.name.first}  {user.name.last} </Text>
       <Text style={{fontSize: 20, fontWeight: 'bold', color: 'green', }}>Email: {user.email} </Text>
       <Text style={{fontSize: 20, fontWeight: 'normal'}}>Phone: {user.phone} </Text>
       <Text style={{fontSize: 20, fontWeight: 'normal'}}>DOB: {user.dob.date} </Text>
       <Text style={{fontSize: 20, fontWeight: 'normal'}}>Age: {user.dob.age} </Text>
       <Text style={{fontSize: 20, fontWeight: 'normal'}}>Registered: {user.registered.date} </Text>
       <Text style={{fontSize: 20, fontWeight: 'normal'}}>Username: {user.login.username} </Text>

     </View>
     ))}
        </>
    
      </ScrollView>
      </View>
    </View>
  )
}

export default UsersBio

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    backgroundColor: "#F12B2B",
    height: "100%",
  },
})