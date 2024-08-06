import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

type CreateCardProps = {
    name: any;  // or the appropriate type for your icon
    location: any;
    image: any;
    handlePress: any;
  };

const CreateCard: React.FC<CreateCardProps> = ({name, location, image, handlePress}) => {
  return (
    <TouchableOpacity 
      onPress={handlePress}
      activeOpacity={0.7}
      className='w-[351px] h-[210px] bg-green-100 rounded-[21px] items-center justify-center mt-7'>
        <View className='w-[334px] h-[186px] bg-gray-100 rounded-[21px]'></View>
        <View className='w-[351px] h-[63px] rounded-b-[21px] absolute inset-x-0 bottom-0 justify-center'>
            <View className='bg-black opacity-[0.44] w-[351px] h-[63px] rounded-b-[21px] absolute inset-x-0 bottom-0'></View>
            <View className='mb-2'>
                <Text className='text-white text-[26px] font-bold ml-5'>{name}</Text>
                <Text className='text-white text-[13px] font-psemibold ml-5'>{location}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default CreateCard