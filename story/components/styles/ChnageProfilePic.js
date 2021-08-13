import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: "100%",
        alignItems: "center"
        // alignContent: "center",
    },

    header:{
        marginHorizontal: 30,
        marginVertical: 15,
        fontSize: 30,
        textAlign: "center",
        color: "#fdbb21",

    },

    imgBox: {
        marginHorizontal: 30,
        marginVertical: 15,
        width: 300,
        height: 300,
        alignItems: "center",
        justifyContent: "center",
        borderColor: '#fdbb21',
        borderWidth: 2,
        borderRadius: 30,
        // aspectRatio: 1,
    },

    img: {
        width: '100%',
        height: '100%',
        borderRadius: 30,
        
    },

    btn: {
        marginHorizontal: 30,
        marginVertical: 15,
        width: 300,
        backgroundColor: "#fdbb21",
        height: 60,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"

    },

    btnText: {
        color: "#fff",
        fontSize: 30,
        lineHeight: 30
    },
})