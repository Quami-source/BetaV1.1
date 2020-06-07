import React from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableHighlight
}from 'react-native';

export default function Testimony(){
    const [text,setText] = React.useState('')
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <TextInput
                multiline={true}
                numberOfLines={5}
                onChange={(text)=>setText(text)}
                placeholder="Type here"
            />
            <TouchableHighlight>
                <Text>Send</Text>
            </TouchableHighlight>
        </View>
    )
}