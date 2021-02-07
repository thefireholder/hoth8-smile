import React from 'react';
import { StyleSheet, Text, View, Image, Flatlist, Alert,TouchableOpacity } from 'react-native';
import * as FileSystem from 'expo-file-system';


export default function GalleryScreen({navigation}) {

  const [Uri,setUri] = React.useState([]);
  React.useEffect(()=>{
    (async ()=>{

    //get list of pics
    const pic = await FileSystem.readDirectoryAsync(FileSystem.documentDirectory+'Thumbnail');
    // setUri([[FileSystem.documentDirectory+'Thumbnail/'+pic[0],FileSystem.documentDirectory+'Thumbnail/'+pic[0]]])
    const c = pic.map(item=>(FileSystem.documentDirectory+'Thumbnail/'+item))

    //splice it up into three
    const n = 3 //tweak this to add more items per line
    const result = new Array(Math.ceil(c.length / n))
      .fill()
      .map(_ => c.splice(0, n))

    setUri(result);

    })();
  },[])


    return (
      <View style={styles.container}>
        <View
          style={{
            marginTop: 10,
            borderWidth: 2,
            borderColor:'transparent',
            height:'100%',
            width:'100%',
          }}
        >
        {
          Uri.map((function(uris){

            return(
              <View style={{flexDirection:'row'}} key={uris[0]}>
                <View style={{margin:1,backgroundColor:'transparent',aspectRatio: 1,flex:1}}>
                  <TouchableOpacity onPress={()=>navigation.navigate('Memory',{uri:uris[0]})}>
                    <Image
                      style={styles.photoLogo}
                      source={{
                      uri: uris[0],
                      }}
                    />
                  </TouchableOpacity>
                </View>
              <View style={{margin:1,backgroundColor:'transparent',aspectRatio: 1,flex:1}}>
                <TouchableOpacity onPress={()=>{
                  if(uris[1])
                  navigation.navigate('Memory',{uri:uris[1]});
                }}>
                  <Image
                      style={styles.photoLogo}
                      source={{
                      uri: uris[1],
                      }}
                    />
                  </TouchableOpacity>
              </View>
              <View style={{margin:1,backgroundColor:'transparent',aspectRatio: 1,flex:1}}>
                <TouchableOpacity onPress={()=>{
                  if(uris[2])
                  navigation.navigate('Memory',{uri:uris[2]});
                }}>
                  <Image
                      style={styles.photoLogo}
                      source={{
                      uri: uris[2],
                      }}
                    />
                </TouchableOpacity>
              </View>
            </View>
            )
          }))
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoLogo: {
    width: "100%",
    aspectRatio: 1,
  },
});


/*const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  stretch: {
    marginTop: 0,
    width: 430/3,
    height: 1000/6,
    resizeMode: 'stretch',
  },

});
*/

/*
export default function DisplayAnImageWithStyle() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Image
        style={styles.stretch}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Image
        style={styles.stretch}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
      }}
      />
      <Image
        style={styles.stretch}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
      }}
      />
      <Image
        style={styles.stretch}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
      }}
      />
      <Image
        style={styles.stretch}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
      }}
      />
    </View>
  );
}
*/
