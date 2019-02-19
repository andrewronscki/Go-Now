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

export const EventMemberRouter = createSwitchNavigator({
    EventMember: EventMember,
    Feed: Feed
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
    initialRouteName: 'Auth'
});

const MenuRoutes = {
    Feed: {
        name: 'Feed',
        screen: Feed,
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

const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig);

export default MenuNavigator;

