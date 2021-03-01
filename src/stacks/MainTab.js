import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../views/Home';
import Search from '../views/Search';
import Appointments from '../views/Appointments';
import Favorites from '../views/Favorites';
import Profile from '../views/Profile';
import TabBar from '../components/tabBar';
const Tab = createBottomTabNavigator();
export default () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Appointments" component={Appointments} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
