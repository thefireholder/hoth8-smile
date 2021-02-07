import * as React from 'react';
import { StyleSheet, Text, View ,Image, Button} from'react-native';
import { Video, Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import * as VideoThumbnails from 'expo-video-thumbnails';

export default function notification({ route, navigation }) {

  // thumbnail
  const [thumbnail, setThumbnail] = React.useState(null);

  React.useEffect(()=>{
    //set audio
    (async () => await Audio.setAudioModeAsync({playsInSilentModeIOS: true,}))();
  },[])


 const photo = route.params ? route.params.photo.uri : 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4';

 const generateThumbnail = async () => {
   try {
     const { uri } = await VideoThumbnails.getThumbnailAsync(photo,{time: 2000,});
     setThumbnail(uri);
   } catch (e) {
     console.warn(e);
   }
 };

  return (
     <View style={{ flex: 1, alignItems:'center',justifyContent:'center' }}>
       <Video
         source={{ uri: photo }}
         rate={1.0}
         volume={1.0}
         isMuted={false}
         resizeMode="cover"
         shouldPlay
         isLooping
         style={{ width: '100%', aspectRatio: 1 }}
       />
       <Button onPress={generateThumbnail} title="Generate thumbnail" />
       {thumbnail && <Image source={{ uri: thumbnail }} style={{width: 200,height: 200}} />}
    </View>
  );
}
