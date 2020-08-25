import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import { back, profile, setting1, setting2, setting3, setting4, setting5 } from './assets/images';
const { width } = Dimensions.get('window');

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ScrollView>
        <View style={{
          marginTop: 74 / 414 * width,
          paddingLeft: 32 / 414 * width,
          paddingRight: 32 / 414 * width,
        }}>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <Image
              source={back}
              style={{
                width: 10 / 414 * width,
                height: 18 / 414 * width,
                marginRight: 25 / 414 * width
              }}
            />
            <Text
              style={{
                fontSize: 25 / 414 * width,
                color: '#2675EC',
                alignItems: 'center'
              }}
            >@wdlam</Text>
          </TouchableOpacity>

          <View style={{
            marginTop: 34 / 414 * width,
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <Image
              source={profile}
              style={{
                width: 82 / 414 * width,
                height: 82 / 414 * width,
                marginRight: 18 / 414 * width
              }}
            />
            <View>
              <Text style={{
                fontSize: 23 / 414 * width,
                fontWeight: 'bold',
                color: '#131313'
              }}>Gloria Mckinney</Text>
              <Text style={{
                fontSize: 17 / 414 * width,
                fontWeight: '600',
                color: '#848484'
              }}>+375(29)9638433</Text>
            </View>
          </View>
          <View style={{
            marginTop: 34 / 414 * width,
            marginBottom: 12 / 414 * width
          }}>
            <Text
              style={{
                fontSize: 20 / 414 * width,
                fontWeight: 'bold',
                color: '#131313',
                marginBottom: 13 / 414 * width
              }}>Account</Text>
            <Text style={{
              fontSize: 17 / 414 * width,
              fontWeight: '600',
              color: '#131313',
              marginBottom: 13 / 414 * width
            }}>+375(29)9638433</Text>
            <TouchableOpacity style={{
              fontSize: 17 / 414 * width,
              fontWeight: '600',
              color: '#848484',
              marginBottom: 13 / 414 * width
            }}><Text>Tap to change phone number</Text></TouchableOpacity>
          </View>

          <View
            style={{
              borderBottomColor: '#F6F6F6',
              borderBottomWidth: 2 / 414 * width,
            }}
          />

          <View style={{
            marginVertical: 25 / 414 * width
          }}>
            <Text style={{
              marginBottom: 6 / 414 * width,
              color: '#131313',
              fontWeight: '600',
              fontSize: 17 / 414 * width
            }}>@wdlam</Text>
            <Text>Username</Text>
          </View>

          <View
            style={{
              borderBottomColor: '#F6F6F6',
              borderBottomWidth: 2 / 414 * width,
            }}
          />

          <View style={{
            marginVertical: 39 / 414 * width,
            fontSize: 17 / 414 * width,
          }}>
            <Text style={{
              color: '#131313',
              fontWeight: '600',
              marginBottom: 6 / 414 * width
            }}>I’m Senior Frontend Developer from Microsoft</Text>
            <Text style={{
              color: '#848484',
              fontWeight: '600'
            }}>Bio</Text>
          </View>

          <View style={{
            marginVertical: 25 / 414 * width
          }}>
            <Text
              style={{
                fontSize: 20 / 414 * width,
                fontWeight: 'bold',
                color: '#131313'
              }}>Settings</Text>
            <View style={{
              marginVertical: 25 / 414 * width,
              marginBottom: 25 / 414 * width
            }}>
              <TouchableOpacity style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 34 / 414 * width
              }}>
                <Image
                  source={setting1}
                  style={{
                    width: 22 / 414 * width,
                    height: 22 / 414 * width,
                    marginRight: 25 / 414 * width
                  }}
                />
                <Text>Notification and Sounds</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 34 / 414 * width
              }}>
                <Image
                  source={setting2}
                  style={{
                    width: 22 / 414 * width,
                    height: 22 / 414 * width,
                    marginRight: 25 / 414 * width
                  }}
                />
                <Text>Privaty and Security</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 34 / 414 * width
              }}>
                <Image
                  source={setting3}
                  style={{
                    width: 22 / 414 * width,
                    height: 22 / 414 * width,
                    marginRight: 25 / 414 * width
                  }}
                />
                <Text>Data and Stronge</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 34 / 414 * width
              }}>
                <Image
                  source={setting4}
                  style={{
                    width: 22 / 414 * width,
                    height: 22 / 414 * width,
                    marginRight: 25 / 414 * width
                  }}
                />
                <Text>Chat settings</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                flexDirection: 'row',
                alignItems: 'center'
              }}>
                <Image
                  source={setting5}
                  style={{
                    width: 22 / 414 * width,
                    height: 17 / 414 * width,
                    marginRight: 25 / 414 * width
                  }}
                />
                <Text>Devices</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default App;
