import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import { StatusBar } from 'expo-status-bar'
import CreateCard from '@/components/CreateCard'
import InfoCard from '@/components/InfoCard'

const Bookmark = () => {
  return (
    <SafeAreaView className='bg-gray-200 h-full' edges={['top', 'left', 'right']}>
      <ScrollView>
        <View className='items-center justify-center'>
          <View>
            <CreateCard 
            name="Restaurant Name" 
            location="Location"
            image={undefined}            
            />
          </View>
          <View>
            <Text>Properties</Text>
          </View>
          <View>
            <InfoCard
            
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Bookmark