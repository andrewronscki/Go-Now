import React, {Component} from 'react';
import {    
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image
} from 'react-native';
import icon from '../../assets/imgs/login.png';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    login = () => {
        this.props.navigation.navigate('Profile');
    }
    render() {
        return(
            <View style={styles.container}>
                <Image source={icon} style={styles.image} />
                <TextInput placeholder='Email' style={styles.input}
                    autoFocus={true} keyboardType='email-address'
                    value={this.state.email}
                    onChangeText={email => this.setState({email})} />
                <TextInput placeholder='Senha' style={styles.input}
                    secureTextEntry={true} value={this.state.password}
                    onChangeText={password => this.setState({password})} />
                <View style={styles.containerButtom}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('Register')
                        }} style={styles.buttom}>
                        <Text style={styles.buttomText}>Criar nova conta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.login} style={styles.buttom}>
                        <Text style={styles.buttomText}>Entrar</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4',
        marginRight: 5
    },
    buttomText: {
        fontSize: 20,
        color: '#FFF'
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
        paddingLeft: 15
    },
    image:{
        height: 120,
        width: 120,
        resizeMode: 'contain',
        backgroundColor: '#ff9c50'
    },
    containerButtom: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});

export default Login;