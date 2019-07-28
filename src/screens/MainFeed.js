/**
 * @flow
 */

import React, { Component } from "react";
import {
    View,Text,StyleSheet, Platform,ScrollView, Dimensions,Alert, TextInput, Animated, PanResponder, ImageBackground, TouchableOpacity, Image
} from "react-native";
import { Provider } from 'react-redux';
import configureStore from '../redux/configureStore'
import MasonryContainer from '../containers/masonryContainer';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import Realm from 'realm'
import { Tag, One_Image, Post, Closet, Clothes, User, Comment, LookBook } from '../schemas';


const gutter = 25;
const leftMargin = 25;
const rightMargin = 18;
var postWidth = Math.round((viewportWidth - gutter - leftMargin - rightMargin) / 2);
const flipRight = postWidth + gutter + leftMargin;
const flipLeft = - postWidth * 2 - gutter;
const shift = -10;
const border = 10;
const extraHeight = 60;
const verticalMargin = 15;
const horizontalMargin = 15;
var viewportWidth = Dimensions.get('window').width;
var viewportHeight = Dimensions.get('window').height;
var barWidth = viewportWidth - horizontalMargin * 2;

const store = configureStore();

class MainFeed extends Component<{}> {

    constructor() {
        super();
        this.state={
            TextInputHashTags : "",
            adding_post : false,
            _image : null
        }
        this.position = new Animated.ValueXY()
    }

