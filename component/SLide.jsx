import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SLide = ({user}) => {
  return (
    <View style={{borderWidth: 2, borderColor: 'red', backgroundColor: '#FF5566', height: 200, borderRadius: 13, flexDirection: 'row', alignItems: 'center', justifyContent:'space-between', padding: 14}}>
        <Image source={{uri: user.picture.large}} style={{width: 50, height: 50, borderRadius: 25}} />
     <View>
     <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Name: <Text style={{fontSize: 13}}>{user.name.first} {user.name.last}</Text> </Text>
      <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Phone number: <Text style={{fontSize: 13}}>{user.phone}</Text> </Text>
      <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Email: <Text style={{fontSize: 13}}>{user.email}</Text> </Text>
      <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Country: <Text style={{fontSize: 13}}>{user.location.country}</Text> </Text>
     </View>
    </View>
  )
}

export default SLide

const styles = StyleSheet.create({})