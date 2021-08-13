import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Svg, { Polygon } from 'react-native-svg';
import { styles } from './styles/homeScreen';
import { USER_DETAILS } from "../graphql/query";



const HomeScreen = ({ navigation, route }) => {

    const id = Platform.OS === 'android' ? 1 : 2;

    const { loading, error, data } = useQuery(USER_DETAILS, { variables: { id: id } });

    const [stories, setStories] = useState([]);

    const [uploaded, setUploaded] = useState(false);

    const [viewed, setViewed] = useState(false);

    // const [path, setPath] = useState("")

    // useEffect(() => {
    //     console.log(loading, error, data);

    // }, [loading, error, data])

    useEffect(async () => {
        try{
            await AsyncStorage.getItem('stories').then(value => {
                if (value != null){
                    setUploaded(true);
                }
            })
        } catch(err) {
            console.log(err)
        };
    }, [])

    // useEffect(() => {
    //     setPath(data.getUserDetails.image_path)
    // },[data])

    useEffect(() => {
        if (route.params?.available){
            setUploaded(true);
        }
        if (route.params?.viewed){
            setViewed(true);
        }
        // if (route.params?.path){
        //     setPath(route.params?.path)
        // }
    }, [route.params?.available, route.params?.viewed, route.params?.path])

    const getData = async () => {
        try{
            await AsyncStorage.getItem('stories').then(value => {
                if (value != null){
                    setUploaded(true);
                }
            })
        } catch(err) {
            console.log(err)
        }
    }

    const decagon = () => {
        if (uploaded === true && viewed === false) {
            return "#fdbb21";
        } else if (uploaded === true && viewed === true) {
            return "#cccccc";
        }
        return "transparent";
    }

    const nameDisplay = () => {
        // console.log('data:', data);
        if (loading) return "loading";
        if (error) {
            console.log('erroe:', error);
            return "Error";
        }
        return data.getUserDetails.name;
    }

    const bioDisplay = () => {
        if (loading) return "loading";
        if (error) {
            console.log('erroe:', error);
            return "Error";
        }
        return data.getUserDetails.bio;
    }

    const imageDisplay = () => {
        if (loading) {
            return (<Image source={require('./../images/no_profile_pic.jpeg')} style={styles.image} />)
        }
        if (error) {
            console.log(error);
            return (<Image source={require('./../images/no_profile_pic.jpeg')} style={styles.image} />)
        }
        const path = data.getUserDetails.image_path;
        // console.log('path:', path);
        return (<Image source={{ uri: path }} style={styles.image} />)

        // './../images/pic1.jpeg'
    }

    return (
        <SafeAreaView style={styles.container}>
          
            <View style={styles.header}>

            </View>

            <View style={styles.imageBox}>

                <Svg width="200" height="200" viewBox="0 0 200 200" style={styles.shape}>
                    <Polygon
                        fill="none"
                        strokeWidth="4"
                        stroke={decagon()}
                        points="129.665631459995,191.301425564335 70.3343685400051,191.301425564335 22.3343685400051,156.427384220077 4,100 22.334368540005,43.5726157799226 70.334368540005,8.69857443566526 129.665631459995,8.69857443566525 177.665631459995,43.5726157799226 196,100 177.665631459995,156.427384220077"
                    />
                </Svg>

                <TouchableOpacity
                    style={styles.stories}
                    onPress={() => navigation.navigate("Story")}
                    onLongPress={() => navigation.navigate("ChangeProfilePic", { imagePath: data.getUserDetails.image_path })}
                >
                    {/* '../images/pic1.jpeg' */}
                    {/* <Image source={{uri: "./../images/no_profile_pic.jpeg"}} style={styles.image} /> */}
                    {imageDisplay()}
                    {/* <Image source={{uri: info.path}} style={styles.image} /> */}
                </TouchableOpacity>

                <View style={{ position: "absolute" }} >
                    <TouchableOpacity
                        style={styles.addBtn}
                        onPress={() => navigation.navigate("AddStory", {storiesAvailable: uploaded})}
                    >
                        <Text style={styles.btnText}>+</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.info}>
                <Text style={styles.name}>{nameDisplay()}</Text>
                <Text style={styles.bio}>{bioDisplay()}</Text>
            </View>

        </SafeAreaView>
    );
}

export default HomeScreen;

