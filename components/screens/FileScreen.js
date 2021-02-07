import * as React from 'react';
import { StyleSheet, Text, View ,Image, FlatList, Button,Alert} from'react-native';
import * as FileSystem from 'expo-file-system';

export default function notification({ route, navigation }) {

const [cd,setCD] = React.useState('none');
const [dd,setDD] = React.useState('none');
const [n,setN] = React.useState(100);
const [clist,setClist] = React.useState([]);
const [flist,setFlist] = React.useState([]);

React.useEffect(()=>{
  (async ()=>{
    const dd = await FileSystem.readDirectoryAsync(FileSystem.documentDirectory);
    const cd = await FileSystem.readDirectoryAsync(FileSystem.cacheDirectory);
    setCD(cd[0]);
    setDD(dd[0]);
    setN(cd.length);


    const bb1 = cd[0] ? await FileSystem.readDirectoryAsync(FileSystem.cacheDirectory+cd[0]) : [];
    setN(bb1.length);
    setClist(bb1);

    const bb2 = dd[0] ? await FileSystem.readDirectoryAsync(FileSystem.documentDirectory+dd[0]) : [];
    setFlist(bb2);
  })();
},[])

const cachedelete = async () => {
  const dirs = await FileSystem.readDirectoryAsync(FileSystem.cacheDirectory);
  const files = await FileSystem.readDirectoryAsync(FileSystem.cacheDirectory+dirs[0]);
  FileSystem.deleteAsync(FileSystem.cacheDirectory+dirs[0]);
}

const filedelete = async () => {
  const fdirs = await FileSystem.readDirectoryAsync(FileSystem.documentDirectory);
  const ffiles = await FileSystem.readDirectoryAsync(FileSystem.documentDirectory+fdirs[0]);
  FileSystem.deleteAsync(FileSystem.documentDirectory+fdirs[0]);
}


const numbers = [1, 2, 3, 4, 5];

 return (
 <View style={{ flex: 1, alignItems:'center',justifyContent:'center' }}>
  <Text>dd=</Text>
  <Text>{dd}</Text>
  <FlatList
    data={flist}
    renderItem={({item})=>(<Text>{item}</Text>)}
    keyExtractor={item => item}
  />
   <Text>cd=</Text>
   <Text>{cd}</Text>
   <Text>{n}</Text>
   <FlatList
     data={clist}
     renderItem={({item})=>(<Text>{item}</Text>)}
     keyExtractor={item => item}
   />
   <Button
     title="delete all cache"
     onPress={cachedelete}
   />
   <Button
     title="delete all perm"
     onPress={filedelete}
   />
</View>
 );
}
