import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class ScrapBook extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ScrapBook</Text>
            </View>
        );
    }
}
export default ScrapBook;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});