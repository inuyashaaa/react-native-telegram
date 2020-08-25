import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image} from 'react-native';
import { back, profile, setting1, setting2, setting3, setting4, setting5 } from './assets/images';
const {width} = Dimensions.get('window');

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={{
        marginVertical:74,
        marginLeft:32,
        marginRight:32
      }}>
        <TouchableOpacity 
          style={{
            flexDirection:'row',
            alignItems:'center'
          }}
        >
          <Image 
            source={back}
            style={{
              width:10,
              height:18,
              marginRight:25
            }}
          />
          <Text
            style={{
              fontSize:25,
              color:'#2675EC',
              alignItems:'center'
            }}
          >@wdlam</Text>
        </TouchableOpacity>

        <View style={{
          marginTop:34,
          flexDirection:'row',
          alignItems:'center'
        }}>
          <Image 
              source={profile}
              style={{
                width:82,
                height:82,
                marginRight:18
              }}
            />
            <View>
              <Text style={{
                fontSize:23,
                fontWeight:'bold',
                color:'#131313'
              }}>Gloria Mckinney</Text>
              <Text style={{
                fontSize:17,
                fontWeight:'600',
                color:'#848484'
              }}>+375(29)9638433</Text>
            </View>
        </View>
        <View style={{
          marginTop:34,
          marginBottom:12
        }}>
          <Text
            style={{
              fontSize:20,
              fontWeight:'bold',
              color:'#131313',
              marginBottom:13
            }}>Account</Text>
          <Text style={{
              fontSize:17,
              fontWeight:'600',
              color:'#131313',
              marginBottom:13
            }}>+375(29)9638433</Text>
          <TouchableOpacity style={{
              fontSize:17,
              fontWeight:'600',
              color:'#848484',
              marginBottom:13
            }}><Text>Tap to change phone number</Text></TouchableOpacity>
        </View>
        
        <View
          style={{
            borderBottomColor: '#F6F6F6',
            borderBottomWidth: 2,
            
          }}
        />

        <View style={{
          marginVertical:25
        }}>
          <Text style={{
            marginBottom:6
          }}>@wdlam</Text>
          <Text>Username</Text>
        </View>

        <View
          style={{
            borderBottomColor: '#F6F6F6',
            borderBottomWidth: 2,
            
          }}
        />

        <View style={{
          marginVertical:39,
          fontSize:17,
        }}>
          <Text style={{
            color: '#131313',
            fontWeight:'600',
            marginBottom:6

          }}>I’m Senior Frontend Developer from Microsoft</Text>
          <Text style={{
            color: '#848484',
            fontWeight:'600'
          }}>Bio</Text>
        </View>

        <View style={{
          marginVertical:25
        }}>
          <Text 
            style={{
              fontSize:20,
              fontWeight:'bold',
              color:'#131313'
            }}>Settings</Text>
          <View style={{marginVertical:25}}>
          <TouchableOpacity style={{
            flexDirection:'row',
            alignItems:'center',
            marginBottom:34
          }}>
            <Image 
              source={setting1}
                style={{
                  width:10,
                  height:18,
                  marginRight:25
                }}
              />
            <Text>Notification and Sounds</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            flexDirection:'row',
            alignItems:'center',
            marginBottom:34
          }}>
            <Image 
              source={setting2}
                style={{
                  width:10,
                  height:18,
                  marginRight:25
                }}
              />
              <Text>Privaty and Security</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            flexDirection:'row',
            alignItems:'center',
            marginBottom:34
          }}>
              <Image 
                source={setting3}
                  style={{
                    width:10,
                    height:18,
                    marginRight:25
                  }}
              />
              <Text>Data and Stronge</Text></TouchableOpacity>
            <TouchableOpacity style={{
            flexDirection:'row',
            alignItems:'center',
            marginBottom:34
          }}>
              <Image 
                source={setting4}
                  style={{
                    width:10,
                    height:18,
                    marginRight:25
                  }}
              />
              <Text>Chat settings</Text></TouchableOpacity>
            <TouchableOpacity style={{
            flexDirection:'row',
            alignItems:'center'
          }}>
              <Image 
                source={setting5}
                  style={{
                    width:10,
                    height:18,
                    marginRight:25
                  }}
              />
              <Text>Devices</Text></TouchableOpacity>
          </View>
          
        </View>
      </View>
    );
  }
}

export default App;