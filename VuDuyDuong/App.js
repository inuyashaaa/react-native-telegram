import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';
import {
  profile,back,notification,lock, chart, chat,laptop
}
from './assets/images';

const {width} = Dimensions.get('window');
const rate = 414 / width;
class App extends React.Component
{
  constructor(props)
  {
    super(props);
  }
  render(){
    return(
      <ScrollView>

        {/* back */}

        <View style={{
          flexDirection:'row',
          alignItems:'center',
          marginLeft:32/rate,
          marginTop:74/rate,
          }}>
          <TouchableOpacity >
            <Image source={back}
            style={{
              marginTop:5/rate,
              width: 17/rate,
              height:17/rate,
              marginEnd: 25.59/rate
            }} />
          </TouchableOpacity>
          <Text style={{
            fontFamily:'Gilroy-Bold',
            fontSize:25/rate,
            color:'#2675EC'
            }}>@wdlam</Text>
        </View>

        {/* header avatar and name */}

        <View style={{
          flexDirection:"row",
          marginTop:34/rate,
          marginLeft:27/rate,
          alignItems:'center'
      }}>
          <Image source={profile}
            style={{
              width:82/rate,
              height:82/rate,
            }}
          />
          <View style={{
            marginLeft:18/rate,

          }}>
            <Text style={{
              fontFamily:'Gilroy-Bold',
              fontSize:23/rate,
              color:'#131313'
            }}
            >Gloria Mckinney</Text>
            <Text
            style={{
              marginTop:5/rate,
              fontFamily:'Gilroy-Medium',
              fontWeight:'600',
              fontSize:17/rate,
              color:'#848484'
            }}
            >+375(29)9638433</Text>
          
        </View>
        </View>

          {/* infor account */}
          < View style={{
            marginTop:34/rate,
            marginLeft:27/rate,
            alignItems:'flex-start'
          }}>
            <Text
            style={{
              fontFamily:'Gilroy-Bold',
              fontSize:20/rate,
              color:'#131313'
            }}
            >Account</Text>
            <View
              style={{
              marginTop:13/rate,
              alignItems:'flex-start'
            }}
            >
               <Text
              style={{
                marginTop:5/rate,
                fontFamily:'Gilroy-Bold',
                fontSize:17/rate,
                color:'#131313'
              }}
              >+375(29)9638433</Text>
              <Text
              style={{
                marginTop:6/rate,
                fontFamily:'Gilroy-Medium',
                fontWeight:'600',
                fontSize:17/rate,
                color:'#848484'
              }}
              >Tap to change phone number</Text>
            </View>
            <View style={{
              width:359/rate,
              height:2/rate,
              marginTop:25/rate,
              backgroundColor:'#F6F6F6'
            }}></View>
            <View
            style={{
              marginTop:25/rate,}}
            >
              <Text
              style={{
                fontFamily:'Gilroy-Bold',
                fontSize:17/rate,
                color:'#131313'
              }}
              >@wdlam</Text>
              <Text
              style={{
                marginTop:6/rate,
                fontFamily:'Gilroy-Medium',
                fontWeight:'600',
                fontSize:17/rate,
                color:'#848484'
              }}
              >Username</Text>
            </View>
            <View style={{
              width:359/rate,
              height:2/rate,
              marginTop:25/rate,
              backgroundColor:'#F6F6F6'
            }}></View>
            <View
            style={{
              marginTop:25/rate,}}
            >
              <Text
              style={{
                fontFamily:'Gilroy-Bold',
                fontWeight:'600',
                fontSize:17/rate,
                color:'#131313'
              }}
              >I'm Senior Frontend Developer from Microsoft</Text>
              <Text
              style={{
                marginTop:6/rate,
                fontFamily:'Gilroy-Medium',
                fontWeight:'600',
                fontSize:17/rate,
                color:'#848484'
              }}
              >Bio</Text>
            </View>
          </View>

          {/* Setting view */}

          <View style={{
            marginLeft:27/rate,
            marginTop:33/rate,
          }}>
            <Text
            style={{
              fontFamily:'Gilroy-ExtraBold',
              fontSize:20/rate,
              color:'#131313'
            }}
            >Setting</Text>
            <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginTop:21/rate}}>
                <Image source={notification}
                style={{
                  width:22.73/rate,
                  height:23.82/rate,
                }}
                />
                <Text
                style={{
                  fontFamily:'Gilroy-Bold',
                  fontSize:18/rate,
                  marginLeft:30.18/rate,
                  color:'#131313'
                }}
                >Notification and Sounds</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginTop:31/rate}}>
                <Image source={lock}
                style={{
                  width:22.73/rate,
                  height:23.82/rate,
                }}
                />
                <Text
                style={{
                  fontFamily:'Gilroy-Bold',
                  fontSize:18/rate,
                  marginLeft:30.18/rate,
                  color:'#131313'
                }}
                >Privaty and Security</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginTop:34/rate}}>
                <Image source={chart}
                style={{
                  width:22.73/rate,
                  height:23.82/rate,
                }}
                />
                <Text
                style={{
                  fontFamily:'Gilroy-Bold',
                  fontSize:18/rate,
                  marginLeft:30.18/rate,
                  color:'#131313'
                }}
                >Data and Stronge</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginTop:34/rate}}>
                <Image source={chat}
                style={{
                  width:22.73/rate,
                  height:23.82/rate,
                }}
                />
                <Text
                style={{
                  fontFamily:'Gilroy-Bold',
                  fontSize:18/rate,
                  marginLeft:30.18/rate,
                  color:'#131313'
                }}
                >Chat setting</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginTop:34/rate}}>
                <Image source={laptop}
                style={{
                  width:22.73/rate,
                  height:23.82/rate,
                }}
                />
                <Text
                style={{
                  fontFamily:'Gilroy-Bold',
                  fontSize:18/rate,
                  marginLeft:30.18/rate,
                  color:'#131313'
                }}
                >Devices</Text>
              </TouchableOpacity>
          </View>
      </ScrollView>
    )
  }
}
export default App;
