import React, { Component } from 'react';
import {
    ScrollView,
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
            <ScrollView>
                <View style={styles.container}>
                    <Gravatar options={options} style={styles.avatar} />
                    <Text style={styles.title}>Nome</Text>
                    <Text style={styles.nickname}> Fulano de tal</Text>
                    <Text style={styles.title}>E-mail</Text>
                    <Text style={styles.email}>fulanodetal@gmail.com</Text>
                    <Text style={styles.title}>Descrição</Text>
                    <Text style={styles.description}>Sou muito legal legal legal legal legal legal legal
                    legallegallegallegallegallegallegallegallegallegallegallegallegallegallegallegallegallegal
                    </Text>
                    <AddPhoto style={styles.addPhoto} />
                    <View style={styles.containerButtom}>
                        <TouchableOpacity onPress={this.logout}>
                            <Text style={styles.buttomText}> Sair </Text>    
                        </TouchableOpacity>
                    </View>
                </View>  
          </ScrollView>
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
    buttomText:{
        fontSize: 20,
        color: '#000'
    },
    containerButtom: {
        marginTop: 10,
        display: 'flex',
        justifyContent: 'flex-end',
        marginLeft: '80%',
    },
    title: {
        marginTop: 5,
        fontSize: 20,
        marginLeft: 20,
        marginRight: 20,
        fontWeight: 'bold'
    }
    
});

export default Profile;