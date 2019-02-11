import React, { Component } from 'react';
import { Right } from 'native-base';
import { TouchableOpacity, View, Image, Animated } from 'react-native';
//import Colors from '../constants/Colors';
import { withNavigation, DrawerActions } from 'react-navigation';

class DresserMenu extends Component {
    constructor(props) {
        super(props);
    }
	render() {
        const pressMenuBasic = () => {
            this.props.navigation.dispatch(DrawerActions.toggleDrawer());
        }
        return (
            <View style={ {position: 'absolute', top: 41, right: 14, zIndex: 600} }>
                
                    <TouchableOpacity 
                        onPress={() => pressMenuBasic()}
                    >
                        <Image
                            //color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
                            source={require('../assets/images/menu.png')} 
                            style={{ marginBottom: -3, width: 48, height: 36}}
                        />
                    </TouchableOpacity>
            </View>
        );
	}
}

export default DresserMenu