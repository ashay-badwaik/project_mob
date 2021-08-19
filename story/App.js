/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow 
 */

import * as React from 'react';
import { Platform, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';



import HomeScreen from './components/homeScreen';
import StoryScreen from './components/storyScreen';
import AddStoryScreen from './components/addStoryScreen';
import ChangeProfilePic from './components/changeProfilePic';

export type RootStackParamList = {
  HomeScreen: { available?: bool, viewed?: bool };
  StoryScreen: null;
  AddStoryScreen: null;
  ChangeProfilePic: { imagePath: string }
};


const baseUrl = Platform.OS === 'android' ? 'http://10.0.2.2:4000/' : 'http://localhost:4000/';

const client = new ApolloClient({
  uri: baseUrl,
  cache: new InMemoryCache(),
})

const Stack = createNativeStackNavigator<RootStackParamList>();


LogBox.ignoreAllLogs();
const App = (): React.Node => {
  return (

    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="StoryScreen" component={StoryScreen} options={{ headerShown: false }} />
          <Stack.Screen name="AddStoryScreen" component={AddStoryScreen} />
          <Stack.Screen name="ChangeProfilePic" component={ChangeProfilePic} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>

  );
}

export default App;
