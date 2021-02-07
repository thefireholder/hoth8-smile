import * as React from 'react';
import { StyleSheet, Text, View ,Image, TouchableOpacity, BackHandler, Alert} from'react-native';
import { Video, Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import * as VideoThumbnails from 'expo-video-thumbnails';
import { CommonActions } from '@react-navigation/native';
import moment from 'moment';

export default function MemoryScreen({ route, navigation }) {

 const videoUri = route.params ? (route.params.uri.replace('Thumbnail','Video')+'.mov') : 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4';

 React.useEffect(()=>{
   //set audio
   (async () => await Audio.setAudioModeAsync({playsInSilentModeIOS: true,}))();
 },[])

 const deleteFile = async () => {
   Alert.alert('delete')
 };

  return (
     <View style={{ flex: 1, alignItems:'center',justifyContent:'center' }}>
       <Video
         source={{ uri: videoUri }}
         rate={1.0}
         volume={1.0}
         isMuted={false}
         resizeMode="cover"
         shouldPlay
         isLooping
         style={{ width: '100%', height: "80%" }}
       >

       </Video>
       <View style={{ position: 'absolute', width: '100%', height: '100%' }}>
         <View style={{flex:1}}/>
         <View style={{backgroundColor:'#ffffff90', alignItems:'center'}}>
          <TouchableOpacity onPress={deleteFile}>
            <Text style={{ margin:10, fontSize:20, fontWeight: "bold", color:'#00942390'}} >Hey you got this !</Text>
          </TouchableOpacity>
         </View>
         <View style={{flex:4}}/>
       </View>
    </View>
  );
}
