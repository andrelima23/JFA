import React from 'react'
import { View } from 'react-native';
import Boxletter from '../../components/button';
import styleAlfa from './styleAlfa';
import letras from '../../components/letters';
import { Audio } from 'expo-av';
import som from '../../components/sounds/listLetters';
import styleButton from '../../components/styleButton';

function Alfa () {

    const [sound, setSound] = React.useState();
    const [soundBg, setSoundBg] = React.useState();

    async function bgMusic(somDaLetra) {
        console.log('Music background tocando');
        const { soundBg } = await Audio.Sound.createAsync(somDaLetra = somDaLetra);

        setSoundBg(soundBg);

        console.log('Tocando Som de Fundo');
        await soundBg.playAsync();
    }

  
    async function tocar(somDaLetra) {
        console.log('Carregando Som');
        const { sound } = await Audio.Sound.createAsync(somDaLetra = somDaLetra);
        setSound(sound);

        console.log('Tocando Som');
        await sound.playAsync(); 
    }


  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Som ainda não carregado');
          sound.unloadAsync();
           }
      : undefined;
  }, [sound]);
// abaixo disso pode ser apagado


    return (
       
        <View style={styleAlfa.div}>
            <Boxletter clicar={() => tocar(som.a)}  letra={letras.a} sty={styleButton.letters}/> 
            <Boxletter clicar={() => tocar(som.b)}  letra={letras.b} sty={styleButton.letters}/>
            <Boxletter clicar={() => tocar(som.c)}  letra={letras.c} sty={styleButton.letters}/>
            <Boxletter clicar={() => tocar(som.d)}  letra={letras.d} sty={styleButton.letters}/>
            <Boxletter clicar={() => tocar(som.e)}  letra={letras.e} sty={styleButton.letters}/>
            <Boxletter clicar={() => tocar(som.f)}  letra={letras.f} sty={styleButton.letters}/>
            <Boxletter clicar={() => tocar(som.g)}  letra={letras.g} sty={styleButton.letters}/>
            <Boxletter clicar={() => tocar(som.h)}  letra={letras.h} sty={styleButton.letters}/>
            <Boxletter clicar={() => tocar(som.i)}  letra={letras.i} sty={styleButton.letters}/>
            <Boxletter clicar={() => tocar(som.j)}  letra={letras.j} sty={styleButton.letters}/>
            <Boxletter clicar={() => tocar(som.k)}  letra={letras.k} sty={styleButton.letters}/>
            <Boxletter clicar={() => tocar(som.l)}  letra={letras.l} sty={styleButton.letters}/>
            <Boxletter clicar={() => tocar(som.m)}  letra={letras.m} sty={styleButton.letters}/>
            <Boxletter clicar={() => tocar(som.n)}  letra={letras.n} sty={styleButton.letters}/>
            <Boxletter clicar={() => tocar(som.o)}  letra={letras.o} sty={styleButton.letters}/>
            <Boxletter clicar={() => tocar(som.p)}  letra={letras.p} sty={styleButton.letters}/>
            <Boxletter clicar={() => tocar(som.q)}  letra={letras.q} sty={styleButton.letters}/>
            <Boxletter clicar={() => tocar(som.r)}  letra={letras.r} sty={styleButton.letters}/>
            <Boxletter clicar={() => tocar(som.s)}  letra={letras.s} sty={styleButton.letters}/>
            <Boxletter clicar={() => tocar(som.t)}  letra={letras.t} sty={styleButton.letters}/>
            <Boxletter clicar={() => tocar(som.u)}  letra={letras.u} sty={styleButton.letters2}/>
            <Boxletter clicar={() => tocar(som.v)}  letra={letras.v} sty={styleButton.letters2}/>
            <Boxletter clicar={() => tocar(som.w)}  letra={letras.w} sty={styleButton.letters2}/>
            <Boxletter clicar={() => tocar(som.x)}  letra={letras.x} sty={styleButton.letters2}/>
            <Boxletter clicar={() => tocar(som.y)}  letra={letras.y} sty={styleButton.letters2}/>
            <Boxletter clicar={() => tocar(som.z)}  letra={letras.z} sty={styleButton.letters2}/>
        </View>
    )
};

export default Alfa;