import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, Button, ScrollView } from 'react-native';
import React, {useState, useEffect} from 'react';
import { dataAtom, errorAtom, loadingAtom } from '../../atoms/blogAtom';
import { useAtom } from 'jotai';


const Services = () => {
  const [data] = useAtom(dataAtom);


  return (
    <View style={styles.container}>

      <Text style={{fontSize: 30, fontWeight: 'bold', marginVertical: 12}}>Services</Text>
      {/* DISPLAY FETCHED DATA */}
      <ScrollView style={{marginBottom: 120}}>
   
        <> 
          {Array.isArray(data) && data.map((user, index)=>(
       <View key={index} style={{borderBottomWidth: 1, borderBottomColor: 'gray', paddingBottom: 10, marginTop: 5}}>
       <Text style={{fontSize: 20, fontWeight: 'bold', color: 'blue'}}>Name: {user.name.firts}  {user.name.last} </Text>
       <Text style={{fontSize: 20, fontWeight: 'bold', color: 'green', }}>Email: {user.email} </Text>
       <Text style={{fontSize: 20, fontWeight: 'normal'}}>Phone: {user.phone} </Text>
       <Text style={{fontSize: 20, fontWeight: 'normal'}}>Country: {user.location.country} </Text>
       <Text style={{fontSize: 20, fontWeight: 'normal'}}>State: {user.location.state} </Text>
       <Text style={{fontSize: 20, fontWeight: 'normal'}}>City: {user.location.city} </Text>
       <Text style={{fontSize: 20, fontWeight: 'normal'}}>Longitude: {user.location.coordinates.longitude} </Text>
       <Text style={{fontSize: 20, fontWeight: 'normal'}}>Latitude: {user.location.coordinates.latitude} </Text>
     </View>
     ))}
        </>
    
      </ScrollView>
    </View>
  )
}

export default Services

const styles = StyleSheet.create({
  container:{
    paddingTop: 60,
    paddingHorizontal: 20,
  }
})