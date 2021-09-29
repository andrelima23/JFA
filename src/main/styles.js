
import {StyleSheet} from 'react-native';


const estilo = StyleSheet.create({
    

    container: {
        backgroundColor: '#ebebeb',
        width: '100%',
        height: '100%',
    },

    header: {
        backgroundColor: '#102638',
        width: '100%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    body: {
        margin: 5,
        padding: 5,
        height: '65%' ,
        justifyContent: 'center',
        borderRadius: 5,

    },

    bodyTitle: {
        fontSize: 18,
        width: 220,
        color: 'red',
        margin: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        textAlign: 'center',
        
    },

    footer: {
        justifyContent: 'flex-end',
        height: '25%' ,


    },
    footerBox: {
        height: '20%',
        backgroundColor: '#102638',

    },
        


    version:{
        color: 'white',
        justifyContent: 'flex-end',
        textAlign: 'right',
        marginTop: 10,
        marginRight: 10,
        fontSize: 10,
        fontWeight: "100"

    },

    iconMute: {
        color: 'red',
        alignSelf: 'flex-end',
        marginRight: 10,
        
    },

    bg: {
        flex: 1,
        justifyContent: 'center',
        overflow: 'visible',
        resizeMode: 'cover',
    }
})

export default estilo;