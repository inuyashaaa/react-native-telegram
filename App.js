import React from 'react';

import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';

import { rectangle,notification,privaty,Chat,data,devices,back } from './assets/images/index';


const { width } = Dimensions.get('window')
class App extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {

    return (
      <ScrollView style={{
        marginTop: 74 ,
        paddingLeft: 32,
        paddingRight: 32,
        fontFamily: "Gilroy-ExtraBold"

      }}>
        <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems:'center'
        }}>
      <View style={{ flexDirection: 'row', }}>
      <Image
        source={back}
        
        resizeMode="contain"
      />


      <View >
        <Text style={{
          fontSize: 25 /414* width,
          fontWeight:'bold',
          fontFamily: 'Gilroy-ExtraBold',
          color: '#2675EC',


        }}>  @wdlam </Text>
        

        <View style={{ flexDirection: 'row', alignItems: 'center',  }}>
          <Image
            source={rectangle}
            style={{
              width: 77/414 * width,
              height: 77/414 * width,
            }}
            resizeMode="contain"
          />

          <View style={{ flexDirection: 'column', paddingHorizontal: 18 }}>
            <Text
              style={{
                textAlign: 'left',
                fontSize: 23/414 * width,
                fontWeight: "bold",
                fontFamily: 'Gilroy',
                color: '#131313'
              }}
            >Gloria Mckinney</Text>


            <View style={{ flexDirection: 'column' }}>
              <Text
                style={{
                  textAlign: 'left',
                  fontSize: 17/414 * width,
                  fontWeight: 'bold',
                  fontFamily: 'Gilroy',
                  letterSpacing: 1.335/414 * width,
                  color: '#848484'
                }}>+375(29)9638433</Text>
            </View>
          </View>
        </View>


        <View style={{ flexDirection: 'column',  }}>
          <Text
            style={{
              fontFamily: 'Gilroy',
              fontSize: 20/414 * width,
              fontWeight: 'bold',
              textAlign: 'left',
              top: 25/414 * width,
              color: '#131313'

            }}>Account</Text>

          <View style={{ flexDirection: 'column', paddingVertical: 30 }}>
            <Text style={{
              textAlign: 'left',
              fontFamily: 'Gilroy',
              fontWeight: 'bold',
              fontSize: 17/414 * width
            }}>+375(29)9638433</Text>


            <View style={{ flexDirection: 'column', paddingVertical: 13 }} >
              <Text style={{
                textAlign: 'left',
                fontFamily: 'Gilroy',
                fontWeight: '600',
                fontSize: 17/414 * width,
                lineHeight: 21/414 * width,
                color: '#848484'

              }}>
                Tap to change phone number
              </Text>

              <View
                style={{
                  flexDirection: 'column',
                  paddingVertical: 8/414 * width,
                  borderBottomColor: '#F6F6F6',
                  borderBottomWidth: 2/414 * width,
                }}
              />
              <View style={{ flexDirection: 'column', paddingVertical: 13 }}>
                <Text style={{
                  textAlign: 'left',
                  fontFamily: 'Gilroy-ExtraBold',
                  fontWeight: 'bold',
                  fontSize: 17/414 * width,
                  color: '#131313'
                }}>@wdlam</Text>

                <View style={{ flexDirection: 'column', paddingVertical: 6 }}>
                  <Text style={{
                    textAlign: 'left',
                    fontFamily: 'Gilroy',
                    fontWeight: '600',
                    fontSize: 17/414 * width,
                    color: '#848484'
                  }}>Username</Text>


                  <View
                    style={{
                      flexDirection: 'column',
                      paddingVertical: 6/414 * width,
                      borderBottomColor: '#F6F6F6',
                      borderBottomWidth: 2/414 * width,
                    }}
                  />
                  <View style={{ flexDirection: 'column', paddingVertical: 25 }}>
                    <Text style={{
                      textAlign: 'left',
                      fontFamily: 'Gilroy',
                      fontWeight: 'bold',
                      fontSize: 17/414 * width,
                      color: '#131313'
                    }}>I'm Senior Frontend Developer from Microsoft</Text>

                    <View style={{ flexDirection: 'column', paddingVertical: 6 }}>
                      <Text style={{
                        textAlign: 'left',
                        fontFamily: 'Gilroy',
                        fontWeight: '600',
                        fontSize: 17/414 * width,
                        color: '#848484'
                      }}>Bio</Text>

                      <View style={{ flexDirection: 'column',paddingVertical: 33 }}>
                        <Text
                          style={{
                            fontFamily: 'Gilroy',
                            fontSize: 20/414 * width,
                            fontWeight: 'bold',
                            textAlign: 'left',
                            top: 25/414 * width,
                            color: '#131313'

                          }}>Settings</Text>


                        <View style={{ flexDirection: 'column', paddingVertical: 60, }}>
                          <Image
                            source={notification}
                            resizeMode="contain"
                          />
                          <View style={{ flexDirection: 'column', paddingVertical: 31, }}>
                            <Image
                              source={privaty}
                              resizeMode="contain"
                            />
                            <View style={{ flexDirection: 'column', paddingVertical: 31, }}>

                              <Image
                                source={data}

                                resizeMode="contain"
                              />
                              <View style={{ flexDirection: 'column', paddingVertical: 31, }}>

                                <Image
                                  source={Chat}

                                  resizeMode="contain"
                                />
                                <View style={{ flexDirection: 'column', paddingVertical: 31, }}>

                                  <Image
                                    source={devices}
                                    resizeMode="contain"
                                  />





                                </View>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      </View>
      </TouchableOpacity>

      </ScrollView>









    )
  }
}

export default App