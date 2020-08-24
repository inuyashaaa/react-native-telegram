import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {View, Text, FlatList, TouchableOpacity, Image, Dimensions, ScrollView} from 'react-native';
import {
  profile, image1, image2, image3, image4, image5, image6, image7, image8, image9, profileImage,
  union, chat, dataStronge, device, privateSecurity,
} from './assets/images/'

const {width} = Dimensions.get('window');

const DATA = [
  {id: 1, src: image1},{id: 2, src: image2},{id: 3, src: image3},{id: 4, src: image4},{id: 5, src: image5},{id: 6, src: image6},{id: 7, src: image7},{id: 8, src: image8},{id: 9, src: image9},
];

const Item = ({ src }) => (
  src
);

function FirstScreen({ navigation }) {
  return (
    <View style={{flex:1}}>
          <Text 
          style={{
            textAlign: 'center',
            fontSize: 20/375*width,
            fontWeight: '500',
            fontFamily: 'Roboto-Regular',
            color: '#262626',
            marginVertical: 10/375*width
          }}
        >andrewmundy</Text>

        <View style={{flexDirection:'row', alignItems: 'center', paddingHorizontal: 17/375*width, marginBottom: 20/375*width}} >
            <Image 
              source={profile}
              style={{
                width: 77/375*width,
                height: 77/375*width,
              }}              
            />
            <View style={{flexDirection: 'row', marginLeft: 46/375*width, justifyContent: 'space-between', width: 174/375*width}}>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontWeight: '500', fontSize: 16/375*width}}>1,487</Text>
                <Text>Posts</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontWeight: '500', fontSize: 16/375*width}}>898</Text>
                <Text>Followers</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontWeight: '500', fontSize: 16/375*width}}>1,310</Text>
                <Text>Following</Text>
              </View>
            </View>           
            
        </View>
        <View style={{paddingHorizontal: 17/375*width, marginBottom: 11*375/width}}>
              <Text style={{fontWeight: '500'}}>
              Andrew Mundy
              </Text>
              <Text>
              Most of these photos are developed and scanned at home by hand. 📸 <Text style={{color: '#003569'}}>#olympusmjuii #35mm</Text> 🌁
              </Text>
              <Text>
              SF, CA
              </Text>
              <Text style={{color: '#003569'}}>
              www.andrewmundy.net
              </Text>
        </View>
        <View style={{alignItems: 'center', paddingHorizontal: 17/375*width, fontWeight: '500', fontSize: 14/375*width, marginBottom: 19/375*width}} >
          <TouchableOpacity
              style={{borderWidth: 1, borderColor: '#DBDBDB', borderRadius: 5/375*width, width: '100%', backgroundColor: '', alignItems: 'center'}}
              onPress={() => navigation.navigate('SecondScreen')}
          >
            <Text style={{paddingHorizontal: 16/375*width, paddingVertical: 8/375*width, fontWeight: '500', fontSize: 12/375*width}}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', width: '100%', borderColor: '#DBDBDB', borderTopWidth: 1}}>
          <View style={{width: '50%', alignItems: 'center', borderBottomWidth: 1/375*width, paddingVertical: 10/375*width}}>
            <View style={{height:28/375*width, width:28/375*width, borderWidth: 1.5/375*width}}>
              <View style={{height:28/375*width, width:28/3/375*width, borderWidth: 1.5/375*width, position: 'absolute', top: -1.5/375*width, left: 28/3/375*width - 1.5/375*width}}></View>
              <View style={{height:28/3/375*width, width:28/375*width, borderWidth: 1.5/375*width, position: 'absolute', top: 28/3/375*width - 1.5/375*width, left: -1.5/375*width}}></View>
            </View>  
          </View>
          <View style={{width: '50%', alignItems: 'center', paddingVertical: 10/375*width}}>
            <View style={{height:28/375*width, width:28/375*width, borderWidth: 1.5/375*width, borderColor: '#B4B4B4', overflow: 'hidden'}}>
              <View style={{height:10/375*width, width:10/375*width, borderWidth: 1.5/375*width, borderColor: '#B4B4B4', borderRadius: 1000/375*width, position: 'absolute', top: 7/375*width, left: 8/375*width}}></View>
              <View style={{height:8/375*width, width:18/375*width, borderWidth: 1.5/375*width, borderColor: '#B4B4B4', borderRadius: 1000/375*width, position: 'absolute', top: 21/375*width, left: 4/375*width}}></View>
            </View>  
          </View>      
        </View>
       
      <FlatList
        numColumns={3}
        columnWrapperStyle={{justifyContent: 'space-between', paddingBottom: 3/375*width}}
        data={DATA}
        renderItem={({item}) => {
          return (
            <View>
              <Image style={{width: 123/375*width}} source={item.src}/>
            </View>
          );
        }}
      />

      </View>
  );
}
function SecondScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={{flex:1}}>
        <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 32/414*width, paddingTop: 74/414*width}}>
            <View style={{width: 16/414*width, height: 16/414*width, borderLeftWidth: 3/414*width, borderLeftColor: '#2675EC', borderBottomWidth: 3/414*width, borderBottomColor: '#2675EC', borderRadius: 1/414*width, rotation: 45, color: '#2675EC'}}>
            </View>
            <View>
              <Text style={{paddingLeft: 25.6/414*width, fontSize: 25/414*width, color: '#2675EC', lineHeight: 29/414*width}}>@wdlam</Text>
            </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 27/414*width, paddingTop: 34/414*width}}>
            <View>
              <Image style={{borderRadius: 30/414*width}} source={profileImage}/>
            </View>
            <View style={{paddingLeft: 18/414*width, alignItems: 'center'}}>
              <Text style={{fontFamily: 'Gilroy-Regular', fontSize: 23/414*width, fontWeight:'bold', lineHeight: 28/414*width, letterSpacing: -0.165/414*width }}>Gloria Mckinney</Text>
              <Text style={{fontFamily: 'Gilroy-Regular', fontSize: 17/414*width, fontWeight: '600', lineHeight: 21/414*width, letterSpacing: 1.335/414*width, color: '#131313'}}>+375(29)9638433</Text>
            </View>
        </View>
        <View style={{paddingLeft: 27/414*width, paddingTop: 34/414*width}}>
          <View>
            <Text style={{fontFamily: 'Gilroy-Regular', fontWeight: 'bold', fontSize: 20/414*width, color: '#131313'}}>Account</Text>
          </View>
          <View style={{paddingTop: 13/414*width}}>
            <Text style={{fontFamily: 'Gilroy-Regular', fontWeight: '600', fontSize: 17/414*width, letterSpacing: 1.335/414*width, color: '#131313'}}>+375(29)9638433</Text>
            <Text style={{fontFamily: 'Gilroy-Regular', fontWeight: '600', fontSize: 17/414*width, letterSpacing: -0.17/414*width, paddingTop: 6/414*width, color: '#848484'}}>Tap to change phone number</Text>
          </View>
          <View style={{paddingTop: 25/414*width}}>
            <View style={{width: 359/414*width, height: 2/414*width, backgroundColor: '#F6F6F6'}} />
          </View>
          <View style={{paddingTop: 25/414*width}}>
            <Text style={{fontFamily: 'Gilroy-Regular', fontSize: 17/414*width}}>@wdlam</Text>
            <Text style={{fontFamily: 'Gilroy-Regular', fontSize: 17/414*width, letterSpacing: -0.17/414*width, color: '#848484' }}>Username</Text>
          </View>
          <View style={{paddingTop: 25/414*width}}>
            <View style={{width: 359/414*width, height: 2/414*width, backgroundColor: '#F6F6F6'}} />
          </View>
          <View style={{paddingTop: 25/414*width}}>
            <Text style={{fontFamily: 'Gilroy-Regular', fontSize: 17/414*width}}>I'm Senior Frontend Developer from Microsoft</Text>
            <Text style={{fontFamily: 'Gilroy-Regular', fontSize: 17/414*width, letterSpacing: -0.17/414*width, color: '#848484' }}>Bio</Text>
          </View>
        </View>
        <View style={{paddingLeft: 27/414*width, paddingTop: 33/414*width, width: 252/414*width}}>
          <View>
            <Text style={{fontFamily: 'Gilroy-Bold', fontSize: 20/414*width, color: '#131313'}}>Settings</Text>
          </View>
          <View>
            <View style={{flexDirection: 'row', paddingTop: 21/414*width}}>
                <View style={{width: 22/414*width, alignItems: 'center'}}>
                  <Image source={union} />
                </View>
                <View style={{width: 230/414*width, paddingLeft: 30/414*width}}>
                  <Text style={{fontFamily: 'Gilroy-Regular', fontSize: 18/414*width, fontWeight: '600', color: '#131313'}}>Notification and Sounds</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 31/414*width}}>
                <View style={{width: 22/414*width, alignItems: 'center'}}>
                    <Image source={privateSecurity} />
                </View>
                <View style={{width: 230/414*width, paddingLeft: 30/414*width}}>
                    <Text style={{fontFamily: 'Gilroy-Regular', fontSize: 18/414*width, fontWeight: '600', color: '#131313'}}>Privaty and Security</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 34/414*width}}>
                <View style={{width: 22/414*width, alignItems: 'center'}}>
                    <Image source={dataStronge} />
                </View>
                <View style={{width: 230/414*width, paddingLeft: 30/414*width}}>
                    <Text style={{fontFamily: 'Gilroy-Regular', fontSize: 18/414*width, fontWeight: '600', color: '#131313'}}>Data and Stronge</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 34/414*width}}>
                <View style={{width: 22/414*width, alignItems: 'center'}}>
                    <Image source={chat} />
                </View>
                <View style={{width: 230/414*width, paddingLeft: 30/414*width}}>
                    <Text style={{fontFamily: 'Gilroy-Regular', fontSize: 18/414*width, fontWeight: '600', color: '#131313'}}>Chat settings</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 34/414*width, paddingBottom: 30/414*width}}>
                <View style={{width: 22/414*width, alignItems: 'center'}}>
                    <Image source={device} />
                </View>
                <View style={{width: 230/414*width, paddingLeft: 30/414*width, alignSelf:'center'}}>
                    <Text style={{fontFamily: 'Gilroy-Regular', fontSize: 18/414*width, fontWeight: '600', color: '#131313'}}>Devices</Text>
                </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const Stack = createStackNavigator();

class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (      
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="FirstScreen" component={FirstScreen} />
          <Stack.Screen name="SecondScreen" component={SecondScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;