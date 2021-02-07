import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

export default function CameraScreen({navigation}) {

 const [hasPermission, setHasPermission] = useState(null);
 const [cameraRef, setCameraRef] = useState(null)
 const [type, setType] = useState(Camera.Constants.Type.back);
 const [recording, setRecording] = useState(null);

 //get user permission
 useEffect(() => {
   (
     async () => {
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
        backgroundColor: 'transparent',
        justifyContent: 'flex-end'
      }}>
       <TouchableOpacity
        style={{
          flex: 0.1,
          alignSelf: 'flex-end'
        }}
        onPress={() => {
          setType(
            type === Camera.Constants.Type.back
            ? Camera.Constants.Type.front
            : Camera.Constants.Type.back
          );
      }}>
      <Text style= {{fontSize:18,marginBottom:10,color:'white'}}>Flip</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{alignSelf: 'center'}} onPress={async() => {
       if(cameraRef){
         // let photo = await cameraRef.takePictureAsync('photo');
         // navigation.navigate('Image',{'photo':photo});


        //recording
        if(!recording){
          setRecording(true);
          let photo = cameraRef.recordAsync('photo',{maxDuration:3});

          setTimeout(()=>{
            cameraRef.stopRecording();
            setRecording(null);
          },5000)

          photo = await photo;

          navigation.navigate('Preview',{'photo':photo});
        } else {
            cameraRef.stopRecording()
            setRecording(null);
        }

       }
      }}>
       <View style={{
         borderWidth: 2,
         borderRadius:"50%",
         borderColor: recording ? "white":'red',
         height: 50,
         width:50,
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center'}}
       >
         <View style={{
           borderWidth: 2,
           borderRadius:"50%",
           borderColor: 'white',
           height: 40,
           width:40,
           backgroundColor: 'white'}} >
         </View>
       </View>
      </TouchableOpacity>
    </View>
   </Camera>
  </View>
 );
}
