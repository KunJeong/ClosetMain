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
    Alert
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Category from './search/categories/Category';
import TAG from './search/categories/TAG';
import Realm from 'realm'
import {One_Image, LookBook, Closet, Clothes, Post, Tag, User, Comment} from '../../schemas'
// import styles from './search/categories/index.style'

const title1 = "Fashion"
const title2 = "Street"
const title3 = "ThugLife"
const title4 = "가로수길"
const title5 = "High_Fashion"
const categories = ['T-Shirt', 'Dress', 'Trousers', 'Skirt', 'Outer', 'Shoes', 'Hats', 'Accessories']
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
    constructor() {
        super();
        this._onPressOptions = this._onPressOptions.bind(this);
        this.uponPress = this.uponPress.bind(this);
        this.uponPressCategory = this.uponPressCategory.bind(this);
        this.state = {
            text: "",
            Bar: false,
            searchResults: [],
            category: 'none'
        }
    }
    // componentDidMount(){
    //     this.startHeaderHeight = 80
    //     if(Platform.OS == 'android'){
    //         this.startHeaderHeight = 100 + StatusBar.currentHeight
    //     }
    // }
    uponPress(tag) {
        this.setState({ text: this.state.text + " " + tag });
    }

    uponPressCategory(cat) {
        if(this.state.category == 'none'){
            this.setState({category: cat});
            this.setState({ text: ":" + cat + this.state.text });
        }
        else{
            this.setState({category: 'none'});
            this.setState({ text: "" });
        }
    }
    _onPressOptions() {
        this.setState({ Bar: !this.state.Bar })
    }
    // search(){
    //     return(<Text>{this.state.text}</Text>)
            // const user = Realm.Sync.User.current 
            //     let config = user.createConfiguration();
            //     config.schema = [One_Image, Post, Tag, Clothes, Closet, Comment, LookBook, User]
                
            //     config.validate_ssl=false
            //     config.sync.url = 'realms://fashion.us1.cloud.realm.io/testRealm'
                
            //     Realm.open(config).then((realm) => {
                    
        
            //         let carOwners = realm.objects('Post');
            //         let subscribe = carOwners.subscribe();
                   
            //         var total = ''
            //         for (let p of carOwners) {
            //             total += p.comment.toString();
            //         }
            //         Alert.alert(total);
            //     });
            
                
    // }
    parseText(text:string){
        var category = '';
        var filters = [''];
        var categoryStart = false;
        var filterStart = false;
        var filterIndex = 0;
        for(let i=0; i<text.length; i++){
            if(categoryStart && text[i] != ' '){
                category += text[i]
            }
            else if(filterStart && text[i] != ' '){
                filters[filterIndex] += text[i]
            }
            else if(text[i] == '#'){
                filterStart = true;
                filterIndex += 1;
                filters.push('');
            }
            else if(text[i] == ':'){
                categoryStart = true;
            }
            else if(text[i] == ' '){
                filterStart = false;
                categoryStart = false;
            }
        }
        filters[0] = category;
        return filters;
    }

    optionBarRender() {
        return (
            <View>
            <ImageBackground
                source={Platform.OS === 'ios' ? require('../../assets/gradient2.jpg') : require('../../assets/gradient3.jpg')}
                style={[
                    styles.cardShadow,
                    styles.post,
                    { flexDirection: 'row', elevation: 6, marginHorizontal: leftMargin, marginTop: verticalMargin, width: barWidth }
                ]}
                imageStyle={{ borderRadius: 10 }}
            >
                
                <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                    <Text style={{ fontWeight: 'bold', margin: 15, marginBottom: 0 }}> Categories </Text>
                    <View style={{ flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center', padding: 15, width: '100%' }}>
                        <Category disabled={this.state.category!='none' &&this.state.category != categories[0]} active = {this.state.category == categories[0]} title={categories[0]} imageUri={require('../../assets/for_search/T.png')} uponPress={this.uponPressCategory} />
                        <Category disabled={this.state.category!='none' &&this.state.category != categories[1]} active = {this.state.category == categories[1]} title={categories[1]} imageUri={require('../../assets/for_search/dress.png')} uponPress={this.uponPressCategory} />
                        <Category disabled={this.state.category!='none' &&this.state.category != categories[2]} active = {this.state.category == categories[2]} title={categories[2]} imageUri={require('../../assets/for_search/Trousers.png')} uponPress={this.uponPressCategory} />
                        <Category disabled={this.state.category!='none' &&this.state.category != categories[3]} active = {this.state.category == categories[3]} title={categories[3]} imageUri={require('../../assets/for_search/skirt.png')} uponPress={this.uponPressCategory} />
                        <Category disabled={this.state.category!='none' &&this.state.category != categories[4]} active = {this.state.category == categories[4]} title={categories[4]} imageUri={require('../../assets/for_search/outer.png')} uponPress={this.uponPressCategory} />
                        <Category disabled={this.state.category!='none' &&this.state.category != categories[5]} active = {this.state.category == categories[5]} title={categories[5]} imageUri={require('../../assets/for_search/shoes.png')} uponPress={this.uponPressCategory} />
                        <Category disabled={this.state.category!='none' &&this.state.category != categories[6]} active = {this.state.category == categories[6]} title={categories[6]} imageUri={require('../../assets/for_search/hats.png')} uponPress={this.uponPressCategory} />
                        <Category disabled={this.state.category!='none' &&this.state.category != categories[7]} active = {this.state.category == categories[7]} title={categories[7]} imageUri={require('../../assets/for_search/accessories.png')} uponPress={this.uponPressCategory} />
                    </View>
                    <Text style={{ fontWeight: 'bold', margin: 15, marginBottom: 0, width: '100%' }}> Trending Tags </Text>
                    <View style={{ flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center', padding: 15, width: '100%' }}>
                        <TAG title={title1} uponPress={this.uponPress} />
                        <TAG title={title2} uponPress={this.uponPress} />
                        <TAG title={title3} uponPress={this.uponPress} />
                        <TAG title={title4} uponPress={this.uponPress} />
                        <TAG title={title5} uponPress={this.uponPress} />
                    </View>
                </View>
            </ImageBackground>
            </View>
        )
    }
    render() {
        return (
            <View>
                <View style={{ height: Platform.OS === 'ios' ? 44 : 0, backgroundColor: '#FFE7FF' }}></View>
                <ImageBackground
                    source={Platform.OS === 'ios' ? require('../../assets/gradient2.jpg') : require('../../assets/gradient3.jpg')}
                    style={[
                        styles.cardShadow,
                        styles.post,
                        { height: 50, elevation: 6, marginHorizontal: leftMargin, marginTop: verticalMargin, width: barWidth, paddingTop: 12 }
                    ]}
                    imageStyle={{ borderRadius: 10 }}
                >
                    <View style={{
                        flexDirection: 'row',
                        // shadowColor: '#000',
                        // shadowOffset: {width:0, height: 2},
                        // shadowOpacity: 0.3,
                        // shadowRadius: 2 ,
                        // elevation: 4 ,
                        // borderRadius: 10,
                    }}>
                        <TouchableOpacity><Icon name="md-search" size={25} style={{ paddingLeft: 15, paddingRight: 15 }} /></TouchableOpacity>
                        <TextInput
                            underlineColorAndroid='transparent'
                            placeholder="검색"
                            placeholderTextColor='grey'
                            style={{ flex: 1, padding: 0, fontWeight: '700' }}
                            onChangeText={(text) => this.setState({ text })}
                            value={this.state.text}
                        />
                        <TouchableOpacity
                            onPress={this._onPressOptions}
                            style={{ paddingLeft: 15, paddingRight: 15 }}>
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
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
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
