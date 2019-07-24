import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class MyCloset extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>MyCloset</Text>
            </View>
        );
    }
}
export default MyCloset;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});