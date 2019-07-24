import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";

class TAG extends Component {
    // constructor(){
    //     super();
    //     this.state = {disabled: false}
    // }
    // toggle(){
    //     this.setState({disabled: })
    // }
    render() {
        return (
            <TouchableOpacity
                onPress ={this.props.action}
                // disabled={this.state.disabled}
                color="#A9A9A9"
                style={{borderColor:"#A9A9A9",borderRadius:3, borderWidth:1, marginRight:5}}>
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