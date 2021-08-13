import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        backgroundColor: "#17588a",
        height: "100%",
    },

    progressBar: {
        marginVertical: 20,
        marginHorizontal: 30,
        width: 300,
        alignSelf: "center",
        color: '#ffffff'
    },

    imgBox: {
        marginHorizontal: 30,
        marginVertical: 40,
        // width: 300,
        height: 300,
        alignItems: "center",
        justifyContent: "center",
        // borderColor: '#fdbb21',
        // borderWidth: 2,
        borderRadius: 30,
    },

    img:{
        width: '100%',
        height: '100%',
        borderRadius: 30,
    },
    caption: {
        margin: 30,
        color: '#fff',
        fontSize: 30,
        textAlign: 'center'

    }
})