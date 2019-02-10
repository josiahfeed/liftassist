import React, { Component } from 'react'
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native'
import { AppLoading, Asset, Font, Icon } from 'expo'
import { LA_TOKEN } from '../types'

class Load extends Component {
    constructor(props) {
        super(props);
        //this._bootstrapAsync();
    }

    static navigationOptions = {
        header: null
    };

    state = {
        isLoadingComplete: false
    };

    //async componentDidMount() {
    //try {
    //    const user = await AsyncStorage.getItem(USER_KEY);
    //    console.log('user: ', user);
    //    this.props.navigation.navigate(user ? 'App' : 'Auth');
    //} catch (err) {
    //    console.log('error authorizing: ', err)
    //}
    //};


    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('found');
        this.props.navigation.navigate(userToken ? 'App' : 'App');
    };

    _loadResourcesAsync = async () => {
        return Promise.all([
        //    Asset.loadAsync([
        //        require('../assets/images/robot-dev.png'),
        //        require('../assets/images/robot-prod.png'),
        //        require('../assets/images/robot-prod.png'),
        //        require('../assets/images/bg/bb.jpg')
        //    ]),
        //    Font.loadAsync({
        //        //...Icon.Ionicons.font,
        //        'justaword': require('../assets/fonts/Justaword.ttf'),
        //        'chalker': require('../assets/fonts/Chalker.otf'),
        //        'macbeth': require('../assets/fonts/Macbeth.otf'), // only black
        //        'leafy': require('../assets/fonts/leafy.otf'),
        //        'tenthousand': require('../assets/fonts/TenThousand.ttf'),
        //        'apple': require('../assets/fonts/appleberry.ttf'),
        //        'bebas': require('../assets/fonts/bebas/BebasNeue-Regular.otf'),
        //        'bebasb': require('../assets/fonts/bebas/BebasNeue-Bold.otf'),
        //        'bebasl': require('../assets/fonts/bebas/BebasNeue-Light.otf'),
        //        'slowly': require('../assets/fonts/SlowlyTwo.ttf'),
        //        'coco': require('../assets/fonts/cocogoose.ttf'),
        //    }),
        //    /*JSON.loadAsync({
        //        'jjData': require('../content/journeyContent.json')
        //    }),*/
        ]);
    };

    _handleLoadingError = error => {
        console.warn(error);
    };

    _handleFinishLoading = () => {
        this._bootstrapAsync();
    };
    clearAsyncStorage = async() => {
        AsyncStorage.clear();
    }

    render() {
        //this.clearAsyncStorage()
        if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
            return (
                <AppLoading
                    startAsync={this._loadResourcesAsync}
                    onError={this._handleLoadingError}
                    onFinish={this._handleFinishLoading}
                />
            );
        } else {
            return (
                <View>
                    <ActivityIndicator />
                    <StatusBar barStyle="default" />
                </View>
            );
        }
    }
}

export default Load;