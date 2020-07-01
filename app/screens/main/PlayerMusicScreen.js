import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
    FlatList,
    PanResponder,
    Animated
} from 'react-native';
import Header from '../../component/Header';
import images from '../../asset/images';
import colors from '../../styles/colors';
import { height, vScale, hScale, width} from '../../commons/PerfectPixel';
// import { Button, Input, Slider } from 'react-native-elements';
import {connect} from 'react-redux';
import Slider from 'react-native-slider';
import Moment from "moment";
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';



const SECTIONS = [
    {
      title: 'First',
      content: 'Lorem ipsum...',
    },
    
];

  const DataMusic = [
    {
        id: 1,
        name: 'Bốn Mùa Tình Ca',
        single: 'Việt Anh & 5 Dòng Kẻ'
    },
    {
        id: 2,
        name: 'Câu Chuyện Của Cha',
        single: 'Việt Anh & Trung Quân Idol'
    },
    {
        id: 3,
        name: 'Câu Chuyện Mùa Xuân',
        single: 'Hợp Xướng Nhà Hát Giao Hưởng...'
    },
    {
        id: 4,
        name: 'Chạm Thật Khẽ Giấc Mơ',
        single: 'Việt Anh & Lân Nhã'
    },
    {
        id: 5,
        name: 'Chỉ Mùa Xuân Mới Hiểu',
        single: 'VIệt Anh & Đình Bảo'
    },
    {
        id: 6,
        name: 'Chiều Biển Vắng Thênh Thang',
        single: 'Việt Anh & Thu Phương'
    },
    {
        id: 7,
        name: 'Chờ Anh Em Nhé',
        single: 'Việt Anh & Thu Phương'
    },
    {
        id: 8,
        name: 'Chưa Bao Giờ',
        single: 'Việt Anh & Thu Phương'
    },
];

