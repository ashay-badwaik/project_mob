import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, SafeAreaView, Image, ImageBackground } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Svg, { Polygon, SvgCss } from 'react-native-svg';
import { styles } from './styles/homeScreen'


const HomeScreen = ({ navigation }) => {

    const [ stories, setStories ] = useState([]);

    return (
        <SafeAreaView>

            {/* <Text>Home Screen</Text> */}
            {/* <Button title="story" onPress={() => navigation.navigate("Story")} /> */}
            <View style={styles.header}>

            </View>

            <View style={styles.imageBox}>
               
                
                
                <Svg width="200" height="200" viewBox="0 0 200 200" style={styles.shape}>
                    <Polygon
                        fill="none"
                        strokeWidth="4"
                        stroke="#ccc"
                        points="129.665631459995,191.301425564335 70.3343685400051,191.301425564335 22.3343685400051,156.427384220077 4,100 22.334368540005,43.5726157799226 70.334368540005,8.69857443566526 129.665631459995,8.69857443566525 177.665631459995,43.5726157799226 196,100 177.665631459995,156.427384220077"
                        />            
                </Svg>
            
                <TouchableOpacity 
                    style={styles.stories} 
                    onPress={() => navigation.navigate("Story")} 
                    onLongPress={()=> navigation.navigate("ChangeProfilePic")}
                >
                    <Image source={require('./../images/pic1.jpeg')} style={styles.image}/> 
                </TouchableOpacity>

                <View style={{ position: "absolute" }} >
                    <TouchableOpacity
                        style={styles.addBtn}
                        onPress={() => navigation.navigate("AddStory")}
                    >
                        <Text style={styles.btnText}>+</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.info}>
                <Text style={styles.name}>Byung ho</Text>
                <Text style={styles.bio}>{"Photographer\nwww.hoarts.com"}</Text>
            </View>

        </SafeAreaView>
    );
}

export default HomeScreen;

