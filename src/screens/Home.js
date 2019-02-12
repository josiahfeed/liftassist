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
} from 'react-native'
import window from '../constants/Layout'
import { connect } from 'react-redux'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures'

const SCREEN_WIDTH = window.window.width
const SCREEN_HEIGHT = window.window.height

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
            frozen: false,
            input: this.props.input,
            gestureName: 'none',
            backgroundColor: '#006699',
            clockColor: 'white',
            myNumber: 0,
            timer: null,
            minutes: 0,
            seconds: 0,
            count: 150,
            slider: 75,
            page: 0,
            timerRunning: false,
            warmup: new Animated.Value(1),
            warmupBlock: new Animated.Value(0),
            clock: {
                anime: new Animated.Value(0),
                width: new Animated.Value(300),
                height: new Animated.Value(300),
                scale: new Animated.Value(1),
                box: new Animated.Value(75)
            },
            title: {
                size: new Animated.Value(1)
            },
            circles: {
                lg: {
                    size: 700,
                    opacity: '0.10',
                    top: 700/2,
                    left: 700/2,
                },
                sm: {
                    size: 300,
                    opacity: '0.20',
                    top: 300/2,
                    left: 300/2,
                    anime: new Animated.Value(0),
                }
            },
            anime: {
                in: {
                    toValue: 1,
                    duration : 600,
                    delay: 0,
                    useNativeDriver: true
                },
                inDelay: {
                    toValue: 1,
                    duration : 300,
                    delay: 300,
                    useNativeDriver: true
                },
                out: {
                    toValue: 0.5,
                    duration : 600,
                    delay: 0,
                    useNativeDriver: true
                },
                outDelay: {
                    toValue: 0,
                    duration : 300,
                    delay: 300,
                    useNativeDriver: true
                }
            }
        }
        this.secondsRemaining = this.state.slider
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
    componentDidMount(){
        //this.startTimer();
    }
    

    // TIMER
    toggleTimer = () => {
        if(this.state.timerRunning) {
            // STOP
            clearInterval(this.state.timer);
            this.setState({ timerRunning: false, clockColor: "white" });
        }else{ 
            // START
            clearInterval(this.state.timer);
            let timer = setInterval(this.tick, 1000);
            this.setState({timer, timerRunning: true, clockColor: "red"});
        }
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

    freezer = toggle => {
        console.log("❄️ " + toggle)
        this.setState({frozen: toggle});
    }
    // SWIPES
    onSwipeUp(gestureState) {
        console.log("You Swiped Up")
    }

    onSwipeLeft(gestureState) {
        console.log("You Swiped Left")
        if(!this.state.frozen) {
            this.setState({frozen: true});
            if(this.state.page === 0) {
                Animated.timing(this.state.clock.scale, this.state.anime.out).start(this.freezer(false));
                Animated.timing(this.state.clock.box, {
                    toValue: 25,
                    duration : 500,
                    delay: 0,
                    useNativeDriver: true
                }).start();
                Animated.timing(this.state.warmup, this.state.anime.outDelay).start();
                Animated.timing(this.state.warmupBlock, {
                    toValue: -50,
                    duration : 300,
                    delay: 300,
                    useNativeDriver: true
                }).start();
                Animated.timing(this.state.circles.sm.anime, {
                    toValue: -50,
                    duration : 300,
                    delay: 300,
                    useNativeDriver: true
                }).start();
                Animated.timing(this.state.title.size, {
                    toValue: 0.75,
                    duration : 300,
                    delay: 300,
                    useNativeDriver: true
                }).start();
            }
        }
    }
    
    onSwipeRight(gestureState) {
        console.log("You Swiped Right")
        if(!this.state.frozen) {
            this.setState({frozen: true});
            if(this.state.page === 0) {
                Animated.timing(this.state.clock.scale, this.state.anime.in).start(this.freezer(false));
                Animated.timing(this.state.clock.box, {
                    toValue: 75,
                    duration : 500,
                    delay: 0,
                    useNativeDriver: true
                }).start();
                Animated.timing(this.state.warmup, this.state.anime.inDelay).start();
                Animated.timing(this.state.warmupBlock, this.state.anime.inDelay).start();
                Animated.timing(this.state.circles.sm.anime, this.state.anime.inDelay).start();
            }
        }
    }


    onSwipe(gestureName, gestureState) {
        const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
        //this.setState({gestureName: gestureName});
        switch (gestureName) {
            case SWIPE_UP:
                this.setState({backgroundColor: 'black'});
                break;
            case SWIPE_DOWN:
                this.setState({backgroundColor: '#006699'});
                break;
            case SWIPE_LEFT:
                this.setState({backgroundColor: '#0085c7'});
                break;
            case SWIPE_RIGHT:
                this.setState({backgroundColor: '#004669'});
                break;
        }
    }
    render() {
        //Reactotron.warn("⚡️")
        getIt = t => {
            const re = /^[0-9\b]+$/;
            console.log("Text Input: "+t)
            //if (t.value === '' || re.test(t.value)) {
                this.props.updateInput(t)
            //}
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
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: this.state.backgroundColor
                }}
            >
            
                    <Animated.View 
                        style={{
                            position: 'absolute',
                            top: SCREEN_HEIGHT/2 - 150,//this.state.circles.sm.top,
                            right: SCREEN_WIDTH/2 - 150,//this.state.circles.sm.right,
                            transform: [{ translateY: this.state.circles.sm.anime }]
                        }}
                    >
                        <View 
                            style={{
                                backgroundColor: 'white',
                                width: 300,//this.state.circles.sm.size,
                                height: 300,//this.state.circles.sm.size,
                                borderRadius: 150,//this.state.circles.sm.size/2,
                                opacity: '0.20',//this.state.circles.sm.opacity,
                            }}
                        />
                        <TextInput
                            style={{fontStyle: 'italic',
                                fontSize: 120,
                                color: 'rgba(211,211,211, 1)',
                                textAlign: 'center',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontFamily: "AvenirB",
                                top: -215,
                            }}
                            editable = {true}
                            multiline = {false}
                            numberOfLines = {1}
                            keyboardtype = {false}
                            onChangeText={(text) => getIt(text)}
                            keyboardType = 'numeric'
                            maxLength={10}
                            value={this.props.input}
                        />
                    </Animated.View>
                    {/*<View 
                        style={{
                            position: 'absolute',
                            backgroundColor: 'white',
                            width: this.state.circles.lg.size,
                            height: this.state.circles.lg.size,
                            borderRadius: this.state.circles.lg.size/2,
                            opacity: this.state.circles.lg.opacity,
                            top: SCREEN_HEIGHT/2 - this.state.circles.lg.top,
                            right: SCREEN_WIDTH/2 - this.state.circles.lg.right
                        }}
                    />*/}

                    <View style={{position: 'absolute', top: 50, }}>
                        <Animated.Text 
                            style={{
                                alignItems: 'center', 
                                fontSize: 42, 
                                color: 'white', 
                                fontFamily: "Avenir",
                                transform: [{ scaleX: this.state.title.size }, { scaleY: this.state.title.size }],
                            }}
                        >
                            LIFT ASSIST
                        </Animated.Text>
                        <Animated.Text style={{alignItems: 'center', fontSize: 38, color: 'white', fontFamily: "AvenirB", opacity: this.state.warmup}}>WARM-UP SETS:</Animated.Text>
                        <Animated.View style={{flexDirection: 'row',  transform: [{ translateY: this.state.warmupBlock }] }}>
                            <View style={{width: 50,height: 50, borderRadius: 50/2,backgroundColor: 'white'}} />
                            <View style={{width: 50,height: 50, borderRadius: 50/2,backgroundColor: 'white',marginLeft: 7}} />
                            <View style={{width: 50,height: 50, borderRadius: 50/2,backgroundColor: 'white',marginLeft: 7}} />
                            <View style={{width: 50,height: 50, borderRadius: 50/2,backgroundColor: 'white',marginLeft: 7}} />
                            <View style={{width: 50,height: 50, borderRadius: 50/2,backgroundColor: 'white',marginLeft: 7}} />
                        </Animated.View>
                    </View>

                    <Animated.View
                        style={{
                            width: SCREEN_WIDTH,
                            height: 75,
                            bottom: 0,
                            position: 'absolute',
                            backgroundColor: 'white',
                            opacity: '0.10',
                            transform: [{ translateY: this.state.clock.box }]
                        }}
                    />
                    <TouchableOpacity 
                        style={{
                            position: 'absolute',
                            bottom: 0 - 150,
                            right: SCREEN_WIDTH/2 - 150
                        }}
                        onPress={() => this.toggleTimer()}
                    >
                        <Animated.View style={{
                            width: 300,
                            height: 300,
                            borderRadius: 300/2,
                            transform: [{ scaleX: this.state.clock.scale }, {scaleY: this.state.clock.scale }],
                            backgroundColor: 'white',
                            borderWidth: 5,
                            borderColor: this.state.clockColor,
                            opacity: '1',
                            }}>
                            
                            <Image 
                                source={require('../assets/images/clock.png')}
                                style={{width: 46, height: 50, left: (SCREEN_WIDTH/2) -82, top: 10, position: 'absolute'}} 
                            />
                            <Text 
                                style={{color: 'black', fontSize: 48, fontWeight: 'bold', textAlign: 'center', paddingTop: 70}}
                            >
                                {this.state.minutes + ":" + this.getSeconds(this.state.seconds)}
                            </Text>
                        </Animated.View>
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