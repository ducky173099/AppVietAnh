import React, { Component } from 'react';
import { 
    View, 
    Text,
    ImageBackground, 
    Image 
} from 'react-native';
import colors from '../styles/colors';
import { height, vScale, hScale, width} from '../commons/PerfectPixel';
import images from '../asset/images';


export default class Splash extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: colors.blueBlack, alignItems:'center', justifyContent:'center'}}>
                <ImageBackground source={images.wrapperSplash} style={{width: width, height: height, alignItems:'center', justifyContent:'center'}}>
                    <Image source={images.signature} style={{width: hScale(215), height: hScale(124)}}/>
                </ImageBackground>
            </View>
        );
    }
}
