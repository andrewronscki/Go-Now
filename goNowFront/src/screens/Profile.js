import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import {Gravatar} from 'react-native-gravatar';
import AddPhoto from './AddPhoto';

class Profile extends Component {
    logout = () => {
        this.props.navigation.navigate('Auth');
    }
    render() {
        const options = { email: 'fulanodetal@gmail.com', secure: true};
        return (
          <View style={styles.container}>
            <Gravatar options={options} style={styles.avatar} />
            <Text style={styles.nickname}> Fulano de tal</Text>
            <Text style={styles.email}>fulanodetal@gmail.com</Text>
            <Text style={styles.description}>Sou muito legal legal legal legal legal legal legal
            legallegallegallegallegallegallegallegallegallegallegallegallegallegallegallegallegallegal
            </Text>
            <AddPhoto style={styles.addPhoto} />
            <TouchableOpacity onPress={this.logout}
                style={styles.buttom}>
                <Text style={styles.buttomText}> Sair </Text>    
            </TouchableOpacity>
          </View>  
        );
    }

}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center'
    },
    avatar:{
        width: 100,
        height: 100,
        borderRadius: 75,
        marginTop: 10
    },
    nickname:{
        marginTop: 5,
        fontSize: 20,
        fontWeight: 'bold'
    },
    description:{
        marginTop: 5,
        fontSize: 20,
        marginLeft: 20,
        marginRight: 20
    },
    email:{
        marginTop: 5,
        fontSize: 20
    },
    buttom:{
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttomText:{
        fontSize: 20,
        color: '#FFF'
    },
    addPhoto:{
        width: '100%'

    }
});

export default Profile;