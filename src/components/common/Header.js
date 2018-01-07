import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    )
};

const styles = {
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        margin: 5,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 10 }, //IOS
        shadowOpacity: 0.9,
        elevation: 10, //Android
        position: 'relative'
    }
};

export { Header };