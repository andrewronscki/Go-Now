import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    Platform,
    ScrollView,
    Alert
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import icon from '../../assets/imgs/addIcon.png';

class AddPhoto extends Component {
    state = {
        image: null,
        comment: '',
    }

    pickImage = () => {
        ImagePicker.showImagePicker({
            title: 'Escolha a imagem',
            maxHeight: 600,
            maxWidth: 800
        }, res => {
            if (!res.didCancel) {
                this.setState({ image: { uri: res.uri, base64: res.data } });
            }
        });
    }

    save = async () => {
        Alert.alert('Imagem adicionada!');
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Fotos</Text>
                    <View style={styles.containerButtom}>
                        <TouchableOpacity onPress={this.pickImage}>
                            <View source={icon} style={styles.imageContainer}>
                                <Image source={this.state.image}
                                    style={styles.image} />                          
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.pickImage}>
                            <View style={styles.imageContainer}>
                                <Image source={this.state.image}
                                    style={styles.image} />                          
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.pickImage}>
                            <View style={styles.imageContainer}>
                                <Image source={this.state.image}
                                    style={styles.image} />                          
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.pickImage}>
                            <View style={styles.imageContainer}>
                                <Image source={this.state.image}
                                    style={styles.image} />                          
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.pickImage}>
                            <View style={styles.imageContainer}>
                                <Image source={this.state.image}
                                    style={styles.image} />                          
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.pickImage}>
                            <View style={styles.imageContainer}>
                                <Image source={this.state.image}
                                    style={styles.image} />                          
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>  
            </ScrollView>      
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        fontWeight: 'bold'
    },
    imageContainer: {
        width: Dimensions.get('window').width / 4,
        height: Dimensions.get('window').width / 4,
        backgroundColor: '#EEE',
        marginTop: 10,
        margin: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'center'
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4',
        marginRight: 5,
    },
    buttomText: {
        fontSize: 20,
        color: '#FFF'
    },
    containerButtom: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        display: 'flex',
        justifyContent: 'center',
    }
});

export default AddPhoto;