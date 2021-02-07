import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function GalleryScreen() {
  return (
    <View style={styles.container}>
      <Text>GalleryScreen</Text>
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
