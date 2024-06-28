import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useAtom } from 'jotai';
import { dataAtom } from '../../atoms/blogAtom';

const Transactions = () => {
  const [data]  = useAtom(dataAtom);
  return (
    <View style={styles.container}>

    <Text style={{fontSize: 30, fontWeight: 'bold', marginVertical: 12}}>Transactions</Text>
    <ScrollView style={{marginBottom: 70}}>
   { data.map(( user, index)=>(
    <View key={index} style={{borderBottomWidth: 1, borderBottomColor: 'gray', paddingVertical: 10}}>
     <Text  style={{fontSize: 20, fontWeight: 'bold', color: 'green', marginVertical: 10 }}>Name: {user.name.first} {user.name.last}</Text>
     <Text style={{fontSize: 20, fontWeight: 'normal'}}>Country: {user.location.country} </Text>
     </View>
     
   ))}
   </ScrollView>
    </View>
  )
}

export default Transactions

const styles = StyleSheet.create({
  container:{
    paddingTop: 60,
    paddingHorizontal: 20,
  }
})