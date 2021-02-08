import React, {useState} from 'react';
import { StyleSheet, Text, View, Butto,Image } from 'react-native';
import GoodButton from './src/components/GoodButton.js';
import BadButton from './src/components/BadButton.js';
import mailbox from '../../assets/image/mailbox.png'

export default function QuestionScreen({navigation}) {

  function goto(place){
    navigation.navigate(place);

  }

  return (
    <View style={styles.container}>
    <View style={{width:'50%',aspectRatio:1,marginBottom:30}}>
      <Image
        style={{aspectRatio:1,flex:1,resizeMode: 'contain'}}
        source={mailbox}
      />
    </View>
      <Text style={styles.header}>How are you feeling today?</Text>
      <GoodButton
        title=" Good "
        onPress={()=>goto("Camera")}
      />
      <BadButton
        title="  Bad  "
        onPress={()=>goto("Mail")}
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
