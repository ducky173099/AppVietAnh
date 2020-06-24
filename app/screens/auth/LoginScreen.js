import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Header from '../../component/Header';
import images from '../../asset/images';
import colors from '../../styles/colors';
import { height, vScale, hScale, width} from '../../commons/PerfectPixel';
import * as yup from 'yup';
import {Formik} from 'formik';
import { Button, Input } from 'react-native-elements';



export default class LoginScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            userNameDefault: '',
            passwordDefault: '',
            isShowPass: false,
        }
    };



    render() {
        const { navigation, titleHeader} = this.props;
        const {userNameDefault, passwordDefault, isShowPass} = this.state;

        return (
            <View style={{backgroundColor:'#1A1B1D', flex: 1}}>
                <ImageBackground source={images.hanoi} style={styles.hanoi}>
                    <Header navigation={navigation} titleHeader={"Đăng nhập tài khoản"}/>
                </ImageBackground>
                <View style={styles.wrapperLogin}>
                <Formik
                        enableReinitialize={true}
                        initialValues={{userName: userNameDefault, password: passwordDefault}}
                        onSubmit={values => this._onSignIn(values)}
                        validationSchema={yup.object().shape({
                            userName: yup.string().required("Tên đăng nhập không được bỏ trống"),
                            password: yup.string().required("Mật khẩu không được bỏ trống"),
                        })}
                    >
                        {({values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit}) => (
                            <>
                                <Input
                                    inputContainerStyle={styles.inputContainerStyle}
                                    inputStyle={styles.inputStyle}
                                    placeholderTextColor={colors.white}
                                    placeholder="Mobile Number"
                                    onChangeText={handleChange('userName')}
                                    onFocus={() => {
                                        this.setState({
                                            textColor: colors.white,
                                        });
                                    }}
                                    onBlur={() => {
                                        setFieldTouched('userName');
                                        this.setState({
                                            textColor: colors.white,
                                        });
                                    }}
                                    value={values.userName}
                                />
                                {touched.userName && errors.userName && <Text style={styles.textError}>{errors.userName}</Text>}
                                <Input
                                    inputContainerStyle={styles.inputContainerStyle}
                                    inputStyle={styles.inputStyle}
                                    placeholderTextColor={colors.white}
                                    placeholder="Password"
                                    secureTextEntry={!isShowPass}
                                    onChangeText={handleChange('password')}
                                    onFocus={() => {
                                        this.setState({
                                            textColor: colors.white,
                                        });
                                    }}
                                    onBlur={() => {
                                        setFieldTouched('password');
                                        this.setState({
                                            textColor: colors.white,
                                        });
                                    }}
                                    value={values.password}
                                />
                                {touched.password && errors.password && <Text style={styles.textError}>{errors.password}</Text>}
                                <View style={{marginTop: hScale(25)}}>
                                    <Button
                                        title="SIGN IN"
                                        buttonStyle={styles.btnContinue}
                                        titleStyle={styles.txtContinue}
                                        onPress={handleSubmit }
                                    />
                                </View>
                            </>
                        )}
                    </Formik>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    hanoi:{
        width: hScale(375),
        height: hScale(340)
    },
    wrapperLogin:{
        width: width,
        height: hScale(150),
        position: 'absolute',
        top: hScale(290)
    },
    inputContainerStyle: {
        height: hScale(50),
        backgroundColor: colors.black,
        borderRadius: hScale(100),
        borderWidth: 0,
        // borderBottomColor: colors.black
        borderBottomWidth: 0
    },
    inputStyle: {
        color: colors.white,
        fontSize: hScale(13),
        paddingHorizontal: hScale(20),
        borderWidth: 0
    },
    textError: {
        color: 'red',
        textAlign: 'left',
        marginLeft: hScale(30),
        marginTop: hScale(-20),
        fontSize: hScale(13),
        marginBottom: hScale(5)
    },

})
