import React, { Component } from 'react';
import { 
    View, 
    Text,
    ImageBackground, 
    Image,
    TouchableOpacity 
} from 'react-native';
import colors from '../styles/colors';
import { height, vScale, hScale, width} from '../commons/PerfectPixel';
import images from '../asset/images';


export default class Header extends Component {


    _onBackPress = () => {
        this.props.navigation.pop();
    }


    render() {
        const {titleHeader, navigation, nameMusic} = this.props;
        return (
            <View style={{
                width: width, 
                height: hScale(70), 
                flexDirection: 'row', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                paddingHorizontal: hScale(15)
            }}>
                <TouchableOpacity onPress={this._onBackPress}>
                    <Image source={images.backDrop} style={{width: hScale(24), height: hScale(24)}}/>
                </TouchableOpacity>
                <View style={{alignItems:'center'}}>
                    <Text style={{fontSize: hScale(14), color: colors.white}}>{titleHeader}</Text>
                    <Text style={{fontSize: hScale(12), color: colors.gray}}>{nameMusic}</Text>
                </View>
                <TouchableOpacity onPress={this._onBackPress}>
                    <Image source={images.icTime} style={{width: hScale(22), height: hScale(22)}}/>
                </TouchableOpacity>
            </View>
        );
    }
}
