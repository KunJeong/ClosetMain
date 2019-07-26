/**
 * @flow
 */

import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform,
    ScrollView,
    Dimensions,
    Alert
} from "react-native";
import { Provider } from 'react-redux';
import configureStore from '../redux/configureStore'
import MasonryContainer from '../containers/masonryContainer'
import Realm from 'realm'
import { Tag, One_Image, Post, Closet, Clothes, User, Comment, LookBook } from '../schemas'

var viewportWidth = Dimensions.get('window').width;
const gutter = 25;
const leftMargin = 25;
const rightMargin = 18;
var postWidth = Math.round((viewportWidth - gutter - leftMargin - rightMargin) / 2);
const flipRight = postWidth + gutter + leftMargin;
const flipLeft = - postWidth * 2 - gutter;
const shift = -10;
const border = 10;
const extraHeight = 60;
const verticalMargin = 15;
const horizontalMargin = 15;
var viewportWidth = Dimensions.get('window').width;
var barWidth = viewportWidth - horizontalMargin * 2;

const store = configureStore();

class MainFeed extends Component<{}> {
    getData() {
    //     const creds = Realm.Sync.Credentials.usernamePassword('zxcv', '1234', false);
    // Realm.Sync.User.login('https://fashion.us1.cloud.realm.io', creds).then((user) => {
    
    const user = Realm.Sync.User.current 
        let config = user.createConfiguration();
        config.schema = [One_Image, Post, Tag, Clothes, Closet, Comment, LookBook, User]
        // config.fullSynchronization = true;
        // config.deleteRealmIfMigrationNeeded = true;
        config.validate_ssl=false
        config.sync.url = 'realms://fashion.us1.cloud.realm.io/testRealm'
        
        Realm.open(config).then((realm) => {
            // realm.write(() => {
            //     let jonh = realm.create('Comment', {userId: 'add', commentId: '1010100', comment: 'wtf', like: []})
            // });

            let carOwners = realm.objects('Comment');
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
        this.getData()
    }
    render() {
        return (
            <Provider store={store}>
                <View style={{ height: Platform.OS === 'ios' ? 44 : 0, backgroundColor: '#FFE7FF' }}></View>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View
                        style={[styles.cardShadow, styles.bar, { height: 50, backgroundColor: '#FFFFFF' }]}></View>
                    <MasonryContainer post={true} />
                </ScrollView>
            </Provider>
        );
    }
}


const styles = StyleSheet.create({
    cardShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 6
    },
    // image: {
    //     // marginTop: 5 ,
    //     marginLeft: shift,
    //     width: '100%',
    //     backgroundColor: '#FFF',
    //     borderRadius: border,
    // },
    // post: {
    //     // marginLeft: gutter,
    //     width: barWidth,
    //     marginBottom: verticalMargin ,
    //     borderRadius: border,
    //     // borderWidth: 4
    // },
    bar: {
        marginHorizontal: horizontalMargin,
        width: barWidth,
        marginTop: verticalMargin,
        // marginBotton: verticalMargin -
        borderRadius: border,

        // borderWidth: 4
    }
})

export default MainFeed;

