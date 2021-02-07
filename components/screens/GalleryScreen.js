import React from 'react';
import { StyleSheet, Text, View, Image, Flatlist } from 'react-native';



export default function GalleryScreen() {

    const Uri = [
      ['https://reactnative.dev/img/tiny_logo.png',
      'https://reactnative.dev/img/tiny_logo.png',
      'https://reactnative.dev/img/tiny_logo.png'],
      ['https://reactnative.dev/img/tiny_logo.png',
      'https://reactnative.dev/img/tiny_logo.png',
      'https://reactnative.dev/img/tiny_logo.png'],
      ['https://reactnative.dev/img/tiny_logo.png',
      'https://reactnative.dev/img/tiny_logo.png',
      'https://reactnative.dev/img/tiny_logo.png'],
    ]

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
          <View style={{borderWidth: 1, borderColor:'transparent',flexDirection:'row'}}>
            <View style={{backgroundColor:'white',aspectRatio: 1,width:"33.33%"}}>
              <Image
                style={styles.photoLogo}
                source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
              />
            </View>
          <View style={{backgroundColor:'white',aspectRatio: 1,width:"33.33%"}}>
              <Image
                  style={styles.photoLogo}
                  source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                  }}
                />
            </View>
            <View style={{backgroundColor:'white',aspectRatio: 1,width:"33.33%"}}>
              <Image
                  style={styles.photoLogo}
                  source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                  }}
                />
            </View>
          </View>

          <View style={{borderWidth: 1, borderColor:'transparent',flexDirection:'row'}}>
            <View style={{backgroundColor:'white',aspectRatio: 1,width:"33.33%"}}>
              <Image
                style={styles.photoLogo}
                source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
              />
            </View>
          <View style={{backgroundColor:'white',aspectRatio: 1,width:"33.33%"}}>
              <Image
                  style={styles.photoLogo}
                  source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                  }}
                />
            </View>
            <View style={{backgroundColor:'white',aspectRatio: 1,width:"33.33%"}}>
              <Image
                  style={styles.photoLogo}
                  source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                  }}
                />
            </View>
          </View>

          <View style={{borderWidth: 1, borderColor:'transparent',flexDirection:'row'}}>
            <View style={{backgroundColor:'white',aspectRatio: 1,width:"33.33%"}}>
              <Image
                style={styles.photoLogo}
                source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
              />
            </View>
          <View style={{backgroundColor:'white',aspectRatio: 1,width:"33.33%"}}>
              <Image
                  style={styles.photoLogo}
                  source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                  }}
                />
            </View>
            <View style={{backgroundColor:'white',aspectRatio: 1,width:"33.33%"}}>
              <Image
                  style={styles.photoLogo}
                  source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                  }}
                />
            </View>
          </View>

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