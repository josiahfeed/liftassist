import React from 'react';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import { Container, Header, Body, Content } from 'native-base';
import { ImageBackground, Image } from 'react-native';

import Home from '../screens/Home';
import Warmup from '../screens/Warmup';

//import Settings from '../screens/Settings';
//import Journey from '../screens/Journey';
//import Pages from '../screens/journey/Pages';
//import Techs from '../screens/Techs';
//import Steps from '../screens/Steps';
//import TechDetails from '../screens/techs/TechDetails';
//import StepDetails from '../screens/steps/StepDetails';

//import { FluidNavigator } from 'react-navigation-fluid-transitions';
//import TabBarIcon from '../components/TabBarIcon';
//import HomeTemp from '../screens/HomeTemp';
//import MainTabNavigator from './MainTabNavigator'
//import TechMenu from './TechMenu'

const customDrawer = (props) => (
	<Container style={{backgroundColor: 'black', color: 'white'}}>

            <Header style={{ height: 125, backgroundColor: 'transparent', borderBottomColor: 'transparent'}}>
                <Body>
                    <Image
                        source={require('../assets/images/android-icon.png')} 
                        style={{ position: 'absolute', left: 25, top: -35, height: 85, width: 85 }}
                    />
                </Body>
            </Header>
            <Content>
                <DrawerItems {...props} />
            </Content>
	</Container>
)

//const Anime = FluidNavigator({
//    Techs,
//    Tech: { screen: TechDetails }
//});

const Drawer = createDrawerNavigator({
    Home: {
        screen: Home,
        defaultNavigationOptions: {
            //gesturesEnabled: false
            //drawerLockMode: 'locked-closed'
        }
    },
    Warmup
},{
    initialRouteName: 'Home',
    drawerPosition: 'right',
    contentComponent: customDrawer,
    drawerWidth: 192,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentOptions: {
        labelStyle: {
            fontSize: 18,
            left: -15
        },
        activeTintColor: 'red',
        activeBackgroundColor: 'transparent',
        inactiveTintColor: 'white',
    },
    headerMode: 'none',
    defaultNavigationOptions: {
        headerVisible: false,
    }
});

export default Drawer;