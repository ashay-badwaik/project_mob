// @flow

import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image, Platform } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { useMutation } from '@apollo/client';
import { UPLOAD_IMAGE_PATH } from './../graphql/mutation';
import { styles } from './styles/ChnageProfilePic';


const ChangeProfilePic = ({ route, navigation }) => {

    const {imagePath} = route.params;

    // console.log('p:  ',imagePath);

    const id = Platform.OS === 'android' ? 1 : 2;

    const [path, setPath] = useState(imagePath);

    // useEffect(()=>{
    //     console.log(path);
    // }, [path])

    const [uploadPath, {data, loading, error}] = useMutation(UPLOAD_IMAGE_PATH);

    const imageDisplay = () => {
        // console.log(path)
        if (path === "") {
            return (
                <Image
                    style={[styles.img, { aspectRatio: 1 }]}
                    source={require('./../images/no_profile_pic.jpeg')}
                    testID='none'
                />
            )
        }
        // console.log(path);
        return (
            <Image style={styles.img} source={{uri:path}} testID='picture'/>
        )
    }

    const pickImageGallery = () => {
        ImagePicker.openPicker({
            cropping: true,
            width: 300,
            height: 300,
        }).then((image) => {
            // console.log('p: ',image.path)
            setPath(image.path);
        }).catch((err) => {
            console.log(err)
        })
    }

    const clickImage = () => {
        ImagePicker.openCamera({
            cropping: true,
            width: 300,
            height: 300,
            mediaType: 'photo',
        }).then((image) => {
            setPath(image.path)
        }).catch((err) => {
            console.log(err)
        })
    }

    const upload = () => {
        uploadPath({
            variables: {id: id, path: path}
        })
        navigation.navigate({name:'Home', params:{path: path}});
    }

    return (
        <View style={styles.container}>

            <Text style={styles.header}>Set Profile Pic</Text>

            <View testID='image' style={styles.imgBox}>
                {imageDisplay()}
            </View>

            <TouchableOpacity
                style={styles.btn}
                onPress={pickImageGallery}
                testID='gallery'
            >
                <Text style={styles.btnText}>Pick from Gallery</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.btn}
                onPress={clickImage}
                testID='camera'
            >
                <Text style={styles.btnText}>Take a photo</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.btn}
                onPress={upload}
                testID='upload'
            >
                <Text style={styles.btnText}>Upload</Text>
            </TouchableOpacity>

        </View>
    );
}

export default ChangeProfilePic;