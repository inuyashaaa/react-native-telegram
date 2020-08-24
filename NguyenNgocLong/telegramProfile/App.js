/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';

import {profile,back, notification,priva,data,devices,chatSetting} from './assets/images';

const {width} = Dimensions.get('window')
class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <ScrollView
      style={{flex:1}}
      >
        <View style={{flexDirection:'row',alignItems:'center',marginLeft:32*width/414, marginTop:75.21*width/414 }}>
          <TouchableOpacity
          
            onPress = {() => {}}
          >
            <Image source = {back}
              style={{
                width: 17*width/414,
                height:17*width/414,
                
              }} ></Image>

          </TouchableOpacity>
          <Text style={{fontFamily:'Gilroy-Bold', fontSize:25*width/414, color:'#2675EC', marginLeft:25.59*width/414}} >@wdlam</Text>
        </View>

        <View style={{flexDirection:'row',marginLeft:27*width/414, marginTop:34*width/414 }} > 
            <Image
              source = {profile}
              style={{
                width: 82*width/414,
                height:82*width/414
              }}
            />
            <View style={{marginLeft:18 }}>
              <Text style={{fontFamily:'Gilroy-Bold', fontSize:23*width/414, color:'#131313'}}>Gloria Mckinney</Text>
              <Text style={{fontFamily:'Gilroy-Regular', fontSize:17*width/414,color:'#848484',marginTop:5*width/414}}>+375(29)9638433</Text>
            </View >
        </View>
        <View style={{marginLeft:27*width/414, marginTop:34}}>  
          <Text style={{fontFamily:'Gilroy-Bold', fontSize:20*width/414, color:'#131313'}}> Account</Text>

          <View style={{marginTop:13*width/414}}>
            <Text style={{fontFamily:'Gilroy-Bold', fontSize:17*width/414,color:'#131313',marginTop:6*width/414}}>+375(29)9638433</Text>
            <TouchableOpacity
              onPress ={()=>{}}
            >
              <Text style={{fontFamily:'Gilroy-Regular', fontSize:17*width/414,color:'#848484'}}>Tap to change phone number</Text>
            </TouchableOpacity>
          </View>

          <View style={{height:2*width/414,width:359*width/414,backgroundColor:'#F6F6F6',marginVertical:25*width/414}}></View>

          <View style={{marginTop:13}}>
            <Text style={{fontFamily:'Gilroy-Bold', fontSize:17*width/414,color:'#131313',marginTop:6*width/414}}>@wdlam</Text>
            <Text style={{fontFamily:'Gilroy-Regular', fontSize:17*width/414,color:'#848484'}}>username</Text>
          </View>

          <View style={{height:2*width/414,width:359*width/414,backgroundColor:'#F6F6F6',marginVertical:25*width/414}}></View>

          <View style={{marginTop:13}}>
            <Text style={{fontFamily:'Gilroy-Bold', fontSize:17*width/414,color:'#131313',marginTop:6*width/414}}>I’m Senior Frontend Developer from Microsoft</Text>
            <Text style={{fontFamily:'Gilroy-Regular', fontSize:17,color:'#848484'}}>Bio</Text>
          </View>
        </View>

        <View style={{marginTop:33*width/414,marginLeft:27*width/414,marginBottom:30*width/414}}>
          <Text style={{fontFamily:'Gilroy-Bold', fontSize:20*width/414,color:'#131313'}}>Settings</Text>
         
          <View style={{flexDirection:'row',alignItems:'center', marginTop:21*width/414 }}>
              <Image 
                source = {notification}
                style={{
                  width: 22*width/414,
                  height:22*width/414
                }}/>
                  <TouchableOpacity
                    onPress = {()=>{}}
                  > 
                <Text style={{fontFamily:'Gilroy-Bold', fontSize:18*width/414,color:'#131313',marginLeft:30*width/414}}>Notification and Sounds</Text>
              </TouchableOpacity>
          </View>

          <View style={{flexDirection:'row',alignItems:'center', marginTop:21*width/414 }}>
              <Image 
                source = {priva}
                style={{
                  width: 22*width/414,
                  height:22*width/414
                }}/>
                  <TouchableOpacity
                    onPress = {()=>{}}
                  > 
                <Text style={{fontFamily:'Gilroy-Bold', fontSize:18*width/414,color:'#131313',marginLeft:30*width/414}}>Privaty and Security</Text>
              </TouchableOpacity>
          </View>

          <View style={{flexDirection:'row',alignItems:'center', marginTop:21*width/414 }}>
              <Image 
                source = {data}
                style={{
                  width: 22*width/414,
                  height:22*width/414
                }}/>
                  <TouchableOpacity
                    onPress = {()=>{}}
                  > 
                <Text style={{fontFamily:'Gilroy-Bold', fontSize:18*width/414,color:'#131313',marginLeft:30*width/414}}>Data and Stronge</Text>
              </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',alignItems:'center', marginTop:21*width/414 }}>
              <Image 
                source = {chatSetting}
                style={{
                  width: 22*width/414,
                  height:22*width/414
                }}/>
                  <TouchableOpacity
                    onPress = {()=>{}}
                  > 
                <Text style={{fontFamily:'Gilroy-Bold', fontSize:18*width/414,color:'#131313',marginLeft:30*width/414}}>Chat Settings</Text>
              </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',alignItems:'center', marginTop:21*width/414 }}>
              <Image 
                source = {devices}
                style={{
                  width: 22*width/414,
                  height:22*width/414
                }}/>
                  <TouchableOpacity
                    onPress = {()=>{}}
                  > 
                <Text style={{fontFamily:'Gilroy-Bold', fontSize:18*width/414,color:'#131313',marginLeft:30*width/414}}>Devices</Text>
              </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    )
  }
}
export default App;
