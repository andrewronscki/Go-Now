import React, { Component } from 'react';
import { StyleSheet, 
    View,
    FlatList,
    TouchableOpacity
 } from 'react-native';
import Header from '../components/Header';
import Post from '../components/Post';

class Feed extends Component {
    state = {
        posts: [{
            id: Math.random(),
            description:'Show P12 Ferrugem 3/2',
            image: require('../../assets/imgs/evento2.jpg')
        }, {
            id: Math.random(),
            description:'Show P12 Thiaguinho 1/3',
            image: require('../../assets/imgs/evento3.jpg')
        }]
    };
    render() {
        return(
            <View style={styles.container}>
                <Header />        
                <FlatList   
                    data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => 
                        <Post key={item.id} {...item} />} />                                      
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
});
export default Feed;