export default class PlayerMusicScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            second:0,
            minute:0,
            trackLength: 300,
            timeElapsed: "0:00",
            timeRemaining: "5:00",
            country: 'uk',
            activeSections: [],
            showLyric: false,
            isScrollEnabled: false
        };
    };
    

    _onPressLyric = (showLyric) => {
        this.setState({
            showLyric: !showLyric,
        });
    };

    _renderContentLyric = (showLyric) => {
        if(showLyric === true) {
            return(
                <View style={{width: '100%' }}>
                    <Text style={{color: colors.grayDark, fontSize: hScale(14), textAlign: 'left',width: '70%', lineHeight: hScale(20)}}>
                        Có cơn mưa nào qua đây, 
                        sao trời trong xanh là thế
                        Giá như em còn bên tôi, 
                        giá như tôi đừng lặng lẽ
                        Giấc ngủ vùi chiều hôm, 
                        giữa đền đài bỏ hoang
                        Những dại khờ đầu tiên, 
                        những thề nguyền ngày xưa.

                        Anh nhớ em buồn vui nơi đó
                        Anh nhớ em từng đêm gió về
                        bao ước mơ một đời thiếu nữ
                        theo lá rơi con sông mùa thu
                        Xuân thiết tha mùa xuân đi mãi
                        Em ghé qua dừng chân đứng lại
                        Ðong đếm chi niềm vui nước mắt
                        tre vẫn xanh hai bên đường ta
                        Theo gió qua miền quê hoang vắng
                        cho tiếng dương cầm đêm chết lặng
                        Em có nghe tình yêu anh hát
                        khi nắng xôn xao trên hàng cây.

                        Ðến bao giờ vườn đầy hoa trắng rơi
                        Chôn vùi nơi đó bóng dáng em lặng yên
                        Bao niềm hạnh phúc thật gần
                        giữa cuộc đời nhỏ nhoi
                        Bao giông tố đã trôi qua đời anh
                        Bao hoàng hôn tím ngắt,
                        rơi trên dòng sông
                        Bao bình minh chói chang,
                        trên miền quê hương nắng gió
                        Sóng rất hiền và đại dương rất xanh
                        trên bờ cát trắng những dấu chân trẻ thơ
                        Em ngồi ca hát một mình
                        giữa khoảng trời bỏ quên.

                        Em có nghe tình yêu tôi hát
                        Xa vắng đi niềm kiêu hãnh nào
                        đong nỗi đau đầy bàn tay bé
                        Ai đó nơi xa xôi chờ mong.
                        Trước sân bao lần ra hoa
                        bao lần trăng treo đầu ngõ
                        Có con sông nào rong chơi, 
                        cuốn theo đôi bờ mưa lũ.
                        Em có nghe tình yêu tôi hát
                        Xa vắng đi niềm kiêu hãnh nào
                        đong nỗi đau đầy bàn tay bé
                        Ai đó nơi xa xôi chờ mong...
                    </Text>
                </View>
            ) 
        } else{
            return null
        }

    };

    _renderItemMusic = (item, index) => {
        return (
            <TouchableOpacity style={styles.wrapperItemMusic}>
                <View style={styles.bgIcMusic}>
                    <Image source={images.note2} style={styles.icMusic}/>
                </View>
                <View style={styles.wrapInitItemMS}>
                    <View>
                        <Text style={styles.txtNameMusic}>{item.name}</Text>
                        <Text style={styles.txtNameSingle}>{item.single}</Text>
                    </View>
                    <View style={styles.bgIcMore}>
                        <Image source={images.iconMore} style={styles.icMore}/>
                    </View>
                </View>

            </TouchableOpacity>
        );
    };

    changeTime = (seconds) => {
        this.setState({ timeElapsed: Moment.utc(seconds * 1000).format("m:ss") });
        this.setState({ timeRemaining: Moment.utc((this.state.trackLength - seconds) * 1000).format("m:ss") });
    };



    componentWillMount() {

        this.scrollOffset = 0
    
        this.animation = new Animated.ValueXY({ x: 0, y: 0})
    
        this.panResponder = PanResponder.create({
    
          onMoveShouldSetPanResponder: (evt, gestureState) => {
            if(this.state.isScrollEnabled && gestureState.dy < 0){
                return false;
            } else{
                return true;

            }
            // if ((this.state.isScrollEnabled && this.scrollOffset <= 0 && gestureState.dy > 0) || !this.state.isScrollEnabled && gestureState.dy < 0) {
            //   return true
            // } else {
            //   return false
            // }
          },
          onPanResponderGrant: (evt, gestureState) => {
            this.animation.extractOffset()
          },
          onPanResponderMove: (evt, gestureState) => {
    
            this.animation.setValue({ x: 0, y: gestureState.dy })
          },
          onPanResponderRelease: (evt, gestureState) => {
    
            // if (gestureState.moveY > height - 120) {
            //     console.log('11111');

            //   Animated.spring(this.animation.y, {
            //     toValue: 0,
            //     tension: 1
            //   }).start()
            // }
            // else if (gestureState.moveY < 120) {
            //     console.log('2222222222');
            //   Animated.spring(this.animation.y, {
            //     toValue: 0,
            //     tension: 1
            //   }).start()
            // }
           if (gestureState.dy < 0) {
              this.setState({ isScrollEnabled: true })
    
              Animated.spring(this.animation.y, {
                toValue: -height + 120,
                tension: 1
              }).start()
            }
            else if (gestureState.dy > 0) {
              this.setState({ isScrollEnabled: false })
              Animated.spring(this.animation.y, {
                toValue: height - 120,
                tension: 1
              }).start()
            }
          }
    
        })
    }
    

    render() {
        const {titleHeader, navigation, nameMusic} = this.props;
        const {value, minute, second, showLyric} = this.state;



        const animatedHeight = {
            transform: this.animation.getTranslateTransform()
          }
      
          const  animatedImageHeight = this.animation.y.interpolate({
            inputRange: [0, width - 90],
            outputRange: [200, 32],
            extrapolate: "clamp"
          })
          const  animatedSongTitleOpacity = this.animation.y.interpolate({
            inputRange: [0, height - 500, height - 90],
            outputRange: [0, 0, 1],
            extrapolate: "clamp"
          })
          const  animatedImageMarginLeft = this.animation.y.interpolate({
            inputRange: [0, height - 90],
            outputRange: [width / 2 - 100, 10],
            extrapolate: "clamp"
          })
          const  animatedHeaderHeight = this.animation.y.interpolate({
            inputRange: [0, height - 90],
            outputRange: [height / 2, 90],
            extrapolate: "clamp"
          })
          const  animatedSongDetailsOpacity = this.animation.y.interpolate({
            inputRange: [0, height - 500, height - 90],
            outputRange: [1, 0, 0],
            extrapolate: "clamp"
          })
          const  animatedBackgroundColor = this.animation.y.interpolate({
            inputRange: [0, height - 90],
            outputRange: ['rgba(0,0,0,0.5)', 'white'],
            extrapolate: "clamp"
          })

        return (
        //     <Animated.View style={{ flex: 1, backgroundColor: colors.orangeLight }}>
        //     <Animated.View
        //         {... this.panResponder.panHandlers}
        //         style={[animatedHeight, { position: 'absolute', left: 0, right: 0, zIndex: 10, backgroundColor: 'white', height: height }]}
        //     >
        //         {/* <ScrollView
        //             scrollEnabled={this.state.isScrollEnabled}
        //             scrollEventThrottle={16}
        //             onScroll={event => {
        //                 this.scrollOffset = event.nativeEvent.contentOffset.y
        //             }}
        //         > */}
        //             <Animated.View
        //                 style={{ height: animatedHeaderHeight, borderTopWidth: 1, borderTopColor: '#ebe5e5', flexDirection: 'row', alignItems: 'center' }}
        //             >
        //             <View style={{ flex: 4, flexDirection: 'row', alignItems: 'center' }}>
        //                 <Animated.View style={{ height: animatedImageHeight, width: animatedImageHeight, marginLeft: animatedImageMarginLeft }}>
        //                 <Image style={{ flex: 1, width: hScale(300), height: hScale(300) }}
        //                     source={images.vietranh} />
        //                 </Animated.View>
        //                 <Animated.Text style={{ opacity: animatedSongTitleOpacity, fontSize: 18, paddingLeft: 10 }}>Hotel California(Live)</Animated.Text>
        //             </View>
        //             <Animated.View style={{ opacity: animatedSongTitleOpacity, flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
        //                 {/* <Ionicons name="md-pause" size={32} />
        //                 <Ionicons name="md-play" size={32} /> */}
        //                 <Image source={images.pause}/>
        //                 <Image source={images.skipforward}/>
        //             </Animated.View>
        //             </Animated.View>

        //             <Animated.View style={{ height: animatedHeaderHeight, opacity: animatedSongDetailsOpacity }}>

        //             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
        //                 <Text style={{ fontWeight: 'bold', fontSize: 22 }}>Hotel California (Live)</Text>
        //                 <Text style={{ fontSize: 18, color: '#fa95ed' }}>Eagles - Hell Freezes Over</Text>
        //             </View>

        //             <View style={{ height: 40, width: width, alignItems: 'center' }}>
        //                 <Slider
        //                     style={{ width: 300 }}
        //                     step={1}
        //                     minimumValue={18}
        //                     maximumValue={71}
        //                     value={18}
        //                 />
        //             </View>

        //             <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        //                 <Image source={images.skipback}/>
        //                 <Image source={images.shuffle}/>
        //                 <Image source={images.repeat}/>
        //             </View>
        //             {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingBottom: 20 }}>
        //                 <Ionicons name="md-add" size={32} style={{ color: '#fa95ed' }} />
        //                 <Ionicons name="md-more" size={32} style={{ color: '#fa95ed' }} />
        //             </View> */}
        //             </Animated.View>
        //             <View style={{ height: 1000 }} />
        //         {/* </ScrollView> */}
        //     </Animated.View>
        // </Animated.View>
        
            <View style={styles.container}>
                <Header navigation={navigation} titleHeader={"Tình Yêu Tôi Hát"} nameMusic={"Song Ca Lam Trường, Hồng Nhung"}/>
                <ScrollView>
                <View style={{width: width, alignItems: 'center'}}>
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
                            minimumValue={0}
                            maximumValue={this.state.trackLength}
                            trackStyle={styles.track}
                            thumbStyle={styles.thumb}
                            minimumTrackTintColor={colors.orangeLight}
                            onValueChange={seconds => this.changeTime(seconds)}
                        ></Slider>
                        <View style={styles.bgTimeMusic}>
                            <Text style={styles.timeChange}>{this.state.timeElapsed}</Text>
                            <Text style={styles.timeChange}>5:00</Text>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        width: width,
                        justifyContent:"space-evenly",
                        paddingHorizontal: hScale(20),
                        marginTop: hScale(15)
                    }}>
                        <View style={{
                            backgroundColor: colors. blackBlue, 
                            borderRadius: hScale(100), 
                            alignItems:'center',
                            justifyContent:"center",
                            width: hScale(40),
                            height: hScale(40)
                        }}>
                            <Image source={images.ic_plus} style={{width: hScale(24), height: hScale(24)}}/>
                        </View>
                        <View style={{
                            backgroundColor: colors. blackBlue, 
                            borderRadius: hScale(100), 
                            alignItems:'center',
                            justifyContent:"center",
                            width: hScale(40),
                            height: hScale(40)
                        }}>
                            <Image source={images.ic_heart} style={{width: hScale(24), height: hScale(24)}}/>
                        </View>
                        <View style={{
                            backgroundColor: colors. blackBlue, 
                            borderRadius: hScale(100), 
                            alignItems:'center',
                            justifyContent:"center",
                            width: hScale(40),
                            height: hScale(40)
                        }}>
                            <Image source={images.ic_down} style={{width: hScale(24), height: hScale(24)}}/>
                        </View>
                        <View style={{
                            backgroundColor: colors. blackBlue, 
                            borderRadius: hScale(100), 
                            alignItems:'center',
                            justifyContent:"center",
                            width: hScale(40),
                            height: hScale(40)
                        }}>
                            <Image source={images.ic_copydown} style={{width: hScale(24), height: hScale(24)}}/>
                        </View>
                    </View>
                    <View style={{
                        width: width - hScale(25), 
                        paddingTop: hScale(20),
                        alignItems:"center",
                    }}>
                        <View style={{
                            width: '100%',
                            height: hScale(1),
                            backgroundColor: colors.orangeDark,
                        }}/>
                    
                        <View style={{width: '100%', flexDirection:"row", justifyContent: "space-between", marginTop: hScale(15)}}>
                            <Text style={{fontSize: hScale(16), color: colors.whiteGray}}>Lời bài hát</Text>
                            <TouchableOpacity onPress={() => this._onPressLyric(showLyric)}>
                                <Text style={{fontSize: hScale(16), color: colors.orangeLight}}>Ẩn</Text>
                            </TouchableOpacity>
                        </View>
                        {this._renderContentLyric(showLyric)}
                        <View style={{
                            width: '100%',
                            height: hScale(1),
                            backgroundColor: colors.orangeDark,
                            marginTop: hScale(15),
                            marginBottom: hScale(15)
                        }}/>
                        <View style={{width:'100%'}}>
                            <Text style={{fontSize: hScale(16), color: colors.whiteGray}}>Tiếp theo</Text>
                            <FlatList
                                data={DataMusic}
                                enableEmptySections={true}
                                contentContainerStyle={{paddingBottom: hScale(200), alignItems:'center'}}
                                showsVerticalScrollIndicator={false}
                                horizontal={false}
                                renderItem={({item, index}) => this._renderItemMusic(item, index)}
                                keyExtractor={item => item.id}
                            />
                        </View>

                    </View>

                </View>
            </ScrollView>
            </View>
        
        );
    }
};

