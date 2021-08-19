import 'react-native';
import React from 'react';
import { MockedProvider } from "@apollo/client/testing";
import AddStoryScreen from '../components/addStoryScreen';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Note: test renderer must be required after react-native.
import renderer, { act } from 'react-test-renderer';

jest.useFakeTimers()

const mockedParams = {
  route: {
    params: {
      storiesAvailable: true
    }
  },
  navigation: {
    navigate: jest.fn()
  }
}

const tree = renderer.create(
  <AddStoryScreen {...mockedParams} />
)

it('snapshot', () => {
  const tree = renderer.create(
    <AddStoryScreen {...mockedParams} />
  )

  expect(tree).toMatchSnapshot()
});

it('image btn', () => {
  const tree = renderer.create(
    <AddStoryScreen {...mockedParams} />
  )

  const btn = tree.root.findByProps({ testID: 'image' }).props;
  btn.onPress();

  // console.log(ImagePicker.openPicker());
  expect(ImagePicker.openPicker).toHaveBeenCalledTimes(1)
  // const img = tree.root.findByProps({testId:'display'}).props;
  // expect(img).not.toBeNull()
})

it('Create story btn', async () => {
  const tree = renderer.create(
    <AddStoryScreen {...mockedParams} />
  )

  const btn = tree.root.findByProps({ testID: 'btn' }).props;
  await btn.onPress();

  expect(AsyncStorage.setItem).toHaveBeenCalled();
  expect(mockedParams.navigation.navigate).toBeCalledWith(expect.objectContaining({ name: 'Home' }))
})

it('caption input', () => {
  const tree = renderer.create(
    <AddStoryScreen {...mockedParams} />
  )

  const setContent = jest.fn();


  const input = tree.root.findByProps({ testID: 'input' }).props;
  // input.onChangeText('abcd');
  expect(input).not.toBeNull()
})

it('addImg', () => {
  const tree = renderer.create(
    <AddStoryScreen {...mockedParams} />
  )
  const txt = tree.root.findByProps({ testID: 'addImg' });
  expect(txt).not.toBeNull()
})

it('imgDisplay', async () => {
  const tree = renderer.create(
    <AddStoryScreen {...mockedParams} />
  )
  const btn = tree.root.findByProps({ testID: 'image' }).props;
  await act(async () => {
    await btn.onPress();
  })
  // await ImagePicker.openPicker().then((image)=>{console.log(image)})
  const img = tree.root.findByProps({ testID: 'display' });
  expect(img).not.toBeNull()

})
