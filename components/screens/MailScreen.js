import * as React from 'react';
import { View, Text, Button,Image,TouchableOpacity,Alert } from 'react-native';

import * as FileSystem from 'expo-file-system';
import mail2 from '../../assets/image/mail2.png'
import mail3 from '../../assets/image/mail3.png'
import mail4 from '../../assets/image/mail4.png'
import mailbox from '../../assets/image/mailbox.png'

export default function MailScreen({navigation}) {

  const [dd,setDD] = React.useState('none');
  const [n,setN] = React.useState(0);
  const [flist,setFlist] = React.useState([]);
  const [firstFile,setFirstFile] = React.useState(null);

  const updateMail = async()=>{
      const dd = await FileSystem.readDirectoryAsync(FileSystem.documentDirectory);
      const bb2 = dd[0] ? await FileSystem.readDirectoryAsync(FileSystem.documentDirectory+dd[0]) : [];
      setDD(dd[0]);
      if (!bb2) return;
      setN(bb2.length);
      bb2.sort()
      setFlist(bb2);
      setFirstFile(bb2[0]);
  }

  React.useEffect(()=>{
    const unsubscribe = navigation.addListener('focus', updateMail);
    return unsubscribe;
  },[navigation])

  const mb = n < 4 ? 0 : Math.floor((n-1)/3);
  const m = n%3 ? n % 3: 3;

    return (
      <View style={{ flex: 1,backgroundColor:'#B8e4b27f'}}>

      <View style={{width:'100%',position:'absolute', flex: 1,flexWrap: 'wrap',flexDirection:'row'}}>
        {
          [...Array(mb)].map((value, i) => (
            <Image
              style={{width:'25%',aspectRatio:0.8,resizeMode: 'contain'}}
              source={mailbox}
              key={i}
            />
          ))
        }
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{left:-20,top:-20, flex: 1, alignItems: 'center', justifyContent: 'center' }}>


          <View
            style={{shadowOffset:{width:-10,height:-10},shadowOpacity:0.1,shadowRadius:10,position:'absolute'}}
          >
            <TouchableOpacity
              onPress={()=>navigation.navigate('OpenMail',{uri:firstFile,callback:updateMail})}
            >
            <Image
              style={{height:100,width:200}}
              source={mail2}
            />
            </TouchableOpacity>
          </View>
          {
            (m == 3 || m == 2) ?
            (
              <View
                style={{shadowOffset:{width:-10,height:-10},shadowOpacity:0.1,shadowRadius:10,position:'absolute'}}
              >
                <TouchableOpacity
                  onPress={()=>navigation.navigate('OpenMail',{uri:firstFile,callback:updateMail})}
                >
                <Image
                  style={{left:20,top:20,height:100,width:200}}
                  source={mail3}
                />
                </TouchableOpacity>
              </View>
            )
            : null
          }
          {
            (m == 3) ?
            (
              <View
                style={{shadowOffset:{width:-10,height:-10},shadowOpacity:0.1,shadowRadius:10,position:'absolute'}}
              >
                <TouchableOpacity
                  onPress={()=>navigation.navigate('OpenMail',{uri:firstFile,callback:updateMail})}
                >
                <Image
                  style={{left:40,top:40,height:100,width:200}}
                  source={mail4}
                />
                </TouchableOpacity>
              </View>
            )
            : null

          }
        </View>
      </View>
      </View>
    );
  }
