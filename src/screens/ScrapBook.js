/**
 * @flow
 */

import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Platform,
    ImageBackground,
    Alert
} from "react-native";
import { Provider } from 'react-redux';
import configureStore from '../redux/configureStore'
import MasonryContainer from '../containers/masonryContainer'
import Realm from 'realm'
import { Tag, One_Image, Post, Closet, Clothes, User, Comment, LookBook } from '../schemas'

const store = configureStore();

class ScrapBook extends Component {
    getData() {
        //     const creds = Realm.Sync.Credentials.usernamePassword('zxcv', '1234', false);
        // Realm.Sync.User.login('https://fashion.us1.cloud.realm.io', creds).then((user) => {
        
        const user = Realm.Sync.User.current 
            let config = user.createConfiguration();
            config.schema = [One_Image, Post, Tag, Clothes, Closet, Comment, LookBook, User]
            config.validate_ssl=false
            config.sync.url = 'realms://fashion.us1.cloud.realm.io/testRealm'
            
            Realm.open(config).then((realm) => {
                // realm.write(() => {
                //     let jonh = realm.create('Comment', {userId: 'add', commentId: '1010100', comment: 'wtf', like: []})
                // });
    
                let carOwners = realm.objects('Post');
                let subscribe = carOwners.subscribe();
                // Alert.alert('llll')
                var total = ''
                for (let p of carOwners) {
                    total += p.comment.toString();
                }
                Alert.alert(total);
            });
        // });
        }
    
        constructor() {
            super();
            // this.getData()
        }
    render() {
        return (
            <Provider store={store}>
                <ImageBackground
                source = {Platform.OS === 'ios'? require('../assets/gradient2.jpg') : require('../assets/gradient3.jpg')}
                style = {{width: '100%', height: '100%'}}
                >
                    <View style = {{height: Platform.OS === 'ios'? 44 : 0}}></View>
                    <MasonryContainer post={false}/>
                </ImageBackground>
            </Provider>
        );
    }
}
export default ScrapBook;