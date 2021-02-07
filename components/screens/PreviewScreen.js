import * as React from 'react';
import { StyleSheet, Text, View ,Image, Button, BackHandler, Alert} from'react-native';
import { Video, Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import * as VideoThumbnails from 'expo-video-thumbnails';
import { CommonActions } from '@react-navigation/native';
import moment from 'moment';

export default function PreviewScreen({ route, navigation }) {

 const videoUri = route.params ? route.params.video : 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4';

 React.useEffect(()=>{
   //set audio
   (async () => await Audio.setAudioModeAsync({playsInSilentModeIOS: true,}))();

 },[])

 const save = async () => {
   if(!loaded) return

   //check for video uri
   const videoUri = route.params?.video;
   if (!videoUri) return;

   //create thumbnail
   let thumbnailUri = null;
   try {
     const { uri } = await VideoThumbnails.getThumbnailAsync(videoUri,{time: 2000,});
     thumbnailUri = uri;
   } catch (e) {
     console.warn(e);
     return;
   }
   if (!thumbnailUri) return;

   // export them to permanent directory
   const time = moment().format('YYYY-MM-DD_hh:mm:ssa').toString()
   FileSystem.makeDirectoryAsync(FileSystem.documentDirectory+'Video', {intermediates:true})
   FileSystem.copyAsync({
     from: videoUri,
     to: FileSystem.documentDirectory+'Video/'+time+'.mov'
   })
   FileSystem.makeDirectoryAsync(FileSystem.documentDirectory+'Thumbnail', {intermediates:true})
   FileSystem.copyAsync({
     from: thumbnailUri,
     to: FileSystem.documentDirectory+'Thumbnail/'+time
   })

   //go back to beginning


   navigation.pop(2);


 };


 const [loaded, setLoaded] = React.useState(false);
 const _handleVideoRef = component => {
   const playbackObject = component;
   setLoaded(true);
 }

  return (
     <View style={{ flex: 1, alignItems:'center',justifyContent:'center' }}>

       <View style={{ width: '100%', aspectRatio: 1, justifyContent:'center',alignItems:'center' }}>
         <Text style={{ fontSize:20}}>Processing your smile..</Text>
         <Video
           onReadyForDisplay={_handleVideoRef}
           source={{ uri: videoUri }}
           rate={1.0}
           volume={1.0}
           isMuted={false}
           resizeMode="cover"
           shouldPlay
           isLooping
           style={{ position:'absolute',width: '100%', aspectRatio: 1 }}
         />
       </View>

       <Button onPress={save} title={loaded?"Save your smile":''}/>

    </View>
  );
}
