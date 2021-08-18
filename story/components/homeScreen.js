// @flow

import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { View, Text, TouchableOpacity, SafeAreaView, Image, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Svg, { Polygon, G, Path } from 'react-native-svg';
import { styles } from './styles/homeScreen';
import { USER_DETAILS } from "../graphql/query";
import { useFocusEffect } from '@react-navigation/native';
import MaskedView from '@react-native-masked-view/masked-view';



const HomeScreen = ({ navigation, route }) => {

    // const id = Platform.OS === 'android' ? 1 : 2;

    const { loading, error, data } = useQuery(USER_DETAILS, { variables: { id: 1 } });

    const [uploaded, setUploaded] = useState(false);

    const [viewed, setViewed] = useState(false);

    const [path, setPath] = useState("")

    // useFocusEffect(
    //     useCallback(() => {
    //         const { loading, error, data } = useQuery(USER_DETAILS, { variables: { id: id } });
    //     })
    // )

    useEffect(() => {
        // console.log(loading, error, data);
        if (data) {
            setPath(data.getUserDetails.image_path)
        }

    }, [loading, error, data])

    useEffect(async () => {
        await AsyncStorage.getItem('stories').then((value) => {
            if (value != null) {
                setUploaded(true);
                value = JSON.parse(value);
                // console.log('home: ',value);
                setViewed(value.viewed);
            }
        }).catch((err) => {
            console.log('homeScreen', err)
        })

        // console.log('uploaded: ',uploaded);
        // console.log('viewed: ',viewed);

        // if (route.params?.path){
        //     setPath(route.params?.path);
        // }
        // console.log('new image: ',path);

    }, [uploaded, viewed, route.params?.available, route.params?.viewed]);

    // useEffect(() => {
    //     setPath(data.getUserDetails.image_path)
    // },[data])

    // useEffect(() => {
    //     if (route.params?.available){
    //         setUploaded(true);
    //         // setViewed(false);
    //         // console.log(uploaded);
    //         // console.log(viewed);
    //     }
    //     if (route.params?.viewed){
    //         setViewed(true);
    //     }

    //     // if (route.params?.path){
    //     //     setPath(route.params?.path)
    //     // }
    // }, [route.params?.available, route.params?.viewed, route.params?.path])

    // useEffect(() => {
    //     if (route.params?.viewed){
    //         setViewed(true);
    //     }
    // },[route.params?.viewed])

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
        if (loading) {
            return "loading";
        }
        
        if (error) {
            console.log('erroe:', error);
            return "Error";
        }
        
        return data.getUserDetails.name;
    }

    const bioDisplay = () => {
        if (loading) {
            return "loading";
        }

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
        // const path = data.getUserDetails.image_path;
        // console.log('path:', path);
        return (<Image source={{ uri: path }} style={styles.image} />)
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>

            </View>

            <View style={styles.imageBox}>

                <Svg viewBox="-800 -800 1600 1600" height="400" width="400" style={styles.shape}>
                    <Path
                        fill="none"
                        stroke={decagon()}
                        strokeWidth="30"
                        d="m754,0 L610,443.19 L233,717.1 L-233,717.1       -610,443.19 -754,0 -610,-443.19       -233,-717.1 233,-717.1       610,-443.19       z"
                    />
                </Svg>


                <MaskedView
                    maskElement={
                        <Svg width="300" height="300" viewBox="0 0 300 280" >
                            <G
                                transform="translate(0.000000,280.000000) scale(0.100000,-0.100000)"
                                fill="#1A5F04"
                                stroke="none"
                            >
                                <Path d="M1011 2703 c-94 -68 -255 -185 -318 -232 -85 -63 -195 -143 -270
                                -196 l-61 -44 -52 -163 c-29 -90 -60 -185 -71 -212 -10 -27 -19 -55 -19 -62 0
                                -8 -4 -22 -9 -32 -5 -9 -34 -94 -64 -189 l-54 -172 54 -168 c30 -92 58 -177
                                62 -188 5 -11 22 -63 39 -115 111 -353 115 -361 141 -378 14 -9 56 -39 93 -67
                                37 -27 95 -70 129 -95 35 -25 85 -61 111 -80 26 -19 81 -59 120 -88 40 -28
                                107 -77 148 -107 l75 -55 436 0 435 0 55 40 c30 21 69 49 87 62 18 13 54 39
                                80 58 26 20 79 58 117 85 39 27 75 54 81 60 6 5 46 35 88 65 43 30 105 75 138
                                100 68 51 43 -8 207 500 46 140 92 281 102 312 20 58 20 58 1 115 -11 32 -41
                                126 -67 208 -26 83 -51 159 -55 170 -5 11 -35 103 -67 205 l-59 185 -50 38
                                c-27 21 -83 62 -124 92 -41 30 -133 98 -205 150 -131 97 -146 108 -265 190
                                l-65 45 -436 0 -436 0 -52 -37z" strokeWidth="20" />
                            </G>
                            <G
                                transform="translate(0.000000,280.000000) scale(0.100000,-0.100000)"
                                fill="#FFFFFF"
                                stroke="none"
                            />
                        </Svg>
                    }
                >
                    <TouchableOpacity
                        style={styles.stories}
                        onPress={() => navigation.navigate("Story")}
                        onLongPress={() => navigation.navigate({ name: "ChangeProfilePic", params: { imagePath: path } })}
                        testID='image'
                    >
                        {imageDisplay()}
                    </TouchableOpacity>
                </MaskedView>
            
                <View style={{ position: "absolute" }} >
                    <TouchableOpacity
                        style={styles.addBtn}
                        onPress={() => navigation.navigate({ name: "AddStory", params: { storiesAvailable: uploaded } })}
                        testID='addBtn'
                    >
                        <Text style={styles.btnText}>+</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.info}>
                <Text testID="nameDisplay" style={styles.name}>{nameDisplay()}</Text>
                <Text testID="bioDisplay" style={styles.bio}>{bioDisplay()}</Text>
            </View>

        </SafeAreaView>
    );
}

export default HomeScreen;

