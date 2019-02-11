import React from 'react';
import { createSwitchNavigator, createStackNavigator, NavigationActions, createAppContainer } from 'react-navigation';
import Drawer from './Drawer'
import Load from '../screens/Load';
import Home from '../screens/Home';
import Warmup from '../screens/Warmup';
import DresserMenu from '../components/DresserMenu';

const StackNavigatorConfig = {
    defaultNavigationOptions: ({navigation}) => ({
        header: <DresserMenu navigation={navigation} />
    })
}

const noHeaderConfig = {
    headerMode: 'none',
    defaultNavigationOptions: {
        headerVisible: false,
    }
}

// Anime - These Slide In / Out
const AnimeStack = createStackNavigator({
    Home: Home
},{
    headerMode: 'none',
    defaultNavigationOptions: {
        headerVisible: false,
    }
});

const AppStack = createStackNavigator({ Drawer, AnimeStack },StackNavigatorConfig);
//const AppStack = createStackNavigator({ Drawer, AnimeStack }, noHeaderConfig);

const AppContainer = createSwitchNavigator(
    {
        Load,
        App: AppStack,
    },{
        initialRouteName: 'Load',
    }
);

export default createAppContainer(AppContainer);

//
//// ALPHA
//
//import React from 'react';
//import { createSwitchNavigator, createStackNavigator, NavigationActions } from 'react-navigation';
//import WelcomeScroll from '../screens/WelcomeScroll';
//import AuthLoading from '../screens/AuthLoading';
//import Techs from '../screens/Techs';
//import Steps from '../screens/Steps';
//import Science from '../screens/journey/Science';
//import TechDetails from '../screens/techs/TechDetails';
//import StepDetails from '../screens/steps/StepDetails';
//import MyDrawerNavigator from './MainDrawerNavigator'
//import DresserMenu from '../components/DresserMenu';
    ////import MainTabNavigator from './MainTabNavigator'
    ////import TechMenu from './TechMenu'
//
//const StackNavigatorConfig = {
//    navigationOptions: ({navigation}) => ({
//        header: <DresserMenu navigation={navigation} />
//    })
//}
//const Anime = createStackNavigator({
//    Tech: { screen: TechDetails },
//    Techs,
//    Steps2: { screen: Steps },
//    Step: { screen: StepDetails },
//    Science: { screen: Science },
//},{
//    headerMode: 'none',
//    navigationOptions: {
//            headerVisible: false,
//        }
//    }
//);
//const AuthStack = createStackNavigator({ WelcomeScroll });
//const AppStack = createStackNavigator({ MyDrawerNavigator, Anime },StackNavigatorConfig);
//
    ////const resetAction = NavigationActions.reset({
    ////    index: 0,
    ////    actions: [
    ////        NavigationActions.navigate({ routeName: 'AppStack'})
    ////    ]
    ////});
    //
//export default createSwitchNavigator(
//    {
//        AuthLoading,
//        App: AppStack,
//        Auth: AuthStack,
//    },{
//        initialRouteName: 'AuthLoading',
//    }
//);