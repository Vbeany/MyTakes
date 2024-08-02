import { View, Text } from 'react-native'
import React from 'react'

const InfoCard = ({}) => {
  return (
    <View className=' bg-pond-200 w-[358px] h-[358px] rounded-[21px] mt-5 shadow-md'>
        <View className='w-[358px] h-[101px] absolute mt-10 items-center justify-center'>
            <View className='bg-green-200 w-[74px] h-[4px] rotate-90 rounded-[2px]'></View>
        </View>
      <View className='bg-green w-[358px] h-[38px] rounded-t-[21px] flex-row items-center justify-between px-7'>
        <Text className='text-white text-[23px] font-pbold'> Must Try</Text>
        <Text className='text-white text-[23px] font-pbold mr-2'> Try next</Text>
      </View>

      <View className='bg-green w-[98px] h-[31px] absolute rounded-tr-[21px] mt-36'></View>
      <View className='bg-green w-[358px] h-[31px] mt-28'>
        <Text className='text-white text-[23px] font-pbold ml-2 -mt-1'> Notes</Text>
      </View>
    </View>
  )
}

export default InfoCard