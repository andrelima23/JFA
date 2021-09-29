
import { StyleSheet } from 'react-native'

const styleButton = StyleSheet.create({
    box: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent:  'center',
        width: 50,
        height: 50,
        borderRadius: 5,
        borderColor: 'black',
    },

    letters: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
        justifyContent: 'space-between',
        margin: 10,

    },
    letters2: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        justifyContent: 'space-between',
        margin: 10,

    },
});

export default styleButton;