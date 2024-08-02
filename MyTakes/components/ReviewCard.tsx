import { View, Text } from 'react-native'
import React from 'react'

type ReviewCardProps = {
  name: any;  // or the appropriate type for your icon
  location: any;
  score: any;
  image: any;
};

const ReviewCard: React.FC<ReviewCardProps> = ({name, location, score, image}) => {
  return (
    <View className='bg-black w-[358px] h-[206px] my-3 rounded-[21px]'>
      <View className='bg-white w-[358px] h-[51px] rounded-b-custom absolute inset-x-0 bottom-0 flex-row items-center justify-between'>
      <View className='mt-1.5'>
        <Text className='text-black text-[18px] font-bold ml-3'>{name}</Text>
        <Text className='text-black text-[13px] font-psemibold ml-3'>{location}</Text>
      </View>
        <Text className='mr-3 text-[18px] font-psemibold'>{score}</Text>
      </View>
      
    </View>
  )
}




export default ReviewCard