import React, { Component } from 'react';
import {StyleSheet,Text,View,Image,TouchableHighlight,Animated} from 'react-native'; //Step 1
import images from '../asset/images';
import colors from '../styles/colors';

class Panel extends Component{
    constructor(props){
        super(props);

        this.icons = {     //Step 2
            'up'    : images.backDrop,
            'down'  : images.iconBack
        };
        this.state = {       //Step 3
            title       : props.title,
            expanded    : true,
            animation   : new Animated.Value(),
           
        };
    }

    _setMaxHeight(event){
        this.setState({
            maxHeight   : event.nativeEvent.layout.height,
        });
    }
    
    _setMinHeight(event){
        this.setState({
            minHeight   : event.nativeEvent.layout.height
        });
    }

    toggle(){
        //Step 1
        let initialValue    = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
            finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;
    
        this.setState({
            expanded : !this.state.expanded  //Step 2
        });
    
        this.state.animation.setValue(initialValue);  //Step 3
        Animated.spring(     //Step 4
            this.state.animation,
            {
                toValue: finalValue
            }
        ).start();  //Step 5
    }

    render(){
        let icon = this.icons['down'];

        if(this.state.expanded){
            icon = this.icons['up'];   //Step 4
        }

        const {title} = this.state;
        console.log('title: ', title);

        //Step 5
        return ( 
            <Animated.View style={[styles.container,{height: this.state.animation}]} >
                <View style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)}>
                    <Text style={styles.title}>{this.state.title}</Text>
                    <TouchableHighlight 
                        style={styles.button} 
                        onPress={this.toggle.bind(this)}
                        underlayColor="red">
                        <Image
                            style={styles.buttonImage}
                            source={icon}
                        ></Image>
                    </TouchableHighlight>
                </View>
                
                <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
                    {this.props.children}
                </View>

            </Animated.View>
        );
    }
}
export default Panel;

const styles = StyleSheet.create({
    container   : {
        backgroundColor: colors.white,
        margin:10,
        overflow: "hidden"
    },
    titleContainer : {
        flexDirection: 'row'
    },
    title       : {
        flex    : 1,
        padding : 10,
        color   :'blue',
        fontWeight:'bold'
    },
    button      : {

    },
    buttonImage : {
        width   : 30,
        height  : 25
    },
    body        : {
        padding     : 10,
        paddingTop  : 0
    }
});