    openGallery=()=>{
        this.setState({ modalVisible: !this.state.modalVisible })
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            includeBase64 : true
        }).then(image => {
            
            this.setState({ _image: { uri: image.path, width: image.width, height: image.height, mime: image.mime }})
        });
    }
    openCamera=()=>{
        this.setState({ modalVisible: !this.state.modalVisible })
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
            includeBase64 : true
        }).then(image => {
            this.setState({ _image: { uri: image.path, width: image.width, height: image.height, mime: image.mime }})
        });
    }
    changeStateAddingPost=()=>{
        this.setState({adding_post : !this.state.adding_post})
    }

    componentWillMount(){
        this.PanResponder = PanResponder.create({
            onStartShouldSetPanResponder:(evt, gestureState) => true,
            onMoveShouldSetPanResponder:(evt, gestureState) => true,
            onPanResponderMove:(evt, gestureState) =>{
                if(gestureState.dx > 30){
                    this.position.setValue({x: 30, y: 0})
                }else if(gestureState.dx < -31.5){
                    this.position.setValue({x: -31.5, y:0 })
                }else(
                    this.position.setValue({x: gestureState.dx, y: 0})
                )
            },
            onPanResponderRelease:(evt, gestureState)=>{
                if(gestureState.dx> 35){
                    this.openGallery()
                    this.position.setValue({x:0, y:0})
                }else if(gestureState.dx < -35){
                    this.openCamera()
                    this.position.setValue({x:0, y:0})
                }else(
                    this.position.setValue({x:0, y:0})
                )
            }
        })
    }
    renderAddPost=()=>{
        return(
            <ImageBackground
                source = {Platform.OS === 'ios'? require('../assets/gradient2.jpg') : require('../assets/gradient3.jpg')}
                style = {[
                    styles.cardShadow,
                    styles.post,
                    {height: 220, elevation: 6, marginHorizontal: 15, marginTop: 10, 
                        width: barWidth, padding: 10, backgroundColor:'#fff', borderRadius: 10, flexDirection:'column'}
                ]}
                imageStyle={{ borderRadius: 10 }}>
                
                <View style={{flex: 5, flexDirection:'row'}}>
                    <TouchableOpacity style={{flex:2, justifyContent:'center', alignItems:'center'}}>
                        <View style={{elevation:6, shadowColor: '#000',shadowOffset: {width:0, height: 2}, 
                                    shadowOpacity: 0.3, shadowRadius: 2, backgroundColor:'white', borderRadius: 10}}>
                            <Image style={{width:viewportWidth/4, height:viewportHeight/4, borderRadius:10}}
                            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbJUFHRGZXz-p4CDFYwSCI9rmTC6CxmauwyZsuji_P0Ny-lKl3_w'}}/>
                        </View>
                    </TouchableOpacity>
                    <View style={{flex:3, padding:5, flexDirection:'column'}}>
                        <View style={{flex:2, flexDirection:'column'}}>
                            
                            <TextInput
                                underlineColorAndroid='transparent'
                                placeholder={"..#Hashtags"}
                                placeholderTextColor ={'#e3e3e3'}
                                style={{flex:1}}
                                onChangeText= {(text) => this.setState({text})}
                                value ={this.state.TextInputHashTags}
                            />
                        </View>

                        <View style={{flex:2}}>
                            
                            <TextInput
                                underlineColorAndroid='transparent'
                                placeholder={"...description"}
                                placeholderTextColor ={'#e3e3e3'}
                                style={{flex:1}}
                                onChangeText= {(text) => this.setState({text})}
                                value ={this.state.text}
                            />
                        </View>
                            
                    </View>
                </View>
                <View style={{flex:1}}></View>
            </ImageBackground>

        )
    }

    render() {
        return (
            <Provider store={store}>
                <View style={{ height: Platform.OS === 'ios' ? 44 : 0, backgroundColor: '#FFE7FF' }}></View>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <ImageBackground
                        source = {Platform.OS === 'ios'? require('../assets/gradient2.jpg') : require('../assets/gradient3.jpg')}
                        style = {[
                            styles.cardShadow,
                            styles.post,
                            {height: 50, elevation: 6, marginHorizontal: 15, marginTop: verticalMargin, width: barWidth, paddingTop: 12, backgroundColor:'#fff', borderRadius: 10}
                        ]}
                        imageStyle={{ borderRadius: 10 }}
                    >
                        <View style={{flexDirection:'row'}}>
                            
                            <ImageBackground source={Platform.OS === 'ios' ? require('../assets/gradient2.jpg') : require('../assets/gradient3.jpg')} 
                                style={{backgroundColor:'#ebebeb', elevation:2, flex:1, flexDirection:'row', marginHorizontal:5, borderRadius:7, alignItems:'center'}} imageStyle={{borderRadius:7}}>
                                    <Icon name="md-camera" size={18} color={'#a6a6a6'} style={{paddingLeft: 7, paddingRight:9, zIndex:2}}/>
                                    <Animated.View
                                        {...this.PanResponder.panHandlers}
                                        style={{transform: this.position.getTranslateTransform()}}>
                                        <Icon name="md-square" color={'#41AADE'} size={20} style={{paddingLeft: 7, paddingRight:9, zIndex:1}}/>
                                    </Animated.View>
                                    <Icon name="md-image" size={18} color={'#a6a6a6'} style={{paddingLeft: 7, zIndex:2}}/>
                                </ImageBackground>
                            <TextInput
                                underlineColorAndroid='transparent'
                                placeholder = "#HashTags"
                                placeholderTextColor='grey'
                                style={{flex:2, padding: 0, paddingLeft:5, fontWeight:'700'}}
                                onChangeText= {(TextInputHashTags) => this.setState({TextInputHashTags})}
                                value ={this.state.TextInputHashTags}
                            />
                            <Icon name="md-checkmark" onPress={this.changeStateAddingPost} size={25} style={{paddingLeft: 15, paddingRight:15}}/>
                                        
                        </View> 
                        
                    </ImageBackground>
                    {this.state.adding_post ? this.renderAddPost() : null}
                    <MasonryContainer post={true} />
                </ScrollView>
            </Provider>
        );
    }
}


const styles = StyleSheet.create({
    cardShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 6
    },
    bar: {
        marginHorizontal: horizontalMargin,
        width: barWidth,
        marginTop: verticalMargin,
        borderRadius: border,
    }
})

export default MainFeed;
