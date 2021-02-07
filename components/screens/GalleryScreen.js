import React from 'react';
import { StyleSheet, Text, View, Image, Flatlist, Alert,TouchableOpacity,ScrollView } from 'react-native';
import * as FileSystem from 'expo-file-system';

const softColor = ['#F3DCD4aF','#ECC9C7aF','#D9E3DAaF','#D1CFC0aF','#C2C2B4aF']

function softColorSet(i){
  return softColor[i%softColor.length]
}

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
      <ScrollView>
        <View
          style={{
            borderWidth: 2,
            borderColor:'transparent',
            height:'100%',
            width:'100%',
          }}
        >
        {
          Uri.map((function(uris,i){

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
                    <View style={{backgroundColor:softColorSet(i*3+0),position:'absolute',height:'100%',width:'100%'}}/>
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
                    {uris[1]?<View style={{backgroundColor:softColorSet(i*3+1),position:'absolute',height:'100%',width:'100%'}}/>:null}
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
                    {uris[2]?<View style={{backgroundColor:softColorSet(i*3+2),position:'absolute',height:'100%',width:'100%'}}/>:null}
                </TouchableOpacity>
              </View>
            </View>
            )
          }))
        }
      </View>
    </ScrollView>
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
