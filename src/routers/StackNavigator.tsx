import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="跳转"
        onPress={() => {
          navigation.navigate('Second');
        }}
      />
    </View>
  );
}

function SecondScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Second Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Second" component={SecondScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
