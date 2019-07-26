import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'

class Category extends Component {
    render() {
        return (
            <TouchableOpacity
            disabled = {this.props.disabled}
                onPress = {()=> this.props.uponPress(this.props.title)}
                style = {{
                    opacity: this.props.disabled? 0.2 : 1
                }}
                >
                    
                
                <View style={{height:42,width:42,
                borderWidth:2,
                borderColor: this.props.active? '#B993C7' : '#FFF',
                borderRadius:10, margin: 4}}>
                    {this.props.active ?
                    <View
                    style = {{position: "absolute", left: -6, top:-6, backgroundColor: '#FF0000', width:14, height:14, borderRadius: 7}}
                    >
                        <Icon name = 'md-close' color='#FFFFFF' size={12} style={{height: '100%', width: '100%', marginLeft: 3.2, marginTop: 0.6}} ></Icon>
                        </View>: null}
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