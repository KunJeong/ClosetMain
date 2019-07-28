import React, { Component } from "react";
import {View, Animated,Text, StyleSheet,TouchableOpacity,ImageBackground, PanResponder } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'

class OutfitImage extends Component {
    constructor(props){
        super(props);
        this.state={
            isTagShown : false,
            wantToDelete : false
        } 
        this.position = new Animated.ValueXY()
    }
    componentWillMount(){
        this.PanResponder = PanResponder.create({
            onStartShouldSetPanResponder:(evt, gestureState) => false,
            onMoveShouldSetPanResponder:(evt, gestureState) => {
                if(gestureState.dx > 5 || gestureState.dx < -5){
                    return true;
                }else{
                    return false;
                }
            }, 
            onPanResponderMove:(evt, gestureState) =>{
                if(gestureState.dx > 15){
                    this.position.setValue({x: 15, y: 0})
                }else if(gestureState.dx < -15){
                    this.position.setValue({x: -15, y:0 })
                }else(
                    this.position.setValue({x: gestureState.dx, y: 0})
                )
            },
            onPanResponderRelease:(evt, gestureState)=>{
                if(gestureState.dx> 15){
                    this.setState({wantToDelete : !this.state.wantToDelete})
                    this.position.setValue({x:0, y:0})
                }else if(gestureState.dx < -15){
                    this.props.onSwipeLeft(this.props._id);
                    this.position.setValue({x:0, y:0})
                }else(
                    this.position.setValue({x:0, y:0})
                )
            }
        })
    }

    setIsTagShown(){
        this.setState({isTagShown : !this.state.isTagShown})
    }
    createTags = (tags) =>{
        let renderChild = []
        for (let i=0; i < tags.length; i++){
            renderChild.push(
                <Text style={styles.tagText}>{tags[i]}</Text>)
        }
        return renderChild;
    }
    remove=()=>{
        this.setState({wantToDelete : false})
        this.props.onSwipeRight(this.props._id)
    }
    render() {
        return (
            <Animated.View 
                {...this.PanResponder.panHandlers} 
                    style={{transform: this.position.getTranslateTransform()}}>
                
                <TouchableOpacity onPress={this.setIsTagShown.bind(this)} style={{borderWidth:1,borderColor : '#fff',borderRadius:5}}>
                    <ImageBackground source={{uri : this.props.imgUri}} style={styles.image}>
                        {(this.state.isTagShown==true && this.state.wantToDelete == false)? 
                            (<View style={styles.overlayContainer}>
                                <View style={styles.tagContainer}>
                                    {this.createTags(this.props.tags)}
                                    </View>
                            </View>)
                                : null}
                        {this.state.wantToDelete ? 
                            (<View style={styles.deleteContainer}>
                                <View style={styles.tagContainer}>
                                    <Icon name="md-trash" onPress={this.remove} color={'#fff'} size={25}/>
                                </View>
                            </View>)
                                :null}
                    </ImageBackground>
                </TouchableOpacity>    
            </Animated.View>
        );
    }
}
export default OutfitImage;

const styles = StyleSheet.create({
    image : {
        justifyContent: 'center',
        height : 160,
        width : 90,
        borderRadius:5,
    },
    overlayContainer:{
        height : 160,
        width : 90,
        backgroundColor:'rgba(0,0,0, 0.7)',
        opacity : 0.9,
        alignContent:'center',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:5
    },
    deleteContainer:{
        height : 160,
        width : 90,
        backgroundColor:'rgba(199, 44, 44 , 0.7)',
        opacity : 0.9,
        alignContent:'center',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:5
    },
    tagContainer:{
        flexDirection:'column',
    },
    tagText:{
        color:'#fff',
        fontSize: 8
    }
});