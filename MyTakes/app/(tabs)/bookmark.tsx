import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import { StatusBar } from 'expo-status-bar'
import CreateCard from '@/components/CreateCard'
import InfoCard from '@/components/InfoCard'
import RestaurantImages from '@/components/RestaurantImages'

const Bookmark = () => {

  const [showAppOptions, setShowAppOptions] = useState(false);


  return (
    <SafeAreaView className='bg-gray-200 h-full' edges={['top', 'left', 'right']}>
      <ScrollView>
        <View className='items-center justify-center'>
          <RestaurantImages         
          />
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