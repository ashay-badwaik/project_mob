import 'react-native';
import React from 'react';
import StoryScreen from './../components/storyScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';


// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.useFakeTimers();


const mockedParams = {
    navigation:{
        navigate: jest.fn()
    }
};

const tree = renderer.create(
    <StoryScreen {...mockedParams}/>
)

it('renders correctly', () => {
    tree
})

it('snapshot', () => {
    expect(tree).toMatchSnapshot()
})

it('components render', () => {
    const img = tree.root.findByProps({testID: 'img'})
    const bar = tree.root.findByProps({testID: 'progress'})
    const con = tree.root.findByProps({testID: 'content'})
    expect(img).not.toBeNull()
    expect(bar).not.toBeNull()
    expect(con).not.toBeNull()
})

