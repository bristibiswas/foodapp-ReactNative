import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View>
      <Text className="text-red-400 text-4xl">About</Text>
      {/* <View className="flex-row ml-8 mt-5">
        <View>
        <Image source={imagePath.icButGet}
                style={{height:100,width:100}} />
        </View>
        <View>
          <Text style={{fontSize:16,fontWeight:700,marginLeft:20}} >ProxInfotech Rewards</Text>
        </View>

      </View> */}
    </View>
  )
}

export default About

const styles = StyleSheet.create({})