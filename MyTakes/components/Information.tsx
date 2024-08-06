import React, {useState} from 'react';
import {Alert, Modal, Text, Pressable, View, ScrollView, TouchableOpacity} from 'react-native';
import CreateCard from '@/components/CreateCard'
import { SafeAreaView } from 'react-native-safe-area-context';
import InfoCard from '@/components/InfoCard'

const Information = () => {
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
          <View  className='w-[358px] h-[358px] rounded-[21px] bg-green p-35 justify-center items-center'>
            <Text>HI theres</Text>
            <Pressable
              className='w-[120px] h-[40px] rounded-[20px] bg-blue-400 text-center pt-3'
              onPress={() => setModalVisible(!modalVisible)}>
              <Text className='text-white font-bold ml-5' >Hide Modal</Text>
            </Pressable>
          </View>
        </View> 

      </Modal>
        <TouchableOpacity className='w-[358px] h-[188px] rounded-b-[21px]' onPress={() => setModalVisible(true)}>
          
        </TouchableOpacity>
    </View>
  );
};


export default Information;