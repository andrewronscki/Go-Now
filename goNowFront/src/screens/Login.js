import React, {Component} from 'react';
import { connect } from 'react-redux';
import { login } from '../store/actions/user';
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
        name: 'Temporario',
        email: '',
        password: ''
    }

    login = () => {
        this.props.onLogin({ ...this.state });
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
                    <TouchableOpacity onPress={this.login} style={styles.buttomLogin}>
                        <Text style={styles.buttomTextLogin}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('Register')
                        }} style={styles.buttomRegister}>
                        <Text>Não possui uma conta ainda?</Text>
                        <Text style={styles.buttomTextRegister}> Criar conta</Text>
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
    buttomLogin: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4',
        marginRight: 5,
    },
    buttomTextLogin: {
        fontSize: 25,
        color: '#FFF',
        paddingLeft: 15,
        paddingRight: 15,
        
    },
    buttomRegister: {
        marginTop: 15,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    buttomTextRegister: {
        fontSize: 15,
        color: '#000',
        
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
        paddingLeft: 15,
        borderRadius: 20,
    },
    image:{
        height: 200,
        width: 200,
        resizeMode: 'contain',
        backgroundColor: '#fff'
    },
    containerButtom: {
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const mapDispatchToProps = dispatch  => {
    return {
        onLogin: user => dispatch(login(user))
    }
}

export default connect(null, mapDispatchToProps)(Login)