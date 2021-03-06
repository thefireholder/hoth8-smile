import * as React from 'react';
import { StyleSheet, Text, View ,Image, TouchableOpacity, BackHandler, Alert} from'react-native';
import { Video, Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import * as VideoThumbnails from 'expo-video-thumbnails';
import { CommonActions } from '@react-navigation/native';
import moment from 'moment';

export default function OpenMailScreen({ route, navigation }) {

 const videoUri = route.params ? (FileSystem.documentDirectory + 'Video/'+ route.params.uri +'.mov') : 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4';

 React.useEffect(()=>{
   //set audio
   (async () => await Audio.setAudioModeAsync({playsInSilentModeIOS: true,}))();

  return () =>{
    (async()=>{
      await FileSystem.deleteAsync(FileSystem.documentDirectory+'Thumbnail/'+ route.params.uri);
      await FileSystem.deleteAsync(FileSystem.documentDirectory+'Video/'+ route.params.uri +'.mov');
      await route.params.callback();
    })();
  }
 },[])

 const deleteFile = async () => {
   // Alert.alert('delete')
 };


 const [loaded, setLoaded] = React.useState(false);
 const _handleVideoRef = component => {
   const playbackObject = component;
   setLoaded(true);
 }

  return (
     <View style={{ backgroundColor:'black',flex: 1, alignItems:'center',justifyContent:'center' }}>
       <Video
         onReadyForDisplay={_handleVideoRef}
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
            <Text style={{ margin:10, fontSize:20, fontWeight: "bold", color:'black'}} >
              {loaded?"Hey you got this !":"Hidden Message"}
            </Text>
          </TouchableOpacity>
         </View>
         <View style={{flex:4}}/>
       </View>
    </View>
  );
}
