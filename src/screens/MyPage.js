/**
 * @flow
 */

import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Platform,
    ImageBackground
} from "react-native";

import Realm from 'realm';
import { Provider } from 'react-redux';
import configureStore from '../redux/configureStore'
import MasonryContainer from '../containers/masonryContainer'
import { ScrollView } from "react-native-gesture-handler";

const store = configureStore();

class MyPage extends Component<{}> {
    constructor(props) {
      super(props);
    }

    signout() {
        Realm.Sync.User.current.logout();
        this.props.navigation.navigate('Auth');
    }

    render() {
        return (
            <Provider store = {store}>
                <View style = {{height: Platform.OS === 'ios'? 44 : 0, backgroundColor: '#FFE7FF'}}></View>
                {/* <ScrollView> */}
                <View
                style = {
                    {height: 300, width: '100%', justifyContent: 'space-around',alignContent: 'space-around'}}>
                    <View style = {[styles.cardShadow, {height: '100%', width: '100%'}]}></View>
                </View>
                <View style = {{height: '60%', width: '100%'}}>
                <ImageBackground
                source = {Platform.OS === 'ios'? require('../assets/gradient2.jpg') : require('../assets/gradient3.jpg')}
                style = {{height: '100%', width: '100%'}}
                >
                <MasonryContainer post={false}/>
                </ImageBackground>
                {/* <TouchableHighlight style={[styles.buttonContainer, styles.logoutButton]} onPress={this.signout.bind(this)}>
                <Text style={styles.logoutText}>Sign Out</Text>
                </TouchableHighlight> */}
                </View>
                {/* </ScrollView> */}
            </Provider>
        );
    }
}
export default MyPage;

const styles = StyleSheet.create({
    cardShadow: {
        shadowColor: '#000',
        shadowOffset: {width:0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 2 ,
        elevation: 6 
    },
    image: {
        // marginTop: 5 ,
        // marginLeft: shift,
        width: '100%',
        backgroundColor: '#FFF',
        borderRadius: 10,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
    },
    logoutButton: {
      backgroundColor: "#00b5ec",
    },
    logoutText: {
      color: 'white',
    }
});