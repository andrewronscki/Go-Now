import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Dimensions,
    Text,
    TouchableOpacity 
} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import EventMember from '../screens/EventMember';
import MenuNavigator from '../Navigator';

class Post extends Component {
    
    constructor(props) {
        super(props);
        this.state = { showAlert: false };
      };
     
    showAlert = () => {
        this.setState({
            showAlert: true
        });
    };
    
    hideAlert = () => {
        this.setState({
            showAlert: false
        });
    };
    iWillGo = () => {
        this.props.navigation.navigate('EventMember');
    };
    
    render(){
        const {showAlert} = this.state;
        return( 
            <TouchableOpacity style={styles.container}
                onPress={() => {
                    this.showAlert();
                }}>            
                <Image source={this.props.image} style={styles.image} />
                <Text style={styles.description}>{this.props.description}</Text>
                <AwesomeAlert
                show={showAlert}
                showProgress={false}
                title='E aí!'
                message='Você marcará presença no evento?'
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText='Não'
                confirmText='Sim, irei'
                confirmButtonColor='#0b84f5'
                cancelButtonColor='#b52222'
                onCancelPressed={() => {
                    this.hideAlert();
                }}
                onConfirmPressed={() => 
                    this.props.navigation.navigate('EventMember')}
                />
            </TouchableOpacity>       
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3/4,
        resizeMode: 'contain',
        marginTop: 10
    },
    description: {
        marginLeft: 5,
        fontWeight: 'bold',
        color: '#444'
    }
})

export default Post