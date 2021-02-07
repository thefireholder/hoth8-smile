import * as React from 'react';
import { StyleSheet, Text, View ,Image, Button} from'react-native';
import { Video, Audio } from 'expo-av';
// import * as FileSystem from 'expo-file-system';
// import * as VideoThumbnails from 'expo-video-thumbnails';

export default function notification({ route, navigation }) {


 React.useEffect(()=>{
   (
     async ()=>{
       await Audio.setAudioModeAsync({
          playsInSilentModeIOS: true,
        });
     }
   )();
 },[])


const [image, setImage] = React.useState(null);
 const generateThumbnail = async () => {
   const address = route.params.photo.uri;
   try {
     const { uri } = await VideoThumbnails.getThumbnailAsync(address,{time: 15000,});
     setImage(uri);
   } catch (e) {
     console.warn(e);
   }
 };


  // if no parameter was passed down, show the bunny video
  if (route.params == undefined)
  {
    return (
       <View style={{ flex: 1, alignItems:'center',justifyContent:'center' }}>
         <Video
           // source={{ uri: FileSystem.cacheDirectory+'Camera/07FF8564-392D-4246-A348-2904D5B75FA8.mov' }}
           source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
           rate={1.0}
           volume={1.0}
           isMuted={false}
           resizeMode="cover"
           shouldPlay
           isLooping
           style={{ width: 300, height: 300 }}
         />
         <Button onPress={generateThumbnail} title="Generate thumbnail" />
         {image && <Image source={{ uri: image }} style={{width: 200,height: 200}} />}
         <Text>{image}</Text>
      </View>
    );
  }

// if parameter exist strip off photo
 const { photo } = route.params;


  return (
     <View style={{ flex: 1, alignItems:'center',justifyContent:'center' }}>
       <Video
         source={{ uri: photo.uri }}
         rate={1.0}
         volume={1.0}
         isMuted={false}
         resizeMode="cover"
         shouldPlay
         isLooping
         style={{ width: '100%', aspectRatio: 1 }}
       />
    </View>
  );
}
