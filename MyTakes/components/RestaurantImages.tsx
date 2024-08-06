import React, {useState} from 'react';
import {Alert, Modal, Text, Pressable, View, ScrollView} from 'react-native';
import CreateCard from '@/components/CreateCard'
import { SafeAreaView } from 'react-native-safe-area-context';

const RestaurantImages = () => {
  const [modalVisible, setModalVisible] = useState(false);

  
  return (
    <View className='flex-1 justify-center items-center'>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>

        <View className='flex-1 justify-center items-center'>
          <View  className='w-[358px] h-[358px] rounded-[21px] bg-pond-200 p-35 shadow-lg shadow-black-100 justify-center items-center'>
            <Pressable
              className='w-[120px] h-[40px] rounded-[20px] bg-blue-400 text-center pt-3'
              onPress={() => setModalVisible(!modalVisible)}>
              <Text className='text-white font-bold ml-5' >Hide Modal</Text>
            </Pressable>
          </View>
        </View> 

      </Modal>
      <CreateCard 
          name="Restaurant Name"
          location="Location"
          image={undefined} 
          handlePress={() => setModalVisible(true)}            
        />
    </View>
  );
};


export default RestaurantImages;