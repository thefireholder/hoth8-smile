import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function ScriptScreen() {
  return (
    <View style={styles.container}>
      <Text
        style={{backgroundColor:'red'}}
      >ScriptScreen</Text>
      <View
        style={{
          backgroundColor:'blue',
          height:'100%',
          width:'100%',
        }}
      >
        <View style={{backgroundColor:'red',flexDirection:'row'}}>
          <View style={{backgroundColor:'yellow',aspectRatio: 1,width:"33.33%"}}>
            <Text>hi</Text>
          </View>
          <View style={{backgroundColor:'yellow',aspectRatio: 1,width:"33.33%"}}>
            <Text>hi</Text>
          </View>
          <View style={{backgroundColor:'yellow',aspectRatio: 1,width:"33.33%"}}>
            <Text>hi</Text>
          </View>
        </View>
        <View style={{backgroundColor:'pink',flexDirection:'row'}}>
          <View style={{backgroundColor:'red',aspectRatio: 1,width:"33.33%"}}>
          </View>
          <View style={{backgroundColor:'green',aspectRatio: 1,width:"33.33%"}}>
            <Text>hi</Text>
          </View>
          <View style={{backgroundColor:'yellow',aspectRatio: 1,width:"33.33%"}}>
            <Text>hi</Text>
          </View>
        </View>
            <View style={{backgroundColor:'red',height:30,width:30}}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
