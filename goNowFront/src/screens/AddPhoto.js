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
        image1: null,
        image2: null,
        image3: null,
        image4: null,
        image5: null,
        image6: null
    }

    pickImage1 = () => {
        ImagePicker.showImagePicker({
            title: 'Escolha a imagem',
            maxHeight: 600,
            maxWidth: 800
        }, res => {
            if (!res.didCancel) {
                this.setState({ image1: { uri: res.uri, base64: res.data } });
            }
        });
    }
    pickImage2 = () => {
        ImagePicker.showImagePicker({
            title: 'Escolha a imagem',
            maxHeight: 600,
            maxWidth: 800
        }, res => {
            if (!res.didCancel) {
                this.setState({ image2: { uri: res.uri, base64: res.data } });
            }
        });
    }
    pickImage3 = () => {
        ImagePicker.showImagePicker({
            title: 'Escolha a imagem',
            maxHeight: 600,
            maxWidth: 800
        }, res => {
            if (!res.didCancel) {
                this.setState({ image3: { uri: res.uri, base64: res.data } });
            }
        });
    }
    pickImage4 = () => {
        ImagePicker.showImagePicker({
            title: 'Escolha a imagem',
            maxHeight: 600,
            maxWidth: 800
        }, res => {
            if (!res.didCancel) {
                this.setState({ image4: { uri: res.uri, base64: res.data } });
            }
        });
    }
    pickImage5 = () => {
        ImagePicker.showImagePicker({
            title: 'Escolha a imagem',
            maxHeight: 600,
            maxWidth: 800
        }, res => {
            if (!res.didCancel) {
                this.setState({ image5: { uri: res.uri, base64: res.data } });
            }
        });
    }
    pickImage6 = () => {
        ImagePicker.showImagePicker({
            title: 'Escolha a imagem',
            maxHeight: 600,
            maxWidth: 800
        }, res => {
            if (!res.didCancel) {
                this.setState({ image6: { uri: res.uri, base64: res.data } });
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
                        <TouchableOpacity onPress={this.pickImage1}>
                            <View source={icon} style={styles.imageContainer}>
                                <Image source={this.state.image1}
                                    style={styles.image} />                          
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.pickImage2}>
                            <View style={styles.imageContainer}>
                                <Image source={this.state.image2}
                                    style={styles.image} />                          
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.pickImage3}>
                            <View style={styles.imageContainer}>
                                <Image source={this.state.image3}
                                    style={styles.image} />                          
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.pickImage4}>
                            <View style={styles.imageContainer}>
                                <Image source={this.state.image4}
                                    style={styles.image} />                          
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.pickImage5}>
                            <View style={styles.imageContainer}>
                                <Image source={this.state.image5}
                                    style={styles.image} />                          
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.pickImage6}>
                            <View style={styles.imageContainer}>
                                <Image source={this.state.image6}
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
