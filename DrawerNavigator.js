import React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from './HomeScreen';

  function ProfileScreen() {
    return (
      <View>
        <Text>Profile Screen</Text>
      </View>
    );
  }
  
  const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
