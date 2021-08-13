import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles/ChnageProfilePic';
import ImagePicker from 'react-native-image-crop-picker';


const ChangeProfilePic = ({ navigation }) => {

    const [path, setPath] = useState("");

    const imageDisplay = () => {
        if (path === ""){
            return (<Image 
                        style={[styles.img, {aspectRatio:1}]} 
                        source={require('./../images/no_profile_pic.jpeg')}
                    />)
        }
        console.log(path);
        return (<Image style={styles.img} source={{uri: path}}/>)
    }

    const pickImageGallery = () => {
        ImagePicker.openPicker({
            cropping: true,
            width: 300,
            height: 300,
        }).then((image) => {
            setPath(image.path);
        })
    }

    const clickImage = () => {
        ImagePicker.openCamera({
            cropping: true,
            width: 300,
            mediaType: 'photo',
        }).then((image) => {
            setPath(image.path)
        })
    }

    return (  
        <View style={styles.container}>
            <Text style={styles.header}>Set Profile Pic</Text>

            <View style={styles.imgBox}>
                {imageDisplay()}
            </View>

            <TouchableOpacity 
                style={styles.btn} 
                onPress={pickImageGallery}
            >
                <Text style={styles.btnText}>Pick from Gallery</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.btn}
                onPress = {clickImage}
            >
                <Text style={styles.btnText}>Take a photo</Text>
            </TouchableOpacity>
        </View>
    );
}
 
export default ChangeProfilePic;