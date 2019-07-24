/**
 * @flow
 */

import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    PanResponder,
    Dimensions,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Category from './search/categories/Category';
import TAG from './search/categories/TAG';
// import styles from './search/categories/index.style'

const title1 = "Fashion"
const title2 = "Street"
const title3 = "ThugLife"
const title4 = "가로수길"
const title5 = "High_Fashion"
const verticalMargin = 15;
const leftMargin = 15;
var viewportWidth = Dimensions.get('window').width;
var barWidth = viewportWidth - leftMargin * 2;

type State = {
    text: string,
    Bar: boolean,
    searchResults?: array
}
class Search extends Component<{}, State> {
    constructor(){
        super();
        this._onPressOptions = this._onPressOptions.bind(this);
        this.uponPress = this.uponPress.bind(this);
        this.state = {
            text: "", 
            Bar : false,
            searchResults : []
        }
    }
    // componentDidMount(){
    //     this.startHeaderHeight = 80
    //     if(Platform.OS == 'android'){
    //         this.startHeaderHeight = 100 + StatusBar.currentHeight
    //     }
    // }
    uponPress(tag){
        this.setState({text: this.state.text + " "+ tag}); 
    }
    _onPressOptions(){
        this.setState({Bar : !this.state.Bar})
    }
    optionBarRender(){
        return(              
            <ImageBackground
                    source = {Platform.OS === 'ios'? require('../../assets/gradient2.jpg') : require('../../assets/gradient3.jpg')}
                    style = {[
                        styles.cardShadow,
                        styles.post,
                        {flexDirection: 'row', elevation: 6, marginHorizontal: leftMargin, marginTop: verticalMargin, width: barWidth, paddingTop: 12}
                    ]}
                    imageStyle={{ borderRadius: 10 }}
                >
                <View style={{flexWrap: 'wrap', flexDirection:'row', alignItems: 'center'}}>                                                                                   
                    <Category title="T-shirt" imageUri={require('../../assets/for_search/T.png')} uponPress={this.uponPress}/> 
                    <Category title="Dress" imageUri={require('../../assets/for_search/dress.png')} uponPress={this.uponPress}/> 
                    <Category title="Trousers" imageUri={require('../../assets/for_search/Trousers.png')} uponPress={this.uponPress}/> 
                    <Category title="Skirt" imageUri={require('../../assets/for_search/skirt.png')} uponPress={this.uponPress}/>
                    <Category title="Outer" imageUri={require('../../assets/for_search/outer.png')} uponPress={this.uponPress}/>
                    <Category title="Shoes" imageUri={require('../../assets/for_search/shoes.png')} uponPress={this.uponPress}/> 
                    <Category title="Hats" imageUri={require('../../assets/for_search/hats.png')} uponPress={this.uponPress}/> 
                    <Category title="Accessories" imageUri={require('../../assets/for_search/accessories.png')} uponPress={this.uponPress}/> 
                    <TAG title={title1} uponPress={this.uponPress}/>
                    <TAG title={title2} uponPress={this.uponPress}/>
                    <TAG title={title3} uponPress={this.uponPress}/>
                    <TAG title={title4} uponPress={this.uponPress}/>
                    <TAG title={title5} uponPress= {this.uponPress}/>
                </View> 
            </ImageBackground>
        )
    }
    render() {
        return (
            <View>
                <View style = {{height: Platform.OS === 'ios'? 44 : 0, backgroundColor: '#FFE7FF'}}></View>
                <ImageBackground
                    source = {Platform.OS === 'ios'? require('../../assets/gradient2.jpg') : require('../../assets/gradient3.jpg')}
                    style = {[
                        styles.cardShadow,
                        styles.post,
                        {height: 50, elevation: 6, marginHorizontal: leftMargin, marginTop: verticalMargin, width: barWidth, paddingTop: 12}
                    ]}
                    imageStyle={{ borderRadius: 10 }}
                >
                    <View style={{
                        flexDirection:'row',
                        // shadowColor: '#000',
                        // shadowOffset: {width:0, height: 2},
                        // shadowOpacity: 0.3,
                        // shadowRadius: 2 ,
                        // elevation: 4 ,
                        // borderRadius: 10,
                        }}>
                          
                        <Icon name="md-search" size={25} style={{paddingLeft: 15, paddingRight:15}}/>
                        <TextInput
                            underlineColorAndroid='transparent'
                            placeholder = "검색"
                            placeholderTextColor='grey'
                            style={{flex:1, padding: 0, fontWeight:'700'}}
                            onChangeText= {(text) => this.setState({text})}
                            value ={this.state.text}
                        />
                        <TouchableOpacity
                        
                        onPress={this._onPressOptions}
                        style={{paddingLeft: 15, paddingRight:15}}>
                            <Icon 
                            name="md-options" 
                            size={25} 
                            />      

                        </TouchableOpacity>
                                      
                    </View> 
                    
                    </ImageBackground>
                    {this.state.Bar ? this.optionBarRender() : null}
            </View>
        )
    }   
}

const styles = StyleSheet.create({
    cardShadow: {
        shadowColor: '#000',
        shadowOffset: {width:0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 2 ,
        elevation: 6
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

export default Search;
