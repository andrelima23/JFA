import React from 'react';
import { StyleSheet, StatusBar, Text, View, ImageBackground } from 'react-native';
import estilo from './styles';
import Alfa from './alfa';
import {Inter_400Regular, Inter_500Medium, Inter_700Bold, useFonts} from '@expo-google-fonts/inter'
import AppLoading from 'expo-app-loading';
import { MaterialCommunityIcons } from '@expo/vector-icons';


 function Main () {

    const [fonts] = useFonts({
        Inter_700Bold,
        Inter_400Regular,
        Inter_500Medium
    });
    
    if(!fonts){
        return <AppLoading/>
      };

    return (
        <View style={estilo.container}>
            <ImageBackground source={require('../img/bg.png')} style={estilo.bg}> 
            <View style={estilo.header}>
                <Text style={estilo2.headerTitle}>
                     JOSÉ FELIPE ALFABETO
                </Text>
            </View>
            <View style={estilo.body}>
                <Text style={estilo.bodyTitle}>APERTE EM UMA LETRA</Text>
                <MaterialCommunityIcons name="music-note-off" size={30} style={estilo.iconMute} />
                <Alfa/>

            </View>
            <View style={estilo.footer}>
                <View style={estilo.footerBox}>
                    <Text style={estilo.version}>JFA V1.0.0</Text>
                </View>
            </View>
            </ImageBackground>
            <StatusBar barStyle='light' backgroundColor='#102638'></StatusBar>
            
        </View>
    );
}

const estilo2 = StyleSheet.create({
    headerTitle: {
        fontSize: 22,
        marginTop: 20,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'justify',
        fontFamily: 'Inter_700Bold'
    },
})

export default Main;