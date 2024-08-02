import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants';
import FormField from '../../components/FormField';
import { useState } from 'react';
import CustomButton from "../../components/CustomButton";
import { Link, router } from 'expo-router';
import { FIREBASE_AUTH } from '@/FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';



const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState('');
  const auth = FIREBASE_AUTH;

  const [form, setForm] = useState({
    email: '',
    password:'',
  })
  const [isSubmitting, setisSubmitting] = useState(false)

  const submit = async () => {
    if(!email || !password) {
      Alert.alert('Error', 'Please fill in all the fields!')
    }

    setisSubmitting(true);

    try {
      const reponse = await signInWithEmailAndPassword(auth,email,password)
      console.log(reponse);
      // await signIn(form.email, form.password)
      //set it to global state...
      router.replace('/home');
    } catch (error: any) {
      Alert.alert('Error', "Your username or password is incorrect")
      // alert('Your username or password is incorrect');
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
            title="Email"
            value={email}
            handleChangeText={(e: any) => setEmail(e)}
            otherStyles="mt-7"
            keyboardType="email-address"
            placeholder="e.g Mytakes@gmail.com"
            />
          <FormField 
            title="Password"
            value={password}
            handleChangeText={(e: any) => setPassword(e)}
            otherStyles="mt-7" 
            placeholder="Password"        
            />

          <CustomButton 
            title="Sign In"
            handlePress={submit}
            containerStyles="w-[334px] min-h-[53px] mt-7"
            isLoading={isSubmitting} 
            textStyles={undefined}/>
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-base text-gray-100 font-pregular">
              Don't have account?
            </Text>
            <Link href="/sign-up" className="text-base font-psemibold text-pond-200">Sign Up!</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn