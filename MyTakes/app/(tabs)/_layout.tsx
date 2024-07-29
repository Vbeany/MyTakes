import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'

import {icons} from '../../constants'


type TabIconProps = {
  icon: any;  // or the appropriate type for your icon
  color: any;
  name: any;
  focused: any;
};

const TabIcon: React.FC<TabIconProps> = ({ icon, color, name, focused }) => {
  return (
    <View className='items-center justify-center mt-5'>
        <Image 
          source={icon}
          resizeMode="contain"
          tintColor={color}
          className="w-9 h-9"
        />
        {/* <Text className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}>         
        </Text> */}
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs 
          screenOptions={{ 
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#809E29',
            tabBarInactiveTintColor: '#252526',
            tabBarStyle: {
              height: 90,
              borderWidth: 2,
              borderTopWidth: 2,
              borderRadius: 15,
              borderColor: '#000',
              borderTopColor: '#000',
              backgroundColor: '#DDF5FB',
              },
          }}>
          <Tabs.Screen name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ) 
          }}
          />
          <Tabs.Screen name="bookmark"
          options={{
            title: 'Bookmark',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.bookmark}
                color={color}
                name="Bookmark"
                focused={focused}
              />
            ) 
          }}
          />
          <Tabs.Screen name="create"
          options={{
            title: 'Create',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.explore}
                color={color}
                name="Create"
                focused={focused}
              />
            ) 
          }}
          />
          <Tabs.Screen name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            ) 
          }}
          />
      </Tabs>
    </>
  )
}

export default TabsLayout