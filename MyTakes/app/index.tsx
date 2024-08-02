import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { images } from '../constants'
import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { FIREBASE_AUTH } from "@/FirebaseConfig";

export default function Index() {

  const [user, setUser] = useState<User | null>(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user);
      setUser(user);
      setInitializing(false);
    });
    return unsubscribe; // Unsubscribe on unmount
  }, []);

  useEffect(() => {
    if (!initializing) {
      if (user) {
        router.replace("/home"); // Navigate to home if user is logged in
      }
    }
  }, [initializing, user]);

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%'}}>
        <View className="w-full items-center h-full px-4 justify-center">
          <View className="bg-pond w-[358px] h-[453px] rounded-2xl justify-center items-center">
          <Text className="text-3xl text-pond-100 font-oregular text-center mt-10"> Simply gotta write it down</Text>
            <View className="mt-5">
            <CustomButton 
              title="Continue with Email"
              handlePress={() => { router.push('/sign-in'); } }
              containerStyles="w-[334px] min-h-[53px]" 
              textStyles="" 
              isLoading=""/>
            </View>
            <View className="flex flex-row items-center">
              <Text className="text-base text-black my-5"> Don't have an account? </Text>  
              <Link href="/sign-up" className="text-sm text-pond-300 font-plight">Sign up!</Link>
            </View>
              <View className="flex flex-row items-center">
                <View className="bg-gray-100 h-[1px] w-[130px]"></View>
                <Text className="font-pmedium text-base mr-[18px] ml-[18px]">or</Text>
                <View className="bg-gray-100 h-[1px] w-[130px]"></View>
              </View>

              <View className="flex flex-row mt-5">
                <View>
                  <CustomButton 
                  title="Apple login"
                  handlePress={() => {console.log('Apple login');} }
                  containerStyles="w-[161px] min-h-[51px] bg-pond-200 mr-1" 
                  textStyles="text-pond-300"
                  isLoading=""/>
                </View>
                <View>
                  <CustomButton 
                  title="Google login"
                  handlePress={() => {console.log('Google login'); } }
                  containerStyles="w-[161px] min-h-[51px] bg-pond-200 ml-1" 
                  textStyles="text-pond-300" 
                  isLoading=""/>
                </View>
              </View>
            </View>


          <Image 
          source={images.logo1}
          className="max-w-[380px] w-full h-[125px] absolute top-28"
          resizeMode="contain"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light"/>
    </SafeAreaView>
  );
}



// <Image 
// source={images.logo}
// className="w-[130px] h-[84x]"
// resizeMode="contain"
// />

// <Image 
// source={images.cards}
// className="max-w-[380px] w-full h-[300px]"
// resizeMode="contain"
// />

// <View className="relative mt-5">
// <Text className="text-3xl text-white font-bold text-center"> Discover Endless Possibilities with{''}<Text className="text-secondary-200"> Aora</Text></Text>
// <Image 
// source={images.path}
// className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
// resizeMode="contain"
// />
// </View>
// <Text className="text-sm font-psemibold text-gray-100 mt-7 text-center">Where creativity meets innovation: embark on a journey of limitless exploration with Aora</Text>
// <CustomButton 
// title="Continue with Email"
// handlePress={() => { router.push('/sign-in'); } }
// containerStyles="w-full mt-7"
// textStyles=""
// isLoading=""/>