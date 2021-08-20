// @format
// @flow

import * as React from 'react';
import { View, Text, TouchableOpacity, Image, Platform } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { useMutation } from '@apollo/client';
import { UPLOAD_IMAGE_PATH } from './../graphql/mutation';
import { styles } from './styles/ChnageProfilePic';

type Props = {
	navigation: any;
	route: any
}

/**
 * Screen to change the user profile pic
 * @param {Props} props 
 */
const ChangeProfilePic = ({ route, navigation }: Props): React.Node => {

	const { imagePath } = route.params;

	const id = Platform.OS === 'android' ? 1 : 2;

	const [path, setPath] = React.useState(imagePath);

	const [uploadPath, { data, loading, error }] = useMutation(UPLOAD_IMAGE_PATH);

	const imageDisplay = () => {
		if (path === "") {
			return (
				<Image
					style={[styles.img, { aspectRatio: 1 }]}
					source={require('./../images/no_profile_pic.jpeg')}
					testID='none'
				/>
			)
		}
		return (
			<Image style={styles.img} source={{ uri: path }} testID='picture' />
		)
	}

	/**
	 * onPress function to pick image from device library
	 */
	const pickImageGallery = () => {
		ImagePicker.openPicker({
			cropping: true,
			width: 300,
			height: 300,
		}).then((image) => {
			setPath(image.path);
		}).catch((err) => {
			console.log(err)
		})
	}

	/**
	 * onPress function to pick image using the device camera
	 */
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

	/**
	 * onPress fucntion to push the selected image into the database
	 */
	const upload = () => {
		uploadPath({
			variables: { id: id, path: path }
		})
		navigation.navigate({ name: 'HomeScreen' });
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