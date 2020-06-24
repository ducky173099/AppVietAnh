import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';
import Header from '../../component/Header';
import images from '../../asset/images';
import colors from '../../styles/colors';
import { height, vScale, hScale, width} from '../../commons/PerfectPixel';
import { Button, Input } from 'react-native-elements';
import SegmentedControlTab from "react-native-segmented-control-tab";
import {connect} from 'react-redux';
import {getMusicAction} from '../../redux/actions/MusicAction';




const dataTab = ['Bài nhạc', 'Videos', 'Album'];

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

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedIndex: 0,
          searchReults: '', 
          dataSource: []
        };
        this.arrayholder = DataMusic;
    }


    componentDidMount(){

        this.props.getMusic('1');

        const { data } = this.props;

        // console.log('data: ', data);
        this.setState({
            dataSource: data.data
        })
    };



    handleCustomIndexSelect = (index) => {
        this.setState(prevState => ({ ...prevState, selectedIndex: index }))
    };

    SearchFilterFunction(searchReults) {
        //passing the inserted text in textinput
        const newData = this.arrayholder.filter(function(item) {
          //applying filter for the inserted text in search bar
          const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
          const textData = searchReults.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        this.setState({
          //setting the filtered newData on datasource
          //After setting the data it will automatically re-render the view
          dataSource: newData,
          searchReults: searchReults,
        });
    };

    _onPressPlayer = () => {
        console.log('okkk');
        this.props.navigation.navigate("PlayerMusicScreen");
    }

    _renderItemMusic = (item, index) => {
        return (
            <TouchableOpacity onPress={this._onPressPlayer} style={styles.wrapperItemMusic}>
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

    render() {
        const { selectedIndex, searchReults } = this.state

        return (
            <View style={styles.container}>
                <Image source={images.vietranh} style={styles.vietanh}/>
                <View style={styles.wrapperMain}>
                    <Input
                        inputContainerStyle={styles.inputContainerStyle}
                        inputStyle={styles.inputStyle}
                        placeholderTextColor={'#707070'}
                        placeholder="Tìm bài nhạc, album, video"
                        rightIcon={
                            <TouchableOpacity>
                                <Image source={images.iconSearch} style={{width: hScale(24), height: hScale(24)}}/>
                            </TouchableOpacity>
                        }
                        // onChangeText={value => this.setState({ searchReults: value })}
                        onChangeText={searchReults => this.SearchFilterFunction(searchReults)}
                        value={this.state.searchReults}
                        underlineColorAndroid="transparent"
                    />
                    <View style={{width: width, paddingHorizontal: hScale(10)}}>
                        <SegmentedControlTab
                            values={dataTab}
                            selectedIndex={selectedIndex}
                            onTabPress={this.handleCustomIndexSelect}
                            borderRadius={0}
                            tabsContainerStyle={{marginBottom: hScale(10)}}
                            tabStyle={styles.tabStyle}
                            activeTabStyle={styles.activeTabStyle}
                            tabTextStyle={styles.tabTextStyle}
                            activeTabTextStyle={styles.ActiveTabTextStyle}
                        />
                        {selectedIndex === 0 && 
                            <FlatList
                                data={this.state.dataSource}
                                enableEmptySections={true}
                                contentContainerStyle={{paddingBottom: hScale(500), alignItems:'center'}}
                                showsVerticalScrollIndicator={false}
                                horizontal={false}
                                renderItem={({item, index}) => this._renderItemMusic(item, index)}
                                keyExtractor={item => item.id}
                            />
                        }
                        {selectedIndex === 1 && 
                            <View>
                                <Text>111111111</Text>
                            </View>
                        }
                        {selectedIndex === 2 && 
                            <View>
                                <Text>222222222222</Text>
                            </View>
                        }
                    </View>
           
                </View>
            </View>
        );
    }
};


const mapStateToProps = state => {
    return {
        data: state.musicReducer,
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
        getMusic: music => dispatch(getMusicAction(music)),
    };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen);

const styles = StyleSheet.create({
    container:{
        width: width,
        height: height,
    },
    vietanh:{
        width: hScale(375),
        height: hScale(334)
    },
    wrapperMain:{
        width: width,
        height: height,
        backgroundColor: colors.blueBlack,
        position: 'absolute',
        top: hScale(250),
        borderTopLeftRadius: hScale(30),
        borderTopRightRadius: hScale(30)
    },
    inputContainerStyle:{
        width: hScale(350),
        height: hScale(40),
        backgroundColor: colors.blackBlue,
        borderRadius: hScale(20),
        borderBottomWidth: 0,
        marginTop: hScale(10),
    },
    inputStyle:{
        fontSize: hScale(14),
        paddingHorizontal: hScale(15),
        color: colors.white
    },
    tabStyle:{
        backgroundColor: colors.transparent,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: hScale(0.5),
        borderBottomColor: colors.orangeDark,
    },
    activeTabStyle:{
        backgroundColor: colors.transparent,
        borderBottomWidth: hScale(1),
        borderBottomColor: colors.orangeLight
    },
    tabTextStyle:{
        color: colors.orangeDark,
        fontSize: hScale(16)
    },
    ActiveTabTextStyle:{
        color: colors.orangeLight,
        fontSize: hScale(16)
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
