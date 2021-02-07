import * as React from 'react';
import { View, Text, Button } from 'react-native';


export default function DetailsScreen({ navigation }) {

    function goto(place){
      navigation.navigate(place);

    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="go to home"
          onPress={()=>goto("Home")}
        />
        <Button
          title="go to question"
          onPress={()=>goto("Question")}
        />
        <Button
          title="go to gallery"
          onPress={()=>goto("Gallery")}
        />
        <Button
          title="go to camera"
          onPress={()=>goto("Camera")}
        />
        <Button
          title="go to preview"
          onPress={()=>goto("Preview")}
        />
        <Button
          title="go to script"
          onPress={()=>goto("Script")}
        />
        <Button
          title="DEVELOPER file"
          onPress={()=>goto("File")}
        />
      </View>
    );
  }
