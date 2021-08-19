// @flow

import * as React from 'react';
import { View, Text, Image } from 'react-native';
import {styles} from './styles/storyScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Progress from 'react-native-progress';

type Props = {
    navigation: any
}

const StoryScreen = ({navigation}: Props): React.Node => {
    const [done,setDone] = React.useState(0);

    const [path, setPath] = React.useState("");
    const [content, setContent] = React.useState("");

    React.useEffect(() => {
        getData();

        setTimeout(()=>{
            navigation.navigate({name:'HomeScreen', params:{viewed: true}});
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
        await AsyncStorage.getItem("stories").then(value => {
            if (value != null){
                value = JSON.parse(value);
                setPath(value.imagepath);
                setContent(value.content);
                value.viewed = true;
                // setStory(value);
                // console.log('storyscreen: ',value);
                
                AsyncStorage.setItem("stories", JSON.stringify(value));
            }
        }).catch((err) => {
            console.log(err);
        })
    }
    
    return (  

        <View style={styles.container}>

            <Progress.Bar 
                testID='progress'
                animated={true}
                progress={done} 
                width={300} 
                color='#ffffff'
                style={styles.progressBar}
            />
            
            <View style={styles.imgBox}>
                <Image testID='img' source={{uri: path}} style={styles.img}/>
            </View>

            <Text testID='content' style={styles.caption}>{content}</Text>

        </View>
    );
}
 
export default StoryScreen;
