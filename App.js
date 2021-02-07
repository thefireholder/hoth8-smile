
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from './components/screens/DetailScreen.js';
import HomeScreen from './components/screens/HomeScreen.js';
import CameraScreen from './components/screens/CameraScreen.js';
import GalleryScreen from './components/screens/GalleryScreen.js';
import PreviewScreen from './components/screens/PreviewScreen.js';
import QuestionScreen from './components/screens/QuestionScreen.js';
import ScriptScreen from './components/screens/ScriptScreen.js';
import FileScreen from './components/screens/FileScreen.js';
import MemoryScreen from './components/screens/MemoryScreen.js';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Details">
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="Gallery" component={GalleryScreen} />
        <Stack.Screen name="Preview" component={PreviewScreen} />
        <Stack.Screen name="Question" component={QuestionScreen} />
        <Stack.Screen name="Script" component={ScriptScreen} />
        <Stack.Screen name="File" component={FileScreen} />
        <Stack.Screen name="Memory" component={MemoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
