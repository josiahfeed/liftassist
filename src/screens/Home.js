import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Image,
    Slider,
    TextInput,
    Text,
    View,
    Animated,
    Platform,
    AsyncStorage,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures'

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

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: this.props.input,
            gestureName: 'none',
            backgroundColor: '#006699',
            myNumber: 0,
            timer: null,
            minutes: 0,
            seconds: 0,
            count: 150,
            slider: 75,
            swipe: "Swipe Up, Left or Right"
        }
        this.secondsRemaining = this.state.slider
    }
    startTimer = () => {
        clearInterval(this.state.timer);
        let timer = setInterval(this.tick, 1000);
        this.setState({timer});
    }
    stopTimer = done => {
        if(done) this.setState({backgroundColor: "green"});
        clearInterval(this.state.timer);
    }
    getSeconds = sec => {
        let newSec = sec
        if (sec < 10) {
            newSec = "0"+newSec
        }
        return newSec
    }
    tick = () => {
        let min = Math.floor(this.state.slider / 60);
        let sec = this.state.slider  - (min * 60);
        if (min === 0 & sec === 0) {
            this.stopTimer(true);
        }
        console.log(min)
        this.setState({
            minutes: min,
            seconds: sec,
            count: this.state.slider--
        });
        //this.state.slider --
        console.log("seconds remaining: "+this.state.slider )
    }
    componentDidMount(){
        //this.startTimer();
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

    onSwipeUp(gestureState) {
        console.log("You Swiped Up")
    }

    onSwipeLeft(gestureState) {
        console.log("You Swiped Left")
    }
    
    onSwipeRight(gestureState) {
        console.log("You Swiped Right")
    }
    onSwipe(gestureName, gestureState) {
        const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
        //this.setState({gestureName: gestureName});
        switch (gestureName) {
            case SWIPE_UP:
                this.setState({backgroundColor: 'black', swipe: "Up"});
                break;
            case SWIPE_DOWN:
                this.setState({backgroundColor: '#006699', swipe: "Down"});
                break;
            case SWIPE_LEFT:
                this.setState({backgroundColor: '#0085c7', swipe: "Left"});
                break;
            case SWIPE_RIGHT:
                this.setState({backgroundColor: '#004669', swipe: "Right"});
                break;
        }
    }
    change = value => {
        this.setState(() => {
            return {
                value: parseFloat(value),
            };
        });
    }
    render() {
        //Reactotron.warn("⚡️")
        getIt = t => {
            const re = /^[0-9\b]+$/;
            console.log("Text Input: "+t)
            if (t.value === '' || re.test(t.value)) {
                this.props.updateInput(t)
            }
            console.log("After Update: "+this.props.input)
        }
        // FIX: error - after changing from setState to set Reducer & Ran Into Issue - stuck
        onChanged = text => { 
            var newText = ''; 
            var numbers = '0123456789'; 
            if(text.length < 1){ 
                //this.setState({ myNumber: '' }); 
                this.props.updateInput('')
            } 
            for (var i=0; i < text.length; i++) { 
                if(numbers.indexOf(text[i]) > -1 ) { 
                    newText = newText + text[i];
                } 
                //this.setState({ myNumber: newText }); 
                this.props.updateInput(newText)
            }
        }

        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
        };
        return (
            <View style={{flex:1}}>
            <GestureRecognizer
                onSwipe={(direction, state) => this.onSwipe(direction, state)}
                onSwipeUp={(state) => this.onSwipeUp(state)}
                onSwipeLeft={(state) => this.onSwipeLeft(state)}
                onSwipeRight={(state) => this.onSwipeRight(state)}
                config={config}
                style={{
                flex: 1,
                backgroundColor: this.state.backgroundColor
                }}
            >
                    <Text style={{color: 'white', fontSize: 30, textAlign: 'center', paddingTop: 50}}>Lift Assist</Text>
                    <TextInput
                        style={{fontStyle: 'italic',
                            fontSize: 80,
                            color: 'rgba(211,211,211, 1)',
                            lineHeight: 110,
                            textAlign: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingVertical: 20,
                            fontWeight: 'bold'
                        }}
                        editable = {true}
                        maxLength = {40}
                        multiline = {false}
                        numberOfLines = {1}
                        keyboardtype = {false}
                        onChangeText={(text) => getIt(text)}
                        keyboardType = 'numeric'
                        maxLength={10}
                        value={this.props.input}
                    />
                    {console.log(this.props.input)}

                    <Text 
                        style={{color: 'white', fontSize: 24, fontWeight: 'bold', textAlign: 'center', paddingTop: 10}}
                    >
                        {this.state.minutes + ":" + this.getSeconds(this.state.seconds)}
                    </Text>
                    <TouchableOpacity 
                        onPress={() => this.stopTimer()}
                    >
                        <Text style={{color: 'white', fontSize: 18, textAlign: 'center', paddingTop: 50}}>Stop</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => this.startTimer()}
                    >
                        <Text style={{color: 'white', fontSize: 18, textAlign: 'center', paddingTop: 50}}>Start</Text>
                    </TouchableOpacity>
                    <Text style={{color: 'white', fontSize: 18, textAlign: 'center', paddingTop: 50}}>{String(this.state.slider)}</Text>
                    <Slider
                        step={1}
                        maximumValue={300} // 300=5 minutes
                        onValueChange={value => this.setState({ slider: value })}
                        value={this.state.slider}
                    />
                    <Text style={{color: 'white', fontSize: 18, textAlign: 'center', paddingTop: 50}}>
                        {this.state.swipe}
                    </Text>
                    <TouchableOpacity 
                        onPress={() => this.cleanData()}
                    >
                        <Text style={{color: 'white', fontSize: 18, textAlign: 'center', paddingTop: 50}}>Clear AsyncStorage {this.props.input}</Text>
                    </TouchableOpacity>
                </GestureRecognizer>
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);



//class App extends React.Component {
//    constructor(props) {
//        super(props);
//        this.state = {
//            seconds: '00', 
//            minutes: ''
//        }
//        this.secondsRemaining; 
//        this.intervalHandle;
//        this.handleChange = this.handleChange.bind(this);
//        // method that triggers the countdown functionality
//        this.startCountDown = this.startCountDown.bind(this);
//        this.tick = this.tick.bind(this);
//    }
//    handleChange(event) {
//        this.setState({
//            minutes: event.target.value
//        })
//    }
//    tick() {
//        var min = Math.floor(this.secondsRemaining / 60);
//        var sec = this.secondsRemaining - (min * 60);
//        this.setState({
//            minutes: min,
//            seconds: sec
//        })
//        if (sec < 10) {
//            this.setState({
//                seconds: "0" + this.state.seconds,
//            })
//        }
//        if (min < 10) {
//            this.setState({
//                value: "0" + min,
//            })
//        }
//        if (min === 0 & sec === 0) {
//            clearInterval(this.intervalHandle);
//        }
//        this.secondsRemaining--
//    }
//    startCountDown() {
//        this.intervalHandle = setInterval(this.tick, 1000);
//        let time = this.state.minutes;
//        this.secondsRemaining = time * 60;
//    }
//}