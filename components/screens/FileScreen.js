import * as React from 'react';
import { StyleSheet, Text, View ,Image, FlatList, Button,Alert} from'react-native';
import * as FileSystem from 'expo-file-system';

export default function notification({ route, navigation }) {

const [a,setA] = React.useState('none');
const [aa,setAA] = React.useState('none');
const [n,setN] = React.useState(100);
const [list,setList] = React.useState([]);

React.useEffect(()=>{
  (async ()=>{
    const b = await FileSystem.readDirectoryAsync(FileSystem.documentDirectory);
    const bb = await FileSystem.readDirectoryAsync(FileSystem.cacheDirectory);
    setA(b[0]);
    setAA(bb[0]);
    setN(bb.length);

    const bb1 = await FileSystem.readDirectoryAsync(FileSystem.cacheDirectory+bb[0]);
    setN(bb1.length);

    setList(bb1);
  })();
},[])

const cachedelete = async () => {
  const dirs = await FileSystem.readDirectoryAsync(FileSystem.cacheDirectory);
  const files = await FileSystem.readDirectoryAsync(FileSystem.cacheDirectory+dirs[0]);
  FileSystem.deleteAsync(FileSystem.cacheDirectory+'Camera'+'/'+files[0]);
}


const numbers = [1, 2, 3, 4, 5];

 return (
 <View style={{ flex: 1, alignItems:'center',justifyContent:'center' }}>
  <Text>a=</Text>
  <Text>{a}</Text>
   <Text>b=</Text>
   <Text>{aa}</Text>
   <Text>{n}</Text>
   <FlatList
     data={list}
     renderItem={({item})=>(<Text>{item}</Text>)}
     keyExtractor={item => item}
   />
   <Button
     title="delete all cache"
     onPress={cachedelete}
   />
</View>
 );
}
