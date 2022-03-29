import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import {ContactStackNavigator} from './StackNavigator';
import NavigationTab from './NavigationTab';
import FriendsScreen from '../screens/container/FriendsScreen';
import { StyleSheet, Image } from 'react-native';
import Profile from '../screens/container/Profile';
import Settings from '../screens/container/Settigns';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={NavigationTab}
        options={{
          title: 'Home',
          drawerIcon: ({focused, size}) => {
            <Image
            source={require('../../assets/ic_home/ic_home.png')}
            styles={[
              focused ? style.drawerActive : styles.drawerInActive,
              {heigth: size, width: size},
            ]}
            />
          }
        }}
      />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Logout" component={Profile} />
    </Drawer.Navigator>
  );
};


const style = StyleSheet.create({
  drawerActive: {
    tintColor: '#e91e63',
  },
  drawerInActive: {
    tintColor: "#aeaeae",
  }
});

export default DrawerNavigator;
