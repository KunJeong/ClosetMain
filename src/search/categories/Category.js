import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";

class Category extends Component {
    render() {
        return (
            <TouchableOpacity>
                <View style={{height:30,width:30, marginRight:20, 
                borderWidth:null, borderColor:'#fff', borderRadius:10}}>
                    <Image source={this.props.imageUri}
                        style ={{flex:1, width: null, height:null, resizeMode:'cover'}}/>
                </View>
            </TouchableOpacity>
        );
    }
}
export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});