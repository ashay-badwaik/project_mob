import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    // decagon: {
    //     // fill: "green",
    //     stroke:'#000000',
    //     strokeWidth:2.5
    // },
    container: {
        backgroundColor: '#ffffff',
        height: "100%"
    },

    header: {
        height: 100
    },

    imageBox: {
        // position: "absolute",
        alignItems: 'center',
        justifyContent: "center",
        // borderWidth: 2,
        // borderColor: "green",
        height: 350,
    },

    shape: {
        // borderColor:'red', 
        // // borderWidth:2,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center"
    },

    stories: {

        width: 170,
        height: 170,
        borderRadius: 85,
        // borderColor: 'red',
        // borderWidth: 2,
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center"
    },

    image: {
        width: 170,
        height: 170,
        // transform: [
        //     {translateX: 15},
        //     {translateY: 15}
        // ],
        alignContent: "center",
        alignItems: "center",
        borderRadius: 85
    },

    addBtn: {
        position: "absolute",
        marginTop: 30,
        marginLeft: 55,
        height: 40,
        width: 40,
        backgroundColor: '#fdbb21',
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 20,
        fontSize: 30,
    },

    btnText: {

        margin: 0,
        padding: 0,
        color: '#ffffff',
        fontSize: 50,
        lineHeight: 50,
        textAlign: "center"
    },

    info: {
        alignItems: "center",
        justifyContent: "center",
        // borderWidth: 2,
        // borderColor: "red",
        height: 150,
        
    },

    name: {
        
        textAlign: "center",
        fontSize: 28,
        // fontFamily: "Century Gothic",
        color: "#898989",
    },

    bio: {
        textAlign: "center",
        fontSize: 20,
        // fontFamily: "Century Gothic",
        color: "#898989",
    },
})
