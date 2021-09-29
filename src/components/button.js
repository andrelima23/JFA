import React from 'react'
import { Image , TouchableOpacity } from 'react-native'

function Boxletter (props) {
   

    return (
        <TouchableOpacity onPress={props.clicar}>
            <Image source={props.letra} style={props.sty} />
        </TouchableOpacity>
    )
}


export default Boxletter