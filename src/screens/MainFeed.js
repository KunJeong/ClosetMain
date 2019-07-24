/**
 * @flow
 */

import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import { Provider } from 'react-redux';
import configureStore from '../redux/configureStore'
import MasonryContainer from '../containers/masonryContainer'

const store = configureStore();

class MainFeed extends Component<{}> {
    render() {
        return (
            <Provider store={store}>
                <MasonryContainer />
            </Provider>
        );
    }
}
export default MainFeed;