import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function ScriptScreen() {
  return (
    <View style={styles.container}>
      <Text>ScriptScreen</Text>
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
