import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";

class TAG extends Component<Props> {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <TouchableOpacity
                onPress = {()=> this.props.uponPress("#"+this.props.title)}
                color="#A9A9A9"
                style={{padding:1.5, marginRight:5}}>
                <Text style={{fontSize:14}}>{"#"+this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}
export default TAG;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});