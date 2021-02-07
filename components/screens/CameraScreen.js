import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

export default function CameraScreen({navigation}) {

 const [hasPermission, setHasPermission] = useState(null);
 const [cameraRef, setCameraRef] = useState(null)
 const [type, setType] = useState(Camera.Constants.Type.front);
 const [recording, setRecording] = useState(null);

 //get user permission
 useEffect(() => {
   (
     async () => {;
       const { status } = await Camera.requestPermissionsAsync();
       setHasPermission(status === 'granted');
     }
   )
   ();
 }, []);

 //show permission warning
 if (hasPermission === null) {
  return <View />;
 }
 if (hasPermission === false) {
   return <Text>No access to camera</Text>;
 }

 return (
   <View style={{ flex: 1 }}>
    <Camera style={{ flex: 1 }} type={type} ref={ref => {
      setCameraRef(ref);
    }} autoFocus="on">
     <View
      style={{
        flex: 1,
        justifyContent: 'flex-end'
      }}>
       <TouchableOpacity
        style={{
          alignSelf: 'flex-end'
        }}
        onPress={() => {
          setType(
            type === Camera.Constants.Type.back
            ? Camera.Constants.Type.front
            : Camera.Constants.Type.back
          );
      }}>
        <Text style= {{fontSize:18,marginRight:20,color:'white'}}>Flip</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{alignSelf: 'center'}}
        onPress={async() => {
          if(cameraRef){
            //taking picture
            // let photo = await cameraRef.takePictureAsync('photo');
            // navigation.navigate('Image',{'photo':photo});

            //recording
            if(!recording){
              setRecording(true);

              //get photo promise
              let video = cameraRef.recordAsync('video');

              //start timer and finish by 5 second
              setTimeout(()=>{
                cameraRef.stopRecording();
                setRecording(null);
              },4000)

              //get your photo after promise is returned (when recordAsync finishes)
              video = await video;
              navigation.navigate('Preview',{video:video.uri});
            } else {
              cameraRef.stopRecording()
              setRecording(null);
            }

          }
      }}>
       <View style={{
         borderWidth: 2,
         borderRadius:"50%",
         borderColor: 'white',
         height: 50,
         width:50,
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center'}}
       >
         <View style={{
           borderWidth: 2,
           borderRadius:"50%",
           borderColor: recording ? "red":'white',
           height: 40,
           width:40,
           backgroundColor: recording ? "red":'white'}} >
         </View>
       </View>
      </TouchableOpacity>

      <View style={{height:20}}/>

    </View>
   </Camera>
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
