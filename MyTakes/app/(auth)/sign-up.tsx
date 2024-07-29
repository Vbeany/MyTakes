import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants';
import FormField from '../../components/FormField';
import { useState } from 'react';
import CustomButton from "../../components/CustomButton";
import { Link, router } from 'expo-router';

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password:'',
  })
  const [isSubmitting, setisSubmitting] = useState(false)

  const submit = async () => {
    if(!form.username || !form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all the fields!')
    }

    setisSubmitting(true);

    try {
      // const result = await createUser(form.email, form.password, form.username) //Firebase

      //set it to global state...

      router.replace('/home');
    } catch (error) {
      Alert.alert('Error', error.message)
    } finally {
      setisSubmitting(false);
    }
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView> 
        <View className="w-full justify-center items-center min-h-[85vh] px-4 my-6">
        <Image source={images.logo1} resizeMode='contain' className="max-w-[380px] w-full h-[125px]"/>
          
          <FormField 
            title="Username"
            value={form.username}
            handleChangeText={(e: any) => setForm({ ...form, username: e })}
            otherStyles="mt-10" 
            placeholder="Unique username"
            />
          <FormField 
            title="Email"
            value={form.email}
            handleChangeText={(e: any) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address" 
            placeholder="e.g Mytakes@gmail.com"
            />
          <FormField 
            title="Password"
            value={form.password}
            handleChangeText={(e: any) => setForm({ ...form, password: e })}
            otherStyles="mt-7" 
            placeholder="Password"
            />

          <CustomButton 
            title="Sign Up"
            handlePress={submit}
            containerStyles="w-[334px] min-h-[53px] mt-7"
            isLoading={isSubmitting} textStyles={undefined}          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-base text-gray-100 font-pregular">
              Have an account already?
            </Text>
            <Link href="/sign-in" className="text-base font-psemibold text-pond-200">Login</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp