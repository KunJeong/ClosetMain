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
            <TouchableOpacity
                onPress = {()=> this.props.uponPress("#"+this.props.title)}>
                <View style={{height:42,width:42 , margin:5, 
                borderWidth:2, borderColor:'#FFF' , borderRadius:10}}>
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