import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import GoodButton from './src/components/GoodButton.js';
import BadButton from './src/components/BadButton.js';

export default function QuestionScreen({navigation}) {

  function goto(place){
    navigation.navigate(place);

  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>How are you feeling today?</Text>
      <GoodButton 
        title=" Good "
        onPress={()=>goto("Camera")}
      />
      <BadButton 
        title="  Bad  "
        onPress={()=>goto("Gallery")}
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
