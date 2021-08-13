import React, { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import {styles} from './styles/storyScreen';

const StoryScreen = ({navigation}) => {
    const [done,setDone] = useState(0);

    setInterval(() => {
        if (done < 1){
            setDone(done+0.1);
        }
    }, 500)
    return (  
        <View style={styles.container}>
            {/* <ProgressBar styleAttr="Horizontal" indeterminate={false} progress={0.5}/> */}
            
            <View style={styles.imgBox}>
                <Image source={require('./../images/story.jpeg')} style={styles.img}/>
            </View>

            <Text style={styles.caption}>ScrollViews can be configured to allow paging through views using swiping gestures by using the pagingEnabled props.</Text>
        </View>
    );
}
 
export default StoryScreen;
