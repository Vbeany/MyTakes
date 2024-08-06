import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import ReviewCard from "@/components/ReviewCard";

const Create = () => {

  const submit = () => {
    console.log("Card Clicked!")
  }

  return (
    <SafeAreaView className='bg-pond h-full items-center' edges={['top', 'left', 'right']}>
      <ScrollView>
      <View className='bg-green w-[358px] h-[62px] items-center rounded-[21px] justify-center mt-5'> 
        <Text className='text-[26px] text-white font-psemibold'>
          Libary Reviews
        </Text>
      
      </View>
      <View>
        <ReviewCard 
            name="The Crus-Z Family"
            location="New York City"
            score="4.5"
            image={undefined} 
            handlePress={submit}            
            />
        <ReviewCard 
            name="Taste of Chicago"
            location="Chicago"
            score="4.5"
            image={undefined} 
            handlePress={submit}            
            />     
        <ReviewCard 
            name="Sploto"
            location="New York City"
            score="4.5"
            image={undefined} 
            handlePress={submit}            
            />  
        <ReviewCard 
            name="The Crus-Z Family"
            location="New York City"
            score="4.5"
            image={undefined} 
            handlePress={submit}            
            />     
      </View>
      <StatusBar backgroundColor="#161622" style="dark"/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Create