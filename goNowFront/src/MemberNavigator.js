import React from 'react';
import { 
    createBottomTabNavigator,
    createSwitchNavigator,
    createStackNavigator
    }
    from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feed from './screens/Feed';
import EventMember from './screens/EventMember';

const EventMemberRouter = createStackNavigator({
    EventMember: EventMember,
    Feed: Feed
 });

 export default EventMemberRouter;