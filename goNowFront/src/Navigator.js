import React from 'react';
import { 
    createBottomTabNavigator,
    createSwitchNavigator,
    createStackNavigator
    }
    from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feed from './screens/Feed';
import Profile from './screens/Profile';
import Login from './screens/Login';
import Register from './screens/Register';
import Chat from './screens/Chat';
import EventMember from './screens/EventMember';
import Post from './components/Post';

const MainRoutes = {
    EventMember: {
        name: 'EventMember',
        screen: EventMember,
    },
    Feed: {
        name: 'Feed',
        screen: Feed,
    }
}

const MainNavigator = createSwitchNavigator(MainRoutes, {
    initialRouteName: 'Feed'
});

const authRouter = createStackNavigator({
    Login: {screen: Login, navigationOptions: {title:'Login'}},
    Register: {screen: Register, navigationOptions: {title: 'Register'}},
 },{
     initialRouteName: 'Login'
 });

 const loginOrProfileRouter = createSwitchNavigator({
    Profile: Profile,
    Auth: authRouter
},{
    initialRouteName: 'Profile'
});

const MenuRoutes = {
    Feed: {
        name: 'Feed',
        screen: eventOrFeedRouter,
        navigationOptions: {
            title: 'Eventos',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='home' size={30} color={tintColor} />
        }
    },
    Profile: {
        name: 'Profile',
        screen: loginOrProfileRouter,
        navigationOptions: {
            title: 'Perfil',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='user' size={30} color={tintColor} />
        }
    },
    Chat: {
        name: 'Chat',
        screen: Chat,
        navigationOptions: {
            title: 'Conversas',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='comments' size={30} color={tintColor} />
        }
    }
}

const MenuConfig = {
    initialRouteName: 'Feed',
    tabBarIcon: {
        showLabel: false,
    }
}


const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig, MainNavigator);

export default MenuNavigator;

