import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image
} from 'react-native';
import Header from '../components/Header';

class EventMember extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Header />
                <Text style={styles.title}>Olá tudo bom?</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        marginTop: 5,
        fontSize: 20,
        marginLeft: 20,
        marginRight: 20,
        fontWeight: 'bold'
    }
})
export default EventMember;