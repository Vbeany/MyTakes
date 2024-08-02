import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import CustomButton from '@/components/CustomButton'
import { router } from 'expo-router'
import { FIREBASE_AUTH } from '@/FirebaseConfig'


const Profile = () => {
  return (
    <SafeAreaView className='bg-gray-200 h-full'>
      <ScrollView >
        <View className='items-center justify-center mt-40'>
          <CustomButton 
            title="Log out"
            handlePress={() => { 
              FIREBASE_AUTH.signOut();
              router.replace("/"); // Navigate to index if user is not logged in
            }}
            containerStyles="w-[334px] min-h-[53px] bg-pond mt-7" 
            textStyles="" 
            isLoading=""/>
        </View>
      <StatusBar backgroundColor="#161622" style="dark"/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile