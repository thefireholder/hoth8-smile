import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import QuoteButton from './src/components/QuoteButton.js';



export default function ScriptScreen({navigation}) {

function goto(place){
  navigation.navigate(place);

}

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select a Quote</Text> 
      <QuoteButton 
        title='"Hang in there"'
        onPress={()=>goto("Home")}
      />
      <QuoteButton 
        title='"Never give up"'
        onPress={()=>goto("Home")}
      />
      <QuoteButton 
        title='"Keep pushing"'
        onPress={()=>goto("Home")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(230,255,240,1.9)",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    color: "rgba(30,200,30,0.9)",
    marginBottom: 30,
  },
})