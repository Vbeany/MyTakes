import { View, Text } from 'react-native'
import React from 'react'
import Information from '@/components/Information'

const InfoCard = ({}) => {
  return (
    <View className=' bg-pond-200 w-[358px] h-[358px] rounded-[21px] mt-5 shadow-md'>
        <View className='w-[358px] h-[101px] absolute mt-10 items-center justify-between flex-row'>
            <View className=' w-[157px] h-[75px] justify-center'>
                <Text className='text-black font-bold ml-5'>- Salsa Night</Text>
                <Text className='text-black font-bold ml-5'>- Lots of dogs</Text>
                <Text className='text-black font-bold ml-5'>- Fresh Weed</Text>
            </View>
            <View className='bg-green-200 w-[74px] h-[4px] rotate-90 rounded-[2px] -ml-[20px] -mr-[20px]'></View>
            <View className=' w-[157px] h-[75px] justify-center'>
                <Text className='text-black font-bold ml-3'>- Weed smell</Text>
                <Text className='text-black font-bold ml-3'>- Day Drinking</Text>
                <Text className='text-black font-bold ml-3'>- Nice Grass</Text>
            </View>
        </View>
      <View className='bg-green w-[358px] h-[38px] rounded-t-[21px] flex-row items-center justify-between px-7'>
        <Text className='text-white text-[23px] font-pbold'> Must Try</Text>
        <Text className='text-white text-[23px] font-pbold mr-2'> Try next</Text>
      </View>

      <View className='bg-green w-[98px] h-[31px] absolute rounded-tr-[21px] mt-36'></View>
      <View className='bg-green w-[358px] h-[31px] mt-28'>
        <Text className='text-white text-[23px] font-pbold ml-2 -mt-1'> Notes</Text>
        <View className='w-[358px] h-[188px] rounded-b-[21px]'>
            <Information />
        </View>
      </View>
    </View>
  )
}

export default InfoCard