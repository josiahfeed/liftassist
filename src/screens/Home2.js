import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import {
    Text,
    View
} from 'react-native'

const window = Dimensions.get('window');

class Home2 extends Component {
    render() {
        return (
            <View style={{alignItems: 'center', flex: 1, alignItems: 'center'}}>
                <Text>Lift Assist</Text>
                {/*
                
                    <Text style={{color: 'white', fontSize: 18, textAlign: 'center', paddingTop: 50}}>{String(this.state.slider)}</Text>
                    <Slider
                        step={1}
                        maximumValue={300} // 300=5 minutes
                        onValueChange={value => this.setState({ slider: value })}
                        value={this.state.slider}
                    />

                */}
            </View>
        );
    }
}

export default Home2;