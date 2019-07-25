import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView, Dimensions, TouchableOpacity,Image, Alert } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { sliderWidth, itemWidth } from './styles/SliderEntry.style';
import SliderEntry from './components/SliderEntry';
import styles, { colors } from './styles/index.style';
import { T_Shirtdb, Dressdb, Trousersdb, Skirtdb, Outerdb, Shoesdb, Hatsdb, Accessoriesdb } from './static/entries';
import { scrollInterpolators, animatedStyles } from './utils/animations';
import Icon from 'react-native-vector-icons/Ionicons'

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
let containerStyle = {};
let pageStyle = {};

class CarouselOptions extends Component {
    constructor(props){
        super(props);
        this._onPressADD = this._onPressADD.bind(this)
        this._renderItem = this._renderItem.bind(this)
        this.setAndPassSelectedItemUri = this.setAndPassSelectedItemUri.bind(this)
        this.state={
            isOpen: false,
        }
            containerStyle.flex = 1;
            pageStyle.flex = 1;
        
    }
    _onPressADD(){
        this.setState({isOpen: !this.state.isOpen});
    }
    setAndPassSelectedItemUri(uri){
        this.props._addItemToSet(uri, this.props.name)
    }
    _renderItem ({item, index}) {
        return (<SliderEntry data={item} onClick={this.setAndPassSelectedItemUri}/>);
    }
    renderCarousel(){
        if(this.state.isOpen){
            return( 
            <Carousel
                data={this.props.Data}
                renderItem={this._renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                containerCustomStyle={styles.slider}
                contentContainerCustomStyle={styles.sliderContentContainer}
                layout={this.props.Type}
                loop={false}
                enableMomentum={true}
                swipeThreshold={90}
                firstItem={this.props.Data.length-1}
            />);
        }else{
            return null;
        }
    }
    
    render() {
        return (
            <View style={[styles.exampleContainer, styles.exampleContainerLight]}>
                <View style={this.state.isOpen ? {
                    height : 30,
                    flexDirection:'row',
                    width: viewportWidth,
                    shadowOffset:{width:0,height:0},
                    shadowColor:'grey',
                    shadowOpacity:0.2,
                    elevation:1,
                    alignItems:'center'
                    }:{
                        height : 50,
                        flexDirection:'row',
                        width: viewportWidth,
                        shadowOffset:{width:0,height:0},
                        shadowColor:'grey',
                        shadowOpacity:0.2,
                        elevation:1,
                        alignItems:'center'
                        }}>
                    <View style={{flexDirection:'row'}} >
                        <TouchableOpacity style={{flex:9}} onPress={this._onPressADD}>
                            <Text style={[styles.title, styles.titleDark]}>{`${this.props.name}`}</Text>
                        </TouchableOpacity>
                        <Icon name="md-add" 
                                size={25} 
                                style={{flex:1, paddingLeft: 15}}
                            />
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