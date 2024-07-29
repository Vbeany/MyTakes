import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'


const Home = () => {
  return (
    <SafeAreaView className='bg-gray-200 h-full'>
      <ScrollView>
      <View className='justify-center items-center mt-10'>
        <Image 
          source={images.iconNoho}
        />
      </View>

      <View>
        <Text className='font-oregular text-2xl ml-5 mt-5'>Last place you went to..</Text>
        <View className='bg-pond-200 w-[347px] h-[139px] ml-5 mt-5 rounded-[21px]'></View>
      </View>

      <View>
        <Text className='font-oregular text-2xl ml-5 mt-5'>Recs of the Day!</Text>
        <Text className='font-pregular text-sm ml-5 mt-1 text-pond-300'>No plans today? Don't worry I've gotchu!</Text>
        <View className='bg-pond-200 w-[347px] h-[139px] ml-5 mt-5 rounded-[21px]'></View>
      </View>
      <StatusBar backgroundColor="#161622" style="dark"/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home