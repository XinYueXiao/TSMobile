import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>动态!</Text>
    </View>
  );
}
function HomeScreen1() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>附近!</Text>
    </View>
  );
}
function HomeScreen2() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>发现!</Text>
    </View>
  );
}
function HomeScreen3() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>我的!</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="动态" component={HomeScreen} />
      <Tab.Screen name="附近" component={HomeScreen1} />
      <Tab.Screen name="发现" component={HomeScreen2} />
      <Tab.Screen name="我的" component={HomeScreen3} />
    </Tab.Navigator>
  );
}
