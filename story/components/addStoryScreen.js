// @format
// @flow
import * as React from 'react';
import { Text, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import { styles } from './styles/addStoryScreen';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {
  navigation: any;
}

/**
 * Screen to add a story
 * @param {Props} props 
 */
const AddStoryScreen = ({ navigation }: Props): React.Node => {

  const [pic, setpic] = React.useState("./../images/none.jpeg");
  const [content, setContent] = React.useState("");
  const [aspect, setAspect] = React.useState(1);

  /**
   * Displays the add image text and the image(if selected)
   */
  const imageDisplay = () => {
    if (pic === "./../images/none.jpeg") {
      return (<Text style={styles.imagePickerText} testID='addImg'>{"Tap here to add image"}</Text>);
    }
    return (<Image style={[styles.image, { aspectRatio: aspect }]} source={{ uri: pic }} testID='display' />);
  }

  /**
   * onPress function to pick image from device image library
   */
  const pickImage = () => {
    ImagePicker.openPicker({
      cropping: true,
      allowsEditing: true,
    }).then((image) => {
      console.log(image.path);
      let aspectRatio = image.cropRect.width / image.cropRect.height;
      setAspect(aspectRatio);
      setpic(image.path);
    }).catch((err) => {
      console.log(err)
    })
  }

  /**
   * onPress function, saves the imagePath and content in AsyncStorage
   */
  const saveStory = async () => {
    try {
      const story = {
        id: 1,
        imagepath: pic,
        content: content,
        viewed: false
      }
      await AsyncStorage.setItem('stories', JSON.stringify(story))
      navigation.navigate({ name: 'HomeScreen', params: { available: true } })
    } catch (err) {
      console.log('addStoryScreen', err);
    }
  }

  /**
   * styling based on image or text displayed
   */
  const imageStyle = () => {
    if (pic === "./../images/none.jpeg") {
      return styles.imagePicker;
    }
    return styles.imageBox;
  }

  return (
    <ScrollView>
      <Text style={styles.headerText}>Create your story</Text>

      <TouchableOpacity style={imageStyle()} onPress={pickImage} testID='image'>
        {imageDisplay()}
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        multiline={true}
        placeholder="Add caption"
        placeholderTextColor="#fdbb21"
        onChangeText={(text) => { setContent(text) }}
        testID='input'
      />

      <TouchableOpacity style={styles.btn} onPress={saveStory} testID='btn'>
        <Text style={styles.btnText}>Create Story</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default AddStoryScreen;