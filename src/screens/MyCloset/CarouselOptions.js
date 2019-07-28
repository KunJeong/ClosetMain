import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView, 
    Dimensions, TouchableOpacity, Image, TextInput, ImageBackground, StyleSheet,
    Animated, PanResponder, Alert} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { sliderWidth, itemWidth } from './styles/SliderEntry.style';
import SliderEntry from './components/SliderEntry';
import styles, { colors } from './styles/index.style';
import { T_Shirtdb, Dressdb, Trousersdb, Skirtdb, Outerdb, Shoesdb, Hatsdb, Accessoriesdb } from './static/entries';
import { scrollInterpolators, animatedStyles } from './utils/animations';
import Icon from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image'
import ImagePicker from 'react-native-image-crop-picker';
import update from 'immutability-helper';
// import {ConfirmDialog} from 'react-native-simple-dialogs';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
let containerStyle = {};
let pageStyle = {};
const verticalMargin = 5;
const leftMargin = 7;
var barWidth = viewportWidth - leftMargin * 2;

class CarouselOptions extends Component {
    constructor(props) {
        super(props);
        this._onPressADD = this._onPressADD.bind(this)
        this._renderItem = this._renderItem.bind(this)
        this.renderPickAlert = this.renderPickAlert.bind(this)
        this.alertStateChange = this.alertStateChange.bind(this)
        this.setAndPassSelectedItemUri = this.setAndPassSelectedItemUri.bind(this)
        this.openGallery = this.openGallery.bind(this)
        this.state = {
            isOpen: false,
            adding_clothes: false,
            modalVisible: false,
            _image: "",
            TextInputSubTitle: "",
            Database: this.props.Data
        }
        this.position = new Animated.ValueXY()
        containerStyle.flex = 1;
        pageStyle.flex = 1;

    }
    // async asyncForEach(array, callback) {
    //     var new_images_uri = [];
    //     var p_new_images = [];
    //     const ext = array[index].uri.split('.').pop();
    //     const filename = `${uuid()}.${ext}`;
    //     const storageRef = storage.ref(`/${filename}`);
    //     await storageRef.putFile(array[index].uri);
    //     const photoUri = await storageRef.getDownloadURL();
    // }
    // async uploadImage() {
    //     this.asyncForEach(this.state.images, async (i) => {
    //         await waitFor(15);
    //     });
    // }
    componentWillMount(){
        this.PanResponder = PanResponder.create({
            onStartShouldSetPanResponder:(evt, gestureState) => true,
            onMoveShouldSetPanResponder:(evt, gestureState) => true,
            onPanResponderMove:(evt, gestureState) =>{
                if(gestureState.dx > 42){
                    this.position.setValue({x: 42, y: 0})
                }else if(gestureState.dx < -45){
                    this.position.setValue({x: -45, y:0 })
                }else(
                    this.position.setValue({x: gestureState.dx, y: 0})
                )
            },
            onPanResponderRelease:(evt, gestureState)=>{
                if(gestureState.dx> 45){
                    this.openGallery()
                    this.position.setValue({x:0, y:0})
                }else if(gestureState.dx < -48){
                    this.openCamera()
                    this.position.setValue({x:0, y:0})
                }else(
                    this.position.setValue({x:0, y:0})
                )
            }
        })
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
            this.setState({ adding_clothes: !this.state.adding_clothes })
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
            this.setState({ adding_clothes: !this.state.adding_clothes })
        });
    }
    
    renderPickAlert(){
        return(
            <ImageBackground source={Platform.OS === 'ios' ? require('../../assets/gradient2.jpg') : require('../../assets/gradient3.jpg')} 
            style={{backgroundColor:'#a6a6a6', flex:1, flexDirection:'row', marginRight:10, borderRadius:7, alignItems:'center'}} imageStyle={{borderRadius:7}}>
                <Icon name="md-camera" size={25} color={'#a6a6a6'} style={{paddingLeft: 7, paddingRight:7, zIndex:2}}/>
                <Animated.View
                    {...this.PanResponder.panHandlers}
                    style={{transform: this.position.getTranslateTransform()}}>
                    <Icon name="md-square" color={'#41AADE'} size={30} style={{paddingLeft: 15, paddingRight:15, zIndex:1}}/>
                </Animated.View>
                <Icon name="md-image" size={25} color={'#a6a6a6'} style={{paddingLeft: 6, zIndex:2}}/>
            </ImageBackground>
        )
    }
    alertStateChange(){
        this.setState({ modalVisible: !this.state.modalVisible })
    }
    _onPressADD() {
        this.setState({ isOpen: !this.state.isOpen });
    }
    setAndPassSelectedItemUri(uri) {
        this.props._addItemToSet(uri, this.props.name)
    }

    saveToCarousel=()=>{
        _subtitle = this.state.TextInputSubTitle;
        _image = this.state._imageUri;
        data={
            subtitle : _subtitle,
            illustration : _image
        }
        this.setState({Database : update(this.state.Database, {$push:[data]})})
        this.setState({adding_clothes : !this.state.adding_clothes})
    }

    _renderItem({ item, index }) {
        return (<SliderEntry data={item} onClick={this.setAndPassSelectedItemUri} />);
    }

    renderImage(image) {
        var imageRatio = (this.state._image.width/this.state._image.height)
        return <Image style={{ height: (viewportWidth/imageRatio)*0.5, width : (imageRatio*viewportWidth)*0.5, resizeMode: 'contain', borderRadius: 8 }} source={image} />
    }

    renderAsset(image) {
        return this.renderImage(image);
    }

    renderCarousel=()=>{
        if (this.state.adding_clothes) {
            
            return (
                <View style={{flexDirection:'column', flex:1, justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={this.alertStateChange}
                    >
                        <FastImage >
                            <View key={this.state._image.uri}>{this.renderAsset(this.state._image)}</View>
                        </FastImage>
                    </TouchableOpacity>
                    <ImageBackground
                        source={Platform.OS === 'ios' ? require('../../assets/gradient2.jpg') : require('../../assets/gradient3.jpg')}
                        style={[
                            outfit_styles.cardShadow,
                            outfit_styles.post,
                            {alignItems:'center', flexDirection: 'row', elevation: 2,width: barWidth*0.4} 
                        ]}
                        imageStyle={{ borderRadius: 10 }}
                    >              
                        <TextInput
                            underlineColorAndroid='transparent'
                            placeholder="Place your #Tags"
                            placeholderTextColor='#B993C7'
                            style={{paddingLeft : 15,justifyContent: 'center', alignItems:'center', fontWeight: '700', 
                                    color: '#6B4279' }}
                            onChangeText={(TextInputSubTitle) => this.setState({ TextInputSubTitle })}
                            value={this.state.TextInputSubTitle}
                        /> 
                    </ImageBackground>  
                </View >
            )
    } else {
    if (this.state.isOpen) {
        return (
            <Carousel
                data={this.state.Database}
                renderItem={this._renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                containerCustomStyle={styles.slider}
                contentContainerCustomStyle={styles.sliderContentContainer}
                layout={this.props.Type}
                loop={false}
                enableMomentum={true}
                swipeThreshold={90}
                firstItem={this.props.Data.length - 1}
            />);
    } else {
        return null;
    }
}

    }

render() {
    return (
        <View style={[styles.exampleContainer, styles.exampleContainerLight]}>
            <View style={this.state.isOpen ? {
                height: 30,
                flexDirection: 'row',
                width: viewportWidth,
                shadowOffset: { width: 0, height: 0 },
                shadowColor: 'grey',
                shadowOpacity: 0.2,
                elevation: 1,
                alignItems: 'center'
            } : {
                    height: 50,
                    flexDirection: 'row',
                    width: viewportWidth,
                    shadowOffset: { width: 0, height: 0 },
                    shadowColor: 'grey',
                    shadowOpacity: 0.2,
                    elevation: 1,
                    alignItems: 'center'
                }}>
                   
                <View style={{ flexDirection: 'row' }} >
                    <TouchableOpacity style={{ flex: 2 }} onPress={this._onPressADD}>
                        <Text style={[styles.title, styles.titleDark]}>{`${this.props.name}`}</Text>
                    </TouchableOpacity>
                    {this.state.modalVisible ? 
                            this.renderPickAlert():
                            (this.state.adding_clothes ?
                                (
                                    <TouchableOpacity onPress={this.saveToCarousel}>
                                        <Icon name="md-checkmark"
                                            size={25}
                                            style={{ flex: 1, paddingRight: 15 }}
                                        />
                                    </TouchableOpacity>
                                ):(<TouchableOpacity onPress={this.alertStateChange}>
                                                        <Icon name="md-add"
                                                            size={25}
                                                            style={{ flex: 1, paddingRight: 15 }}
                                                        />
                                                    </TouchableOpacity> ))}
                </View>
            </View>
            <View>
                {this.renderCarousel()}
            </View>
        </View>
    );
}
}
export default CarouselOptions;

const outfit_styles = StyleSheet.create({
    cardShadow: {
        shadowColor: '#000',
        shadowOffset: {width:0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 2 ,
        //elevation: 6
    },
    // image: {
    //     // marginTop: 5 ,
    //     marginLeft: shift,
    //     width: '100%',
    //     backgroundColor: '#FFF',
    //     borderRadius: 10,
    // },
    post: {
        // marginLeft: gutter,
        // width: 200,
        // marginBottom: verticalMargin ,
        borderRadius: 10,
        // borderWidth: 4
    }
})