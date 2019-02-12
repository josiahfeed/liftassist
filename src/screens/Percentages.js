import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import {
    Text,
    View,
    Slider,
    TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import window from '../constants/Layout'
const SCREEN_WIDTH = window.window.width
const SCREEN_HEIGHT = window.window.height

class Percentages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            percent1: 55,
            percent2: 65,
            percent3: 75,
            percent4: 80,
            percent5: 90,
        }
    }
    render() {
        const roundup5 = (x) => { return (x%5)?x-x%5+5:x }
        const byFive = (path, percent, plus) => {
            let value = roundup5(percent)
            let newValue = value
            if (value == 0 && plus) newValue = value +5
            if (value == 100 && !plus) newValue = value -5
            if (value != 0 && value != 100) newValue = plus ? value +5 : value -5
            this.setState({ [path]: newValue })
        }
        return (
            <View style={{flex: 1, backgroundColor: '#000'}}>
                <View style={{alignItems: 'center', flex: 1, alignItems: 'center'}}>
                    <Text style={{alignItems: 'center', fontSize: 42, color: 'white', fontFamily: "Avenir", marginTop: 40}}>
                        LIFT ASSIST
                    </Text>
                    <Text style={{fontSize: 24, color: 'white'}}>Change Percentages:</Text>

                    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#1c1c1c', margin: 40}}>
                        <View style={{alignItems: 'center',flexDirection: 'row', marginTop: 25}}>
                            <TouchableOpacity
                                style={{}}
                                onPress={() => byFive("percent1", this.state.percent1, false)}
                            >
                                <Text style={{color:'white', fontSize: 40}}>⬇️</Text>
                            </TouchableOpacity>
                            <Text style={{fontSize: 24, color: 'white'}}>{this.state.percent1 + "%"}</Text>
                            <TouchableOpacity
                                style={{}}
                                onPress={() => byFive("percent1", this.state.percent1, true)}
                            >
                                <Text style={{color:'white', fontSize: 40}}>⬆️</Text>
                            </TouchableOpacity>
                        </View>
                        <Slider
                            style={{width: 400}}
                            step={1}
                            minimumValue={1}
                            maximumValue={100}
                            value={this.state.percent1}
                            onValueChange={value => this.setState({ percent1: value })}
                        />
                    </View>
                    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#000', margin: 40}}>
                        <View style={{alignItems: 'center',flexDirection: 'row', marginTop: 25}}>
                            <TouchableOpacity
                                style={{}}
                                onPress={() => byFive("percent2", this.state.percent2, false)}
                            >
                                <Text style={{color:'white', fontSize: 40}}>⬇️</Text>
                            </TouchableOpacity>
                            <Text style={{fontSize: 24, color: 'white'}}>{this.state.percent2 + "%"}</Text>
                            <TouchableOpacity
                                style={{}}
                                onPress={() => byFive("percent2", this.state.percent2, true)}
                            >
                                <Text style={{color:'white', fontSize: 40}}>⬆️</Text>
                            </TouchableOpacity>
                        </View>
                        <Slider
                            style={{width: 400}}
                            step={1}
                            minimumValue={1}
                            maximumValue={100}
                            value={this.state.percent2}
                            onValueChange={value => this.setState({ percent2: value })}
                        />
                    </View>
                    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#1c1c1c', margin: 40}}>
                        <View style={{alignItems: 'center',flexDirection: 'row', marginTop: 25}}>
                            <TouchableOpacity
                                style={{}}
                                onPress={() => byFive("percent3", this.state.percent3, false)}
                            >
                                <Text style={{color:'white', fontSize: 40}}>⬇️</Text>
                            </TouchableOpacity>
                            <Text style={{fontSize: 24, color: 'white'}}>{this.state.percent3 + "%"}</Text>
                            <TouchableOpacity
                                style={{}}
                                onPress={() => byFive("percent3", this.state.percent3, true)}
                            >
                                <Text style={{color:'white', fontSize: 40}}>⬆️</Text>
                            </TouchableOpacity>
                        </View>
                        <Slider
                            style={{width: 400}}
                            step={1}
                            minimumValue={1}
                            maximumValue={100}
                            value={this.state.percent3}
                            onValueChange={value => this.setState({ percent3: value })}
                        />
                    </View>
                    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#000', margin: 40}}>
                        <View style={{alignItems: 'center',flexDirection: 'row', marginTop: 25}}>
                            <TouchableOpacity
                                style={{}}
                                onPress={() => byFive("percent4", this.state.percent4, false)}
                            >
                                <Text style={{color:'white', fontSize: 40}}>⬇️</Text>
                            </TouchableOpacity>
                            <Text style={{fontSize: 24, color: 'white'}}>{this.state.percent4 + "%"}</Text>
                            <TouchableOpacity
                                style={{}}
                                onPress={() => byFive("percent4", this.state.percent4, true)}
                            >
                                <Text style={{color:'white', fontSize: 40}}>⬆️</Text>
                            </TouchableOpacity>
                        </View>
                        <Slider
                            style={{width: 400}}
                            step={1}
                            minimumValue={1}
                            maximumValue={100}
                            value={this.state.percent4}
                            onValueChange={value => this.setState({ percent4: value })}
                        />
                    </View>
                    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#1c1c1c', margin: 40}}>
                        <View style={{alignItems: 'center',flexDirection: 'row', marginTop: 25}}>
                            <TouchableOpacity
                                style={{}}
                                onPress={() => byFive("percent5", this.state.percent5, false)}
                            >
                                <Text style={{color:'white', fontSize: 40}}>⬇️</Text>
                            </TouchableOpacity>
                            <Text style={{fontSize: 24, color: 'white'}}>{this.state.percent5 + "%"}</Text>
                            <TouchableOpacity
                                style={{}}
                                onPress={() => byFive("percent5", this.state.percent5, true)}
                            >
                                <Text style={{color:'white', fontSize: 40}}>⬆️</Text>
                            </TouchableOpacity>
                        </View>
                        <Slider
                            style={{width: SCREEN_WIDTH}}
                            step={1}
                            minimumValue={1}
                            maximumValue={100}
                            value={this.state.percent5}
                            onValueChange={value => this.setState({ percent5: value })}
                        />
                    </View>
                </View>
                <Text style={{textAlign: 'center',color: 'red', fontSize: 40,fontFamily: "Avenir"}}>{this.props.sec} TIMER</Text>
            </View>
        );
    }
}
function mapStateToProps(state){
	return{
        sec: state.time.time.sec
	}
}
function mapDispatchToProps(dispatch){
	return{
        setLoad: (i) => dispatch({ type: 'LOAD', marbles: i }),
        updateInput: (i) => dispatch({ type: 'UPDATE', input: i }),
	}
} 
export default connect(mapStateToProps, mapDispatchToProps)(Percentages);
