import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";

class Category_Closet extends Component {
    render() {
        return (
            <TouchableOpacity
                onPress = {this.props.uponPress}>
                <View style={{height:30,width:30, marginHorizontal:7, marginBottom:4,
                borderWidth:null, borderColor:'#fff'}}>
                    <Image source={this.props.imageUri}
                        style ={{flex:1, width: null, height:null, resizeMode:'cover', borderRadius:8}}/>
                </View>
            </TouchableOpacity>
        );
    }
}
export default Category_Closet;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});