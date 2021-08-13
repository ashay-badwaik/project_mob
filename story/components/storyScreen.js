import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image } from 'react-native';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import {styles} from './styles/storyScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Progress from 'react-native-progress';

const StoryScreen = ({navigation}) => {
    const [done,setDone] = useState(0.0);

    const [path, setPath] = useState("");
    const [content, setContent] = useState("");


    useEffect(() => {
        getData();

        setTimeout(()=>{
            navigation.navigate({name:'Home', params:{viewed: true}, merge:true});
        }, 5000);

        setInterval(()=>{
            setDone(done => done+0.02);
        }, 100)
    }, []);

    // useEffect(()=>{
    //     console.log('image:  ',path);
    //     console.log('content: ',content);
    // }, [path, content])

    const getData = async () =>{
        try {
            await AsyncStorage.getItem("stories").then(value => {
                if (value != null){
                    value = JSON.parse(value);
                    setPath(value.imagepath);
                    setContent(value.content);
                }
            });
        } catch(err) {
            console.log(err);
        }
    }


    return (  
        
        <View style={styles.container}>

            <Progress.Bar 
                animated={true}
                progress={done} 
                width={300} 
                color='#ffffff'
                style={styles.progressBar}/>
            
            <View style={styles.imgBox}>
                <Image source={{uri: path}} style={styles.img}/>
            </View>

            <Text style={styles.caption}>{content}</Text>

        </View>
    );
}
 
export default StoryScreen;
