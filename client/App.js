/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { Text, View } from 'react-native';

import HomeScreen from './components/homeScreen';
import StoryScreen from './components/storyScreen';
import AddStoryScreen from './components/addStoryScreen';
import ChangeProfilePic from './components/changeProfilePic';


const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
})

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Story" component={StoryScreen}/>
          <Stack.Screen name="AddStory" component={AddStoryScreen} />
          <Stack.Screen name="ChangeProfilePic" component={ChangeProfilePic} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;project_mov
