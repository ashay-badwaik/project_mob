import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ImageBackground, Image, ScrollView } from 'react-native';
import { styles } from './styles/addStoryScreen';
import ImagePicker from 'react-native-image-crop-picker';


const AddStoryScreen = ({ navigation }) => {

    const [ pic, setpic ] = useState("");
    const [ aspect, setAspect ] = useState(1);


    const imageDisplay = () => {
        if (pic === ""){
            return (<Text style={styles.imagePickerText}>{"Tap here to add image"}</Text>);
        }
        console.log(pic)
        return (<Image style={[styles.image, {aspectRatio:aspect}]} source={{uri: pic}}/>);
    }

    const pickImage = () => {
        ImagePicker.openPicker({
            cropping: true,
            allowsEditing: true,
            // width: 300,
            // height: 300,
            // includeExif: true,
            // mediaType: 'photo'
        }).then((image) => {
            // console.log(image.path);
            let aspectRatio = image.cropRect.width/image.cropRect.height;
            setAspect(aspectRatio);
            // const path = './../images/pic1.jpeg';
            // console.log(path)
            setpic(image.path);
        })
    }

    // const image = './../images/pic1.jpeg';
    
    const imageStyle = () => {
        if (pic === ""){
            return styles.imagePicker;
        }
        return styles.imageBox;
    }

    return (
        <ScrollView>
            <Text style={styles.headerText}>Create your story</Text>

            <TouchableOpacity style={imageStyle()} onPress={pickImage}>
                {imageDisplay()}
                {/* <Image style= {styles.image} source={pic}/> */}
                {/* <Text style={styles.imagePickerText}>{"Tap here to add image"}</Text> */}
            </TouchableOpacity>

            <TextInput style={styles.input} multiline={true} placeholder="Add caption" placeholderTextColor="#fdbb21" />

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Create Story</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

export default AddStoryScreen;