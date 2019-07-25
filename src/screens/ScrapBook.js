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
} from "react-native";
import { Provider } from 'react-redux';
import configureStore from '../redux/configureStore'
import MasonryContainer from '../containers/masonryContainer'

const store = configureStore();

class ScrapBook extends Component {
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