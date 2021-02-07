import * as React from 'react';
import { StyleSheet, Text, View ,Image, Button, BackHandler, Alert} from'react-native';
import { Video, Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import * as VideoThumbnails from 'expo-video-thumbnails';

export default function notification({ route, navigation }) {

  // thumbnail
  const [thumbnail, setThumbnail] = React.useState(null);

  React.useEffect(()=>{
    //set audio
    (async () => await Audio.setAudioModeAsync({playsInSilentModeIOS: true,}))();
    return async ()=>{
      //component will umount
      const videoUri = route.params?.video.uri;
      Alert.alert(videoUri);
      if(videoUri) await FileSystem.deleteAsync(FileSystem.cacheDirectory+'Camera/'+videoUri);


    }
  },[])


 const videoUri = route.params ? route.params.video.uri : 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4';

 const save = async () => {
   // try {
   //   const { uri } = await VideoThumbnails.getThumbnailAsync(photo,{time: 2000,});
   //   setThumbnail(uri);
   // } catch (e) {
   //   console.warn(e);
   // }
  Alert.alert("saved")
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
         style={{ width: '100%', aspectRatio: 1 }}
       />
       <Button onPress={save} title="Save your smile" />
    </View>
  );
}
