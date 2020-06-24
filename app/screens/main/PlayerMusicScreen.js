import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import Header from '../../component/Header';
import images from '../../asset/images';
import colors from '../../styles/colors';
import { height, vScale, hScale, width} from '../../commons/PerfectPixel';
import { Button, Input, Slider } from 'react-native-elements';
import {connect} from 'react-redux';


export default class PlayerMusicScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            second:0,
            minute:0
        };
    }

    change(second,minute) {
        // this.setState(() => {
        //     return {
        //         second: parseFloat(second),
        //     };
        // });

        // if (second === 60) {
        //     this.setState(({ second }) => ({
        //         second: 0,
        //         minute: parseFloat(minute + 1)
        //     }))
        // }
    };

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { second, minute } = this.state

            if (second < 60) {
                this.setState(({ second }) => ({
                    second: second + 1
                }))
            }
            if (second === 60) {
                if (minute === 4) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minute }) => ({
                        minute: minute + 1,
                        second: 0
                    }))
                }

            } 
        }, 1000)
    };

    componentWillUnmount() {
        clearInterval(this.myInterval)
    };


    render() {
        const {titleHeader, navigation, nameMusic} = this.props;
        const {value, minute, second} = this.state;

        return (
            <View style={styles.container}>
                <Header navigation={navigation} titleHeader={"Tình Yêu Tôi Hát"} nameMusic={"Song Ca Lam Trường, Hồng Nhung"}/>
                <View style={{width: width, height: height, alignItems: 'center'}}>
                    <ImageBackground source={images.radio} style={{width: hScale(332), height: hScale(221), alignItems:'center'}}>
                        {/* <Image source={images.topRadio} style={{width: hScale(294), height: hScale(44), top: hScale(25), left: hScale(6)}}/> */}
                        <ImageBackground source={images.topRadio} style={{width: hScale(294), height: hScale(44), top: hScale(25), left: hScale(6)}}>
                        
                        </ImageBackground>
                        <View style={{flexDirection: 'row'}}>
                            <ImageBackground source={images.bgTimeRadio} style={{width: hScale(165), height: hScale(16), top: hScale(99), left: hScale(-16), alignItems:'center'}}>
                                <Text>05:23</Text>
                            </ImageBackground>
                            <ImageBackground source={images.bgTrackRadio} style={{width: hScale(83), height: hScale(16), top: hScale(99), right: hScale(-31)}}>
                                <Text>track 1 of ky</Text>
                            </ImageBackground>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            top: hScale(115),
                            width: hScale(245),
                            left: hScale(8)
                            // justifyContent:'space-between'
                        }}>
                            <TouchableOpacity>
                                <ImageBackground source={images.wrapButtonRadio} style={{width: hScale(46), height: hScale(43), alignItems:'center', justifyContent:'center'}}>
                                    <Image source={images.pause} style={{width: hScale(11), height: hScale(14)}}/>
                                    <Text style={{fontSize: hScale(6), color: colors.gray, marginTop: hScale(5)}}>PLAY</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                marginLeft: hScale(4)
                            }}>
                                <ImageBackground source={images.wrapButtonRadio} style={{width: hScale(46), height: hScale(43), alignItems:'center', justifyContent:'center'}}>
                                    <Image source={images.skipback} style={{width: hScale(11), height: hScale(14)}}/>
                                    <Text style={{fontSize: hScale(6), color: colors.gray, marginTop: hScale(5)}}>PLAY</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                marginLeft: hScale(3)
                            }}
                            >
                                <ImageBackground source={images.wrapButtonRadio} style={{width: hScale(46), height: hScale(43), alignItems:'center', justifyContent:'center'}}>
                                    <Image source={images.skipforward} style={{width: hScale(11), height: hScale(14)}}/>
                                    <Text style={{fontSize: hScale(6), color: colors.gray, marginTop: hScale(5)}}>PLAY</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                marginLeft: hScale(4)
                            }}>
                                <ImageBackground source={images.wrapButtonRadio} style={{width: hScale(46), height: hScale(43), alignItems:'center', justifyContent:'center'}}>
                                    <Image source={images.repeat} style={{width: hScale(12), height: hScale(14)}}/>
                                    <Text style={{fontSize: hScale(6), color: colors.gray, marginTop: hScale(5)}}>PLAY</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                marginLeft: hScale(3)
                            }}>
                                <ImageBackground source={images.wrapButtonRadio} style={{width: hScale(46), height: hScale(43), alignItems:'center', justifyContent:'center'}}>
                                    <Image source={images.shuffle} style={{width: hScale(13), height: hScale(14)}}/>
                                    <Text style={{fontSize: hScale(6), color: colors.gray, marginTop: hScale(5)}}>PLAY</Text>
                                </ImageBackground>
                            </TouchableOpacity>

                        </View>
                    </ImageBackground>
                    <View style={styles.musicControl}>
                        <Slider
                            thumbTouchSize={{width: 15, height: 15}}
                            style={styles.sliderMusicControl}
                            maximumValue={260}
                            minimumValue={0}
                            step={1}
                            minimumTrackTintColor="#FF2D55"
                            maximumTrackTintColor="#FFBFCB"
                            value={second}
                            onValueChange={this.change.bind(this)}
                        />
                        <View style={styles.bgTimeMusic}>
                        { minute === 0 && second === 0
                            ? <Text style={styles.timeChange}>{minute}:{second < 10 ? `0${second}` : second}</Text>
                            : <Text style={styles.timeChange}>{minute}:{second < 10 ? `0${second}` : second}</Text>
                        }
                            {/* <Text style={styles.timeChange}>{this.state.minute + ':' + value}</Text> */}
                            <Text style={styles.timeChange}>04.21</Text>
                        </View>
                    </View>
                </View>


            </View>
        );
    }
};

const styles = StyleSheet.create({
    container:{
        width: width,
        height: height,
        backgroundColor: colors.blackBlue
    },
    musicControl:{
        width: width,
        paddingHorizontal: 30,
    },
    bgTimeMusic:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    sliderMusicControl:{

    },
    timeChange:{
        fontSize: 11,
        fontWeight: '700',
        color: '#FF2D55'
    },
  
});
