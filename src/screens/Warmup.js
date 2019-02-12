import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Image,
    TextInput,
    Text,
    View,
    Animated,
    Platform,
    AsyncStorage,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';


//import Carousel, { Pagination } from 'react-native-snap-carousel';
//import window from '../constants/Layout';
//import { HomeParax } from './home/HomeParax'
//import { CustomCard } from './home/CustomCard'
//import { Switch } from '../components/animation';
//import { scrollInterpolators, animatedStyles } from '../components/animation/Carousel';
//import { ModalScreen, HomeSaves, FooterIcons } from '../components';
//import { Buttons } from '../components/reusable';
//import { ParseID, Randomize } from '../utilities'
//import { bindActionCreators } from 'redux';
//import * as HomeActions from '../actions/home'
//import * as PagesActions from '../actions/pages'
//import * as SettingsActions from '../actions/settings'
//import s from './Styles.js'
//import f from '../styles/Fonts.js'
////import c from '../styles/Home.css'
//const SCREEN_WIDTH = window.window.width
//const SCREEN_HEIGHT = window.window.height
//
//import { ENTRIES1 } from './home/Entry';
//const IS_ANDROID = Platform.OS === 'android';
//const SLIDER_1_FIRST_ITEM = 0;
//
//import Reactotron from 'reactotron-react-native'

class Warmup extends Component {
    constructor(props) {
        super(props);
        state = {
            input: this.props.input
        }
    }
    componentDidMount(){
    }
    
    static navigationOptions = {
        header: null,
        //drawerIcon: (
        //    <Image 
        //        //source={require('../assets/images/icon-home.png')}
        //        source={require('../assets/images/icons/bookmark-logo.png')}
        //        style={{ height: 28, width: 28 }} />
        //)
    }
    clearAsyncStorage = async() => {
        AsyncStorage.clear();
    }
    cleanData = () => {
        //Reactotron.warn("Clearing AsyncStorage");
        this.clearAsyncStorage();
    }
    render() {
        //Reactotron.warn("⚡️")
        getIt = t => {
            console.log("Text Input: "+t)
            // FIX: Cannot delete last character
            this.props.updateInput(t)
            console.log("After Update: "+this.props.input)
        }
        return (
            <View style={{flex:1, backgroundColor: '#006699'}}>
                <Text style={{color: 'white', fontSize: 30, textAlign: 'center', paddingTop: 50}}>Warmups:</Text>
                <TextInput
                    style={{fontStyle: 'italic',
                        fontSize: 80,
                        color: 'rgba(211,211,211, 1)',
                        lineHeight: 110,
                        textAlign: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingVertical: 20,
                    }}
                    editable = {true}
                    maxLength = {40}
                    multiline = {false}
                    numberOfLines = {1}
                    keyboardtype = {false}
                    onChangeText={(text) => getIt(text)}
                    value={this.props.input}
                />
                {console.log(this.props.input)}
                <TouchableOpacity 
                        onPress={() => this.cleanData()}
                    >
                        <Text style={{color: 'white', fontSize: 18, textAlign: 'center', paddingTop: 50}}>Clear AsyncStorage {this.props.input}</Text>
                    </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps(state){
	return{
        marbles: state.load.marbles,
        input: state.value.input
        //anime: state.settings.anime
	}
}
function mapDispatchToProps(dispatch){
	return{
        setLoad: (i) => dispatch({ type: 'LOAD', marbles: i }),
        updateInput: (i) => dispatch({ type: 'UPDATE', input: i }),
	}
} 
export default connect(mapStateToProps, mapDispatchToProps)(Warmup);