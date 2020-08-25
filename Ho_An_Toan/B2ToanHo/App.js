import React from 'react';
import { View, Text, Image } from 'react-native';
import { anhNen, thongBao,pr, daTa,chat,back } from './asset/images';


class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{flexDirection:'row', width: 132, height: 31, marginLeft: 32, marginTop: 50 }}>
        <Image source={back} style={{ width: 20, height: 20, marginTop:8 }}></Image>
          <Text style={{ fontWeight: 'bold', width: 97, height: 31, marginLeft: 20, fontSize: 24, color: '#2675EC' }}>
            @wdlam
          </Text>
        </View>
        <View style={{ width: 270, height: 82, marginLeft: 27, marginTop: 20, flexDirection: 'row' }}>
          <Image source={anhNen} style={{ width: 82, height: 82 }}></Image>
          <View style={{ marginLeft: 25, justifyContent: 'space-between' }}>

            <Text style={{ fontWeight: 'bold', width: 172, height: 28, fontSize: 23, color: '#131313', marginTop: 5, fontFamily: "Gilroy-ExtraBold" }}>
              Gloria Mckinney
            </Text>
            <Text style={{ width: 172, height: 28, fontSize: 18, color: '#131313', marginBottom: 8 }}>
              +84336222456
          </Text>


          </View>
        </View>
        <View style={{ width: 340, height: 286, marginLeft: 27, marginTop: 31 }}>
          <Text style={{ fontSize: 20, fontFamily: 'Gilroy' }}>Account</Text>
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: 'Gilroy-ExtraBold', fontSize: 17 }}>+84336222456</Text>
            <Text style={{ fontSize: 17, color: '#848484' }}>Tap to change phone number</Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: 'Gilroy-ExtraBold', fontSize: 17 }}>@wdlam</Text>
            <Text style={{ fontSize: 17, color: '#848484' }}>Username</Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: 'Gilroy-ExtraBold', fontSize: 17 }}>I'm Senior Frontend Deverloper from Microsoft</Text>
            <Text style={{ fontSize: 17, color: '#848484' }}>Bio</Text>
          </View>



          <View style={{ backgroundColor:'#00000000', marginLeft: 0, marginTop: 31, width: 340, height: 286 }}>
            <Text style={{ fontSize: 20, fontFamily: 'Gilroy' }}>Setting</Text>

            <View style={{  width: 290, height: 27, marginLeft: 0, marginTop: 20, flexDirection: 'row' }}>
              <Image source={thongBao} style={{ width: 27, height: 27 }}></Image>
              <View style={{ backgroundColor:'#00000000',marginLeft: 20, justifyContent: 'space-between' }}>

                <Text style={{ width: 172, height: 28, fontSize: 17, color: '#131313', marginTop: 2, fontFamily: "Gilroy-ExtraBold" }}>
                  Notification and Sould
            </Text>
              </View>
            </View>

            <View style={{  width: 290, height: 30, marginLeft: 0, marginTop: 20, flexDirection: 'row' }}>
              <Image source={pr} style={{ width: 22, height: 30 }}></Image>
              <View style={{ marginLeft: 20, justifyContent: 'space-between' }}>

                <Text style={{marginLeft:4, width: 172, height: 28, fontSize: 17, color: '#131313', marginTop: 2, fontFamily: "Gilroy-ExtraBold" }}>
                  Privaty and Security
            </Text>
              </View>
            </View>

            <View style={{  width: 290, height: 27, marginLeft: 0, marginTop: 20, flexDirection: 'row' }}>
              <Image source={daTa} style={{ width: 27, height: 27 }}></Image>
              <View style={{ marginLeft: 20, justifyContent: 'space-between' }}>

                <Text style={{ width: 172, height: 28, fontSize: 17, color: '#131313', marginTop: 2, fontFamily: "Gilroy-ExtraBold" }}>
                  Data and Stronge
            </Text>
              </View>
            </View>

            <View style={{ width: 290, height: 27, marginLeft: 0, marginTop: 20, flexDirection: 'row' }}>
              <Image source={chat} style={{ width: 27, height: 27 }}></Image>
              <View style={{ marginLeft: 20, justifyContent: 'space-between' }}>

                <Text style={{ width: 172, height: 28, fontSize: 17, color: '#131313', marginTop: 2, fontFamily: "Gilroy-ExtraBold" }}>
                  Chat settings
            </Text>
              </View>
            </View>

            
            

          </View>
        </View>
      </View>
    )
  }
}
export default App