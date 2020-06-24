import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation-tabs';
import images from '../asset/images';
import colors from '../styles/colors';
import {hScale,height,vScale,width} from '../commons/PerfectPixel';
import {
  Image,
  View,
  StyleSheet
} from 'react-native';
import HomeScreen from '../screens/main/HomeScreen';
import UserScreen from '../screens/main/UserScreen';
import CoffeScreen from '../screens/main/CoffeeScreen';



const BottomTab = createMaterialTopTabNavigator(
    {
        CoffeScreen: CoffeScreen,
        HomeScreen: HomeScreen,
        UserScreen: UserScreen,
    },
    {
        tabBarPosition: 'bottom',
        initialRouteName: 'HomeScreen',
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                switch (routeName) {
                    case 'CoffeScreen':
                        return (
                            <Image style={styles.image} 
                                source={focused ? images.activeCoffee : images.isCoffee} />
                        );
                    case 'HomeScreen':
                        return (
                            <Image style={styles.image} 
                                source={focused ? images.activeHome : images.isHome} />
                        );
                    case 'UserScreen':
                        return (
                            <Image
                                style={styles.image}
                                source={focused ? images.activeUser : images.isUser}
                            />
                        );
                }
            },
        }),
        tabBarOptions: {

            showLabel: false,
            showIcon: true,
            // renderIndicator: () => <View style={{height: 1, backgroundColor: 'red', top: 50, }} />,
            indicatorStyle: {
                height: 0,
                bottom: 0,
                backgroundColor: 'red'
            },
      
            style:{
                width: width,
                bottom: 0,
                height: hScale(55),
                borderTopWidth:0.5,
                borderTopColor: '#efb479',
                backgroundColor: colors.blackBlue,
                paddingHorizontal: hScale(100)
            },
            
        },
    },
);


const styles = StyleSheet.create({
    container: {
        width: '100%',
        aspectRatio: 1,
    },
    image: {
        aspectRatio: 1,
        resizeMode: 'contain',
        width: hScale(24),
        height: hScale(24),
        alignSelf: 'center',
    },

});
  

export default BottomTab;