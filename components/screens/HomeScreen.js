import * as React from 'react';
import { View, Text, Button } from 'react-native';


export default function HomeScreen() {

    function goto(){
  
  
    }
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="go to details"
          onPress={goto}
          />
      </View>
    );
  }