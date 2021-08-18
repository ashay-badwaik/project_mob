import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    
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
        // borderWidth:2,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center"
    },

    stories: {

        width: 300,
        height: 300,
        // borderRadius: 85,
        // borderColor: 'red',
        // borderWidth: 2,
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center"
    },

    image: {
        width: 280,
        height: 280,
        // transform: [
        //     {translateX: 15},
        //     {translateY: 15}
        // ],
        alignContent: "center",
        // alignItems: "center",
        // borderColor: 'red',
        // borderWidth: 2,
        // borderRadius: 85
    },

    addBtn: {
        position: "absolute",
        marginTop: 55,
        marginLeft: 90,
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
        height: 300,
        
    },

    name: {
        
        textAlign: "center",
        fontSize: 40,
        // fontFamily: "Century Gothic",
        color: "#898989",
    },

    bio: {
        textAlign: "center",
        fontSize: 30,
        // fontFamily: "Century Gothic",
        color: "#898989",
    },
})