const styles = StyleSheet.create({
    container:{
        width: width,
        height: height,
        backgroundColor: colors.blueBlack
    },
    musicControl:{
        width: width,
        paddingHorizontal: 30,
        marginTop: hScale(5)

    },
    bgTimeMusic:{
        flexDirection:'row',
        justifyContent:'space-between',
        top: hScale(-5)
    },
    timeChange:{
        fontSize: 14,
        fontWeight: '700',
        color: colors.gray
    },
    track: {
        height: 3,
        borderRadius: 1,
        backgroundColor: "#FFF"
    },
    thumb: {
        width: 8,
        height: 8,
        backgroundColor: colors.orangeLight
    },
    wrapperItemMusic:{
        width: hScale(343),
        height: hScale(48),
        flexDirection: 'row',
        alignItems:'center',
        marginVertical: hScale(10),
        justifyContent:'space-between'
    },
    wrapInitItemMS:{
        width: hScale(287),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        paddingLeft: hScale(10),
    },
    bgIcMusic:{
        width: hScale(48),
        height: hScale(48),
        backgroundColor: colors.blackBlue,
        borderRadius: hScale(100),
        alignItems:'center',
        justifyContent:'center'
    },
    icMusic:{
        width: hScale(48),
        height: hScale(48)
    },
    bgIcMore: {
        width: hScale(24),
        height: hScale(24),
        alignItems:'center',
        justifyContent:'center',
    },
    icMore:{
        width: hScale(24),
        height: hScale(24)
    },
    txtNameMusic:{
        color: colors.whiteGray,
        fontSize: hScale(14)
    },
    txtNameSingle: {
        color: colors.gray,
        fontSize: hScale(12)
    }

  
});
